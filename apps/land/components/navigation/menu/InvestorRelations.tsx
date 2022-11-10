"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const InvestorRelations = () => {
  return (
    <div className="flex divide-x divide-wild-blue-yonder py-8">
        <div className="flex-1 gap-20 flex flex-col pr-12">
            <div className="flex gap-14">
                <div>
                    <Link href="/company" className="hover:underline text-white">
                        <h3 className="text-xl text-white">Our Company</h3>
                        <h4 className="text-white opacity-50">Lorem ipsum dolor sit amet,consectetur adipiscing elit.</h4>
                    </Link>
                </div>
                <div>
                    <Link href="/company" className="hover:underline text-white">
                        <h3 className="text-xl text-white">Investors Relations Program</h3>
                        <h4 className="text-white opacity-50">Lorem ipsum dolor sit amet,consectetur adipiscing elit.</h4>
                    </Link>
                </div>
                <div>
                    <Link href="/company" className="hover:underline text-white">
                        <h3 className="text-xl text-white">Presentations</h3>
                        <h4 className="text-white opacity-50">Lorem ipsum dolor sit amet,consectetur adipiscing elit.</h4>
                    </Link>
                </div>
            </div>
            <div className="flex gap-14">
                <div>
                    <Link href="/company" className="hover:underline text-white">
                        <h3 className="text-xl text-white">Our Leaderhip</h3>
                        <h4 className="text-white opacity-50">Lorem ipsum dolor sit amet,consectetur adipiscing elit.</h4>
                    </Link>
                </div>
                <div>
                    <Link href="/company" className="hover:underline text-white">
                        <h3 className="text-xl text-white">Stock Information</h3>
                        <h4 className="text-white opacity-50">Lorem ipsum dolor sit amet,consectetur adipiscing elit.</h4>
                    </Link>
                </div>
                <div>
                    <Link href="/company" className="hover:underline text-white">
                        <h3 className="text-xl text-white">Research Reports</h3>
                        <h4 className="text-white opacity-50">Lorem ipsum dolor sit amet,consectetur adipiscing elit.</h4>
                    </Link>
                </div>
            </div>
            <div className="flex gap-14">
                <div>
                    <Link href="/company" className="hover:underline text-white">
                        <h3 className="text-xl text-white">Structures</h3>
                        <h4 className="text-white opacity-50">Lorem ipsum dolor sit amet,consectetur adipiscing elit.</h4>
                    </Link>
                </div>
                <div>
                    <Link href="/company" className="hover:underline text-white">
                        <h3 className="text-xl text-white">Financial Highlights</h3>
                        <h4 className="text-white opacity-50">Lorem ipsum dolor sit amet,consectetur adipiscing elit.</h4>
                    </Link>
                </div>
                <div>
                    <Link href="/company" className="hover:underline text-white">
                        <h3 className="text-xl text-white">Disclosures</h3>
                        <h4 className="text-white opacity-50">Lorem ipsum dolor sit amet,consectetur adipiscing elit.</h4>
                    </Link>
                </div>
            </div>
            <div className="flex gap-14">
                <div>
                    <Link href="/company" className="hover:underline text-white">
                        <h3 className="text-xl text-white">Corporate Governance</h3>
                        <h4 className="text-white opacity-50">Lorem ipsum dolor sit amet,consectetur adipiscing elit.</h4>
                    </Link>
                </div>
                <div>
                    <Link href="/company" className="hover:underline text-white">
                        <h3 className="text-xl text-white">Press Releases</h3>
                        <h4 className="text-white opacity-50">Lorem ipsum dolor sit amet,consectetur adipiscing elit.</h4>
                    </Link>
                </div>
            </div>
        </div>
        <div className="flex-none pl-12">
            <h3 className="text-xl text-white">News</h3>
            <h2 className="text-4xl text-white mt-4">Featured blog posts</h2>
            <div className="mt-6">
                <Image
                    src="/news-investor-relations.png"
                    width={276}
                    height={198}
                    alt="Picture of the author"
                />
            </div>
            <h3 className="text-white text-xl font-bold mt-3">Filinvest Activa recognized<br/>as the Best Mixed-use<br/>Development</h3>
            <h4 className="text-white opacity-50 mt-4 mb-12">Lorem ipsum dolor sit amet, consectetur<br/>adipiscing elit. Suspendisse varius enim in eros.</h4>
            <Link href="/news" className="text-white hover:underline">{`Read more >`}</Link>
        </div>
    </div>
  )
}

export default InvestorRelations