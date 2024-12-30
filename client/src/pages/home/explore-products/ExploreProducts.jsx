import { useState } from 'react'
import ProductsCard from '../components/ProductsCard'
import ProductTabs from '../components/ProudctTabs'
import product1 from '../../../assets/product/cemera.jpg'
import product2 from '../../../assets/product/3.jpg'
import product3 from '../../../assets/product/4.jpg'
import product4 from '../../../assets/product/5.jpg'
import product5 from '../../../assets/product/image-17.webp'
import product6 from '../../../assets/product/4.jpg'

export default function ExploreProducts() {
    const [activeTab, setActiveTab] = useState('NEW ARRIVAL')

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

    return (
        <div className="bg-[#F6F6F6] py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                    Explore Our Products
                </h2>

                <ProductTabs
                    activeTab={activeTab}
                    onTabChange={setActiveTab}
                />

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {products.map(product => (
                        <ProductsCard
                            key={product.id}
                            product={product}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

