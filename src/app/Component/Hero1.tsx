import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import search from "../public/search_icon.png"

export default function Hero1() {
  return (
    <div className='bg-gradient-to-b from-black to-blue-900 pb-[1-px]'>
        <div className='with-full h-52'>
             <h1 className='text-center text-4xl pt-20'>Find Used Cars in Pakistan</h1>
             <p className='text-center'>With thousands of cars, we have just the right one for you</p>
        </div>

        <div className='bg-white  mx-28 h-14 rounded-md flex justify-end'>
            <input type="text" placeholder='Car Make Or Model' 
             className=" w-72 h-10 rounded-md   "/>
             
            <span className='text-justify mt-3 mx-4 text-black'> All Cities
                <select name="" id="" 
                 className='w-40 h-10 rounded-md mb-4 p-2 ml-4 '>
                    
                    <option value="">Karachi</option>
                    <option value="">Lahor</option>
                    <option value="">islamabad</option>
                </select>
             </span>

             <select name="" id=""
                        className='w-40 h-10 rounded-md mb-4 p-2 ml-4 text-black '>
                    <option value="">06 Lac</option>
                    <option value="">10 Lac</option>
                    <option value="">15 Lac</option>
                    <option value="">26 Lac</option>
                    <option value="">50 Lac</option>
             </select>
             <Link href=""><Image src={search} alt="search" width={50} className='bg-green-500 text-end h-14 py-2 px-3' /></Link>
            </div>

             <div className='flex justify-center mt-4'>
                <Link href="">
                    <button 
                    className=' mt-6 mb-32  p-4 flex flex-col justify-center items-center h-4 border border-white  '>Advance Filter</button></Link></div>

             

        

      
    </div>
  )
}
