/*
  Warnings:

  - You are about to drop the column `amount_vacancies` on the `corporations` table. All the data in the column will be lost.
  - You are about to drop the column `payment_date` on the `corporations` table. All the data in the column will be lost.
  - You are about to drop the column `payment_status` on the `corporations` table. All the data in the column will be lost.
  - You are about to drop the column `price_vacancies` on the `corporations` table. All the data in the column will be lost.
  - You are about to drop the `CheckIn` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `CheckIn` DROP FOREIGN KEY `CheckIn_attendee_id_fkey`;

-- AlterTable
ALTER TABLE `attendees` ADD COLUMN `instrument` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `corporations` DROP COLUMN `amount_vacancies`,
    DROP COLUMN `payment_date`,
    DROP COLUMN `payment_status`,
    DROP COLUMN `price_vacancies`,
    ADD COLUMN `vacancies` INTEGER NOT NULL DEFAULT 0;

-- DropTable
DROP TABLE `CheckIn`;

-- CreateTable
CREATE TABLE `check_in` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `attendee_id` INTEGER NOT NULL,

    UNIQUE INDEX `check_in_attendee_id_key`(`attendee_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `orders` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `status_order` VARCHAR(191) NOT NULL DEFAULT 'progress',
    `payment_status` VARCHAR(191) NOT NULL DEFAULT 'doesent pay',
    `payment_date` DATETIME(3) NULL,
    `payment_method` VARCHAR(191) NOT NULL,
    `amount` DOUBLE NOT NULL,
    `corporation_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `products` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `price` DOUBLE NOT NULL,
    `quantity` INTEGER NOT NULL,
    `order_id` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `check_in` ADD CONSTRAINT `check_in_attendee_id_fkey` FOREIGN KEY (`attendee_id`) REFERENCES `attendees`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orders` ADD CONSTRAINT `orders_corporation_id_fkey` FOREIGN KEY (`corporation_id`) REFERENCES `corporations`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `products_order_id_fkey` FOREIGN KEY (`order_id`) REFERENCES `orders`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
