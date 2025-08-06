/*
  Warnings:

  - You are about to drop the `MessagewithFreinds` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "MessagewithFreinds" DROP CONSTRAINT "MessagewithFreinds_receiverId_fkey";

-- DropForeignKey
ALTER TABLE "MessagewithFreinds" DROP CONSTRAINT "MessagewithFreinds_senderId_fkey";

-- DropTable
DROP TABLE "MessagewithFreinds";

-- CreateTable
CREATE TABLE "MessageWithFreinds" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "senderId" TEXT NOT NULL,
    "receiverId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MessageWithFreinds_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "MessageWithFreinds" ADD CONSTRAINT "MessageWithFreinds_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MessageWithFreinds" ADD CONSTRAINT "MessageWithFreinds_receiverId_fkey" FOREIGN KEY ("receiverId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
