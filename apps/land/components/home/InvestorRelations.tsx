"use client"
import React from 'react'
import Image from 'next/image'
import ChevronCircleLeft from '../svg/ChevronCircleLeft'
import ChevronCircleRight from '../svg/ChevronCircleRight'

const InvestorRelations = () => {
  return (
    <section className="flex gap-24 justfify-center pt-44 mx-3 lg:mx-9 xl:mx-16 2xl:mx-44">
        <div className="flex-none w-1/3">
            <h4 className="font-bold text-dark-cornflower-blue">INVESTOR RELATIONS</h4>
            <h2 className="text-4xl font-extrabold text-jet mt-2">Investment Highlights</h2>
            <h4 className="text-dim-gray mt-4">Ultricies mi quis hendrerit dolor magna eget est lorem ipsum. Ut consequat semper viverra nam libero justo laoreet sit.</h4>
            <button className="text-dark-cornflower-blue font-bold bg-white px-9 py-4 border-[1px] border-dark-cornflower-blue border-solid hover:bg-platinum focus:bg-platinum mt-16 delay-50 transition">
                Learn More
            </button>
        </div>
        <div className="flex flex-col gap-20">
            <div className="flex-1 flex gap-9">
                <div className="flex items-center gap-9 min-w-[450px]">
                    <div className="flex-none">
                        <Image
                            src="/pie-chart.png"
                            width={120}
                            height={120}
                            alt="Picture of the author"
                        />
                    </div>
                    <div className="flex-1 flex flex-col">
                        <h2 className="text-2xl font-bold">Net income attributable to<br/>equity holders of parent</h2>
                        <div className="flex items-center gap-6 mt-3">
                            <h3 className="text-dark-cornflower-blue text-2xl font-bold">P 3.80 B</h3>
                            <p className="text-dark-cornflower-blue text-normal">Year 2021</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-9 min-w-[450px]">
                    <div className="flex-none">
                        <Image
                            src="/pie-chart.png"
                            width={120}
                            height={120}
                            alt="Picture of the author"
                        />
                    </div>
                    <div className="flex-1 flex flex-col">
                        <h2 className="text-2xl font-bold">Revenue</h2>
                        <div className="flex items-center gap-6 mt-3">
                            <h3 className="text-dark-cornflower-blue text-2xl font-bold">P 17.74B B</h3>
                            <p className="text-dark-cornflower-blue text-normal">Year 2021</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-1 flex gap-9">
                <div className="flex items-center gap-9 min-w-[450px]">
                    <div className="flex-none">
                        <Image
                            src="/pie-chart.png"
                            width={120}
                            height={120}
                            alt="Picture of the author"
                        />
                    </div>
                    <div className="flex-1 flex flex-col">
                        <h2 className="text-2xl font-bold">Total Assets</h2>
                        <div className="flex items-center gap-6 mt-3">
                            <h3 className="text-dark-cornflower-blue text-2xl font-bold">P 193.22 B B</h3>
                            <p className="text-dark-cornflower-blue text-normal">Year 2021</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-9 min-w-[450px]">
                    <div className="flex-none">
                        <Image
                            src="/pie-chart.png"
                            width={120}
                            height={120}
                            alt="Picture of the author"
                        />
                    </div>
                    <div className="flex-1 flex flex-col">
                        <h2 className="text-2xl font-bold">Earnings per share</h2>
                        <div className="flex items-center gap-6 mt-3">
                            <h3 className="text-dark-cornflower-blue text-2xl font-bold">P 0.16 B</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-6 mt-16 ml-16">
                <ChevronCircleLeft/>
                <ChevronCircleRight/>
            </div>
        </div>
    </section>
  )
}

export default InvestorRelations