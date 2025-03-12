-- CreateTable
CREATE TABLE `events` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `details` VARCHAR(191) NULL,
    `slug` VARCHAR(191) NOT NULL,
    `maximum_attendees` INTEGER NULL,
    `local` VARCHAR(191) NOT NULL,
    `status` BOOLEAN NOT NULL,

    UNIQUE INDEX `events_slug_key`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `attendees` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password_hashed` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `age` INTEGER NOT NULL,
    `sex` VARCHAR(191) NOT NULL,
    `shirt_size` VARCHAR(191) NOT NULL,
    `event_quantity` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `type` ENUM('ATTENDEE', 'ESCORT', 'DRIVER') NOT NULL DEFAULT 'ATTENDEE',
    `corporation_id` INTEGER NOT NULL,
    `event_id` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `attendees_email_key`(`email`),
    UNIQUE INDEX `attendees_event_id_email_key`(`event_id`, `email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `leaders` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `access_status` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `leaders_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `corporations` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `amount_vacancies` INTEGER NULL,
    `price_vacancies` DOUBLE NULL,
    `payment_status` BOOLEAN NOT NULL DEFAULT false,
    `payment_date` DATETIME(3) NULL,
    `leader_id` INTEGER NOT NULL,
    `event_id` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `corporations_leader_id_key`(`leader_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CheckIn` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `attendee_id` INTEGER NOT NULL,

    UNIQUE INDEX `CheckIn_attendee_id_key`(`attendee_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `attendees` ADD CONSTRAINT `attendees_corporation_id_fkey` FOREIGN KEY (`corporation_id`) REFERENCES `corporations`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `attendees` ADD CONSTRAINT `attendees_event_id_fkey` FOREIGN KEY (`event_id`) REFERENCES `events`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `corporations` ADD CONSTRAINT `corporations_leader_id_fkey` FOREIGN KEY (`leader_id`) REFERENCES `leaders`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `corporations` ADD CONSTRAINT `corporations_event_id_fkey` FOREIGN KEY (`event_id`) REFERENCES `events`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CheckIn` ADD CONSTRAINT `CheckIn_attendee_id_fkey` FOREIGN KEY (`attendee_id`) REFERENCES `attendees`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
