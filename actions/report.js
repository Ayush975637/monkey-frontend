"use server"
import { db } from "@/lib/prisma";
import { auth , clerkClient} from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";




export async function reportUser(userId, reportedId, reason) {
    const reportedByUser = await db.user.findUnique({
        where: { clerkUserId:userId },
    });

    const reportedUser = await db.user.findUnique({
        where: { clerkUserId:reportedId },
    });

    if (!reportedUser) {
        throw new Error("User not found");
    }

    try {
        await db.report.create({
          data: {
            userId:reportedByUser.id,
            reportedId: reportedUser.id,
            reason,
          },
        });
    
        // Optional: Trigger revalidation if needed
        revalidatePath("/videochat"); // Or any relevant path
    
        return { success: true };
      } catch (err) {


        if (err.code === "P2002") {
          // Prisma unique constraint failed
          return { error: "You already reported this user" };
        }
    
        return { error: "An unexpected error occurred" };
      }
}

export async function reportUserHistory( reportedId, reason) {
  const { userId: clerkUserId } = await auth();
  if (!clerkUserId) return { error: "Unauthorized" };
     const user = await db.user.findUnique({
    where: { clerkUserId },
  });

  if (!user) {
    throw new Error("Logged-in user not found in database");
  }

 

  if (!reportedId) {
      throw new Error("User not found");
  }

  try {
      await db.report.create({
        data: {
          userId:user.id,
          reportedId: reportedId,
          reason,
        },
      });
  
      // Optional: Trigger revalidation if needed
      revalidatePath("/history"); // Or any relevant path
  
      return { success: true };
    } catch (err) {


      if (err.code === "P2002") {
        // Prisma unique constraint failed
        return { error: "You already reported this user" };
      }
  
      return { error: "An unexpected error occurred" };
    }
}



















export async function getReportedUser(){

  const { userId: clerkUserId } = await auth();
  if (!clerkUserId) return { error: "Unauthorized" };
  const reportedUser = await db.user.findUnique({
    where: { clerkUserId },
});
  const counts = await db.report.count({
    where: {
      reportedId: reportedUser.id,
    },
  });
 return counts;
 








}



