/*
  Warnings:

  - Added the required column `message` to the `Adoption` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Adoption" ADD COLUMN     "message" TEXT NOT NULL,
ALTER COLUMN "adoptedAt" DROP NOT NULL;
