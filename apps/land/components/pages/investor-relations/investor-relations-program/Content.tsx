import Image from 'next/image'
import React from 'react'
import LinkedIn from '../../../svg/LinkedIn'

const Content = () => {
  return (
    <section className="mt-16">
        <div className="mx-3 lg:mx-9 xl:mx-16 2xl:mx-44">
            <p className="text-dim-gray mt-8">The primary responsibility of the Investor Relations unit is to provide timely and relevant information to Filinvest Land, Inc.’s various stakeholders regarding its operations, financial performance, and other significant developments. Filinvest Land uses various forms of communication to reach out to the public.</p>
        </div>
        <div className="flex flex-col gap-12 justify-center mx-3 lg:mx-9 xl:mx-16 2xl:mx-44 mt-16">
            <div className="flex gap-12 items-start pb-8">
                <div className="flex-none flex items-center justify-center bg-dark-cornflower-blue rounded-full shadow-2xl py-8 px-8">
                    <LinkedIn />
                </div>
                <div className="flex-1">
                    <h3 className="text-4xl font-bold text-jet">Website</h3>
                    <p className="text-dim-gray mt-8">This contains information as required by the Securities and Exchange Commission and the Philippine Stock Exchange. All data is constantly updated to reflect current data on the company.</p>
                </div>
            </div>
            <div className="flex gap-12 items-start pb-8">
                <div className="flex-none flex items-center justify-center bg-dark-cornflower-blue rounded-full shadow-2xl py-8 px-8">
                    <LinkedIn />
                </div>
                <div className="flex-1">
                    <h3 className="text-4xl font-bold text-jet">Press Releases</h3>
                    <p className="text-dim-gray mt-8">This firm issues press releases on significant developments in the company.</p>
                </div>
            </div>
            <div className="flex gap-12 items-start pb-8">
                <div className="flex-none flex items-center justify-center bg-dark-cornflower-blue rounded-full shadow-2xl py-8 px-8">
                    <LinkedIn />
                </div>
                <div className="flex-1">
                    <h3 className="text-4xl font-bold text-jet">Quarterly analyst briefings</h3>
                    <p className="text-dim-gray mt-8">This firm issues press releases on significant developments in the company.</p>
                </div>
            </div>
            <div className="flex gap-12 items-start pb-8">
                <div className="flex-none flex items-center justify-center bg-dark-cornflower-blue rounded-full shadow-2xl py-8 px-8">
                    <LinkedIn />
                </div>
                <div className="flex-1">
                    <h3 className="text-4xl font-bold text-jet">One-on-one meetings, conference calls, property tours, etc.</h3>
                    <p className="text-dim-gray mt-8">These are conducted as may be requested by minority shareholders, potential investors, investment research personnel and the investing public.</p>
                </div>
            </div>
        </div>
        <div className="w-full">
            <Image
                src="/investor-relations-program-bottom.png"
                width={2018}
                height={1340}
                alt="Picture of the author"
            />
        </div>
    </section>
  )
}

export default Content