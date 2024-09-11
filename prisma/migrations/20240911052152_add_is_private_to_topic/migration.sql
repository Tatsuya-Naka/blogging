/*
  Warnings:

  - You are about to drop the column `name` on the `Post` table. All the data in the column will be lost.
  - Added the required column `isPrivate` to the `Topic` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Post" DROP COLUMN "name";

-- AlterTable
ALTER TABLE "Topic" ADD COLUMN     "isPrivate" BOOLEAN NOT NULL;
