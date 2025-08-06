"use server"
import { db } from "@/lib/prisma";
import { auth , clerkClient} from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { toast } from "sonner"


export async function getfriends(name) {
 
  const friend = await db.user.findFirst({
    where: {
      name: {
        equals: name,
        mode: "insensitive",
      },
    },
    select: {
      id: true,
      name: true,
      email: true,
      imageUrl: true,
    },
  });

  if (!friend) {
throw new Error("User not found");
  }

return friend;
}


export async function requestfriend(friendId) {
    const { userId: clerkUserId } = await auth();
  if (!clerkUserId) return { error: "Unauthorized" };
     const user = await db.user.findUnique({
    where: { clerkUserId },
  });

  if (!user) {
    throw new Error("Logged-in user not found in database");
  }

    const existing = await db.friendship.findFirst({
    where: {
    //   userId,
    userId: user.id,
      friendId
    }
  });
   if (existing) {
    console.log(existing);
    
    return { success: false, message: "Friend request already sent" };
   
  }
    const newFriend = await db.friendship.create({
        data: {
        // userId,
         userId: user.id,
        friendId,
        
        },
    });
    console.log(newFriend);
    

return { success: true, message: "Friend request sent" };
}

export async function getAllfriend(userId ) {
  // const { userId: clerkUserId } = await auth();
  // console.log(clerkUserId);
  console.log(userId);
  if (!userId) return { error: "Unauthorized" };
     const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });

  if (!user) {
    throw new Error("Logged-in user not found in database");
  }


  const friends=await db.friendship.findMany({
    where: {
      OR: [
        { userId: user.id },
        { friendId: user.id }
      ]
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          email: true,
          imageUrl: true,
          clerkUserId: true
        }
      },
      friend: {
        select: {
          id: true,
          name: true,
          email: true,
          imageUrl: true,
          clerkUserId: true
        }
      }
    }

  })

//  return friends.map((f) => ({
//         id: f.friend.clerkUserId,
//         name: f.friend.name,
//         email: f.friend.email,
//         imageUrl: f.friend.imageUrl,
       
//     }));


const uniqueFriendsMap = new Map();
// return friends.map(f => {
//   const isUserSender = f.userId === user.id;
//   const other = isUserSender ? f.friend : f.user;

//   return {
//     id: other.clerkUserId,
//     name: other.name,
//     email: other.email,
//     imageUrl: other.imageUrl,
//   };
for (const f of friends) {
  const isUserSender = f.userId === user.id;
  const other = isUserSender ? f.friend : f.user;

  if (!uniqueFriendsMap.has(other.clerkUserId)) {
    uniqueFriendsMap.set(other.clerkUserId, {
      id: other.clerkUserId,
      name: other.name,
      email: other.email,
      imageUrl: other.imageUrl,
    });
  }
}

return Array.from(uniqueFriendsMap.values());


}
export async function sendCallRequest(friendId){
  const { userId: clerkUserId } = await auth();
  if (!clerkUserId) return { error: "Unauthorized" };

  const user = await db.user.findUnique({
    where: { clerkUserId },
  });

  if (!user) {
    throw new Error("Logged-in user not found in database");
  }


}
export async function deleteFriend(friendId){
  const { userId: clerkUserId } = await auth();
  if (!clerkUserId) return { error: "Unauthorized" };
  const user = await db.user.findUnique({
    where: { clerkUserId },
  });
  if (!user) {
    throw new Error("Logged-in user not found in database");
  }
  const friend = await db.friendship.findFirst({
    where: { OR: [{ userId: user.id, friendId }, { userId: friendId, friendId: user.id }] },
  });
  if (!friend) {
    throw new Error("Friend not found");
  }
  await db.friendship.delete({
    where: { id: friend.id },
  });
  return { success: true, message: "Friend deleted successfully" };
}