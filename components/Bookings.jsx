import React from 'react'

function Bookings() {
    return (
        <>
            <div className='Bookings bg-[#0a6fd6]  h-[50vh] text-white font-poppins'>
                <div className='container w-[85%] mx-auto flex h-full'>
                    <div className='Family-docs px-5 py-8 flex flex-col items-start gap-7'>
                        <i className='fa fa-stethoscope text-[50px]!'></i>
                        <h1 className='text-[30px] font-semibold'>Family Doctor</h1>
                        <p className='text-[16px] font-normal'>Register once and see the same doctor, with your whole family's record in one place.</p>
                        <button className='border-2 rounded-sm px-5 py-1 font-normal hover:bg-white hover:text-[#0c5fb2] hover:cursor-pointer transition-all duration-500 ease-in-out'>Register with us</button>
                    </div>
                    <div className='SameDay-care  bg-[#0c5fb2] px-5 py-8 flex flex-col items-start gap-7'>
                        <i className='fa fa-phone text-[50px]!'></i>
                        <h1 className='text-[30px] font-semibold'>Same-Day Care</h1>
                        <p className='text-[16px] font-normal'>Unwell today? Call before 10am and we will fit you in before the end of the day.</p>
                        <button className='border-2 rounded-sm px-5 py-1 font-normal hover:bg-white hover:text-[#0c5fb2] hover:cursor-pointer transition-all duration-500 ease-in-out'>(555) 010-4411</button>
                    </div>
                    <div className='Booking-Visit px-6 py-8 flex flex-col items-start gap-7'>
                        <i className='fa fa-calendar text-[50px]!'></i>
                        <h1 className='text-[30px] font-semibold'>Book a Visit</h1>
                        <p className='text-[16px] font-normal'>Choose a department, a doctor and a day, and we will confirm the time by phone or email.</p>
                        <button className='border-2 rounded-sm px-5 py-1 font-normal hover:bg-white hover:text-[#0c5fb2] hover:cursor-pointer transition-all duration-500 ease-in-out'>Make an Appointement</button>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Bookings
