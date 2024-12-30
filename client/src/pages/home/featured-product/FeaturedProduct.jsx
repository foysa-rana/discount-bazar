import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import ProductsCard from '../components/ProductsCard'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

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
    },
    {
        id: 7,
        name: 'Luxury Smartwatch with Stainless Steel Case, Sapphire Crystal',
        originalPrice: 400,
        discountedPrice: 250,
        discount: 38,
        rating: 5.0,
        reviews: 6,
        image: product1
    },
    {
        id: 8,
        name: 'Cozy Knit Sweater with Turtleneck and Cable Knit Pattern',
        originalPrice: 404,
        discountedPrice: 267.50,
        discount: 34,
        rating: 5.0,
        reviews: 6,
        image: product2
    },
    {
        id: 9,
        name: 'Gaming Headset with Surround Sound, LED Lighting',
        originalPrice: 372.50,
        discountedPrice: 215,
        discount: 42,
        rating: 5.0,
        reviews: 6,
        image: product3
    },
    {
        id: 10,
        name: 'Mid-Range Mobile with 48MP AI Camera, 6GB RAM, and Fast Charging',
        originalPrice: 700,
        discountedPrice: 408,
        discount: 36,
        rating: 5.0,
        reviews: 6,
        image: product4
    },
    {
        id: 11,
        name: 'Stacking Rings Toy with Bright Colors and Easy-Grip Design for Toddlers',
        originalPrice: 220,
        discountedPrice: 140,
        discount: 36,
        rating: 5.0,
        reviews: 6,
        image: product5
    },
    {
        id: 12,
        name: 'Classic Leather Loafers with Memory Foam Insoles for All-Day Comfort',
        originalPrice: 1200,
        discountedPrice: 650,
        discount: 46,
        rating: 5.0,
        reviews: 6,
        image: product6
    }
]

export default function CategorySlider() {
    return (
        <div className="bg-[#F6F6F6] pt-16 pb-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                    Our Featured Products
                </h2>
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
                        480: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        992: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 20,
                        },
                    }}
                    loop={true}
                    className="!pb-12"
                >
                    {products.map(product => (
                        <SwiperSlide key={product.id}>
                            <ProductsCard
                                key={product.id}
                                product={product}
                            />
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

