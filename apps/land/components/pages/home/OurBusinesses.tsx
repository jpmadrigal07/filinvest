
"use client"
import Image from 'next/image'
import React from 'react'

const OurBusinesses = () => {
  return (
    <section className="pt-28">
        <h4 className="font-bold text-dark-cornflower-blue text-center">OUR BUSINESSES</h4>
        <h2 className="text-4xl font-extrabold text-center text-jet mt-2">Our Business Units</h2>
        <h4 className="text-center text-dim-gray mt-4">We build properties for different market segments and needs.</h4>
        <div className="flex gap-8 mt-16 mx-3 lg:mx-9 xl:mx-16 2xl:mx-44">
            <div className="flex-1 relative">
                <Image
                    src="/residential-business.png"
                    width={536}
                    height={906}
                    alt="Picture of the author"
                />
                <div className="absolute -mt-16 flex ml-9">
                    <h3 className="text-white text-2xl font-bold">Residential</h3>
                </div>
            </div>
            <div className="flex-1 relative mt-12">
                <Image
                    src="/offices-business.png"
                    width={536}
                    height={906}
                    alt="Picture of the author"
                />
                <div className="absolute -mt-16 flex ml-9">
                    <h3 className="text-white text-2xl font-bold">Offices</h3>
                </div>
            </div>
            <div className="flex-1 relative mt-24">
                <Image
                    src="/malls-business.png"
                    width={536}
                    height={906}
                    alt="Picture of the author"
                />
                <div className="absolute -mt-16 flex ml-9">
                    <h3 className="text-white text-2xl font-bold">Malls</h3>
                </div>
            </div>
        </div>
        <div className="flex gap-8 mx-3 lg:mx-9 xl:mx-16 2xl:mx-44">
            <div className="flex-1 relative">
                <Image
                    src="/industrial-business.png"
                    width={536}
                    height={906}
                    alt="Picture of the author"
                />
                <div className="absolute -mt-16 flex ml-9">
                    <h3 className="text-white text-2xl font-bold">Industrial</h3>
                </div>
            </div>
            <div className="flex-1 relative mt-12">
                <Image
                    src="/coliving-business.png"
                    width={536}
                    height={906}
                    alt="Picture of the author"
                />
                <div className="absolute -mt-16 flex ml-9">
                    <h3 className="text-white text-2xl font-bold">Co-Living</h3>
                </div>
            </div>
            <div className="flex-1 relative mt-24">
                <Image
                    src="/mixuse-business.png"
                    width={536}
                    height={906}
                    alt="Picture of the author"
                />
                <div className="absolute -mt-16 flex ml-9">
                    <h3 className="text-white text-2xl font-bold">Mixed-Use and Estates</h3>
                </div>
            </div>
        </div>
    </section>
  )
}

export default OurBusinesses