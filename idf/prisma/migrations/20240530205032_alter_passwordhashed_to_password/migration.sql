/*
  Warnings:

  - You are about to drop the column `password_hashed` on the `attendees` table. All the data in the column will be lost.
  - Added the required column `password` to the `attendees` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `attendees` DROP COLUMN `password_hashed`,
    ADD COLUMN `password` VARCHAR(191) NOT NULL;
