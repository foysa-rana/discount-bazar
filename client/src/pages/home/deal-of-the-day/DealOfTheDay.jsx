import img1 from '../../../assets/deal/1.jpg'
import img2 from '../../../assets/deal/2.jpg'

export default function DealOfTheDay() {
    return (
        <div className="bg-[#FFF6F5] w-full py-16 relative">
            <div className="hidden lg:block absolute bg-black h-full w-[18%] top-0 left-0"></div>
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                    {/* Image Section */}
                    <div className="relative w-full lg:w-1/2 flex justify-center items-center lg:block">
                        <div className="relative z-10">
                            <img
                                src={img2}
                                alt="Fashion Deal Main"
                                className="w-full h-auto max-w-[250px] max-h-[300px] border-[3px] border-[#FF3E2C] object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-12 hidden sm:block sm:left-[60%] lg:left-44 w-2/3 z-10">
                            <img
                                src={img1}
                                alt="Fashion Deal Secondary"
                                className="w-full h-auto max-w-[200px] max-h-[300px] border-y-[3px] border-l-[3px] border-[#FF3E2C] object-cover"
                            />
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left z-10">
                        <h2 className="text-4xl font-bold mb-4">
                            DEAL
                            <br />
                            OF THE DAY
                        </h2>
                        <h3 className="text-lg font-semibold mb-4">
                            CLICK SHOP NOW FOR ALL DEAL OF THE PRODUCT
                        </h3>
                        <p className="mb-8">
                            Donec condimentum Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Cras cursus pretium sapien, in pulvinar ipsum molestie id. Aliquam erat volutpat.
                            Duis quam tellus, ullamcorper.....
                        </p>
                        <button className="bg-[#FBB528] hover:bg-[#e0aa00] text-white font-semibold py-3 px-8 w-full max-w-[300px] rounded-md transition-colors duration-300">
                            Shop Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

