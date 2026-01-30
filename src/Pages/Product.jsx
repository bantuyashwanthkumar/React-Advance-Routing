import React from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
    return (
        <div>
            <div className="flex justify-center gap-10 py-4">
                <Link className='text-xl font-medium text-gray-600 cursor-pointer hover:text-blue-600 transition duration-200 p-5' to='/product/men'>Men</Link>
                <Link className='text-xl font-medium text-gray-600 cursor-pointer hover:text-blue-600 transition duration-200 p-5' to='/product/women'>Women</Link>
            </div>
        </div>
    )
}

export default Product