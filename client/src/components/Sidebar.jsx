import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoClose, IoChevronDown } from 'react-icons/io5';
import CustomSelect from './CustomSelect';

export default function Sidebar({ isOpen, onClose }) {
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);

    const languageOptions = [
        { value: 'en', label: 'English' },
        { value: 'es', label: 'Español' },
    ];

    const currencyOptions = [
        { value: 'usd', label: 'USD' },
        { value: 'eur', label: 'EUR' },
        { value: 'gbp', label: 'GBP' },
    ];

    const categories = [
        "Fashion & Clothes",
        "Entertainment",
        "Electronics",
        "Furniture",
        "Health & Beauty",
        "Jewelry & Watches",
        "Computer & Technology",
        "Mobile & Tablets",
        "Kids & Babies",
        "Sports & Outdoor"
    ];

    return (
        <>
            {/* Overlay */}
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 z-40
                    ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                onClick={onClose}
            />

            {/* Sidebar */}
            <div className={`fixed top-0 left-0 h-full w-[280px] bg-white z-50 transform transition-transform duration-300 flex flex-col
                ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>

                <div className="p-4 border-b">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-bold">Menu</h2>
                        <button onClick={onClose}>
                            <IoClose className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto">
                    {/* Categories Section */}
                    <div className="px-4 py-2 border-b">
                        <button
                            className="flex items-center justify-between w-full py-2 text-sm font-bold hover:text-[#FBB528] transition-colors"
                            onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                        >
                            <span>ALL CATEGORIES</span>
                            <IoChevronDown className={`w-4 h-4 transition-transform duration-200 ${isCategoryOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {/* Categories Dropdown */}
                        <div className={`overflow-hidden transition-all duration-200 ${isCategoryOpen ? 'max-h-96' : 'max-h-0'}`}>
                            {categories.map((category, index) => (
                                <Link
                                    key={index}
                                    to="#"
                                    className="block py-2 pl-4 text-sm hover:text-[#FBB528] transition-colors"
                                >
                                    {category}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* User Links */}
                    <div className="px-4 py-2 border-b">
                        <Link to="/login" className="block py-2 hover:text-[#FBB528] transition-colors">Login</Link>
                        <Link to="/register" className="block py-2 hover:text-[#FBB528] transition-colors">Register</Link>
                        <Link to="/track" className="block py-2 hover:text-[#FBB528] transition-colors">Order Tracking</Link>
                        <Link to="/wishlist" className="block py-2 hover:text-[#FBB528] transition-colors">Wishlist</Link>
                    </div>

                    {/* Menu Links */}
                    <div className="px-4 py-2">
                        <Link to="#" className="block py-2 hover:text-[#FBB528] transition-colors">Special Prices</Link>
                        <Link to="#" className="block py-2 hover:text-[#FBB528] transition-colors">Shop</Link>
                        <Link to="#" className="block py-2 hover:text-[#FBB528] transition-colors">Stores</Link>
                        <Link to="#" className="block py-2 hover:text-[#FBB528] transition-colors">Blog</Link>
                        <Link to="#" className="block py-2 hover:text-[#FBB528] transition-colors">FAQs</Link>
                        <Link to="#" className="block py-2 hover:text-[#FBB528] transition-colors">Contact</Link>
                    </div>
                </div>

                {/* Language and Currency - Fixed at bottom */}
                <div className="px-4 py-3 border-t">
                    <div className="flex items-center justify-between py-2">
                        <span className="text-sm font-semibold">Language:</span>
                        <CustomSelect
                            options={languageOptions}
                            defaultValue={languageOptions[0]}
                            onChange={(option) => console.log('Selected language:', option.value)}
                        />
                    </div>
                    <div className="flex items-center justify-between py-2">
                        <span className="text-sm font-semibold">Currency:</span>
                        <CustomSelect
                            options={currencyOptions}
                            defaultValue={currencyOptions[0]}
                            onChange={(option) => console.log('Selected currency:', option.value)}
                        />
                    </div>
                </div>
            </div>
        </>
    );
} 