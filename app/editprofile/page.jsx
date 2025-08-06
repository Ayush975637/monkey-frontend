"use client"

import React, { useState , useEffect} from 'react'
import { getprofile } from '@/actions/getprofile'
import { useRouter } from 'next/navigation'
import { useUser } from '@clerk/nextjs'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { toast } from 'sonner'
import { uploadImage } from '@/actions/cloudinary'

import { editprofile } from '@/actions/getprofile'
const interestsList = [
    'MUSIC', 'TRAVEL', 'SPORTS', 'READING', 'MOVIES', 'TECHNOLOGY',
    'ART', 'DANCE', 'FITNESS', 'GAMING', 'PHOTOGRAPHY', 'WRITING',
    'COOKING', 'FASHION', 
  ];
  
  const languagesList = [
    'ENGLISH', 'HINDI', 'SPANISH', 'FRENCH', 'GERMAN', 'CHINESE',
    'JAPANESE', 'KOREAN', 'TAMIL', 'TELUGU', 'BENGALI',
    'MARATHI', 'GUJARATI', 'PUNJABI', 
  ];

export default function EditProfile() {
    const [user, setUser] = useState(null);
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [interests, setInterests] = useState(user?.interests || []);
    const [preferredLang, setPreferredLang] = useState(user?.preferredLang || []);
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: user?.name || '',
        gender: user?.gender || '',
        dob: user?.dob ? new Date(user.dob).toISOString().substring(0, 10) : '',


        imageUrl: user?.imageUrl || '',
        interests: user?.interests || [],
        preferredLang: user?.preferredLang || [],
        country: user?.country || '',
        state: user?.state || '',
        city: user?.city || '',
      });
   
    const toggleMultiSelect = (item, list, setList) => {
        if (list.includes(item)) {
          setList(list.filter(i => i !== item));
        } else {
          setList([...list, item]);
        }
      };
    
    useEffect(() => {
      async function fetchUser() {
        const user = await getprofile();
        setUser(user);
      }
      fetchUser();
    }, []);

const handleSubmit=async(e)=>{
    e.preventDefault();
    
    const res = await editprofile({
      name: formData.name,
      gender: formData.gender,
      dob: new Date(formData.dob),
      imageUrl: formData.imageUrl, // ✅ This will now work
      country: formData.country,
      state: formData.state,
      city: formData.city,
      interests,
      preferredLang,
    });


    if(res?.error){
        toast.error(res?.error);
    }
    else{
        console.log(formData);
        
        toast.success("Profile updated successfully");
        router.push("/profile");
    }
}
const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value});
}

const handleImageChange=async(e)=>{
// const res=await uploadImage(e.target.files[0]);
const file=e.target.files[0];
if (!file) return;
const formData = new FormData();
formData.append('file', file);

try {
  const res = await fetch("/api/upload", {
    method: "POST",
    body: formData,
  });

  const data = await res.json();

  if (data?.secure_url) {
    toast.success("Uploaded successfully");
    setImage(data.secure_url);
    setImagePreview(data.secure_url);
    setFormData({...formData,imageUrl:data.secure_url});
     // "TEXT", "IMAGE", etc.
  } else {
    toast.error(data.error || "Upload failed");
  }
} catch (err) {
  toast.error("Something went wrong");
  console.error(err);
}

// if(res?.error){
//     toast.error(res?.error);
// }
// else{
//     toast.success("Image uploaded successfully");
//     setImage(res?.public_id);
//     setImagePreview(res?.secure_url);
//     setFormData({...formData,imageUrl:res?.secure_url});
// }
}

useEffect(() => {
    if (user) {
      const formattedDOB = user.dob
      ? new Date(user.dob).toISOString().split("T")[0]
      : '';
      setFormData({
        name: user.name || '',
        gender: user.gender || '',
        dob: formattedDOB || '',
        imageUrl: user.imageUrl || '',
        interests: user.interests || [],
        preferredLang: user.preferredLang || [],
        country: user.country || '',
        state: user.state || '',
        city: user.city || '',
      });
  
      setInterests(user.interests || []);
      setPreferredLang(user.preferredLang || []);
      setImagePreview(user.imageUrl || '');
    }
  }, [user]);
  




  return (
    <div className='flex flex-col items-center justify-center bg-gradient-to-bl from-blue-500 to-purple-500   '>
<form onSubmit={handleSubmit}>
<div className='flex flex-col gap-4 mt-10'>
      

      <div>
        <div className='flex flex-col items-center justify-center relative'>
      <Avatar  style={{width:120,height:120}}>
  <AvatarImage src={imagePreview || user?.imageUrl}  />
  <AvatarFallback>{(user?.name?.slice(0, 2) || "CC").toUpperCase()}</AvatarFallback>
</Avatar>
<label name="image" className='text-blue-500 cursor-pointer absolute top-20 right-75 text-lg z-10'>📸
      <input type="file" name="image" accept="image/*" className='bg-gray-100 p-2 rounded-md hidden' onChange={handleImageChange} />
      </label>
</div>

      </div>
      <div className='flex flex-row gap-10 items-center justify-center'>


<input type="text" name="name" className=' p-2 rounded-md font-bold text-xl text-white border-2' required value={formData.name} onChange={handleChange} />
<Button type='submit'  className=' text-white p-2 rounded-md'>Edit Profile</Button>
</div>


<select name="gender" className='p-2 rounded-md font-bold text-xl text-white border-2' required value={formData.gender} onChange={handleChange}>
    <option value="MALE">MALE</option>
    <option value="FEMALE">FEMALE</option>
</select>


<input type="date" name="dob" className='p-2 rounded-md font-bold text-xl text-white border-2'  value={formData.dob} onChange={handleChange} />






    </div>



    <div>
          <div className='flex flex-row gap-40'>
          <div className="grid grid-cols-2 gap-2 mt-2 text-white">
            {interestsList.map((item) => (
              <button
                key={item}
                type="button"
                className={`p-2 border rounded ${formData?.interests?.includes(item)||interests.includes(item) ? 'bg-blue-600 text-white' : ''}`}
                onClick={() => toggleMultiSelect(item, interests, setInterests)}
              >
                {item}
              </button>
            ))}
          </div>

          <div>
         
          <div className="grid grid-cols-2 gap-2 mt-2 text-white">
            {languagesList.map((lang) => (
              <button
                key={lang}
                type="button"
                className={`p-2 border rounded ${formData?.preferredLang?.includes(lang)||preferredLang.includes(lang) ? 'bg-green-600 text-white' : ''}`}
                onClick={() => toggleMultiSelect(lang, preferredLang, setPreferredLang)}
              >
                {lang}
              </button>
            ))}
          </div>
          <div className='flex flex-col gap-2'>


<input type="text" name="country" className='p-2 rounded-md font-bold text-xl text-white border-2' value={formData.country} onChange={handleChange} />


<input type="text" name="state" className='p-2 rounded-md font-bold text-xl text-white border-2' value={formData.state} onChange={handleChange} />


<input type="text" name="city" className='p-2 rounded-md font-bold text-xl text-white border-2' value={formData.city} onChange={handleChange} />

</div>
          </div>
        </div>

{/* <div>
<label>Country :</label>

<input type="text" name="country" value={formData.country} onChange={handleChange} />
<label>State :</label>

<input type="text" name="state" value={formData.state} onChange={handleChange} />
<label>City :</label>

<input type="text" name="city"  value={formData.city} onChange={handleChange} />

</div> */}
    </div>
    {/* <Button type='submit' className='bg-blue-500 text-white p-2 rounded-md'>Edit Profile</Button> */}




</form>





    </div>
  )
}