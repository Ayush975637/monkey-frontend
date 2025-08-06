// import React from 'react'
// import { PricingTable } from '@clerk/nextjs'
// import { Button } from '@/components/ui/button'
// import { LucideHome } from 'lucide-react'
// import Link from 'next/link'
//   const PremiumPage = () => {
//   return (
//     <div className='flex justify-center items-center h-screen bg-gradient-to-r from-purple-500 to-pink-500'>
//       <div className='flex flex-col '>
//       <div className="flex flex-col gap-4"> 
//         <h1 className='text-white text-4xl font-bold'>Premium</h1>
//         <p className='text-white text-sm'>Unlock all features and enjoy a premium experience.</p>
       
//       </div>
//       <div >
//       <PricingTable />
//       </div >
//       </div>

//     </div>
//   )
// }

// export default PremiumPage
import React from 'react'
import { PricingTable } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
import { LucideHome } from 'lucide-react'
import Link from 'next/link'

const PremiumPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 flex items-center justify-center px-4 py-8">
      <div className=" w-full bg-white rounded-2xl shadow-2xl p-8 flex flex-col items-center space-y-6">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-extrabold text-gray-800">Get Premium</h1>
          <p className="text-sm text-gray-600">Unlock all features and enjoy a better experience.</p>
        </div>

        {/* Pricing Table */}
        <div className="w-full">
          <PricingTable />
        </div>

       
      </div>
    </div>
  )
}

export default PremiumPage

