"use server"
import { db } from "@/lib/prisma";
import { auth , clerkClient} from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export async function getprofile() {
    const { userId: clerkUserId } = await auth();
    if (!clerkUserId) return { error: "Unauthorized" };
    const user = await db.user.findUnique({
        where: { clerkUserId },
    });
    if (!user) return { error: "User not found" };
    return user;
}
export async function editprofile(data) {
    const { userId: clerkUserId } = await auth();
    if (!clerkUserId) return { error: "Unauthorized" };

// const data={
//     name: formData.get("name"),
//     gender: formData.get("gender"),
//     dob: new Date(formData.get("dob")),
//     imageUrl: formData.get("imageUrl"),
//     interests: formData.get("interests")||[],
//     preferredLang: formData.get("preferredLang")||[],
//     country: formData.get("country"),
//     state: formData.get("state"),
//     city: formData.get("city"),
   

// }





   
  try {
    await db.user.update({
      where: { clerkUserId },
      data,
    });
    revalidatePath("/profile"); // Optional: to refresh profile page
    return { success: true };
  } catch (error) {
    console.error("Profile update failed:", error);
    return { error: "Update failed" };
  }
}
export async function getfriendData(friendClerkId){
  if(!friendClerkId) return { error: "Unauthorized" };
  const { userId: clerkUserId } = await auth();

  if (!clerkUserId) return { error: "Unauthorized" };
  const user = await db.user.findUnique({
    where: { clerkUserId:friendClerkId },
    select: {
      name: true,
      imageUrl: true,
      city: true,
      country: true,
      dob: true,
      // Add any other fields you need
    }
});
if (!user) return { error: "User not found" };
return user;
}