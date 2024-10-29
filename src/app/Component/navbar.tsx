import Link from "next/link"
import Image from "next/image"
import logo from "../public/logo.jpeg"

const navbar = () => {
  return (
    <div>
        {/* Header start */}

        <header className="flex justify-evenly items-center bg-teal-700 w-full h-14">
            <div><Link href="/"><Image src={logo} alt="image" width={200} height={100} 
            className="ml-3"/></Link></div>

          
            <div className="flex justify-between items-center text-xl mx-8 gap-8 ml-2">
                <Link href="/">Use Cars</Link>
                <Link href="">New Cars</Link>
                <Link href="">Bikes</Link>
                <Link href="">Auto Store</Link>
                <Link href="">Video</Link>
                <Link href="">Form</Link>
                <Link href="">Belog</Link>
                <Link href="">More</Link>
            </div>

             {/* Search Input */}
          {/* <div className="relative">
            <input type="text" placeholder="Search..."
             className="pl-10 pr-2 py-1 rounded-md border border-gray-300"/>

            <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500">
              🔍 
            </span>
          </div> */}

          <div>
            <ul className="flex space-x-4">
              <Link href=""><button className="bg-orange-700 px-4 py-2 rounded-md ">Post an Add</button></Link>
              
            </ul>


          </div>
        </header>
      
    </div>
  )
}

export default navbar
