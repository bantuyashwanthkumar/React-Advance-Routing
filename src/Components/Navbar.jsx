import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center w-full px-16 py-0.5 shadow-md bg-white/95 backdrop-blur-md sticky top-0 z-50'>
            <div className="flex items-center gap-2">
                <img src="https://images.pexels.com/photos/34761247/pexels-photo-34761247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Logo" className="w-12 h-10 rounded-full object-cover" />
                <h2 className="text-xl font-bold text-gray-800">Navbar</h2>
            </div>
            <ul className='flex gap-10 text-lg font-medium text-gray-600'>
                <Link to="/" className="cursor-pointer hover:text-blue-600 transition duration-200 p-5">Home</Link>
                <Link to="/about" className="cursor-pointer hover:text-blue-600 transition duration-200 p-5">About</Link>
                <Link to="/contact" className="cursor-pointer hover:text-blue-600 transition duration-200 p-5">Contact</Link>
                <Link to="/services" className="cursor-pointer hover:text-blue-600 transition duration-200 p-5">Services</Link>
                <Link to="/product" className="cursor-pointer hover:text-blue-600 transition duration-200 p-5">Products</Link>
            </ul>
            <div className="flex gap-4 p-5">
                <button className="px-6 py-2.5 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition duration-200 font-medium cursor-pointer">Login</button>
                <button className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200 font-medium shadow-sm hover:shadow-md cursor-pointer">Register</button>
            </div>
        </div>
    )
}

export default Navbar