-- AlterTable
ALTER TABLE `User` ADD COLUMN `blob` LONGBLOB NULL,
    ADD COLUMN `email` VARCHAR(191) NULL,
    ADD COLUMN `isAdmin` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `largeNumber` BIGINT NULL,
    ADD COLUMN `preferences` JSON NULL;

-- CreateTable
CREATE TABLE `Post` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `rating` DOUBLE NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
