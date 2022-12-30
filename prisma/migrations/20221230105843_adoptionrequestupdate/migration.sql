/*
  Warnings:

  - Added the required column `status` to the `AdoptionRequest` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "RequestStatus" AS ENUM ('APPROVED', 'PENDING', 'REJECTED');

-- AlterTable
ALTER TABLE "AdoptionRequest" ADD COLUMN     "status" "RequestStatus" NOT NULL;
