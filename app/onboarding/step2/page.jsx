"use client"

import React, { useState ,useEffect} from 'react'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { completeOnboarding } from '@/actions/onboarding'
import { getLocation } from '@/actions/location'
import { toast } from 'sonner'
const interestsList = [
    'MUSIC', 'TRAVEL', 'SPORTS', 'READING', 'MOVIES', 'TECHNOLOGY',
    'ART', 'DANCE', 'FITNESS', 'GAMING', 'PHOTOGRAPHY', 'WRITING',
    'COOKING', 'FASHION', 'GARDENING'
  ];
  
  const languagesList = [
    'ENGLISH', 'HINDI', 'SPANISH', 'FRENCH', 'GERMAN', 'CHINESE',
    'JAPANESE', 'KOREAN', 'TAMIL', 'TELUGU', 'BENGALI',
    'MARATHI', 'GUJARATI', 'PUNJABI', 'MALAYALAM'
  ];
const UserInfo2 = () => {
    const router = useRouter()
    const [step1Data,setStep1Data] = useState(null);
    
    const [form,setForm] = useState({
        interests: [],
        preferredLang: [],
        
        country: '',
        state: '',
        city: '',
        latitude: '',
        longitude: ''
    })
    const handleChange=(e)=>{
        setForm({...form, [e.target.name]: e.target.value})
    }



    const [interests, setInterests] = useState([]);
    const[location, setLocation] = useState('');
    const [preferredLang, setPreferredLang] = useState([]);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState('')
    const { user } = useUser()
    
    const toggleMultiSelect = (item, list, setList) => {
      if (list.includes(item)) {
        setList(list.filter((i) => i !== item));
      } else {
        setList([...list, item]);
      }
    };
    
useEffect(()=>{
  const fetchData = async () => {
    const location = await getLocation();
    if (location) {
      setForm((prev) => ({
        ...prev,
        country: location.country,
        state: location.state,
        city: location.city,
        latitude: location.latitude,
        longitude: location.longitude
      }));
    }
  }
  const saved=localStorage.getItem("onboardingStep1");
  if(!saved) router.push('/onboarding/step1');
  else setStep1Data(JSON.parse(saved));

  fetchData();

},[]);


const handleSubmit=async(formData)=>{



  const res = await completeOnboarding(formData)
  if (res?.message) {
    // Reloads the user's data from the Clerk API
    await user?.reload()
    toast.success("Onboarding completed successfully")
    router.push('/')
  }
  if (res?.error) {
    setError(res?.error)
  }


}





  return (
   <form onSubmit={(e) => {
  e.preventDefault()
  
  const formData=new FormData();
formData.append("name",step1Data.name);
formData.append("image",step1Data.image);
formData.append("gender",step1Data.gender);
formData.append("dob",step1Data.dob);
formData.append("country",form.country);
formData.append("state",form.state);
formData.append("city",form.city);
formData.append("latitude",form.latitude);
formData.append("longitude",form.longitude);
formData.append("interests", JSON.stringify(interests));
formData.append("preferredLang", JSON.stringify(preferredLang));




  handleSubmit(formData)}}>
        <div>
          <label className="font-semibold">Select Interests:</label>
          <div className="grid grid-cols-2 gap-2 mt-2">
            {interestsList.map((item) => (
              <button
                key={item}
                type="button"
                className={`p-2 border rounded ${interests.includes(item) ? 'bg-blue-600 text-white' : ''}`}
                onClick={() => toggleMultiSelect(item, interests, setInterests)}
              >
                {item}
              </button>
            ))}
          </div>

          <div>
          <label className="font-semibold">Preferred Languages:</label>
          <div className="grid grid-cols-2 gap-2 mt-2">
            {languagesList.map((lang) => (
              <button
                key={lang}
                type="button"
                className={`p-2 border rounded ${preferredLang.includes(lang) ? 'bg-green-600 text-white' : ''}`}
                onClick={() => toggleMultiSelect(lang, preferredLang, setPreferredLang)}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>


<label>Country</label>
<p>Enter your country</p>
<input type="text" name="country" value={form.country} onChange={handleChange} />
<label>State</label>
<p>Enter your state</p>
<input type="text" name="state" value={form.state} onChange={handleChange} />
<label>City</label>
<p>Enter your city</p>
<input type="text" name="city" value={form.city} onChange={handleChange} />


    </div>
    <button type="submit">Submit</button>
    </form>

  )
}

export default UserInfo2;