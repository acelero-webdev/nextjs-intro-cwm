/*
  Warnings:

  - You are about to alter the column `price` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `Decimal(9,2)` to `Double`.

*/
-- DropIndex
DROP INDEX `Product_name_key` ON `Product`;

-- AlterTable
ALTER TABLE `Product` MODIFY `price` DOUBLE NOT NULL;
