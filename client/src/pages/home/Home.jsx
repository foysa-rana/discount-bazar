import React from 'react'
import Banner from './components/Banner'
import CategorySlider from './components/CategorySlider'
import FlashSale from './flash-sale/FlashSale'
import DealOfTheDay from './deal-of-the-day/DealOfTheDay'
import ExploreProducts from './explore-products/ExploreProducts'
import ExchangeOffer from './exchange-offer/ExchnageOffer'
import BestMonthOffer from './best-month-offer/BestMonthOffer'
import FeaturedProduct from './featured-product/FeaturedProduct'
import ServiceBanner from './service-banner/ServiceBanner'
import BestSellingProduct from './best-selling-product/BestSellingProduct'
import TopRatedStore from './top-rated-store/TopRatedStore'
import LatestPost from './latest-post/LatestPost'
const Home = () => {
    return (
        <>
            <Banner />
            <CategorySlider />
            <FlashSale />
            <DealOfTheDay />
            <ExploreProducts />
            <ExchangeOffer />
            <BestMonthOffer />
            <FeaturedProduct />
            <ServiceBanner />
            <BestSellingProduct />
            <TopRatedStore />
            <LatestPost />
        </>
    )
}

export default Home