/*
  Warnings:

  - You are about to drop the column `userId` on the `slots` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[hostId,slug]` on the table `event_types` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[eventTypeId,startAt,endAt]` on the table `slots` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `hostId` to the `slots` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `slots` DROP FOREIGN KEY `slots_userId_fkey`;

-- DropIndex
DROP INDEX `slots_userId_fkey` ON `slots`;

-- AlterTable
ALTER TABLE `slots` DROP COLUMN `userId`,
    ADD COLUMN `hostId` INTEGER NOT NULL;

-- CreateIndex
CREATE INDEX `availability_exceptions_userId_date_idx` ON `availability_exceptions`(`userId`, `date`);

-- CreateIndex
CREATE INDEX `availability_rules_userId_weekday_idx` ON `availability_rules`(`userId`, `weekday`);

-- CreateIndex
CREATE INDEX `bookings_status_idx` ON `bookings`(`status`);

-- CreateIndex
CREATE INDEX `bookings_inviteeEmail_idx` ON `bookings`(`inviteeEmail`);

-- CreateIndex
CREATE INDEX `bookings_hostId_createdAt_idx` ON `bookings`(`hostId`, `createdAt`);

-- CreateIndex
CREATE UNIQUE INDEX `event_types_hostId_slug_key` ON `event_types`(`hostId`, `slug`);

-- CreateIndex
CREATE INDEX `slots_hostId_startAt_idx` ON `slots`(`hostId`, `startAt`);

-- CreateIndex
CREATE INDEX `slots_eventTypeId_startAt_status_idx` ON `slots`(`eventTypeId`, `startAt`, `status`);

-- CreateIndex
CREATE UNIQUE INDEX `slots_eventTypeId_startAt_endAt_key` ON `slots`(`eventTypeId`, `startAt`, `endAt`);

-- AddForeignKey
ALTER TABLE `slots` ADD CONSTRAINT `slots_hostId_fkey` FOREIGN KEY (`hostId`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
