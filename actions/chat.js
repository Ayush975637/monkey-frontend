"use server";

import { db } from "@/lib/prisma";

export async function getChatMessages(userId, friendId) {
  // const roomId = [userId, friendId].sort().join("-");

  // const [sender, receiver] = roomId.split("-");

  const messages = await db.messageWithFreinds.findMany({
    where: {
      OR: [
           { senderId: userId, receiverId: friendId },
        { senderId: friendId, receiverId: userId },
      ],
    },
    orderBy: { createdAt: "asc" },
  });

  return messages;
}

export async function getDbId(userId) {
    const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });

  if (!user) {
    throw new Error("Logged-in user not found in database");
  }
  
    
  
   
  
    return user.id;
  }