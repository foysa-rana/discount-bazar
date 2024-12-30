import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaArrowRight } from 'react-icons/fa'
import { HiMail } from "react-icons/hi";
import footerLogo from '../assets/footer-logo.webp'

export default function Footer() {
    return (
        <footer className="bg-[#222222] text-white">
            {/* Newsletter Section */}
            <div className="border-b border-[#333333]">
                <div className="container mx-auto px-4 py-2 flex flex-col lg:flex-row items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="inline-block">
                        <img src={footerLogo} alt="footer logo" className="w-full h-[50px]" />
                    </Link>
                    <div className="flex  mb-4 sm:mb-0">
                        <HiMail className=" mr-3" size={70} />
                        <div>
                            <h3 className="font-semibold text-sm mt-3">SUBSCRIBE TO OUR NEWSLETTER</h3>
                            <p className="text-sm text-slate-300">Get all the latest information on events, sales, and offers</p>
                        </div>
                    </div>
                    <div className="flex w-full sm:w-auto gap-4">
                        <input
                            type="email"
                            placeholder="Your E-mail Address"
                            className="w-full sm:w-64 px-4 py-3 focus:outline-none outline-none text-black text-sm"
                        />
                        <button className="bg-[#F24243] hover:bg-[#d93a3b] px-2 sm:px-6 py-2 whitespace-nowrap flex items-center text-sm font-semibold rounded-[4px]">
                            SUBSCRIBE <FaArrowRight className="ml-2" size={12} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="container mx-auto px-4 py-12">
                <div className="flex flex-col sm:flex-row justify-between gap-8 flex-wrap">
                    {/* Contact Information */}
                    <div className='w-full lg:w-1/2'>
                        <div className='max-w-[400px]'>
                            <h3 className="font-semibold mb-4">Any Question? Call us 24/7</h3>
                            <p className="text-lg font-semibold mb-4">+880 1310-032419</p>
                            <p className="text-sm mb-4">
                                Tapa Complex (Lift-9), 169/KA, Shahid Syed Nazrul Islam Sarani,
                                Purana Paltan, Dhaka-1000
                            </p>
                            <a href="https://facebook.com" className="w-6 h-6 bg-white bg-opacity-15 rounded-full flex items-center justify-center">
                                <FaFacebookF className="text-xl cursor-pointer text-blue-400" size={12} />
                            </a>
                        </div>
                    </div>

                    {/* Company Links */}
                    <div className='text-left'>
                        <h3 className="font-semibold mb-4">Company</h3>
                        <ul className="space-y-1">
                            <li><Link to="#" className="text-xs text-white hover:text-gray-400">About us</Link></li>
                            <li><Link to="#" className="text-xs text-white hover:text-gray-400">Contact Us</Link></li>
                            <li><Link to="#" className="text-xs text-white hover:text-gray-400">Apply for Affiliate</Link></li>
                            <li><Link to="#" className="text-xs text-white hover:text-gray-400">Track Order</Link></li>
                        </ul>
                    </div>

                    {/* My Account Links */}
                    <div className='text-left'>
                        <h3 className="font-semibold mb-4">My Account</h3>
                        <ul className="space-y-1">
                            <li><Link to="#" className="text-xs text-white hover:text-gray-400">View cart</Link></li>
                            <li><Link to="#" className="text-xs text-white hover:text-gray-400">Profile Info</Link></li>
                            <li><Link to="#" className="text-xs text-white hover:text-gray-400">We are Here to Help</Link></li>
                            <li><Link to="#" className="text-xs text-white hover:text-gray-400">Wish list</Link></li>
                            <li><Link to="#" className="text-xs text-white hover:text-gray-400">Privacy policy</Link></li>
                        </ul>
                    </div>

                    {/* Customer Services Links */}
                    <div className='text-left'>
                        <h3 className="font-semibold mb-4">Customer Services</h3>
                        <ul className="space-y-1">
                            <li><Link to="#" className="text-xs text-white hover:text-gray-400">Terms & Conditions</Link></li>
                            <li><Link to="#" className="text-xs text-white hover:text-gray-400">Money-back Guarantee!</Link></li>
                            <li><Link to="#" className="text-xs text-white hover:text-gray-400">Return policy</Link></li>
                            <li><Link to="#" className="text-xs text-white hover:text-gray-400">Support ticket</Link></li>
                            <li><Link to="#" className="text-xs text-white hover:text-gray-400">Shipping Policy</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Copyright Bar */}
            <div className="border-t border-[#333333]">
                <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center">
                    <p className="text-sm mb-2 sm:mb-0">
                        Copyright © 2024. All rights Reserved discountbazarbd
                    </p>
                    <p className="text-sm">
                        Developed By technolutionsplex Ltd
                    </p>
                </div>
            </div>
        </footer>
    )
}

