"use client"
import React, { ReactNode } from 'react'

const MainHeader = ({ title = "...", breadcrumbs, tabs, bgUrl = "dreams-built-green.png", bgColor }: { bgUrl?: string, title?: string, breadcrumbs?: string | ReactNode, tabs?: ReactNode, bgColor?: string }) => {
  return (
    <>
        {bgColor ? (
          <section className={`h-1/4 w-full ${bgColor ? `bg-${bgColor}` : "bg-flickr-blue"}`}>
            <div className="flex flex-col justify-center items-center pt-60 pb-36">
                <h1 className="text-white text-6xl font-extrabold mb-4">{title}</h1>
            </div>
          </section>
        ) : (
          <section className={`w-full bg-[url('/${bgUrl}')] bg-cover bg-no-repeat`}>
            <div className={`flex flex-col justify-center items-center ${tabs ? "py-64" : "py-80"}`}>
                <h1 className="text-white text-6xl font-extrabold mb-4">{title}</h1>
                {breadcrumbs && <h5 className="text-white text-sm">{breadcrumbs}</h5>}
                {tabs}
            </div>
          </section>
        )}
    </>
  )
}

export default MainHeader