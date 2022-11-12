import React from 'react'
import LinkedIn from '../../../svg/LinkedIn'

const Content = () => {
  return (
    <section className="mt-16">
        <div className="flex flex-col justify-center mx-3 lg:mx-9 xl:mx-16 2xl:mx-44 divide-y divide-gainsboro">
            <div className="flex gap-16 items-start pb-8">
                <div className="flex-none flex items-center justify-center bg-dark-cornflower-blue rounded-full shadow-2xl py-8 px-8">
                    <LinkedIn />
                </div>
                <div className="flex-1">
                    <h3 className="text-4xl font-bold text-jet">Vision</h3>
                    <p className="text-dim-gray mt-8">To be the most trusted placemaker of environs that inspire and enhance a happy life.</p>
                </div>
            </div>
            <div className="flex gap-16 items-start py-12">
                <div className="flex-none flex items-center justify-center bg-dark-cornflower-blue rounded-full shadow-2xl py-8 px-8">
                    <LinkedIn />
                </div>
                <div className="flex-1">
                    <h3 className="text-4xl font-bold text-jet">Mission</h3>
                    <ul className="text-dim-gray mt-8">
                        <li>To enliven and enrich lives in Filinvest communities</li>
                        <li>To enable and encourage the growth of our partners</li>
                        <li>To create and add value for our investors</li>
                        <li>To build platforms that create vibrant and sustainable ecosystems</li>
                        <li>To respect and protect the environment To keep affordable housing at our core</li>
                    </ul>
                </div>
            </div>
            <div className="flex gap-16 items-start pt-12 pb-24">
                <div className="flex-none flex items-center justify-center bg-dark-cornflower-blue rounded-full shadow-2xl py-8 px-8">
                    <LinkedIn />
                </div>
                <div className="flex-1">
                    <h3 className="text-4xl font-bold text-jet">Core Values</h3>
                    <p className="text-dim-gray mt-8">The core values of integrity, customer service, professionalism, teamwork, innovation and cost-effectiveness are highly valued. The highest standards of business and moral ethics shall be exercised.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Content