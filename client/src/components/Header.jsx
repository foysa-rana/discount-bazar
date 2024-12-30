import React from 'react'
import { IoSearchOutline } from 'react-icons/io5'
import { FiHeart, FiShoppingCart, FiRefreshCw } from 'react-icons/fi'
import { IoChevronDown, IoMenu, IoClose } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.webp'
import { useState } from 'react'
import Sidebar from './Sidebar'

export default function Header() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [isSearchOpen, setIsSearchOpen] = useState(false)

    return (
        <div className="py-4 border-b-2 border-[#F7F7F7]">
            {/* Mobile Search Bar */}
            <div className={`lg:hidden ${isSearchOpen ? 'block' : 'hidden'}`}>
                <div className="container mx-auto px-4 pb-4">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search for Products..."
                            className="w-full text-sm py-2.5 px-4 bg-[#F7F7F7] rounded-sm focus:outline-none"
                        />
                        <button
                            className="absolute right-4 top-1/2 -translate-y-1/2"
                            onClick={() => setIsSearchOpen(false)}
                        >
                            <IoClose className="w-5 h-5 text-gray-500" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between gap-4 lg:gap-12">
                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden"
                        onClick={() => setIsSidebarOpen(true)}
                    >
                        <IoMenu className="w-6 h-6" />
                    </button>

                    {/* Logo */}
                    <Link to="#" className="flex-shrink-0">
                        <img src={Logo} alt="Discount Bazar" className="h-16 lg:h-20 w-full" />
                    </Link>

                    {/* Search Bar - Hide on mobile */}
                    <div className="hidden lg:flex w-full max-w-xl items-center gap-4 bg-[#F7F7F7] rounded-sm px-4 py-1">
                        {/* Categories Dropdown */}
                        <button className="flex items-center gap-1 text-sm">
                            <span className="font-bold">ALL CATEGORIES</span>
                            <IoChevronDown className="w-4 h-4 text-gray-500" />
                        </button>
                        {/* divider */}
                        <div className="h-[20px] w-px bg-gray-300"></div>
                        {/* Search Bar */}
                        <div className="flex-1 max-w-xl">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search for Products..."
                                    className="w-full text-sm py-2.5 bg-transparent focus:outline-none"
                                />
                                <button className="absolute right-0 top-1/2 -translate-y-1/2">
                                    <IoSearchOutline className="w-5 h-5 text-gray-500" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Support - Hide on mobile */}
                    <div className="hidden lg:flex items-center gap-8 whitespace-nowrap">
                        <div className="text-right">
                            <div className="font-bold">+880 1310- 032419</div>
                            <div className="text-[11px] text-gray-500">Support 24/7</div>
                        </div>

                        {/* Icons */}
                        <div className="flex items-center gap-5">
                            <div className="relative cursor-pointer">
                                <FiRefreshCw className="w-[22px] h-[22px]" />
                                <span className="absolute -top-2 -right-2 w-4 h-4 flex items-center justify-center bg-[#FBB528] text-900 font-bold rounded-[3px] text-[10px]">
                                    0
                                </span>
                            </div>
                            <div className="relative cursor-pointer">
                                <FiHeart className="w-[22px] h-[22px]" />
                                <span className="absolute -top-2 -right-2 w-4 h-4 flex items-center justify-center bg-[#FBB528] text-900 font-bold rounded-[3px] text-[10px]">
                                    1
                                </span>
                            </div>
                            <div className="flex items-center gap-5">
                                <div className="relative cursor-pointer">
                                    <FiShoppingCart className="w-[22px] h-[22px]" />
                                    <span className="absolute -top-2 -right-2 w-4 h-4 flex items-center justify-center bg-[#FBB528] text-900 font-bold rounded-[3px] text-[10px]">
                                        0
                                    </span>
                                </div>
                                <div>
                                    <div className="text-xs">Your Cart</div>
                                    <div className="text-sm font-semibold">$0.00</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Icons */}
                    <div className="flex lg:hidden items-center gap-4">
                        <button onClick={() => setIsSearchOpen(!isSearchOpen)}>
                            <IoSearchOutline className="w-6 h-6" />
                        </button>
                        <div className="relative cursor-pointer">
                            <FiRefreshCw className="w-6 h-6" />
                            <span className="absolute -top-2 -right-2 w-4 h-4 flex items-center justify-center bg-[#FBB528] text-900 font-bold rounded-[3px] text-[10px]">
                                0
                            </span>
                        </div>
                        <div className="relative cursor-pointer">
                            <FiHeart className="w-6 h-6" />
                            <span className="absolute -top-2 -right-2 w-4 h-4 flex items-center justify-center bg-[#FBB528] text-900 font-bold rounded-[3px] text-[10px]">
                                1
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="relative cursor-pointer">
                                <FiShoppingCart className="w-6 h-6" />
                                <span className="absolute -top-2 -right-2 w-4 h-4 flex items-center justify-center bg-[#FBB528] text-900 font-bold rounded-[3px] text-[10px]">
                                    0
                                </span>
                            </div>
                            <div className="hidden lg:block">
                                <div className="text-xs">Your Cart</div>
                                <div className="text-sm font-semibold">$0.00</div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
                </div>
            </div>
        </div>
    )
}

