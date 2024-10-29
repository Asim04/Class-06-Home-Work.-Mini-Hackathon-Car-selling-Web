import Link from 'next/link'
import Image from 'next/image'
import Suzuki from "../public/Suzuki-Swift.png"

const suzukiFunction = () => {
  return (
    <div>
         <div>
        <h1 className="text-5xl text-center my-12 ">Toyota Corolla Price in Pakistan, Images, Reviews, &Specs</h1>
        
        <div className="flex justify-center"><Image className="rounded-lg shadow-md mb-10" src={Suzuki} alt="car"/></div>

        {/* buttom Section */}
        <section className= " flex items-center justify-center space-x-5">
            <Link href=""><button className=" bg-slate-400 rounded-md px-8 py-4 border-blue-800">Book a test Drive</button></Link>
            <Link href=""><button className=" bg-slate-400 rounded-md px-8 py-4 border-blue-800">Request Bank Fainance</button></Link>
            <Link href=""><button className=" bg-slate-400 rounded-md px-8 py-4 border-blue-800">Visit Place</button></Link>
            <Link href=""><button className=" bg-slate-400 rounded-md px-8 py-4 border-blue-800">Car Inspension</button></Link>
        </section>

        <h1 className="text-2xl text-center my-10">Vehicle Description</h1>

        <section>
            <div className="flex justify-around">
                <ul >
                    <li>• Number Of Doors: 4</li>
                    <li>• Condition: 8.5 / 10</li>
                    <li>• Suspension Type: Soft Suspension</li>
                    <li>• Transmission: Automatic</li>
                </ul>

                <ul>
                    <li>• Engine: 1800 CC</li>
                    <li>• Driven: 9,500 KM</li>
                    <li>• AVG: 13 Km per ltr</li>
                    <li>• Fuel Type: High Octane</li>
                </ul>
            </div>
        </section>

        <h1 className="text-center mt-5 text-xl">PKR 50,00,000</h1>

        <Link href="/oderfourm" className="flex justify-center mt-10"><button className=" bg-slate-400 rounded-md text-lg px-8 py-4 ">Make Payment</button></Link>

        
        
      
    </div>
      
    </div>
  )
}

export default suzukiFunction
