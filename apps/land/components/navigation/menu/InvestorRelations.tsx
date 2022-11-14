"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { INVESTOR_RELATIONS_SUB_ROUTES } from '../../../helpers/routes/investorRelations'

const InvestorRelations = () => {
  return (
    <div className="flex divide-x divide-wild-blue-yonder py-8">
        <div className="flex-1 gap-20 flex flex-col pr-12">
            <div className="grid grid-cols-3 gap-x-6 gap-y-16">
                {INVESTOR_RELATIONS_SUB_ROUTES.map((routes, index) => {
                    return (
                        <div key={index}>
                            <Link href={routes.url} className="hover:underline text-white">
                                <h3 className="text-xl text-white">{routes.name}</h3>
                                <h4 className="text-white opacity-50">Lorem ipsum dolor sit amet,consectetur adipiscing elit.</h4>
                            </Link>
                        </div>
                    )
                })}
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