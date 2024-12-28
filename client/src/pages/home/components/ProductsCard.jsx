import React from 'react'
import { Link } from 'react-router-dom'
import { FiHeart } from 'react-icons/fi'
import { FaStar } from 'react-icons/fa'

const ProductCard = ({ product }) => {
    return (
        <Link to={`#`}>
            <div className="bg-white rounded-lg group">
                <div className="relative">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full aspect-square object-cover"
                    />
                    <button className="absolute top-2 right-2 w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-md">
                        <FiHeart className="w-4 h-4" />
                    </button>
                    <div className="absolute top-2 left-2 bg-black text-white text-xs px-1.5 py-0.5">
                        -{product.discount}%
                    </div>
                </div>
                <div className='border-b border-x border-gray-200 py-4 px-2'>
                    <h3 className="text-xs font-semibold mb-1.5 group-hover:text-[#FBB528] transition-colors line-clamp-2">
                        {product.name}
                    </h3>
                    <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-sm font-bold">${product.discountedPrice.toFixed(2)}</span>
                        <span className="text-xs text-gray-500 line-through">${product.originalPrice.toFixed(2)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <div className="flex items-center text-[#FBB528]">
                            {[...Array(1)].map((_, i) => (
                                <FaStar key={i} className="w-3 h-3" />
                            ))}
                            <span className="text-xs text-gray-900 font-semibold">{product.rating}</span>
                        </div>
                        <span className="text-xs text-gray-900 font-semibold">({product.reviews})</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard

