#!/usr/bin/env node

const { PrismaClient } = require("@prisma/client");

const databases_url = process.env.DATABASE_URL || "file:./prisma/dev.db";

const prisma = new PrismaClient();

async function main() {
  console.log("🔄 Inicializando banco de dados...");
  
  try {
    // Create ContactForms table
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
    
    // Create AdminUser table
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
    
    console.log("✅ Banco de dados pronto!");
  } catch (error) {
    console.error("❌ Erro ao inicializar banco:", error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
