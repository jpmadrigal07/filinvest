"use client"
import Image from 'next/image'
import React from 'react'
import ChevronRight from '../svg/ChevronRight'

const OurServices = () => {
  return (
    <section className="pt-28">
        <div className="w-full lg:w-1/3 w-full mx-auto">
            <h4 className="font-bold text-dark-cornflower-blue text-center">OUR SERVICES</h4>
            <h2 className="text-4xl font-extrabold text-center text-jet mt-2">Contact-less, easy, and convenient way of owning a home</h2>
            <h4 className="text-center text-dim-gray mt-4">Go through the journey of locking for a property, submitting documents, paying for transactions, managing your property and your account through our online portals available online 24/7.</h4>
        </div>
        <div className="flex gap-4 mt-12 mx-3 lg:mx-9 xl:mx-16 2xl:mx-44">
            <div className="flex-1">
                <div className="relative flex justify-center items-center">
                    <button type="button" className="absolute bg-blue-ryb hover:bg-dark-cornflower-blue focus:bg-dark-cornflower-blue rounded-full text-white px-7 py-6 delay-50 transition">
                        <ChevronRight/>
                    </button>
                    <Image
                        src="/filpayall-services.png"
                        width={356}
                        height={364}
                        alt="Picture of the author"
                    />
                </div>
                <h3 className="text-jet text-2xl font-bold mt-6 text-center">Fil PayAll</h3>
            </div>
            <div className="flex-1">
                <div className="relative flex justify-center items-center">
                    <button type="button" className="absolute bg-blue-ryb hover:bg-dark-cornflower-blue focus:bg-dark-cornflower-blue rounded-full text-white px-7 py-6 delay-50 transition">
                        <ChevronRight/>
                    </button>
                    <Image
                        src="/loan-calculator-services.png"
                        width={356}
                        height={364}
                        alt="Picture of the author"
                    />
                </div>
                <h3 className="text-jet text-2xl font-bold mt-6 text-center">Loan Calculator</h3>
            </div>
            <div className="flex-1">
                <div className="relative flex justify-center items-center">
                    <button type="button" className="absolute bg-blue-ryb hover:bg-dark-cornflower-blue focus:bg-dark-cornflower-blue rounded-full text-white px-7 py-6 delay-50 transition">
                        <ChevronRight/>
                    </button>
                    <Image
                        src="/service-desk-services.png"
                        width={356}
                        height={364}
                        alt="Picture of the author"
                    />
                </div>
                <h3 className="text-jet text-2xl font-bold mt-6 text-center">Services Desk Online</h3>
            </div>
            <div className="flex-1">
                <div className="relative flex justify-center items-center">
                    <button type="button" className="absolute bg-blue-ryb hover:bg-dark-cornflower-blue focus:bg-dark-cornflower-blue rounded-full text-white px-7 py-6 delay-50 transition">
                        <ChevronRight/>
                    </button>
                    <Image
                        src="/myhome-services.png"
                        width={356}
                        height={364}
                        alt="Picture of the author"
                    />
                </div>
                <h3 className="text-jet text-2xl font-bold mt-6 text-center">MyHome</h3>
            </div>
        </div>
    </section>
  )
}

export default OurServices