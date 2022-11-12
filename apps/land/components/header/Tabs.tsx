"use client"
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'

type ItemProps = {
    title: string,
    link: string,
}

const Tabs = ({ items }: { items: ItemProps[] }) => {
    const router = useRouter()
    return (
        <div className="flex gap-8 mt-12">
            {items?.map((item) => {
                return (
                    <div className={`${item.link === router.pathname ? "border-b-2 border-white" : ""} pb-2`}>
                        <Link href={item.link} className="text-white text-xl">{item.title}</Link>
                    </div>
                )
            })}
        </div>
    )
}

export default Tabs