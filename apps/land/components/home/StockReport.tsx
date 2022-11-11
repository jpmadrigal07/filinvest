"use client"
import Image from 'next/image'
import React from 'react'
import BorderButton from '../button/BorderButton'
import RedDownTriangle from '../svg/RedDownTriangle'

const StockReport = () => {
  return (
    <section className="flex pt-24">
        <div className="flex-1 bg-oxford-blue py-20 px-9">
            <div className="w-1/2 w-full mx-auto">
                <h2 className="text-3xl text-white font-bold">Stock Information</h2>
                <div className="flex flex-col py-6 px-12">
                    <h3 className="text-white text-2xl ml-7">FLI</h3>
                    <div className="flex gap-3 items-end">
                        <RedDownTriangle/>
                        <h3 className="text-white text-4xl">1.00</h3>
                        <h4 className="text-white text-lg">PHP</h4>
                    </div>
                </div>
                <div className="flex flex-col gap-2 border-solid border-b-[1px] border-white py-6 pb-2">
                    <div className="flex">
                        <h3 className="text-white font-bold text-xl flex-none w-4/6">Open</h3>
                        <h3 className="text-white font-bold text-xl flex-none">%Change</h3>
                    </div>             
                    <div className="flex">
                        <h3 className="text-white text-xl flex-none w-4/6">1.00</h3>
                        <h3 className="text-white text-xl flex-none">-1.96%</h3>
                    </div>
                </div>
                <div className="flex flex-col gap-2 border-solid border-b-[1px] border-white py-4">
                    <div className="flex">
                        <h3 className="text-white font-bold text-xl flex-none w-4/6">Close</h3>
                        <h3 className="text-white font-bold text-xl flex-none">52-Week High</h3>
                    </div>             
                    <div className="flex">
                        <h3 className="text-white text-xl flex-none w-4/6">1.02</h3>
                        <h3 className="text-white text-xl flex-none">-1.19</h3>
                    </div>
                </div>
                <div className="flex flex-col gap-2 py-4">
                    <div className="flex">
                        <h3 className="text-white font-bold text-xl flex-none w-4/6">Change</h3>
                        <h3 className="text-white font-bold text-xl flex-none">52-Week Low</h3>
                    </div>             
                    <div className="flex">
                        <h3 className="text-white text-xl flex-none w-4/6">-0.02</h3>
                        <h3 className="text-white text-xl flex-none">-1.00</h3>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex-1 bg-vivid-sky-blue py-20 px-16">
            <h2 className="text-3xl text-white font-bold">Annual Report</h2>
            <div className="flex gap-14 mt-24">
                <div className="flex gap-12 items-center">
                    <div className="flex-none w-1/3">
                        <Image
                            src="/fli-stock-reports.png"
                            width={487}
                            height={671}
                            alt="Picture of the author"
                        />
                    </div>
                    <div className="flex flex-col">
                        <div className="flex gap-4 items-center">
                            <div className="flex-none w-1/4">
                                <Image
                                    src="/download-stock-report.png"
                                    width={143}
                                    height={143}
                                    alt="Picture of the author"
                                />
                            </div>
                            <h4 className="text-normal text-white">Download Annual Report For 2021</h4>
                        </div>
                        <div>
                            <button type="button" className="mt-28">
                                <BorderButton buttonText="View All Annual Report" sidePadding="4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default StockReport