import React from 'react'

const Header = () => {
  return (
    <>
        <section className="w-full bg-[url('/company-background.png')] bg-cover bg-no-repeat">
            <div className="flex flex-col justify-center items-center py-80">
                <h1 className="text-white text-6xl font-extrabold mb-4">Company Background</h1>
                <h5 className="text-white text-sm">About Us / Company Background</h5>
            </div>
        </section>
    </>
  )
}

export default Header