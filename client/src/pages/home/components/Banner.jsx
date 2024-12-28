import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import banner1 from '../../../assets/banner/1.png'
import banner2 from '../../../assets/banner/2.png'
import banner3 from '../../../assets/banner/3.png'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

const slides = [
    {
        subtitle: 'Best Furniture',
        title: 'Get Up to 40% Off',
        description: 'Furniture must have personality, as well as be beautiful and make your home Gorgeous.',
        image: banner1,
        buttonText: 'Shop Now',
    },
    {
        subtitle: 'New Collection',
        title: 'Summer Sale 2024',
        description: 'Discover our latest collection of premium furniture at unbeatable prices.',
        image: banner2,
        buttonText: 'Shop Now',
    },
    {
        subtitle: 'Special Offer',
        title: 'Save Up to 60% Off',
        description: 'Transform your living space with our exclusive range of designer furniture.',
        image: banner3,
        buttonText: 'Shop Now',
    },
]

export default function Banner() {
    return (
        <div className="bg-gray-50">
            <div className="container mx-auto px-4">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    pagination={{
                        clickable: true,
                        bulletClass: 'swiper-pagination-bullet banner-bullet',
                        bulletActiveClass: 'swiper-pagination-bullet-active banner-bullet-active',
                    }}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    className="h-[500px]"
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex items-center h-full">
                                <div className="flex-1 pr-8">
                                    <h3 className="text-lg font-medium mb-3">{slide.subtitle}</h3>
                                    <h2 className="text-[40px] leading-tight font-bold text-[#1a1a4b] mb-4">
                                        {slide.title}
                                    </h2>
                                    <p className="text-gray-600 mb-8 max-w-lg">
                                        {slide.description}
                                    </p>
                                    <button className="bg-[#FBB528] text-white px-8 py-3 rounded hover:bg-[#e5a622] transition-colors">
                                        {slide.buttonText}
                                    </button>
                                </div>
                                <div className="flex-1">
                                    <img
                                        src={slide.image}
                                        alt={slide.title}
                                        className="w-[350px] h-full object-cover ml-auto"
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <style>
                {`
        .banner-bullet {
            width: 12px;
            height: 12px;
            background: #FEEFD1;
            opacity: 1;
            border-radius: 10rem;
        }
        
        .banner-bullet-active {
            background: #FBB528 !important;
            width: 32px !important;
        }
      `}
            </style>
        </div>
    )
}
