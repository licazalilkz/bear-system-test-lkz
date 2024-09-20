/*
  Warnings:

  - You are about to drop the `Products` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Products";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "products" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "quantProduct" INTEGER NOT NULL,
    "description" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "order" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "customerId" TEXT NOT NULL,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "totalValue" REAL NOT NULL,
    CONSTRAINT "order_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "customers" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "orderProducts" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "orderId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "priceAtPuchace" REAL NOT NULL,
    CONSTRAINT "orderProducts_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "order" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "orderProducts_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "products_name_key" ON "products"("name");
