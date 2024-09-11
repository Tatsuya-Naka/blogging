/*
  Warnings:

  - You are about to drop the column `postId` on the `BgImage` table. All the data in the column will be lost.
  - You are about to drop the column `postId` on the `Image` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the `PostTag` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `topicId` to the `BgImage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `topicId` to the `Image` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "BgImage" DROP CONSTRAINT "BgImage_postId_fkey";

-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_postId_fkey";

-- DropForeignKey
ALTER TABLE "PostTag" DROP CONSTRAINT "PostTag_postId_fkey";

-- DropForeignKey
ALTER TABLE "PostTag" DROP CONSTRAINT "PostTag_tagId_fkey";

-- AlterTable
ALTER TABLE "BgImage" DROP COLUMN "postId",
ADD COLUMN     "topicId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Image" DROP COLUMN "postId",
ADD COLUMN     "topicId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "description",
DROP COLUMN "title",
ADD COLUMN     "name" TEXT NOT NULL;

-- DropTable
DROP TABLE "PostTag";

-- CreateTable
CREATE TABLE "Topic" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Topic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TopicTag" (
    "topicId" TEXT NOT NULL,
    "tagId" TEXT NOT NULL,

    CONSTRAINT "TopicTag_pkey" PRIMARY KEY ("topicId","tagId")
);

-- AddForeignKey
ALTER TABLE "Topic" ADD CONSTRAINT "Topic_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TopicTag" ADD CONSTRAINT "TopicTag_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TopicTag" ADD CONSTRAINT "TopicTag_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "Topic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "Topic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BgImage" ADD CONSTRAINT "BgImage_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "Topic"("id") ON DELETE CASCADE ON UPDATE CASCADE;
