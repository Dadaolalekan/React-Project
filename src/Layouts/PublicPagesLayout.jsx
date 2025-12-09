import React from 'react'
import Landingpage from '../pages/landingpage'
import Productpage from '../pages/productpage'
import ProductDetails from '../pages/productdetails'
import NotFoundPage from '../pages/NotFoundPage'
import Signup from '../Components/Signup'
import Signin from '../Components/Signin'
import AddProduct from '../pages/AddProduct'
import { Link, Route, Routes } from 'react-router-dom'

const PublicPagesLayout = () => {
  return (
    <div>
       <header className="bg-white shadow">
    <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
    
        <h2 className="text-2xl font-bold text-gray-800">Logo</h2>

        <ul className="flex items-center space-x-6 text-gray-700 font-medium">
            <Link to="/" className="hover:text-blue-600 transition">Home</Link>
            <Link to="/products" className="hover:text-blue-600 transition">Products</Link>
            <Link to="/login" className="hover:text-blue-600 transition">Login</Link>
            <Link to="/dashboard" className="hover:text-blue-600 transition">Dashboard</Link>
            <Link to="/signin" className="hover:text-blue-600 transition">Signin</Link>
            <Link to="/signup" className="hover:text-blue-600 transition">Signup</Link>
        </ul>
    </nav>
</header>

        <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/products" element={<Productpage />} />
        <Route path="/AddProduct" element={<AddProduct />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/Signin" element={<Signin/>}/>
        <Route path="*" element={<NotFoundPage />} /> 
        </Routes>
    </div>
  )
}

export default PublicPagesLayout