import { prisma } from "@/lib/prisma";

export async function ensureDatabaseSchema() {
  try {
    // Test connection and create tables if needed
    await prisma.contactForms.count();
    console.log("✅ ContactForms table exists");
  } catch (error) {
    console.log("Criando tabelas do banco de dados...");
    try {
      // Create tables using Prisma
      await prisma.$executeRawUnsafe(`
        CREATE TABLE IF NOT EXISTS "ContactForms" (
          "id" integer NOT NULL PRIMARY KEY AUTOINCREMENT,
          "name" text NOT NULL,
          "email" text NOT NULL,
          "telephone" text NOT NULL,
          "enterprise" text NOT NULL,
          "subject" text NOT NULL,
          "message" text NOT NULL
        )
      `);
      
      await prisma.$executeRawUnsafe(`
        CREATE TABLE IF NOT EXISTS "AdminUser" (
          "id" integer NOT NULL PRIMARY KEY AUTOINCREMENT,
          "email" text NOT NULL UNIQUE,
          "passwordHash" text NOT NULL,
          "passwordSalt" text NOT NULL,
          "createdAt" datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
          "updatedAt" datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
        )
      `);
      
      console.log("✅ Tabelas criadas com sucesso!");
    } catch (createError) {
      console.error("Erro ao criar tabelas:", createError);
    }
  }
}
