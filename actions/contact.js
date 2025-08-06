"use server"
import { db } from "@/lib/prisma";


export async function createContact(formData){

    // const name = formData.get('name') ;
    // const email = formData.get('email') ;
    // const subject = formData.get('subject') ;
    // const message = formData.get('message') ;
    const name = formData.get("name")?.toString();
    const email = formData.get("email")?.toString();
    const subject = formData.get("subject")?.toString();
    const message = formData.get("message")?.toString();
  
  
    if (!name || !email || !subject || !message) {
      throw new Error('All fields are required.');
    }


await db.contact.create({

    data:{
        name,
        email,
        subject,
        message

    }
})
return {success:true}
}