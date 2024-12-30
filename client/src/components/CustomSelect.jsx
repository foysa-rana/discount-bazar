import React, { useState, useRef, useEffect } from 'react'
import { IoChevronDown } from 'react-icons/io5'

const CustomSelect = ({ options, defaultValue, onChange }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedOption, setSelectedOption] = useState(defaultValue)
    const dropdownRef = useRef(null)

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    const handleOptionClick = (option) => {
        setSelectedOption(option)
        setIsOpen(false)
        onChange(option)
    }

    return (
        <div className="relative inline-block text-left" ref={dropdownRef}>
            <button
                type="button"
                className="inline-flex items-center justify-between w-full text-gray-900 hover:text-gray-600 transition-colors "
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-xs font-semibold">{selectedOption.label}</span>
                <IoChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-1 w-32 bg-white shadow-lg z-10">
                    <div className="py-1">
                        {options.map((option) => (
                            <button
                                key={option.value}
                                className={`block w-full px-4 py-2 text-xs text-left hover:bg-gray-50 hover:text-[#FBB528] transition-colors
                                    ${selectedOption.value === option.value ? 'text-[#FBB528]' : 'text-gray-900'}`}
                                onClick={() => handleOptionClick(option)}
                            >
                                {option.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default CustomSelect

