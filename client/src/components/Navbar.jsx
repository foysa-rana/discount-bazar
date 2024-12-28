import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdMenu } from "react-icons/io";
import { IoChevronDown } from 'react-icons/io5'
import { SlRefresh } from "react-icons/sl";

export default function Navbar() {
    return (
        <div className="bg-white">
            <div className="container mx-auto px-4">
                <div className="flex items-center gap-12 h-14">
                    {/* Left Side - Shop By Category */}
                    <button className="flex items-center gap-2 bg-[#FBB528] text-gray-900 px-4 h-10 font-bold text-sm rounded-[4px]">
                        <IoMdMenu className="w-5 h-5" />
                        SHOP BY CATEGORY
                    </button>

                    {/* Center Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        <Link to="#" className="flex items-center text-sm font-bold hover:text-[#FBB528]">
                            Special Prices
                        </Link>
                        <div className="relative group">
                            <button className="flex items-center gap-1 text-sm font-bold hover:text-[#FBB528]">
                                Pages
                                <IoChevronDown className="w-4 h-4" />
                            </button>
                        </div>
                        <div className="relative group">
                            <button className="flex items-center gap-1 text-sm font-bold hover:text-[#FBB528]">
                                Shop
                                <IoChevronDown className="w-4 h-4" />
                            </button>
                        </div>
                        <Link to="#" className="text-sm font-bold hover:text-[#FBB528]">
                            Stores
                        </Link>
                        <Link to="#" className="text-sm font-bold hover:text-[#FBB528]">
                            Blog
                        </Link>
                        <Link to="#" className="text-sm font-bold hover:text-[#FBB528]">
                            FAQs
                        </Link>
                        <Link to="#" className="text-sm font-bold hover:text-[#FBB528]">
                            Contact
                        </Link>
                    </div>

                    {/* Right Side - Recently Viewed */}
                    <button className="flex items-center gap-2 text-sm font-bold hover:text-[#FBB528] ml-auto">
                        <SlRefresh className="w-4 h-4" />
                        Recently Viewed
                    </button>
                </div>
            </div>
        </div>
    )
}
