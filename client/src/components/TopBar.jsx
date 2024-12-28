import React from 'react'
import CustomSelect from './CustomSelect'

const USFlag = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7410 3900" className="w-4 h-2.5 mr-2">
        <rect width="7410" height="3900" fill="#b22234" />
        <path d="M0,450H7410m0,600H0m0,600H7410m0,600H0m0,600H7410m0,600H0" stroke="#fff" strokeWidth="300" />
        <rect width="2964" height="2100" fill="#3c3b6e" />
        <g fill="#fff">
            <g id="s18">
                <g id="s9">
                    <g id="s5">
                        <g id="s4">
                            <path id="s" d="M247,90 317.534230,307.082039 132.873218,172.917961H361.126782L176.465770,307.082039z" />
                            <use href="#s" y="420" />
                            <use href="#s" y="840" />
                            <use href="#s" y="1260" />
                        </g>
                        <use href="#s" y="1680" />
                    </g>
                    <use href="#s4" x="247" y="210" />
                </g>
                <use href="#s9" x="494" />
            </g>
            <use href="#s18" x="988" />
            <use href="#s9" x="1976" />
            <use href="#s5" x="2470" />
        </g>
    </svg>
)

export default function Topbar() {
    const languageOptions = [
        { value: 'en', label: 'English' },
        { value: 'es', label: 'Español' },
    ]

    const currencyOptions = [
        { value: 'usd', label: 'USD' },
        { value: 'eur', label: 'EUR' },
        { value: 'gbp', label: 'GBP' },
    ]

    return (
        <div className="bg-[#F7F7F7] text-gray-900 text-xs font-semibold border-b-2 border-gray-200">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-10">
                    {/* Left Navigation */}
                    <div className="flex items-center divide-x divide-gray-300">
                        <a href="/about" className="hover:text-gray-600 transition-colors pr-4">
                            About Us
                        </a>
                        <a href="/wishlist" className="hover:text-gray-600 transition-colors px-4">
                            Wishlist
                        </a>
                        <a href="/track" className="hover:text-gray-600 transition-colors pl-4">
                            Order Tracking
                        </a>
                    </div>

                    {/* Right Navigation */}
                    <div className="flex items-center divide-x divide-gray-300">
                        <div className="pr-4">
                            <div className="flex items-center">
                                <USFlag />
                                <CustomSelect
                                    options={languageOptions}
                                    defaultValue={languageOptions[0]}
                                    onChange={(option) => console.log('Selected language:', option.value)}
                                />
                            </div>
                        </div>
                        <div className="px-4">
                            <CustomSelect
                                options={currencyOptions}
                                defaultValue={currencyOptions[0]}
                                onChange={(option) => console.log('Selected currency:', option.value)}
                            />
                        </div>
                        <div className="flex items-center divide-x divide-gray-300">
                            <a href="/login" className="hover:text-gray-600 transition-colors px-4">
                                Login
                            </a>
                            <a href="/register" className="hover:text-gray-600 transition-colors pl-4">
                                Register
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

