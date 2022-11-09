import React from 'react'
import ChevronDown from '../svg/ChevronDown'
import Search from '../svg/Search'
import RangeSlider from './RangeSlider'

const LookingForProperty = () => {
  return (
    <section className="pt-36">
        <h2 className="text-4xl font-extrabold text-center text-jet mt-2">Looking for a Property?</h2>
        <h4 className="text-center text-dim-gray mt-4">Find your dream residential, commercial, co-living, or industrial properties with our smart search tool.</h4>
        <div className="flex gap-8 items-center bg-dark-cornflower-blue px-10 py-6 mx-3 lg:mx-9 xl:mx-16 2xl:mx-44 mt-12">
            <div className="flex-1 w-full">
                <h3 className="text-white">Property Type</h3>
                <div className="flex items-center gap-3 border-b-[1px] border-silver-chalice py-2 hover:cursor-pointer">
                    <input type="email" placeholder="Any" className="bg-transparent text-white w-full ring-none border-none hover:cursor-pointer" />
                    <ChevronDown/>
                </div>
            </div>
            <div className="flex-1 w-full">
                <h3 className="text-white">Location</h3>
                <div className="flex items-center gap-3 border-b-[1px] border-silver-chalice py-2 hover:cursor-pointer">
                    <input type="email" placeholder="Cainta" className="bg-transparent text-white w-full ring-none border-none hover:cursor-pointer" />
                    <ChevronDown/>
                </div>
            </div>
            <div className="flex-1 w-full">
                <h3 className="text-white">Unit Size</h3>
                <div className="flex items-center gap-3 border-b-[1px] border-silver-chalice py-2 hover:cursor-pointer">
                    <input type="email" placeholder="Any" className="bg-transparent text-white w-full ring-none border-none hover:cursor-pointer" />
                    <ChevronDown/>
                </div>
            </div>
            <div className="flex-1 w-full">
                <h3 className="text-white mb-1">Price Range</h3>
                <RangeSlider/>
                <h4 className="text-white text-sm mt-1">Php 50,000 - Php 50,000,000</h4>
            </div>
            <div className="flex-none">
                <button className="py-5 px-8 bg-white focus:bg-platinum">
                    <div className="flex items-center text-dark-cornflower-blue font-bold gap-2"><Search/> Search</div>
                </button>
            </div>
        </div>
    </section>
  )
}

export default LookingForProperty