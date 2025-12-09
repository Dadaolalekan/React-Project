import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import OrdersPage from '../Dashboard/OrdersPage'
import Sidebar from '../sidebar'
import Dashboard from '../pages/dashboard'



const DashboardLayout = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">

            {/* Header */}
            <header className="bg-white shadow sticky top-0 z-50">
                <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <Link 
                        to="/" 
                        className="text-xl font-bold text-blue-600 hover:text-blue-800"
                    >
                        Logo
                    </Link>

                    <ul className="flex items-center space-x-6">
                        <Link 
                            to="/dashboard" 
                            className="text-gray-700 hover:text-blue-600 font-medium"
                        >
                            Overview
                        </Link>

                        <Link 
                            to="/dashboard/orders" 
                            className="text-gray-700 hover:text-blue-600 font-medium"
                        >
                            Orders
                        </Link>

                        <Link 
                            to="/dashboard/analytics" 
                            className="text-gray-700 hover:text-blue-600 font-medium"
                        >
                            Analytics
                        </Link>

                        <Link 
                            to="/dashboard/profile" 
                            className="text-gray-700 hover:text-blue-600 font-medium"
                        >
                            Profile
                        </Link>
                    </ul>
                </nav>
            </header>

            {/* Main Layout */}
            <section className="flex flex-1">
                
                {/* Sidebar */}
                <aside className="w-64 bg-white border-r shadow-sm">
                    <Sidebar />
                </aside>

                {/* Content Area */}
                <main className="flex-1 p-6">
                    <Routes>
                        <Route path="" element={<Dashboard />} />
                        <Route path="/orders" element={<OrdersPage />} />
                    </Routes>
                </main>
            </section>

        </div>
    )
}

export default DashboardLayout
