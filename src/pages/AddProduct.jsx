import { useState } from "react";
import { useForm } from "react-hook-form";

//react-hook-form
//yup
//@hookform/resolvers

import React from 'react'

const AddProduct = () => {

    const { register, handleSubmit } = useForm({
        defaultValues: {
            name: "",
            price: ""
        }
    })

    const [submitting, setSubmitting] = useState(false) 

    const handleAddProduct = (data) => {
        console.log(data);
    }
    return (
        <div>
            <h1>Add Product</h1>
            <form className=" space-y-4" onSubmit={handleSubmit(handleAddProduct)}>
                <div className="flex flex-col space-y-2">
                    <label htmlFor="name">Product name</label>
                    <input type="text"
                        placeholder="e.g Nike Shoe"
                        className="border px-4 py-2 rounded"
                        {...register("name")} />
                </div>

                <div className="flex flex-col space-y-2">
                    <label htmlFor="name">Description</label>
                    <input type="text"
                        placeholder="e.g Enter your description here"
                        className="border px-4 py-2 rounded"
                        {...register("Description")} />
                </div>

                  <div className="flex flex-col space-y-2">
                  <label htmlFor="name">Price</label>
                  <input type="text"
                  placeholder="5000" 
                  className="border px-4 py-2 rounded"
                  {...register("Price")}/>
                </div>
            

                 <div className="flex flex-col space-y-2">
                  <label htmlFor="name">Category</label>
                  <input type="text"
                  placeholder="e.g Nike Shoe" 
                  className="border px-4 py-2 rounded"
                  {...register("category")}/>
                </div>


            <button className='bg-black block w-full px-4 py-2 rounded  border-none text-white'>{submitting ? "Creating account..." : "Submit"}</button>


            </form>
        </div>

    )
}

export default AddProduct