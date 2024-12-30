import React from 'react'

import category1 from '../../../assets/category/cemera.jpg'
import category2 from '../../../assets/category/image-17.webp'
import category3 from '../../../assets/category/3.jpg'

const posts = [
    {
        title: 'Camera & Photo - The Ultimate Guide to Capturing Stunning Images Like a Pro: Tips, Techniques, and Gear Recommendations',
        image: category1,
    },
    {
        title: 'Smart Phone & Table - Exploring the Latest Innovations in Mobile Technology: A Deep Dive into Features, Reviews, and Comparisons',
        image: category2,
    },
    {
        title: 'Sport & Outdoor - Your Comprehensive Resource for Adventure and Gear: Everything You Need to Know for Your Next Expedition',
        image: category3,
    },
]

export default function LatestPost() {
    return (
        <div className="pb-20 pt-0">
            <div className="container mx-auto px-4">
                {/* Header Section */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Latest Post
                    </h2>
                    <p className="">
                        Erat pellentesque curabitur euismod dui etiam pellentesque rhoncus fermentum tristique lobortis lectus
                        magnis. Consequat porta turpis maecenas
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {posts.map((post, index) => (
                        <div key={index} className="h-[300px]">
                            <div className="relative rounded-lg overflow-hidden group cursor-pointer h-full">
                                {/* Background with matching color */}
                                <div className="absolute inset-0 opacity-95" />

                                {/* Category Image */}
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
                                />

                                {/* Content */}
                                <div className="absolute w-[94%] p-4 bg-[#f7f7f7c4] bottom-3 left-1/2 transform -translate-x-1/2 rounded-lg text-gray-900">
                                    <h3 className={`text-base font-bold mb-2 line-clamp-2`}>
                                        {post.title}
                                    </h3>
                                </div>

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

