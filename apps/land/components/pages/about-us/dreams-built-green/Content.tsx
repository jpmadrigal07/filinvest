import React from 'react'
import LinkedIn from '../../../svg/LinkedIn'

const Content = () => {
  return (
    <section className="mt-16">
        <div className="flex justify-center gap-16">
            <div className="flex flex-col gap-9 items-center">
                <div className="flex items-center justify-center bg-white rounded-full shadow-2xl py-24 px-24">
                    <LinkedIn color="#0D8149" />
                </div>
                <h3 className="text-2xl font-bold text-sea-green">Green</h3>
            </div>
            <div className="flex flex-col gap-9 items-center">
                <div className="flex items-center justify-center bg-white rounded-full shadow-2xl py-24 px-24">
                    <LinkedIn color="#0D8149" />
                </div>
                <h3 className="text-2xl font-bold text-sea-green">Health</h3>
            </div>
            <div className="flex flex-col gap-9 items-center">
                <div className="flex items-center justify-center bg-white rounded-full shadow-2xl py-24 px-24">
                    <LinkedIn color="#0D8149" />
                </div>
                <h3 className="text-2xl font-bold text-sea-green">Life Tech</h3>
            </div>
        </div>
        <div className="flex flex-col gap-9 mx-3 lg:mx-9 xl:mx-16 2xl:mx-44 mt-24 mb-24">
            <h3 className="text-jet text-3xl">A Trusted Property Developer</h3>
            <p className="text-dim-gray">{`A trusted property developer for generations, Filinvest stays attuned to be the changing need and lifestyles of Filipinos. Knowing the way forward is green, the company continues to build the Filipino dream with sustainable, future-forward principles that ensure healthy and quality living in the new normal and beyond.`}</p>
            <p className="text-dim-gray">{`Over 50 years in the business and one of the country's leading real estate developers With a diverse property portfolio catering to all markets nationwide With assests valued at Php648.014 billion and stockholders' equity of Php141.606 billion* Developed over 3,000 hectares of land into more than 600,000 square meters of prime office, residential and retail spaces Built on the Gotianun tradition of integrity, quality and service`}</p>
        </div>
        <div className="h-[1080px] w-full bg-[url('/video-dreams-built-green.png')] bg-cover bg-no-repeat"></div>
    </section>
  )
}

export default Content