"use client"
import Link from 'next/link'
import React from 'react'
import { EMAIL_ADD, FACEBOOK_URL, LINKEDIN_URL, OFFICE_ADDRESS, PHONE_NUMBER, TEL_NUMBER, TWITTER_URL } from '../../../helpers/constants'
import ROUTES from '../../../helpers/routes'
import Facebook from '../../svg/Facebook'
import LinkedIn from '../../svg/LinkedIn'
import Mail from '../../svg/Mail'
import MainLogo from '../../svg/MainLogo'
import MapLine from '../../svg/MapLine'
import Phone from '../../svg/Phone'
import Send from '../../svg/Send'
import Twitter from '../../svg/Twitter'

const MainFooter = () => {
    const { HOME, BUYERS, CONTACT_US, NEWS, SITEMAP, ABOUT_US, INVESTOR_RELATIONS, CAREERS, PRIVACY_POLICY, TERMS_OF_USE } = ROUTES;
  return (
    <footer>
        <div className="flex flex-col lg:flex-row gap-9 lg:gap-36 bg-royal-dark-blue px-4 py-6 lg:px-16 lg:py-16">
            <div className="flex-1 flex flex-col gap-5">
                <Link href={HOME.url}>
                    <MainLogo />
                </Link>
                <h3 className="text-white text-md font-md">Get exclusive digital marketing updates straight to your inbox.</h3>
                <div className="flex items-center gap-3 border-b-2 border-white py-2">
                    <input type="email" placeholder="Email Address" className="bg-transparent text-white w-full ring-none border-none" />
                    <Send/>
                </div>
            </div>
            <div className="flex-1 flex flex-col gap-8">
                <h3 className="text-white text-md font-bold">Quick Links</h3>
                <ul className="flex flex-col gap-3 text-white list-none">
                    <li><Link href={BUYERS.CALCULATOR.url} className="hover:underline">{BUYERS.CALCULATOR.name}</Link></li>
                    <li><Link href={BUYERS.ONLINE_APPOINTMENT.url} className="hover:underline">Book Appointment</Link></li>
                    <li><Link href={CONTACT_US.url} className="hover:underline">{CONTACT_US.name}</Link></li>
                    <li><Link href={NEWS.url} className="hover:underline">News & Stories</Link></li>
                    <li><Link href={SITEMAP.url} className="hover:underline">{SITEMAP.name}</Link></li>
                </ul>
            </div> 
            <div className="flex-1 flex flex-col gap-8">
                <h3 className="text-white text-md font-bold">Filinvest Land</h3>
                <ul className="flex flex-col gap-3 text-white list-none">
                    <li><Link href={ABOUT_US.COMPANY_BACKGROUND.url} className="hover:underline">{ABOUT_US.COMPANY_BACKGROUND.name}</Link></li>
                    <li><Link href={INVESTOR_RELATIONS.INVESTOR_RELATIONS_PROGRAM.url} className="hover:underline">{INVESTOR_RELATIONS.INVESTOR_RELATIONS_PROGRAM.name}</Link></li>
                    <li><Link href={INVESTOR_RELATIONS.DISCLOSURES.url} className="hover:underline">{INVESTOR_RELATIONS.DISCLOSURES.name}</Link></li>
                    <li><Link href={CAREERS.url} className="hover:underline">{CAREERS.name}</Link></li>
                    <li><Link href={ABOUT_US.SUBSIDIARIES.url} className="hover:underline">{ABOUT_US.SUBSIDIARIES.name}</Link></li>
                </ul>
            </div>
            <div className="flex-1 flex flex-col gap-8">
                <h3 className="text-white text-md font-bold">Contact Us</h3>
                <ul className="flex flex-col gap-3 text-white list-none">
                    <li className="flex items-center gap-3"><Phone/><Link href={`tel:${TEL_NUMBER.number}`} className="hover:underline">{TEL_NUMBER.text}</Link></li>
                    <li className="flex items-center gap-3"><Phone/><Link href={`tel:${PHONE_NUMBER.number}`} className="hover:underline">{PHONE_NUMBER.text}</Link></li>
                    <li className="flex items-center gap-3"><Mail/><Link href={`mailto:${EMAIL_ADD}`} className="hover:underline">{EMAIL_ADD}</Link></li>
                    <li className="flex gap-3"><div className="flex-1"><MapLine/></div>{OFFICE_ADDRESS}</li>
                </ul>
            </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-center gap-9 bg-oxford-blue px-4 py-6 lg:px-16 lg:py-8">
            <div className="flex-1">
                <h3 className="text-white">{`© Copyright ${new Date().getFullYear()}. Filinvest Land Inc. All Rights Reserved.`}</h3>
            </div>
            <div className="flex-1 flex gap-9">
                <Link href={FACEBOOK_URL} target="_blank"><Facebook/></Link>
                <Link href={TWITTER_URL} target="_blank"><Twitter/></Link>
                <Link href={LINKEDIN_URL} target="_blank"><LinkedIn/></Link>
            </div>
            <div className="flex-none flex gap-7">
                <Link href={PRIVACY_POLICY.url} className="hover:underline text-white">{PRIVACY_POLICY.name}</Link>
                <Link href={TERMS_OF_USE.url} className="hover:underline text-white">{TERMS_OF_USE.name}</Link>
            </div>
        </div>
    </footer>
  )
}

export default MainFooter