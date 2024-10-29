import Link from "next/link"
import Image from "next/image"
import toyota from "../public/Toyota-Corolla.png"
import Suzuki from "../public/Suzuki-Swift.png"
import Honda from "../public/Honda.png"

const FeatureNewCar = () => {
  return (
    <div>
        <section>
          <ul className="flex justify-around mt-12">
              <li className="text-2xl  ">Featured New Cars</li>
              <Link href=""><li className="text-blue-600">View All New Cars</li></Link>
          </ul>
        </section>

        <section >
            <ul className="flex space-x-12 ml-56 mt-5 border-b border-white mb-24 pb-4 mr-32 " >
                <Link href="" className="hover:text-green-600 translate-x-1 "><li className="hover:underline decoration-blue-400 decoration-4 underline-offset-8">Popular </li></Link>
                <Link href="" className="hover:text-green-600 translate-x-1"><li>Upcoming</li></Link>
                <Link href="" className="hover:text-green-600 underline-blue translate-x-1"><li>Newly Launched</li></Link>

            </ul>
        </section>
        {/* <div className='bg-gray-400 h-0.5 w-96 mt-6   mb-20 ml-80'></div> */}

       {/* Card Seaction Start */}

        <section className="flex space-x-3 justify-center mt-10 ">
          <div className="w-64 h-96 bg-green-500  rounded-md  ">
            
              <ul className="flex flex-col justify-center items-center my-20">
                <Image src={toyota} alt="" width={230} />
                <Link href="/toyota"><p className="text-center font-bold mt-10 hover:text-blue-700">Toyota Corolla</p></Link>
                <p className="text-center">PKR 59.5 - 75.5 lacs</p>
                <p className="text-center bg-slate-400 text-blue-600">♥ ♥ ♥ ♥</p>
                <p className="text-center">521 Reviews</p>
              </ul>
            
          </div>

          <div className="w-64 h-96 bg-green-500  rounded-md">
            <ul className="flex flex-col justify-center items-center my-20">
              <Image src={Suzuki} alt="" width={230}/>
              <Link href="/suzuki"><p className="text-center font-bold hover:text-blue-700 ">Suzuki Swift</p></Link>
              <p className="text-center">PKR 23.5 - 25.5 lacs</p>
              <p className="text-center  bg-slate-400 text-blue-600">♥ ♥ ♥ ♥</p>
              <p className="text-center">821 Reviews</p>
            </ul>
          </div>

          <div className="w-64 h-96 bg-slate-300  rounded-lg border-2 border-white" >
            <ul className="flex flex-col justify-center items-center my-20">
              <Image src={Honda} alt="" width={230}/>
              <Link href="/honda"><p className="text-center font-semibold text-lg border-t-slate-900 boeder-2 hover:text-blue-700">Honda City</p></Link>
              <p className="text-center">PKR 46.5 - 58.5 lacs</p>
              <p className="text-center  bg-slate-400 text-blue-600">♥ ♥ ♥ ♥</p>
              <p className="text-center">951 Reviews</p>
            </ul>
          </div>
          
          <div className="w-64 h-96 bg-green-500  rounded-lg border-2 border-white">
          <ul>
              <p className="text-center font-bold  ">Honda Civic</p>
              <p className="text-center">PKR 86.5 - 99.5 lacs</p>
              <p className="text-center  bg-slate-400 text-blue-600">♥ ♥ ♥ ♥</p>
              <p className="text-center">999 Reviews</p>
            </ul>
            <ul>
              <p className="text-center font-bold  ">Honda Civic</p>
              <p className="text-center">PKR 86.5 - 99.5 lacs</p>
              <p className="text-center  bg-slate-400 text-blue-600">♥ ♥ ♥ ♥</p>
              <p className="text-center">999 Reviews</p>
            </ul>
          </div> 
        </section>
      
    </div>
  )
}

export default FeatureNewCar
