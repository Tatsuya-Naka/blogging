/*
  Warnings:

  - You are about to drop the column `bgImageId` on the `Post` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Post" DROP COLUMN "bgImageId";

-- CreateTable
CREATE TABLE "BgImage" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "postId" TEXT NOT NULL,

    CONSTRAINT "BgImage_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "BgImage" ADD CONSTRAINT "BgImage_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
