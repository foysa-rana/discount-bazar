import { ReactComponent as MedalIcon } from '../../../assets/medal-icon.svg'
import shoppingCartIcon from '../../../assets/yellow-shopping-cart.svg'
import supportIcon from '../../../assets/support-female-svgrepo-com.svg'
import moneyBagIcon from '../../../assets/money-bag-dollar-color-icon.svg'

export default function ServiceBanner() {
    const services = [
        {
            icon: <MedalIcon className="w-10 h-10" />,
            title: "Manage Quality",
            subtitle: "Best Quality Guarantee"
        },
        {
            icon: shoppingCartIcon,
            title: "Win $100 To Shop",
            subtitle: "Enter Now"
        },
        {
            icon: supportIcon,
            title: "Best Online Support",
            subtitle: "Hour: 10:00AM - 5:00PM"
        },
        {
            icon: moneyBagIcon,
            title: "Money Gurantee",
            subtitle: "With A 30 Days"
        }
    ]

    return (
        <div className="bg-[#1F0300] text-white py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-4 lg:justify-start group w-full"
                        >
                            <div className="transition-transform duration-300 group-hover:scale-110">
                                {typeof service.icon === 'string' ? (
                                    <img src={service.icon} alt={service.title} className="w-14 h-14" />
                                ) : (
                                    service.icon
                                )}
                            </div>
                            <div>
                                <h3 className="font-semibold text-base">
                                    {service.title}
                                </h3>
                                <p className="text-xs">
                                    {service.subtitle}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
