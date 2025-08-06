"use server"

import { auth , clerkClient} from "@clerk/nextjs/server";

import { toast } from "sonner"
import { checkUser } from "@/lib/checkUser";
import { redirect } from "next/navigation";

export  async function completeOnboarding(formData){

const name=formData.get('name');
const image=formData.get('image');
const gender=formData.get('gender');
const dob=formData.get('dob');
const preferredLang = JSON.parse(formData.get('preferredLang')||[]);
const interests = JSON.parse(formData.get('interests')||[]);
const country=formData.get('country');
const state=formData.get('state');
const city=formData.get('city');
const latitude=parseFloat(formData.get('latitude'));
const longitude=parseFloat(formData.get('longitude'));



  const { userId: clerkUserId } = await auth();
  if (!clerkUserId) return { error: "Unauthorized" };
  console.log("clerkUserId",clerkUserId);
  // const userId = clerkUserId;
  await checkUser(name,image,gender,dob,preferredLang,interests,country,state,city,latitude,longitude); 

    console.log("user updated");
    
    const client = await clerkClient()


  try {
    const res = await client.users.updateUser(clerkUserId, {
      publicMetadata: {
        onboardingComplete: true,
       
      },

    });
 
    console.log("Updated user metadata:", res.publicMetadata);
    return { message: res.publicMetadata }
  } catch (err) {
    return { error: 'There was an error updating the user metadata.' }
  }

}