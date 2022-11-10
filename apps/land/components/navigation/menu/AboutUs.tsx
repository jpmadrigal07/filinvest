"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AboutUs = () => {
  return (
    <div className="flex divide-x divide-sonic-silver py-8">
        <div className="flex-none pr-24">
            <div>
                <Link href="/company-background" className="hover:underline text-white">
                    <h3 className="text-xl text-white">Company Background</h3>
                    <h4 className="text-white opacity-50">Excepteur sint occaecat cupidatat non.</h4>
                </Link>
            </div>
            <div className="mt-12">
                <Link href="/asdasd" className="hover:underline text-white">
                    <h3 className="text-xl text-white">Vision, Mission, and Core Values</h3>
                    <h4 className="text-white opacity-50">Excepteur sint occaecat cupidatat non.</h4>
                </Link>
            </div>
            <div className="mt-12">
                <Link href="/asdasd" className="hover:underline text-white">
                    <h3 className="text-xl text-white">Dreams Built Green</h3>
                    <h4 className="text-white opacity-50">Excepteur sint occaecat cupidatat non.</h4>
                </Link>
            </div>
            <div className="mt-12">
                <Link href="/asdasd" className="hover:underline text-white">
                    <h3 className="text-xl text-white">#PusongFilinvest</h3>
                    <h4 className="text-white opacity-50">Excepteur sint occaecat cupidatat non.</h4>
                </Link>
            </div>
            <div className="mt-12">
                <Link href="/asdasd" className="hover:underline text-white">
                    <h3 className="text-xl text-white">Subsidiaries</h3>
                    <h4 className="text-white opacity-50">Excepteur sint occaecat cupidatat non.</h4>
                </Link>
            </div>
        </div>
        <div className="flex-1 gap-6 px-24 flex">
            <div className="flex-1">
                <h3 className="text-xl text-white">Awards</h3>
                <h2 className="text-4xl text-white mt-4">Non diam phasellus vestibulum amet volute Consequat quis</h2>
                <h4 className="text-white opacity-50 mt-4">Mattis molestie a iaculis at erat pellentesque adipiscing commodo nunc lobortis mattis.</h4>
                <div className="mt-9">
                    <Image
                        src="/awards-about-us.png"
                        width={375}
                        height={120}
                        alt="Picture of the author"
                    />
                </div>
            </div>
            <div className="flex-1">
                <h3 className="text-xl text-white">Awards</h3>
                <h2 className="text-4xl text-white mt-4">Nam aliquam sem et tortor consequat id porta. Pretium nibh ipsum con.</h2>
                <h4 className="text-white opacity-50 mt-4">Mattis molestie a iaculis at erat pellentesque adipiscing commodo nunc lobortis mattis.</h4>
                <div className="mt-9">
                    <Image
                        src="/awards-2-about-us.png"
                        width={375}
                        height={120}
                        alt="Picture of the author"
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs