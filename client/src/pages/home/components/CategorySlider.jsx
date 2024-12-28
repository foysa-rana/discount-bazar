import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

import category1 from '../../../assets/category/cemera.jpg'
import category2 from '../../../assets/category/image-17.webp'
import category3 from '../../../assets/category/3.jpg'
import category4 from '../../../assets/category/4.jpg'
import category5 from '../../../assets/category/5.jpg'

const categories = [
    {
        title: 'Camera & Photo',
        products: 4,
        image: category1,
    },
    {
        title: 'Smart Phone & Table',
        products: 4,
        image: category2,
    },
    {
        title: 'Sport & Outdoor',
        products: 2,
        image: category3,
    },
    {
        title: 'Jewelry & Watches',
        products: 3,
        image: category4,
    },
    {
        title: 'Health & Beauty',
        products: 3,
        image: category5,
    },
    {
        title: 'Camera & Photo',
        products: 4,
        image: category1,
    },
    {
        title: 'Smart Phone & Table',
        products: 4,
        image: category2,
    },
    {
        title: 'Sport & Outdoor',
        products: 2,
        image: category3,
    },
    {
        title: 'Jewelry & Watches',
        products: 3,
        image: category4,
    },
    {
        title: 'Health & Beauty',
        products: 3,
        image: category5,
    },
]

export default function CategorySlider() {
    return (
        <div className="py-12">
            <div className="container mx-auto px-4">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    pagination={{
                        clickable: true,
                        bulletClass: 'swiper-pagination-bullet category-bullet',
                        bulletActiveClass: 'swiper-pagination-bullet-active category-bullet-active',
                    }}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                        1280: {
                            slidesPerView: 5,
                            spaceBetween: 20,
                        },
                    }}
                    loop={true}
                    className="!pb-12"
                >
                    {categories.map((category, index) => (
                        <SwiperSlide key={index}>
                            <div className="relative w-[270px] h-[270px] rounded-lg overflow-hidden group cursor-pointer">
                                {/* Background with matching color */}
                                <div className={`absolute inset-0 opacity-95`} />

                                {/* Category Image */}
                                <img
                                    src={category.image}
                                    alt={category.title}
                                    className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
                                />

                                {/* Content */}
                                <div className="absolute flex flex-col items-center justify-end text-center w-[90%] p-4 bg-[#f7f7f7ab] bottom-1 left-1/2 transform -translate-x-1/2 whitespace-nowrap rounded-lg text-gray-900">
                                    <h3 className={`text-lg font-bold mb-2`}>
                                        {category.title}
                                    </h3>
                                    <p className={`text-sm font-medium text-gray-900`}>
                                        {category.products} Products
                                    </p>
                                </div>

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <style jsx global>{`
        .category-bullet {
            width: 12px;
            height: 12px;
            background: #FEEFD1;
            opacity: 1;
            border-radius: 50%;
        }
        
        .category-bullet-active {
            background: #FBB528 !important;
        }
      `}</style>
        </div>
    )
}

