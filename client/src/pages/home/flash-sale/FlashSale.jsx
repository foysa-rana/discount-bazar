import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ProductsCard from '../components/ProductsCard'
import flashSelProduct from '../../../assets/product/image-17.webp'
import product1 from '../../../assets/product/cemera.jpg'
import product2 from '../../../assets/product/3.jpg'
import product3 from '../../../assets/product/4.jpg'
import product4 from '../../../assets/product/5.jpg'
import product5 from '../../../assets/product/image-17.webp'
import product6 from '../../../assets/product/4.jpg'

const products = [
    {
        id: 1,
        name: 'Luxury Smartwatch with Stainless Steel Case, Sapphire Crystal',
        originalPrice: 400,
        discountedPrice: 250,
        discount: 38,
        rating: 5.0,
        reviews: 6,
        image: product1
    },
    {
        id: 2,
        name: 'Cozy Knit Sweater with Turtleneck and Cable Knit Pattern',
        originalPrice: 404,
        discountedPrice: 267.50,
        discount: 34,
        rating: 5.0,
        reviews: 6,
        image: product2
    },
    {
        id: 3,
        name: 'Gaming Headset with Surround Sound, LED Lighting',
        originalPrice: 372.50,
        discountedPrice: 215,
        discount: 42,
        rating: 5.0,
        reviews: 6,
        image: product3
    },
    {
        id: 4,
        name: 'Mid-Range Mobile with 48MP AI Camera, 6GB RAM, and Fast Charging',
        originalPrice: 700,
        discountedPrice: 408,
        discount: 36,
        rating: 5.0,
        reviews: 6,
        image: product4
    },
    {
        id: 5,
        name: 'Stacking Rings Toy with Bright Colors and Easy-Grip Design for Toddlers',
        originalPrice: 220,
        discountedPrice: 140,
        discount: 36,
        rating: 5.0,
        reviews: 6,
        image: product5
    },
    {
        id: 6,
        name: 'Classic Leather Loafers with Memory Foam Insoles for All-Day Comfort',
        originalPrice: 1200,
        discountedPrice: 650,
        discount: 46,
        rating: 5.0,
        reviews: 6,
        image: product6
    }
]

function CountdownTimer() {
    const [timeLeft, setTimeLeft] = useState({
        days: 6,
        hours: 23,
        minutes: 57,
        seconds: 58
    })

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.seconds > 0) {
                    return { ...prev, seconds: prev.seconds - 1 }
                }
                if (prev.minutes > 0) {
                    return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
                }
                if (prev.hours > 0) {
                    return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
                }
                if (prev.days > 0) {
                    return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
                }
                return prev
            })
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    return (
        <div className="flex items-center justify-center gap-4 sm:gap-12 py-4 px-2 sm:px-6 rounded-lg w-full">
            <div className="text-center">
                <div className="text-3xl sm:text-5xl font-bold text-gray-700">{String(timeLeft.days).padStart(2, '0')}</div>
                <div className="text-[10px] sm:text-xs text-gray-500">DAYS</div>
            </div>
            <div className="text-center">
                <div className="text-3xl sm:text-5xl font-bold text-gray-700">{String(timeLeft.hours).padStart(2, '0')}</div>
                <div className="text-[10px] sm:text-xs text-gray-500">HOURS</div>
            </div>
            <div className="text-center">
                <div className="text-3xl sm:text-5xl font-bold text-gray-700">{String(timeLeft.minutes).padStart(2, '0')}</div>
                <div className="text-[10px] sm:text-xs text-gray-500">MINUTES</div>
            </div>
            <div className="text-center">
                <div className="text-3xl sm:text-5xl font-bold text-gray-700">{String(timeLeft.seconds).padStart(2, '0')}</div>
                <div className="text-[10px] sm:text-xs text-gray-500">SECONDS</div>
            </div>
        </div>
    )
}

export default function FlashSale() {
    return (
        <div className="py-4 sm:py-8">
            <div className="container mx-auto px-2 sm:px-4">
                {/* Header */}
                <h2 className="text-2xl sm:text-4xl font-bold text-center mb-2 text-gray-900">Flash Sale</h2>
                <div className="flex justify-center mb-4">
                    <Link to="#" className="text-xs sm:text-sm text-[#fae668] hover:underline font-medium border-2 border-[#fae668] px-3 py-1 sm:px-4 sm:py-2 ml-auto">
                        SHOP ALL PRODUCTS
                    </Link>
                </div>
                <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
                    {/* Left Banner */}
                    <Link to="#" className="lg:w-[50%]">
                        <div className="relative h-full rounded-lg overflow-hidden bg-[#F0F2F9]">
                            <img
                                src={flashSelProduct}
                                alt="Flash Sale"
                                className="w-full h-[60%] sm:h-[70%] xl:h-[75%] object-cover"
                            />
                            <div className="absolute top-2 sm:top-4 right-2 sm:right-4">
                                <div className="text-[#ff1f5a] text-xl sm:text-3xl font-bold leading-tight">
                                    Flash<br />Sale
                                </div>
                            </div>
                            <div className="relative bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 w-full mt-8">
                                <div className="text-center">
                                    <div className="text-xl sm:text-3xl font-semibold mb-1 text-[#79A1BD]">LIMITED TIME OFFER</div>
                                </div>
                                <CountdownTimer />
                            </div>
                        </div>
                    </Link>

                    {/* Right Products Grid */}
                    <div className="lg:w-[60%]">
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4">
                            {products.map(product => (
                                <ProductsCard key={product.id} product={product} border={true} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

