"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import React, { useState, useEffect } from 'react'
import { useUser } from '@clerk/nextjs'
import { uploadImage } from '@/actions/cloudinary'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

const UserInfo = () => {
    const { user } = useUser()

    const [image, setImage] = useState(null)
    const router = useRouter()
    const [imagePreview, setImagePreview] = useState(user?.imageUrl || "")
    const[formData, setFormData] = useState({
      imageUrl: user?.imageUrl,
        name: user?.fullName||"",
        gender: "MALE",
        dob: ""
    })
    const handleChange=(e)=>{
        setFormData({...formData, [e.target.name]: e.target.value})
    }
   
  
const handleNext=async()=>{
  if (!formData.imageUrl && image) {
    alert("Please wait for the image to finish uploading...")
    return
  }
  if (!formData.imageUrl) {
    alert("Please upload a profile image.")
    return
  }

  localStorage.setItem("onboardingStep1", JSON.stringify(formData));
  router.push('/onboarding/step2')
}

useEffect(() => {
  if (user) {
    setFormData(prev => ({
      ...prev,
      imageUrl: user.imageUrl,
      name: user.fullName || ""
    }));
    setImagePreview(user.imageUrl);
  }
}, [user]);

const handleImageChange = (e) => {
  const file = e.target.files[0]
  if (!file) return

  setImage(file)
  const previewURL = URL.createObjectURL(file)
  setImagePreview(previewURL)
}

useEffect(() => {
  const upload = async () => {
    if (!image) return

    const form = new FormData()
    form.append("image", image)
    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: form,
      });
    
      const data = await res.json();
    
      if (data?.secure_url) {
        toast.success("Uploaded successfully");
       
        setFormData(prev => ({ ...prev, imageUrl: data.secure_url }))
       
      } else {
        toast.error(data.error || "Upload failed");
      }
    } catch (err) {
      toast.error("Something went wrong");
      console.error(err);
    }

    // const res = await uploadImage(form)
    // if (res?.url) {
    //   setFormData(prev => ({ ...prev, imageUrl: res.url }))
    //   toast.success("Image uploaded successfully")
    // } else {
    //   console.error(res?.error || "Upload failed")
    // }
  }

  upload()
}, [image])








  return (

    <div>
      <label>Image</label>

      <p>Upload your image</p>
      <Avatar>
  <AvatarImage src={imagePreview} />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>

      <input type="file" name="image" accept="image/*" onChange={handleImageChange} />
<label>Name</label>

<input type="text" name="name" required value={formData.name} onChange={handleChange} />
<label>Gender</label>

<select name="gender" value={formData.gender} onChange={handleChange}>
    <option value="MALE">MALE</option>
    <option value="FEMALE">FEMALE</option>
</select>
<label>Date of Birth</label>

<input type="date" name="dob" value={formData.dob} onChange={handleChange} />




<button onClick={handleNext}>Next</button>

    </div>
  
   
  )
}

export default UserInfo;