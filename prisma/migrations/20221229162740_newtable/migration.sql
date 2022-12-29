/*
  Warnings:

  - You are about to drop the column `userId` on the `Adoption` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Pet` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Pet` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `Pet` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `adoptedAt` to the `Adoption` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prevOwnerId` to the `Adoption` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Adoption` table without a default value. This is not possible if the table is not empty.
  - Added the required column `breedId` to the `Pet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoryId` to the `Pet` table without a default value. This is not possible if the table is not empty.
  - Made the column `userId` on table `Pet` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Adoption" DROP CONSTRAINT "Adoption_userId_fkey";

-- DropForeignKey
ALTER TABLE "Pet" DROP CONSTRAINT "Pet_userId_fkey";

-- AlterTable
ALTER TABLE "Adoption" DROP COLUMN "userId",
ADD COLUMN     "adoptedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "newOwnerId" TEXT,
ADD COLUMN     "prevOwnerId" TEXT NOT NULL,
ADD COLUMN     "status" "Status" NOT NULL;

-- AlterTable
ALTER TABLE "Pet" DROP COLUMN "status",
DROP COLUMN "type",
ADD COLUMN     "breedId" TEXT NOT NULL,
ADD COLUMN     "categoryId" TEXT NOT NULL,
ALTER COLUMN "userId" SET NOT NULL;

-- CreateTable
CREATE TABLE "Breed" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" "Type" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Breed_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Pet_userId_key" ON "Pet"("userId");

-- AddForeignKey
ALTER TABLE "Pet" ADD CONSTRAINT "Pet_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pet" ADD CONSTRAINT "Pet_breedId_fkey" FOREIGN KEY ("breedId") REFERENCES "Breed"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pet" ADD CONSTRAINT "Pet_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Adoption" ADD CONSTRAINT "Adoption_prevOwnerId_fkey" FOREIGN KEY ("prevOwnerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Adoption" ADD CONSTRAINT "Adoption_newOwnerId_fkey" FOREIGN KEY ("newOwnerId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
