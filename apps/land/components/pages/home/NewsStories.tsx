"use client"
import Image from 'next/image'
import React from 'react'
import BorderButton from '../../button/BorderButton'

const NewsStories = () => {
  return (
    <section className="pt-44 mx-3 lg:mx-9 xl:mx-16 2xl:mx-44">
        <div className="flex justify-center items-center">
            <div className="flex-1">
                <h4 className="font-bold text-dark-cornflower-blue">NEWS & STORIES</h4>
                <h2 className="text-4xl font-extrabold text-jet mt-2">Featured Articles</h2>
                <h4 className="text-dim-gray mt-4">{`Get updated to Filinvest Land's latest happenings.`}</h4>
            </div>
            <div className="flex-none">
                <button type="button">
                    <BorderButton
                        buttonText="See More"
                        textColor="dark-cornflower-blue"
                        borderColor="dark-cornflower-blue"
                    />
                </button>
            </div>
        </div>
        <div className="flex gap-12 mt-16">
            <div>
                <Image
                    src="/award-news.png"
                    width={1036}
                    height={806}
                    alt="Picture of the author"
                />
                <h2 className="mt-6 text-jet font-bold text-2xl">Filinvest Land Inc. Wins Dot Property’s Best Developer – North Luzon and Mindanao Awards</h2>
                <h4 className="text-dim-gray mt-4">Mattis molestie a iaculis at erat pellentesque adipiscing commodo nunc lobortis mattis.</h4>
            </div>
            <div>
                <Image
                    src="/award-2-news.png"
                    width={1036}
                    height={806}
                    alt="Picture of the author"
                />
                <h2 className="mt-6 text-jet font-bold text-2xl">{`Filinvest Land, Inc. honored at BCI Asia's Top 10 Best Developer Awards`}</h2>
                <h4 className="text-dim-gray mt-4">Mattis molestie a iaculis at erat pellentesque adipiscing commodo nunc lobortis mattis.</h4>
            </div>
            <div>
                <Image
                    src="/award-3-news.png"
                    width={1036}
                    height={806}
                    alt="Picture of the author"
                />
                <h2 className="mt-6 text-jet font-bold text-2xl">Filinvest Activa recognized as the Best Mixed-use Development by Dot Property</h2>
                <h4 className="text-dim-gray mt-4">Mattis molestie a iaculis at erat pellentesque adipiscing commodo nunc lobortis mattis.</h4>
            </div>
        </div>
    </section>
  )
}

export default NewsStories