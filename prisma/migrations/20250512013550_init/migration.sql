-- CreateTable
CREATE TABLE "Card" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "cardholderId" TEXT NOT NULL,
    "stripeId" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Authorization" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "stripeId" TEXT NOT NULL,
    "cardId" TEXT NOT NULL,
    "amountCents" INTEGER NOT NULL,
    "currency" TEXT NOT NULL,
    "merchant" TEXT NOT NULL,
    "decision" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "raw" JSONB NOT NULL,
    CONSTRAINT "Authorization_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "Card" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Rule" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "cardId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "spendLimitCents" INTEGER,
    "spendInterval" TEXT,
    "merchantAllowList" TEXT,
    "merchantBlockList" TEXT,
    "categoryAllowList" TEXT,
    "categoryBlockList" TEXT,
    "allowedWeekdays" TEXT,
    "allowedHourStart" INTEGER,
    "allowedHourEnd" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Rule_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "Card" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Card_stripeId_key" ON "Card"("stripeId");

-- CreateIndex
CREATE UNIQUE INDEX "Authorization_stripeId_key" ON "Authorization"("stripeId");
