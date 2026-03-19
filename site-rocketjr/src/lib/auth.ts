import { randomBytes, scryptSync, timingSafeEqual } from "node:crypto";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { prisma } from "@/lib/prisma";

function hashPassword(password: string, salt?: string) {
  const passwordSalt = salt ?? randomBytes(16).toString("hex");
  const passwordHash = scryptSync(password, passwordSalt, 64).toString("hex");

  return { passwordHash, passwordSalt };
}

function verifyPassword(password: string, passwordSalt: string, passwordHash: string) {
  const computedHash = scryptSync(password, passwordSalt, 64).toString("hex");

  return timingSafeEqual(Buffer.from(computedHash, "hex"), Buffer.from(passwordHash, "hex"));
}

async function ensurePredefinedAdmin() {
  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminEmail || !adminPassword) {
    throw new Error("ADMIN_EMAIL e ADMIN_PASSWORD precisam estar definidos no .env");
  }

  const existingAdmin = await prisma.adminUser.findUnique({
    where: { email: adminEmail },
  });

  const { passwordHash, passwordSalt } = hashPassword(adminPassword);

  if (!existingAdmin) {
    await prisma.adminUser.create({
      data: {
        email: adminEmail,
        passwordHash,
        passwordSalt,
      },
    });

    return;
  }

  const passwordIsSame = verifyPassword(adminPassword, existingAdmin.passwordSalt, existingAdmin.passwordHash);

  if (!passwordIsSame) {
    await prisma.adminUser.update({
      where: { id: existingAdmin.id },
      data: {
        passwordHash,
        passwordSalt,
      },
    });
  }
}

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Senha", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        await ensurePredefinedAdmin();

        const admin = await prisma.adminUser.findUnique({
          where: { email: credentials.email },
        });

        if (!admin) {
          return null;
        }

        const isPasswordValid = verifyPassword(
          credentials.password,
          admin.passwordSalt,
          admin.passwordHash,
        );

        if (!isPasswordValid) {
          return null;
        }

        return {
          id: String(admin.id),
          email: admin.email,
          name: "Administrador",
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }

      return token;
    },
    async session({ session, token }) {
      if (session.user && token.id) {
        session.user.id = String(token.id);
      }

      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
