import React, { useState } from 'react'

const Signin =() => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const [submitting,setSubmitting] = useState(false)

// handle input
const handleInput = (e) => {
    const {value,name} = e.target
    setFormData (prev=>({...prev, [name]: value}))
}
console.log(formData);

// handle submit
   const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(formData)

    }
 return (
        <div className="space-y-6 my-8 max-w-[600px] mx-auto w-[90vw] border p-4 rounded-lg">
            <h2 className="text-center " >Login to your Account</h2>
            <form onSubmit={handleSubmit} className="space-y-4" >

                <div className=" flex flex-col space-y-2">
                    <label htmlFor="email">Email</label>
                    <input name="email" type="email" placeholder="olalekan@gmail.com" className="border px-4 py-2 rounded" onChange={handleInput} />
                </div>

               

                <div className=" flex flex-col space-y-2">
                    <label htmlFor="password">Password</label>
                    <input name="Password" type="password" placeholder="12345678" className="border px-4 py-2 rounded" onChange={handleInput} />
                </div>


                <button className="bg-black block w-full px-4 py-2 rounded-2xl border-none text-white">{submitting ? "creating account.....": "submit"}</button>

            </form>
        </div>
    )

}
export default Signin


   