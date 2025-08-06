"use client"

import { motion } from "framer-motion"
import {  Trophy, Zap, Crosshair, Activity, Shield } from "lucide-react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { getprofile } from "@/actions/getprofile"
import { useEffect } from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Edit } from "lucide-react"
import Link from "next/link"

export default function ChikChakProfile() {
const [user, setUser] = useState(null);
const today = new Date();
useEffect(() => {
  async function fetchUser() {
    const user = await getprofile();
    setUser(user);
  }
  fetchUser();
}, []);




 
  return (

    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        {/* Header */}
        <header className="text-center mb-12">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Avatar className="w-32 h-32 mx-auto border-4 border-yellow-400 shadow-lg shadow-yellow-500/50">
            {user?.imageUrl && (
  <AvatarImage src={user?.imageUrl} alt="ChikChak" />
)}
              <AvatarFallback className="bg-yellow-500 text-white font-bold text-2xl">
              {(user?.name?.slice(0, 2) || "CC").toUpperCase()}
                </AvatarFallback>
            </Avatar>
          </motion.div>
          <motion.h1 
            className="mt-6 text-5xl font-extrabold text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
              {user?.name}
            </span>
          </motion.h1>
          <motion.p 
            className="mt-2 text-xl text-purple-200 flex items-center justify-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Trophy className="w-6 h-6 text-yellow-400" />
            Future Champion - {user?.name}

          </motion.p>
        </header>

        

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 }}
          >
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 h-full">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Activity className="w-6 h-6 text-yellow-400" />
                  Champion Profile
                </CardTitle>
                <CardDescription className="text-purple-200">
                  
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-2">

                <div className="space-y-4">
                 
                  <div className="flex items-center gap-2">
                    <p className="text-m text-purple-300 mb-1">✉️Email</p>
                    <p className="text-yellow-400 font-medium">{user?.email}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-m text-purple-300 mb-1">👨🏽Gender</p>
                    <p className="text-yellow-400 font-medium">{user?.gender}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-m text-purple-300 mb-1">🎂 Age</p>
                    <p className="text-yellow-400 font-medium">{today.getFullYear() - user?.dob.getFullYear()}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                    <p className="text-m text-purple-300 mb-1">🌍 Contry</p>
                    <p className="text-yellow-400 font-medium">{user?.country}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-m text-purple-300 mb-1">🏙️ State</p>
                    <p className="text-yellow-400 font-medium">{user?.state}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-m text-purple-300 mb-1"> 🌆 City</p>
                    <p className="text-yellow-400 font-medium">{user?.city}</p>
                  </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Upcoming Matches */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1 }}
          >
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 h-full">
              <CardHeader>
                <CardTitle className="text-white">Upcoming Conquests</CardTitle>
                <CardDescription className="text-purple-200">
                  The road to victory
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <MatchItem 
                    opponent="Monkey King" 
                    date="2024-12-25" 
                    status="coming" 
                    confidence={95}
                  />
                  <MatchItem 
                    opponent="Gorilla Titan" 
                    date="2024-11-15" 
                    status="coming" 
                    confidence={90}
                  />
                  <MatchItem 
                    opponent="Baboon Brigade" 
                    date="2024-10-05" 
                    status="completed" 
                    result="W"
                  />
                </div>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button variant="glow" className="mt-4">
                  <Zap className="w-4 h-4 mr-2" />
                  Challenge ChikChak
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </div>

        {/* Victory Badge */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.3, type: "spring" }}
        >
          <Link href="/editprofile">
          <div className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full shadow-lg">
            <Edit className="w-6 h-6 mr-2" />
            <span className="font-bold text-white">Edit Your Profile</span>
          </div>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}

function StatCard({ icon, title, value, color }) {
  return (
    <Card className="bg-white/5 backdrop-blur-sm border-white/10">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-purple-200">
          {title}
        </CardTitle>
        <div className={`bg-gradient-to-r ${color} p-2 rounded-lg`}>
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold text-white">{value}</div>
        <Progress value={value} className={`h-2 mt-2 bg-gradient-to-r ${color}`} />
      </CardContent>
    </Card>
  )
}

function MatchItem({ opponent, date, status, confidence, result }) {
  const dateObj = new Date(date)
  const formattedDate = dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
  
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
          status === 'completed' 
            ? result === 'W' 
              ? 'bg-green-500/20 text-green-400' 
              : 'bg-red-500/20 text-red-400'
            : 'bg-yellow-500/20 text-yellow-400'
        }`}>
          {status === 'completed' ? (
            <span className="font-bold">{result}</span>
          ) : (
            <Zap className="w-4 h-4" />
          )}
        </div>
        <div>
          <p className="font-medium text-white">{opponent}</p>
          <p className="text-sm text-purple-300">{formattedDate}</p>
        </div>
      </div>
      {status === 'coming' && confidence && (
        <div className="text-right">
          <p className="text-sm text-purple-300">Win Probability</p>
          <p className="font-bold text-yellow-400">{confidence}%</p>
        </div>
      )}
    </div>
  )
}