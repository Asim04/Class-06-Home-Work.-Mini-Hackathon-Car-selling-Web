import Link from "next/link"



const PaymentFourm = () => {
  
  
  return (
    <div>
        <section className="bg-slate-400 ">
        <div className= " container mx-auto w-full max-w-md p-8  bg-white rounded-lg ring-4 ring-black ring-offset-2 ">
          
            <form action=""  >
              
                <h1 className="text-center text-4xl font-bold text-black border-l-black shadow-xl my-10">Enter Your Details</h1>
                <label className="text-black">Name</label>
                <input type="text" name="name"  placeholder="Enter Your Name"
                className="w-96 h-10 rounded-md mb-4 p-2 ring-2 ring-black " />

                <label htmlFor="">Email</label>
                <input type="text" name="email" id="" placeholder="Enter Your Email"
                className="w-96 h-10 rounded-md mb-4 p-2 m-1" />

                <label htmlFor="">Card No</label>
                <input type="number" name="cardno" id="" placeholder="Enter you card Number"
                className="w-96 h-10 rounded-md mb-4 p-2 m-1" />

                <label htmlFor="">Phone Number</label>
                <input type="number" id="" name="pnone" placeholder="Enter you Cell Number"
                className="w-96 h-10 rounded-md mb-4 p-2 m-1" />

                <label htmlFor="">Address</label>
                <input type="text" id="" name="Address" 
                className="w-96 h-16 rounded-md mb-4 p-2 m-1 ring-2 ring-black"/>

                <Link href="/thankyou" className="flex justify-center"><button 
                className="bg-black w-80 h-12 rounded-md font-semibold 
                ring ring-green-600 ring-offset-2 ring-offset-slate-50 dark:ring-offset-teal-900">
                Place you Oder</button></Link>
              
            </form>

          </div>
        </section>
      
    </div>
  )
}

export default PaymentFourm
