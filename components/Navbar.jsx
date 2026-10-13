import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <header className="text-gray-600 body-font">
                <div className="container w-[95%] mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
                    <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <div className='w-11 h-11 bg-[#0a6fd6] flex justify-center rounded-md'>
                            <h1 className='text-3xl text-white'>+</h1>
                        </div>
                        <span className="ml-3 text-3xl font-bold">Docmed</span>
                    </Link>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base gap-4">
                        <Link to="/" className="mr-5  text-black font-medium">Home</Link>
                        <Link to="/Departments" className="mr-5 text-black font-medium">Departments</Link>
                        <Link className="mr-5 text-black font-medium">Doctors</Link>
                        <Link className="mr-5 text-black font-medium">About</Link>
                        <Link className="mr-5 text-black font-medium">Blog</Link>
                        <Link className="mr-5 text-black font-medium">Contact</Link>
                    </nav>
                    <button className="inline-flex items-center text-white bg-[#0a6fd6] font-medium text-[16px] border-0 py-3 px-5 focus:outline-none hover:bg-[#065baf] rounded text-base cursor-pointer mt-4 md:mt-0">Make an Appointment</button>
                </div>
            </header></>
    )
}

export default Navbar
