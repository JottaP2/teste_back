-- CreateTable
CREATE TABLE "ContactForms" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telephone" TEXT NOT NULL,
    "enterprise" TEXT NOT NULL,
    "subject" JSONB NOT NULL,
    "message" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "ContactForms_email_key" ON "ContactForms"("email");

-- CreateIndex
CREATE UNIQUE INDEX "ContactForms_telephone_key" ON "ContactForms"("telephone");
