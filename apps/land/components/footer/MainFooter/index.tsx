import Link from 'next/link'
import React from 'react'
import Facebook from '../../svg/Facebook'
import LinkedIn from '../../svg/LinkedIn'
import Mail from '../../svg/Mail'
import MainLogo from '../../svg/MainLogo'
import MapLine from '../../svg/MapLine'
import Phone from '../../svg/Phone'
import Send from '../../svg/Send'
import Twitter from '../../svg/Twitter'

const MainFooter = () => {
  return (
    <footer>
        <div className="flex flex-col lg:flex-row gap-9 lg:gap-36 bg-royal-dark-blue px-4 py-6 lg:px-16 lg:py-16">
            <div className="flex-1 flex flex-col gap-5">
                <MainLogo/>
                <h3 className="text-white text-md font-md">Get exclusive digital marketing updates straight to your inbox.</h3>
                <div className="flex items-center gap-3 border-b-2 border-white py-2">
                    <input type="email" placeholder="Email Address" className="bg-transparent text-white w-full ring-none border-none" />
                    <Send/>
                </div>
            </div>
            <div className="flex-1 flex flex-col gap-8">
                <h3 className="text-white text-md font-bold">Quick Links</h3>
                <ul className="flex flex-col gap-3 text-white">
                    <li><Link href="/loan-calculator" className="hover:underline">Loan Calculator</Link></li>
                    <li><Link href="/book-apointment" className="hover:underline">Book Appointment</Link></li>
                    <li><Link href="/contact-us" className="hover:underline">Contact Us</Link></li>
                    <li><Link href="/news-stories" className="hover:underline">News & Stories</Link></li>
                    <li><Link href="/sitemap" className="hover:underline">Sitemap</Link></li>
                </ul>
            </div>
            <div className="flex-1 flex flex-col gap-8">
                <h3 className="text-white text-md font-bold">Filinvest Land</h3>
                <ul className="flex flex-col gap-3 text-white">
                    <li><Link href="/company-background" className="hover:underline">Company Background</Link></li>
                    <li><Link href="/investor-relations-program" className="hover:underline">Investor Relations Program</Link></li>
                    <li><Link href="/disclosures" className="hover:underline">Disclosures</Link></li>
                    <li><Link href="/careers" className="hover:underline">Careers</Link></li>
                    <li><Link href="/subsidiaries" className="hover:underline">Subsidiaries</Link></li>
                </ul>
            </div>
            <div className="flex-1 flex flex-col gap-8">
                <h3 className="text-white text-md font-bold">Contact Us</h3>
                <ul className="flex flex-col gap-3 text-white">
                    <li className="flex items-center gap-3"><Phone/><Link href="tel:+63288500888<" className="hover:underline">(63 2) 8-850-0888</Link></li>
                    <li className="flex items-center gap-3"><Phone/><Link href="tel:+639190764836" className="hover:underline">(63 919) 076-4836</Link></li>
                    <li className="flex items-center gap-3"><Mail/><Link href="mailto:test@gmail.com" className="hover:underline">test@gmail.com</Link></li>
                    <li className="flex gap-3"><div className="flex-1"><MapLine/></div>Filinvest Building, 79 EDSA, Mandaluyong City, 1550 Philippines</li>
                </ul>
            </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-center gap-9 bg-oxford-blue px-4 py-6 lg:px-16 lg:py-8">
            <div className="flex-1">
                <h3 className="text-white">© Copyright 2019. Filinvest Land Inc. All Rights Reserved.</h3>
            </div>
            <div className="flex-1 flex gap-9">
                <Link href="https://www.facebook.com/filinvest/" target="_blank"><Facebook/></Link>
                <Link href="https://twitter.com/filinvest" target="_blank"><Twitter/></Link>
                <Link href="https://www.linkedin.com/company/filinvest" target="_blank"><LinkedIn/></Link>
            </div>
            <div className="flex-none flex gap-7">
                <Link href="/privacy-policy" className="hover:underline text-white">Privacy Policy</Link>
                <Link href="/terms-of-use" className="hover:underline text-white">Terms of Use</Link>
            </div>
        </div>
    </footer>
  )
}

export default MainFooter