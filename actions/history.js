"use server"
import { db } from "@/lib/prisma";
import { auth , clerkClient} from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";


export async function savehistory1(friendId,roomId){
    const {userId:clerkUserId}=await auth();
    if(!clerkUserId) return {error:"Unauthorized"};
    const user=await db.user.findUnique({
        where:{clerkUserId}
    })
    if(!user) return {error:"User not found"};
const history=await db.history.create({
    where:{clerkUserId},
    data:{
        user1Id:user.id,
        user2Id:friendId,
        roomId:roomId,
       
        
    }
})

return res.status(200).json({ historyId: history.id });


}

export async function savehistory2(historyId){
    const {userId:clerkUserId}=await auth();
    if(!clerkUserId) return {error:"Unauthorized"};
    const user=await db.user.findUnique({
        where:{clerkUserId}
    })
    if(!user) return {error:"User not found"};
    const history=await db.history.findUnique({
        where:{id:historyId}
    })
    if(!history) return {error:"History not found"};
    const updatedHistory=await db.history.update({
        where:{id:historyId},
        data:{
            endedAt:new Date()
        }
    })
    return res.status(200).json({ historyId: updatedHistory.id });




}




export async function gethistory(){
    const {userId:clerkUserId}=await auth();
    if(!clerkUserId) return {error:"Unauthorized"};
    const user=await db.user.findUnique({
        where:{clerkUserId}
    })
    if(!user) return {error:"User not found"};
    const allHistory=await db.history.findMany({
        where:{
           
           
                 user1Id: user.id ,
                
            
        },
        include:{
            user1:true,
            user2:true,
        },
        orderBy:{
            startedAt:"desc"
        }
    })
    return allHistory;
}
export async function deletehistory(id){
    const {userId:clerkUserId}=await auth();
    if(!clerkUserId) return {error:"Unauthorized"};
    const user=await db.user.findUnique({
        where:{clerkUserId}
    })
    if(!user) return {error:"User not found"};
    const deletedHistory=await db.history.delete({
        where:{id}
    })

    revalidatePath("/history");
    return deletedHistory;

}
