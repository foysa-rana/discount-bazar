import bg1 from '../../../assets/exchange/bg1.webp'
import bg2 from '../../../assets/exchange/bg2.jpg'
import exchange1 from '../../../assets/exchange/1.jpg'
import exchange2 from '../../../assets/exchange/2.webp'
import exchange3 from '../../../assets/exchange/3.jpeg'
import exchange4 from '../../../assets/exchange/4.webp'
export default function ExchangeOffer() {
    return (
        <div className="py-16">
            <div className="container mx-auto px-4">
                {/* Header Section */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Exchange offer
                    </h2>
                    <p className="">
                        Erat pellentesque curabitur euismod dui etiam pellentesque rhoncus fermentum tristique lobortis lectus
                        magnis. Consequat porta turpis maecenas
                    </p>
                </div>

                {/* Grid Section */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Phones Section */}
                    <div className="group cursor-pointer flex flex-col">
                        <div className="flex-1 min-h-[300px] grid grid-cols-2 gap-8 p-4 rounded-2xl relative overflow-hidden transition-transform duration-300 hover:-translate-y-2" style={{ backgroundImage: `url(${bg1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <div className="relative overflow-hidden">
                                <img
                                    src={exchange1}
                                    alt="iPhone with glowing base"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="relative overflow-hidden">
                                <img
                                    src={exchange2}
                                    alt="Multiple phones with gradient UI"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-blue-500/10 opacity-0 
                group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                    </div>

                    {/* Headphones Section */}
                    <div className="group cursor-pointer flex flex-col">
                        <div className="flex-1 min-h-[300px] grid grid-cols-2 gap-8 p-4 rounded-2xl relative overflow-hidden transition-transform duration-300 hover:-translate-y-2" style={{ backgroundImage: `url(${bg2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <div className="relative overflow-hidden">
                                <img
                                    src={exchange3}
                                    alt="Red and turquoise headphones"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="relative overflow-hidden">
                                <img
                                    src={exchange4}
                                    alt="Light blue headphones"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 opacity-0 
                group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

