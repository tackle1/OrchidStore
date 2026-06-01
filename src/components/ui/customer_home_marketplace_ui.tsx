'use client';

import CustomerSidebar from '../layout/customer_sidebar';
import CustomerNavbar from '../layout/customer_navbar';
import HeroOverlay from '../layout/hero_overlay';
import Image from 'next/image';

export default function CustomerHomePageUI() {
    const serviceTags = [
        'Chăm sóc định kỳ',
        'Cứu cây yếu',
        'Thay chậu',
        'Xử lý rễ',
        'Chăm sóc công tác',
    ];

    return (
        <div className="flex min-h-screen bg-[#F2F3FF] w-full overflow-hidden ">
            {/* Sidebar */}
            <CustomerSidebar />

            {/* Main Content */}
            <div className="flex-1 flex flex-col bg-[#F2F3FF]">
                {/* Navbar */}
                <div className="h-[80px]">
                    <CustomerNavbar />
                </div>
                {/* Hero Section */}
                <div className="px-10 pt-8 ">
                    <div className="relative rounded-[10px] overflow-hidden shadow-lg bg-white h-full">

                        {/* Background Image */}
                        <Image
                            src="/assets/images/customer-home-marketplace.jpg"
                            alt="Orchid background"
                            fill
                            className="object-cover object-center w-[100%]"
                            quality={100}
                            priority
                        />

                        {/* Overlay trắng */}
                        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/55 z-10" />

                        {/* Nội dung Hero */}
                        <div className="relative z-20 h-full flex items-center px-10 py-8">
                            <HeroOverlay />
                        </div>
                    </div>
                </div>

                {/* Quick Tags */}
                <div className="mt-8 px-10 flex flex-wrap gap-3">
                    {serviceTags.map((tag) => (
                        <button
                            key={tag}
                            type="button"
                            className="
                                px-6
                                h-10
                                w-6
                                rounded-full
                                text-[#131B2E]
                                bg-[#E5E7EB]
                                shadow-sm
                                hover:bg-[#DDD6FE]
                                transition
                            "
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

