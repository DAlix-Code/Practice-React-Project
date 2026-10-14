import React from 'react'

function Hero() {
    return (
        <>
            <section className="text-gray-600 body-font bg-[url('/hero.png')] bg-no-repeat bg-cover bg-center h-[90vh] font-poppins">
                <div className="container w-[90%] mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg\:flex-grow md:w-1/2 lg:pr-30  md:pr-20x flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font text-[70px] max-sm:text-4xl  mb-4 font-bold text-gray-900 leading-normal">Health Care
                            <br className="hidden lg:inline-block" /><span className='title-font text-[68px] max-sm:text-4xl  mb-4 font-normal text-gray-900'>For the Whole Family</span>
                        </h1>
                        <p className="mb-8 leading-relaxed text-[#1f1f1f] text-[19px] w-3xl pr-0">Family doctors, dentists, eye care and physiotherapy under one roof on Green Lane, with same-day appointments every weekday.</p>
                        <div className="flex justify-center">
                            <button className="inline-flex my-buttons "><a href="/Departments">Our Departements</a></button>                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero
