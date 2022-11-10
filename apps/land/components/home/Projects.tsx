"use client"
import Image from 'next/image'
import React from 'react'

const Projects = () => {
  return (
    <section className="pt-72">
        <h4 className="font-bold text-dark-cornflower-blue text-center">PROJECTS</h4>
        <h2 className="text-4xl font-extrabold text-center text-jet mt-2">Our Flagship Projects</h2>
        <h4 className="text-center text-dim-gray mt-4">Filinvest Land properties are some of the most sought after in the Philippines.</h4>
        <div className="relative mt-28">
            <div className="flex flex-col items-center w-1/4 gap-12 bg-white px-12 pt-4 pb-12 absolute">
                <div>
                    <Image
                        src="/activa-logo.png"
                        width={228}
                        height={50}
                        alt="Picture of the author"
                    />
                </div>
                <div>
                    <h2 className="text-3xl text-jet text-center font-bold mb-2">Activa Cubao</h2>
                    <h4 className="font-bold text-dim-gray text-center">Neque sodales ut etiam sit amet nisl. Quis lectus nulla at volutpat diam. Euismod nisi porta.</h4>
                </div>
                <div>
                    <button className="text-dark-cornflower-blue font-bold bg-white px-9 py-4 border-[1px] border-dark-cornflower-blue hover:bg-platinum focus:bg-platinum border-solid delay-50 transition">
                        Learn More
                    </button>
                </div>
            </div>
            <Image
                src="/projects-activa.png"
                width={2840}
                height={560}
                alt="Picture of the author"
            />
        </div>
    </section>
  )
}

export default Projects