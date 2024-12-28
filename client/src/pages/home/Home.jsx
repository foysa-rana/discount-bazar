import React from 'react'
import Banner from './components/Banner'
import CategorySlider from './components/CategorySlider'
import FlashSale from './flash-sale/FlashSale'

const Home = () => {
    return (
        <>
            <Banner />
            <CategorySlider />
            <FlashSale />
        </>
    )
}

export default Home