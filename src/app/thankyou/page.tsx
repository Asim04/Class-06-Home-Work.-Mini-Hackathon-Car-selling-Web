import Image from "next/image"
import thankyou from "../public/thankyou.png"
import Link from "next/link"

const thankYouFunction = () => {
  return (
    <div>
        <Image src={thankyou} alt="pic"/>

        <Link href="/#" className="flex justify-center">
        <button 
        className="bg-slate-400 w-40 h-16 hover:bg-blue-800 rounded-lg">
        Go Back
        </button>
        </Link>

      
    </div>
  )
}

export default thankYouFunction
