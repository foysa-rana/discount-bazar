import React from 'react'
import { Link } from 'react-router-dom'
import { FiHeart } from 'react-icons/fi'
import { FaStar } from 'react-icons/fa'

const ProductCard = ({ product, border }) => {
    return (
        <Link to={`#`}>
            <div className="bg-white group w-full h-full">
                <div className="relative">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full aspect-square object-cover"
                    />
                    <button className="absolute top-[5%] right-[5%] w-[2rem] h-[2rem] bg-white rounded-full flex items-center justify-center shadow-md">
                        <FiHeart className="w-[1.2rem] h-[1.2rem]" />
                    </button>
                    <div className="absolute top-[5%] left-[5%] bg-black text-white text-[0.75rem] px-2 py-1">
                        -{product.discount}%
                    </div>
                </div>
                <div className={`${border ? 'border-b border-x border-gray-200' : ''} py-[1rem] px-[0.75rem]`}>
                    <h3 className="text-[0.875rem] font-semibold mb-[0.5rem] group-hover:text-[#FBB528] transition-colors line-clamp-2">
                        {product.name}
                    </h3>
                    <div className="flex items-center gap-[0.75rem] mb-[0.5rem]">
                        <span className="text-[1rem] font-bold">${product.discountedPrice.toFixed(2)}</span>
                        <span className="text-[0.875rem] text-gray-500 line-through">${product.originalPrice.toFixed(2)}</span>
                    </div>
                    <div className="flex items-center gap-[0.5rem]">
                        <div className="flex items-center text-[#FBB528]">
                            {[...Array(1)].map((_, i) => (
                                <FaStar key={i} className="w-[0.875rem] h-[0.875rem]" />
                            ))}
                            <span className="text-[0.875rem] text-gray-900 font-semibold">{product.rating}</span>
                        </div>
                        <span className="text-[0.875rem] text-gray-900 font-semibold">({product.reviews})</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard

