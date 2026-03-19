-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ContactForms" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telephone" TEXT NOT NULL,
    "enterprise" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "message" TEXT NOT NULL
);
INSERT INTO "new_ContactForms" ("email", "enterprise", "id", "message", "name", "subject", "telephone") SELECT "email", "enterprise", "id", "message", "name", "subject", "telephone" FROM "ContactForms";
DROP TABLE "ContactForms";
ALTER TABLE "new_ContactForms" RENAME TO "ContactForms";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
