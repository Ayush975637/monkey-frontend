'use client'

import  React,{useState,useEffect} from 'react'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { completeOnboarding } from '@/actions/onboarding'
import UserInfo from './step1/userinfo'
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
export default function OnboardingComponent() {
   const [gender, setGender] = useState('MALE');
  const [dob, setDob] = useState('');
  const [interests, setInterests] = useState([]);
  const [preferredLang, setPreferredLang] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('')
  const { user } = useUser()
  const router = useRouter()


    const toggleMultiSelect = (item, list, setList) => {
    if (list.includes(item)) {
      setList(list.filter(i => i !== item));
    } else {
      setList([...list, item]);
    }
  };
  const handleSubmit = async (formData) => {
    const res = await completeOnboarding(formData)
    if (res?.message) {
      // Reloads the user's data from the Clerk API
      await user?.reload()
      
    }
    if (res?.error) {
      setError(res?.error)
    }
  }
  return (
    <div>
    <UserInfo/>
    </div>
  )
}