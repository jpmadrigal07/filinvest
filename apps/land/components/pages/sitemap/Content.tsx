import Link from 'next/link'
import React from 'react'

const Content = () => {
  return (
    <section className="flex flex-col gap-6 mt-16 mb-28 mx-3 lg:mx-9 xl:mx-16 2xl:mx-44">
        <h2 className="text-jet text-4xl font-bold">Pages</h2>
        <Link href="/about-us/company-background" className="hover:underline text-jet text-xl font-bold">Home</Link>
        <div>
            <Link href="/about-us/company-background" className="hover:underline text-jet text-xl font-bold">About Us</Link>
            <ul className="ml-6 mt-2">
                <li className="py-2"><Link href="/about-us/company-background" className="hover:underline">Company Background</Link></li>
                <li className="py-2"><Link href="/about-us/company-background" className="hover:underline">Vision, Mission, And Core Values</Link></li>
                <li className="py-2"><Link href="/about-us/company-background" className="hover:underline">Dream Built Green</Link></li>
                <li className="py-2"><Link href="/about-us/company-background" className="hover:underline">#PusongFilinvest</Link></li>
                <li className="py-2"><Link href="/about-us/company-background" className="hover:underline">Subsidiaries</Link></li>
            </ul>
        </div>
        <div>
            <Link href="/about-us/company-background" className="hover:underline text-jet text-xl font-bold">Our Businesses</Link>
            <ul className="ml-6 mt-2">
                <li className="py-2"><Link href="/about-us/company-background" className="hover:underline">Residential</Link></li>
                <li className="py-2"><Link href="/about-us/company-background" className="hover:underline">Offices</Link></li>
                <li className="py-2"><Link href="/about-us/company-background" className="hover:underline">Co-Living</Link></li>
                <li className="py-2"><Link href="/about-us/company-background" className="hover:underline">Industrial</Link></li>
                <li className="py-2"><Link href="/about-us/company-background" className="hover:underline">Mixed-Use And Estates</Link></li>
            </ul>
        </div>
    </section>
  )
}

export default Content