// app/page.tsx
'use client';

import { motion } from 'framer-motion';
import { Zap, Clock, Users, Play, Star, Bookmark, Plus, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import Link from 'next/link';
import { gethistory } from '@/actions/history';
import { requestfriend } from "@/actions/friend";
import { deletehistory } from '@/actions/history';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from "@clerk/nextjs";
import { reportUserHistory } from "@/actions/report";
import { toast } from "sonner";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Delete } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
const reportReasons = [
  { id: 1, reason: "🔞 Sexual content or nudity" },
  { id: 2, reason: "🔪 Violence or graphic content" },
  { id: 3, reason: "🤬 Hate speech or abusive behavior" },
  { id: 4, reason: "🙅‍♂️ Harassment or bullying" },
  { id: 5, reason: "💣 Terrorism or violent extremism" },
  { id: 6, reason: "📢 Spam or misleading content" },
  { id: 7, reason: "💊 Illegal activities (e.g., drugs, weapons)" },
  { id: 8, reason: "💔 Self-harm or suicide content" },
  { id: 9, reason: "🐾 Animal abuse" },
  { id: 10, reason: "❓ Other" }
];
export default function VideoChatHistory() {

  const [history, setHistory] = useState([]);
  const [report, setReport] = useState(false);
  const [reportReason, setReportReason] = useState("");
  const { user } = useUser();
  const [reportedUser, setReportedUser] = useState(null);
  useEffect(() => {
    const fetchHistory = async () => {
      const history = await gethistory();
      setHistory(history);
    };
    fetchHistory();
  }, []);
  const handleDeleteHistory = async (id) => {
    const res = await deletehistory(id);
    if (res.error) {
      console.error(res.error);
    }
  };

const handleAddFriend = async (id) => {
  const res = await requestfriend(id);
  if (res.error) {
    console.error(res.error);
  }
  if (res.success) {
    toast.success(res.message);
 
  
    router.push("/chat");
  }
};

const handleReportReason = async (reason) => {
  setReportReason(reason);

  setReport(false);

  try {
    if (!user?.id || !reportedUser || !reason) return;


    const res = await reportUserHistory(reportedUser, reason);

    if (res?.error) {
      toast.error(res.error);
    } else {
      toast.success("Reported successfully");
      
    }
  } catch (err) {
    toast.error("Failed to report user. Please try again.");
  }

  setReportReason("");
  setReportedUser(null);

};





  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-500 to-red-500 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
          <div className="flex items-center space-x-2">
            <Zap className="w-8 h-8 text-yellow-400" />
            <h1 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">
              ChikChak
            </h1>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
            <Link href="/videochat">
            <Button variant="outline" className="gap-2 bg-gray-800 hover:bg-gray-700">
              <Search className="w-4 h-4" />
              <span>Search</span>
            </Button>
            </Link>
            <Button className="gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
              <Plus className="w-4 h-4" />
              <span>Start Video Call</span>
            </Button>
          </div>
        </header>

        {/* Main Content */}
        <main>
          <motion.h2 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-semibold mb-6 flex items-center space-x-2 "
          >
            <Clock className="w-6 h-6 text-yellow-400" />
            <span>Video Chat History</span>
          </motion.h2>

          {/* Timeline Sections */}
          <div className="space-y-12">
            {/* Today */}
            <motion.section 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="timeline-group"
            >
               <Dialog open={report} onOpenChange={setReport}>

<DialogContent className="max-w-md">
  <DialogHeader>
    <DialogTitle>Report User</DialogTitle>
    <DialogDescription>
      {reportReasons.map((reason) => (
        <Button key={reason.id} variant="outline" className="text-lg text-gray-700  mt-2" onClick={() => handleReportReason(reason.reason)}>{reason.reason}</Button>
      ))}
    </DialogDescription>
  </DialogHeader>
</DialogContent>
</Dialog>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
                {history.map((chat) => (
                  <motion.div
                    key={chat.id}
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card className="bg-amber-500 border-white hover:border-yellow-400 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/10 h-full flex flex-col">
                      
                      <CardHeader>
                        <div className="flex justify-between items-start">
                        <span className="px-2 py-1 rounded-full text-xs flex items-center justify-center">
                            <Clock className="w-3 h-3 mr-1" /> {chat.startedAt}
                          </span>
                          <div className='flex items-center space-x-2'>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="p-2 rounded-full hover:bg-yellow-400 hover:text-black" 
                            onClick={()=>{setReport(true);setReportedUser(chat.user2?.id)}}
                          >
                            <span className='text-white text-3xl'>🔞 </span>
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className={`p-2 rounded-full w-10 h-10  `} onClick={()=>handleDeleteHistory(chat.id)}
                          >
                            <Delete size={20} />
                          </Button>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                       <div className='flex items-center justify-between'>
                       <div className='flex items-center space-x-2 gap-2'>
                       <Avatar>
  <AvatarImage src={chat.user2?.imageUrl} />
  <AvatarFallback>{chat.user2?.name?.charAt(0)}</AvatarFallback>
</Avatar>
<div className='flex flex-row items-center justify-around gap-20'>
  <span className='text-black text-md font-bold'>{chat.user2?.name}</span>
  <span className='text-black text-md'>{chat.startedAt.toLocaleString()}</span>
</div>
                       </div>
                       </div>
                      </CardContent>
                      <CardFooter className="mt-auto">
                        <div className="flex items-center justify-center w-full">
                        <Button className='bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600' onClick={()=>handleAddFriend(chat.user2?.id)}>
                          <span className='text-white'>💬Send Message</span>
                        </Button>
                         
                        </div>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Add more timeline sections (Yesterday, Last Week) */}
          </div>
        </main>
      </div>
    </div>
  );
}