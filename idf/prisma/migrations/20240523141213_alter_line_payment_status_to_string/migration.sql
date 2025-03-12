/*
  Warnings:

  - You are about to alter the column `payment_status` on the `corporations` table. The data in that column could be lost. The data in that column will be cast from `TinyInt` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `corporations` MODIFY `payment_status` VARCHAR(191) NOT NULL DEFAULT 'doesent pay';
