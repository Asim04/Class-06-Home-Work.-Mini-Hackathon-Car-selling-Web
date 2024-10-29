import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <div className='border border-white container mx-auto my-9'>
        <h1 className='text-4xl text-center my-10 '>Sell Your Car on PakWheels and Get the Best Price</h1>
        <div className='flex justify-center space-x-16'>
           <div className='p-8'>
               <h1 className='text-2xl font-semibold mb-5'>Post your Ad on PakWheels</h1>
               <ul>
                    <li className='space-y-2'>
                       <p>Post your Ad for Free in 3 Easy Steps</p>
                       <p>Get Genuine offers from Verified Buyers</p>
                       <p>Sell your car Fast at the Best Price</p>
                    </li>   
               </ul>
               <Link href=""><button className='bg-blue-500 px-4 py-2 rounded-md mt-10'>Post Your Add</button></Link>
           </div>
               <ul>
                  <li className=''>
                    <div className='bg-gray-400 h-16 w-1 mt-9'></div>
                    <div className='absolute bg-black z-50 -ml-3'><h1> OR</h1></div>
                    <div className='bg-gray-400 h-16 w-1 '></div>
                  </li>
               </ul>

           <div className='p-8'>
              <h1 className='text-2xl font-semibold mb-5'>Try PakWheels Sell It For Me</h1>
                <ul>
                    <li className='space-y-2'>
                       <p>Dedicated Sales Expert to Sell your Car</p>
                       <p>We Bargain for you and share the Best Offer</p>
                       <p>We ensure Safe & Secure Transaction</p>
                    </li>   
                </ul>
              <Link href=""><button className='bg-orange-800 px-4 py-2 rounded-md mt-10'>Register Your Car</button></Link>
           </div>
        </div>
    </div>
  )
}

export default Hero
