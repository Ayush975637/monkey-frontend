import { currentUser } from "@clerk/nextjs/server";
import { db } from "./prisma";

export const checkUser=async(namex,image,gender,dob,preferredLang,interests,country,state,city,latitude,longitude)=>{
const user=await currentUser();
if(!user?.id){
    console.log("User not authenticated or Clerk error");
    return null;
}

try {
    
    const loggedInUser=await db.user.findUnique({

        where:{
            clerkUserId:user.id,
        }
        ,

    });

    if(loggedInUser){
        return loggedInUser;
    }
    const email = user.emailAddresses?.[0]?.emailAddress || "unknown@example.com";
    const name =namex|| `${user.firstName || ""} ${user.lastName || ""}`.trim() ;
 const newUser = await db.user.create({
      data: {
        clerkUserId: user.id,
        name,
        imageUrl: image || user.imageUrl ,
        email,
        gender,
        dob:new Date(dob),
        country,
        state,
        city,
        latitude,
        longitude,
        interests,
        preferredLang



      },
    });

    return newUser;



} catch (error) {
    console.error("Error in checkUser:", error.message);
    return null;
}




}