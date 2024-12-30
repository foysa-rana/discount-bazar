import product1 from '../../../assets/product/image-17.webp'
import product2 from '../../../assets/product/3.jpg'
import product3 from '../../../assets/product/4.jpg'

export default function BestMonthOffer() {
    return (
        <div className="py-16">
            <div className="container mx-auto px-4">
                {/* Header Section */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Best Month offer
                    </h2>
                    <p className="">
                        Erat pellentesque curabitur euismod dui etiam pellentesque rhoncus fermentum tristique lobortis lectus
                        magnis. Consequat porta turpis maecenas
                    </p>
                </div>

                {/* Grid Section */}
                <div className="grid md:grid-cols-6 gap-6">
                    {/* Main Offer - Takes 3 columns */}
                    <div className="md:col-span-4 group cursor-pointer flex flex-col">
                        <div className="relative rounded-2xl overflow-hidden flex-1">
                            <img
                                src={product2}
                                alt="Women Collection"
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            {/* Overlay Content */}
                            <div className="absolute bottom-4 right-4 bg-white/60 p-4 rounded-lg flex flex-col items-end">
                                <p className="text-sm mb-1 font-medium">SALE UP TO 30%</p>
                                <h3 className="text-2xl font-bold mb-1">WOMEN COLLECTION</h3>
                                <p className="text-sm font-medium">NEW AUTUMN ARRIVAL 2024</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side Offers - Takes 2 columns */}
                    <div className="md:col-span-2 grid grid-rows-2 gap-6 h-full">
                        {/* Price Drop Offer */}
                        <div className="group cursor-pointer">
                            <div className="relative rounded-2xl overflow-hidden shadow-lg h-full">
                                <img
                                    src={product3}
                                    alt="Price Drop Offer"
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                        </div>

                        {/* Mega Sale Offer */}
                        <div className="group cursor-pointer">
                            <div className="relative rounded-2xl overflow-hidden shadow-lg h-full">
                                <img
                                    src={product1}
                                    alt="Mega Sale Offer"
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                {/* Mega Sale Badge */}
                                <div className="absolute -left-12 top-8 rotate-[-45deg] bg-[#FF4C3C] text-white py-1 px-16 shadow-lg">
                                    <p className="text-lg font-bold">MEGA SALE</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

