import Link from "next/link"



const PaymentFourm = () => {
  
  
  return (
    <div>
        <section className="bg-slate-400">
          
            <form action="" className="flex flex-col justify-center items-center" >
              
                <h1 className="text-center text-4xl font-bold border-l-slate-50 shadow-xl my-10">Enter Your Details</h1>
                <label htmlFor="">Name</label>
                <input type="text" name="name"  placeholder="Enter Your Name"
                className="w-96 h-10 rounded-md mb-4 p-2 m-1" />

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
                className="w-96 h-16 rounded-md mb-4 p-2 m-1"/>

                <Link href="/thankyou"><button className="bg-black w-80 h-12 rounded-md font-semibold ">Place you Oder</button></Link>
              
            </form>

          
        </section>
      
    </div>
  )
}

export default PaymentFourm
