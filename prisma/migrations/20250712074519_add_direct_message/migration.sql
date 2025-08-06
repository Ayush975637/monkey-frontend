-- CreateTable
CREATE TABLE "MessagewithFreinds" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "senderId" TEXT NOT NULL,
    "receiverId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MessagewithFreinds_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "MessagewithFreinds" ADD CONSTRAINT "MessagewithFreinds_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MessagewithFreinds" ADD CONSTRAINT "MessagewithFreinds_receiverId_fkey" FOREIGN KEY ("receiverId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
