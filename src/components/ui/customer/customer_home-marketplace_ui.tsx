'use client';

import CustomerSidebar from '../../common/sidebar/customer_sidebar';
import CustomerNavbar from '../../common/navbar/customer_navbar';
import HeroOverlay from '../../layout/customer/home-marketplace/hero_overlay';
import QuickTags from '../../layout/customer/home-marketplace/quick-tag';
export default function CustomerHomePageUI() {

    return (
        <div className="flex min-h-screen bg-[#F2F3FF] w-full overflow-hidden ">
            {/* Sidebar */}
            <CustomerSidebar />

            {/* Main Content */}
            <div className="flex-1 flex flex-col bg-[#F2F3FF]">
                {/* Navbar */}
                <CustomerNavbar />
                {/* Hero Section */}
                <div className="px-10 pt-8 ">

                    <div>
                        <HeroOverlay />
                    </div>
                    <div className="pt-135">
                        <QuickTags />
                    </div>
                </div>
            </div>
        </div>
    );
}

