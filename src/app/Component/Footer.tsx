import Link from 'next/link';
// import Image from 'next/image';
// import fbook from "../public/facebook.png"
import { FaFacebook, FaFacebookF, FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";


const Footer = () => {
  return (
    <div className=' bg-slate-500 h-[634-px]'>
        <div>
            <div className=' container mx-auto flex py-4'>
                <div className='container mx-auto flex flex-col-md-3'>
                    <ul className=''>
                        <h1 className='mt-4 mb-2 capitalize text-xl'> car by make</h1>
        
                        <li className='text-sm  hover:text-gray-600 hover:underline font-thin'><a href="" >Toyota Cars for Sale</a></li>
                        <li className='text-sm  hover:text-gray-600 hover:underline font-thin'><a href="">Suzuki Cars for Sale</a></li>
                        <li className='text-sm  hover:text-gray-600 hover:underline font-thin'><a href="">Honda Cars for Sale</a></li>
                        <li className='text-sm  hover:text-gray-600 hover:underline font-thin'><a href="">Daihatsu Cars for Sale</a></li>
                        <li className='text-sm  hover:text-gray-600 hover:underline font-thin'><a href="">Mitsubishi Cars for Sale</a></li>
                        <li className='text-sm  hover:text-gray-600 hover:underline font-thin'><a href="">Nissan Cars for Sale</a></li>
                        <li className='text-sm  hover:text-gray-600 hover:underline font-thin'><a href="">Mercedes Cars for Sale</a></li>
                        <li className='text-sm  hover:text-gray-600 hover:underline font-thin'><a href="">Hyundai Cars for Sale</a></li>
                        <li className='text-sm  hover:text-gray-600 hover:underline font-thin'><a href="">BMW Cars for Sale</a></li>
    
                    </ul>
                </div>
    
                <div className='container mx-auto flex flex-col-md-3'>
                    <ul>
                        <h1 className='mt-4 mb-2 capitalize text-xl'> car by city</h1>
        
                        <li className='text-sm  hover:text-gray-600 hover:underline font-thin'><a href="">Cars in Karachi</a></li>
                        <li className='text-sm  hover:text-gray-600 hover:underline font-thin'><a href="">Cars in Lahore</a></li>
                        <li className='text-sm  hover:text-gray-600 hover:underline font-thin'><a href="">Cars in Islamabad</a></li>
                        <li className='text-sm  hover:text-gray-600 hover:underline font-thin'><a href="">Cars in Rawalpindi</a></li>
                        <li className='text-sm  hover:text-gray-600 hover:underline font-thin'><a href="">Cars in Peshawar</a></li>
                        <li className='text-sm  hover:text-gray-600 hover:underline font-thin'><a href="">Cars in Faisalabad</a></li>
                        <li className='text-sm  hover:text-gray-600 hover:underline font-thin'><a href="">Cars in Multan</a></li>
                        <li className='text-sm  hover:text-gray-600 hover:underline font-thin'><a href="">Cars in Gujranwala</a></li>
                        <li className='text-sm  hover:text-gray-600 hover:underline font-thin'><a href="">Cars in Sialkot</a></li>
                        <li className='text-sm  hover:text-gray-600 hover:underline font-thin'><a href="">Cars in Sargodha</a></li>
    
                    </ul>
    
                </div>
    
                {/* Explore PakWheel */}
    
                <div className='container mx-auto flex flex-col-md-3'>
                    <ul>
                        <h1 className='mt-4 mb-2 capitalize text-xl'> Explore PakWheel</h1>
        
                        <li className='text-sm  hover:text-gray-600'><a href="">Used Cars</a></li>
                        <li className='text-sm  hover:text-gray-600'><a href="">Used Bikes</a></li>
                        <li className='text-sm  hover:text-gray-600'><a href="">New Cars</a></li>
                        <li className='text-sm  hover:text-gray-600'><a href="">Auto Parts & Accessories</a></li>
                        <li className='text-sm  hover:text-gray-600'><a href="">Cool Rides</a></li>
                        <li className='text-sm  hover:text-gray-600'><a href="">Forums</a></li>
                        <li className='text-sm  hover:text-gray-600'><a href="">Cars in Multan</a></li>
                        <li className='text-sm  hover:text-gray-600'><a href="">Autoshow</a></li>
                        <li className='text-sm  hover:text-gray-600'><a href="">Sitemap</a></li>
                        
    
                    </ul>
    
                </div>
    
                {/* col-div-seaction: For PakWheels.com */}
    
    
                <div className='container mx-auto flex flex-col-md-3'>
                    <ul>
                        <h1 className='mt-4 mb-2 capitalize text-xl'> PakWheels.com</h1>
        
                        <li className='text-sm hover:text-gray-600'><a href="">About PakWheels.com</a></li>
                        <li className='text-sm hover:text-gray-600'><a href="">Advertise With Us</a></li>
                        <li className='text-sm hover:text-gray-600'><a href="">How To Pay</a></li>
                        <li className='text-sm hover:text-gray-600'><a href="">FAQs</a></li>
                        <li className='text-sm hover:text-gray-600'><a href="">Refunds & Returns</a></li>
                        <li className='text-sm hover:text-gray-600'><a href="">Careers</a></li>
                        <li className='text-sm hover:text-gray-600'><a href="">Contact Us</a></li>
                                         
    
                    </ul>
    
                </div>
    
                {/*  col-div for: Sell On PakWheels */}
    
                <div className='container mx-auto flex flex-col'>
                    <ul>
                        <h1 className='mt-4 mb-2 capitalize text-xl'>Sell On PakWheels</h1>
        
                        <li className='hover:text-gray-600'><a href="">Sell Your Car</a></li>
                        <li className='hover:text-gray-600'><a href="">Sell Your Bike</a></li>
                        <li className='hover:text-gray-600'><a href="">Sell Accessory</a></li>
                                                                    
                    </ul>
    
                </div>
            
            </div>
    
            {/* Second Main div */}
    
            <div className='container mx-auto flex'>
                <div className=' container mx-auto flex flex-col'>
                    <ul>
                        <h1 className='mt-4 mb-2 capitalize text-xl '>Cars by Category</h1>
                        <li className='hover:text-gray-600'><a href="">Jeep</a></li>
                        <li className='hover:text-gray-600'><a href="">Japanese Cars</a></li>
                        <li className='hover:text-gray-600'><a href="">Imported Cars</a></li>
                        <li className='hover:text-gray-600'><a href="">Automatic Cars</a></li>
                        <li className='hover:text-gray-600'><a href="">Low Priced Cars</a></li>
                        <li className='hover:text-gray-600'><a href="">4x4 Cars</a></li>
                        <li className='hover:text-gray-600'><a href="">660cc Cars</a></li>
                        <li className='hover:text-gray-600'><a href="">1000cc Cars</a></li>
                    </ul>
                </div>
    
    
                <div className='container mx-auto flex flex-col'>
                    <ul>
                        <h1 className='mt-4 mb-2 capitalize text-xl'>Cars by Body Type</h1>
                        <li className='hover:text-gray-600'><a href="">Sedan</a></li>
                        <li className='hover:text-gray-600'><a href="">Hatchback</a></li>
                        <li className='hover:text-gray-600'><a href="">SUV</a></li>
                        <li className='hover:text-gray-600'><a href="">Crossover</a></li>
                        <li className='hover:text-gray-600'><a href="">Mini Van</a></li>
                        <li className='hover:text-gray-600'><a href="">Van</a></li>
                        <li className='hover:text-gray-600'><a href="">Compact SUV</a></li>
                        <li className='hover:text-gray-600'><a href="">MPV</a></li>
                    </ul>
                </div>
    
    
                <div className='container mx-auto flex flex-col'>
                    <ul>
                        <h1 className='mt-4 mb-2 capitalize text-xl '>Cars by Color</h1>
                        <li className='hover:text-gray-600'><a href="">White Cars</a></li>
                        <li className='hover:text-gray-600'><a href="">Silver Cars</a></li>
                        <li className='hover:text-gray-600'><a href="">Black Cars</a></li>
                        <li className='hover:text-gray-600'><a href="">Grey Cars</a></li>
                        <li className='hover:text-gray-600'><a href="">Blue Cars</a></li>
                        <li className='hover:text-gray-600'><a href="">Red Cars</a></li>
                        <li className='hover:text-gray-600'><a href="">Green Cars</a></li>
                        <li className='hover:text-gray-600'><a href="">Gold Cars</a></li>
                    </ul>
                </div>
    
    
                <div className='container mx-auto flex flex-col'>
                    <ul>
                        <h1 className='mt-4 mb-2 capitalize text-xl '>Cars by Province</h1>
                        <li className='hover:text-gray-600'><a href="">Cars in Punjab</a></li>
                        <li className='hover:text-gray-600'><a href="">Cars in Sindh</a></li>
                        <li className='hover:text-gray-600'><a href="">Cars in KPK</a></li>
                        <li className='hover:text-gray-600'><a href="">Cars in Balochistan</a></li>
                        <li className='hover:text-gray-600'><a href="">Cars in Azad Kashmir</a></li>
                        <li className='hover:text-gray-600'><a href="">Cars in Federally Administered</a></li>
                        <li className='hover:text-gray-600'><a href="">Tribal Areas</a></li>
                        
                    </ul>
                </div>
    
    
                <div className='felex container mx-auto flex-col'>
                    <h1 className=' py-2 capitalize text-[15px]  font-bold'>Subscribe to our Newsletter</h1>
                    <input type="text" name="" id="" placeholder='name@email.com' 
                    className='py-1 px-1 w-32'/>
                    <button className='text-sm bg-green-700 py-2 px-1'>Subscribe</button>

                    <div className='my-10 '>
                        <h2 className='font-bold mb-2'>Follow Us</h2>
                        
                        <div className='flex space-x-4 mb-4 mt-2'>
                        {/* <Link href='/' className='pt-4'><Image src={fbook} alt='' width={40}/></Link> */}
                        <Link href='/'></Link>
                        <Link href='/'><FaFacebook className='w-7 h-7 bg-blue-800 rounded-full hover:bg-blue-800'/></Link>
                        <Link href='/'>< FaFacebookF className='w-7 h-7 rounded-full bg-white text-black p-1.5 hover:bg-blue-800 hover:text-white'/></Link>
                        <Link href='/'><FaInstagram className='w-7 h-7 rounded-full bg-white text-black p-1.5'/></Link>
                        <Link href='/'><FaGithub  className='w-7 h-7 rounded-full bg-white text-black p-1.5'/></Link>
                        </div>
                        
                    </div>

                    {/* Dawalanlod App Div*/}

                    <div>
                        <a href="" className='text-xl hover:underline'>Dawnload Mobile Apps</a>
                        {/* <Image src={} alt=''/> */}
                    </div>


                </div>
    
            </div>
    
            
            {/* Last Div Footer*/}


            <div className=' pt-16 pb-4 flex justify-center items-center flex-col font-light'>
                Copyright © 2003 - 2024 PakWheels (Pvt) Ltd. - All Rights Reserved.
                <Link href="/" className='mb-2 font-light'>Cteated by Muhammad Asim khan</Link>
                <p className='font-light'>
                    Reproduction of material from any PakWheels.com pages without permission is strictly prohibited.</p>
            </div>
      
             
      
        </div>
      
    </div>
  )
}

export default Footer

