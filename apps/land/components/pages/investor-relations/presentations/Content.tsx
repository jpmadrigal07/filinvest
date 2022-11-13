import Image from 'next/image'
import React from 'react'
import BorderButton from '../../../button/BorderButton'
import ArrowRight from '../../../svg/ArrowRight'

const Content = () => {
  return (
    <section className="flex flex-col gap-6 mt-16 mb-28">
        <div className="grid grid-cols-3 gap-6 mx-3 lg:mx-9 xl:mx-16 2xl:mx-44">
            <div>
                <Image
                    src="/presentations-1.png"
                    width={1014}
                    height={794}
                    alt="Picture of the author"
                />
                <div className="flex items-center bg-dark-cornflower-blue p-4 gap-4">
                    <h4 className="flex-1 text-white font-bold font-bold">9M2020 Analysts Briefing</h4>
                    <ArrowRight/>
                </div>
            </div>
            <div>
                <Image
                    src="/presentations-2.png"
                    width={1014}
                    height={794}
                    alt="Picture of the author"
                />
                <div className="flex items-center bg-dark-cornflower-blue p-4 gap-4">
                    <h4 className="flex-1 text-white font-bold font-bold">1H20 Analysts Briefing</h4>
                    <ArrowRight/>
                </div>
            </div>
            <div>
                <Image
                    src="/presentations-3.png"
                    width={1014}
                    height={794}
                    alt="Picture of the author"
                />
                <div className="flex items-center bg-dark-cornflower-blue px-4 py-1 xl:p-4 gap-4">
                    <h4 className="flex-1 text-white font-bold font-bold">{`President's Report 2019 - Annual Stockholders' Meeting`}</h4>
                    <ArrowRight/>
                </div>
            </div>
            <div>
                <Image
                    src="/presentations-4.png"
                    width={1014}
                    height={794}
                    alt="Picture of the author"
                />
                <div className="flex items-center bg-dark-cornflower-blue px-4 py-1 xl:p-4 gap-4">
                    <h4 className="flex-1 text-white font-bold font-bold">{`Full Year 2019 and 1st Quarter 2020 Analysts' Briefing`}</h4>
                    <ArrowRight/>
                </div>
            </div>
            <div>
                <Image
                    src="/presentations-5.png"
                    width={1014}
                    height={794}
                    alt="Picture of the author"
                />
                <div className="flex items-center bg-dark-cornflower-blue p-4 gap-4">
                    <h4 className="flex-1 text-white font-bold font-bold">{`9M 2019 Analysts' Briefing`}</h4>
                    <ArrowRight/>
                </div>
            </div>
            <div>
                <Image
                    src="/presentations-6.png"
                    width={1014}
                    height={794}
                    alt="Picture of the author"
                />
                <div className="flex items-center bg-dark-cornflower-blue p-4 gap-4">
                    <h4 className="flex-1 text-white font-bold font-bold">FY2020 Analysts Briefing</h4>
                    <ArrowRight/>
                </div>
            </div>
            <div>
                <Image
                    src="/presentations-7.png"
                    width={1014}
                    height={794}
                    alt="Picture of the author"
                />
                <div className="flex items-center bg-dark-cornflower-blue p-4 gap-4">
                    <h4 className="flex-1 text-white font-bold font-bold">1Q2021 Analysts Briefing</h4>
                    <ArrowRight/>
                </div>
            </div>
            <div>
                <Image
                    src="/presentations-8.png"
                    width={1014}
                    height={794}
                    alt="Picture of the author"
                />
                <div className="flex items-center bg-dark-cornflower-blue p-4 gap-4">
                    <h4 className="flex-1 text-white font-bold font-bold">1Q2021 Analysts Briefing</h4>
                    <ArrowRight/>
                </div>
            </div>
            <div>
                <Image
                    src="/presentations-9.png"
                    width={1014}
                    height={794}
                    alt="Picture of the author"
                />
                <div className="flex items-center bg-dark-cornflower-blue p-4 gap-4">
                    <h4 className="flex-1 text-white font-bold font-bold">2021 Analysts Briefing</h4>
                    <ArrowRight/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Content