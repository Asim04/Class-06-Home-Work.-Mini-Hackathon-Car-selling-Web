import Link from "next/link"

const navbar2 = () => {
  return (
    <div>
        <nav className="flex justify-around h-10 text-xl border-b-2">
            <Link href=""><div className="hover:text-blue-700">Dawnload App Via Sms</div></Link>

            <div>
                <ul className="flex space-x-2 ml-28">
                    <li className="text-red-700 ">اردہ</li>
                    <Link href=""><li >| <span className="hover:text-blue-700">sign up</span></li></Link>
                    <Link href=""><li >| <span className="hover:text-blue-700">sign in</span></li></Link>
                </ul>
            </div>
        </nav>
      
    </div>
  )
}

export default navbar2

