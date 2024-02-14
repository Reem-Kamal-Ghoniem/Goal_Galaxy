/*
  Warnings:

  - You are about to drop the column `urgentTasksId` on the `Tasks` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "Priority" AS ENUM ('Critical', 'High', 'Normal', 'Low');

-- DropForeignKey
ALTER TABLE "Tasks" DROP CONSTRAINT "Tasks_urgentTasksId_fkey";

-- DropForeignKey
ALTER TABLE "Tasks" DROP CONSTRAINT "Tasks_userId_fkey";

-- AlterTable
ALTER TABLE "Tasks" DROP COLUMN "urgentTasksId",
ADD COLUMN     "priority" "Priority" NOT NULL DEFAULT 'Normal';

-- AddForeignKey
ALTER TABLE "Tasks" ADD CONSTRAINT "Tasks_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
