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
                className="inline-flex items-center justify-between w-full bg-transparent text-gray-900 hover:text-gray-600 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{selectedOption.label}</span>
                <IoChevronDown className="ml-1 h-3 w-3" aria-hidden="true" />
            </button>

            {isOpen && (
                <div className="origin-top-right absolute right-0 mt-1 w-32 rounded-sm shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                    <div role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        {options.map((option) => (
                            <button
                                key={option.value}
                                className={`${selectedOption.value === option.value ? 'bg-gray-200 text-gray-900' : 'text-gray-700'
                                    } block w-full px-4 py-2 text-xs text-left hover:bg-gray-50 hover:text-gray-900`}
                                role="menuitem"
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

