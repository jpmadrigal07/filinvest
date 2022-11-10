"use client"
import Image from 'next/image'
import React from 'react'

const AboutUs = () => {
  return (
    <section className="flex gap-24 justfify-center items-center pt-44 mx-3 lg:mx-9 xl:mx-16 2xl:mx-44">
        <div className="flex-1">
            <Image
                src="/family-about-us.png"
                width={1076}
                height={754}
                alt="Picture of the author"
            />
        </div>
        <div className="flex-none w-1/3">
            <h4 className="font-bold text-dark-cornflower-blue">ABOUT US</h4>
            <h2 className="text-4xl font-extrabold text-jet mt-2">We Build the<br/>Filipino Dream</h2>
            <h4 className="text-dim-gray mt-4">Filinvest Land, Inc. (FLI), a subsidiary of Filinvest Development Corporation (FDC), is one of the country’s leading full-range property developers. For over 50 years, the company has built a diverse project portfolio spanning the archipelago, from its core best-value homes, to townships, mixed-use developments, mid-rise and high-rise condominiums, BPO office buildings, shopping centers, and leisure developments. Staying true to its mission, FLI continues to build the Filipino dream across the Philippines.</h4>
            <button className="text-dark-cornflower-blue font-bold bg-white px-9 py-4 border-[1px] border-dark-cornflower-blue border-solid hover:bg-platinum focus:bg-platinum mt-9 delay-50 transition">
                Learn More
            </button>
        </div>
    </section>
  )
}

export default AboutUs