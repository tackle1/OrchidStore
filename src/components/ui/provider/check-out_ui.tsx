'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import ProviderNavbar from '../../common/navbar/provider_navbar';
import ProviderSidebar from '../../common/sidebar/provider_sidebar';

import CheckoutHeader from '../../layout/provider/history-care_orders/check-out/checkout_header';
import CheckoutImages from '../../layout/provider/history-care_orders/check-out/checkout_images';
import CheckoutComparison from '../../layout/provider/history-care_orders/check-out/checkout_comparison';
import CheckoutHealth from '../../layout/provider/history-care_orders/check-out/checkout_health';
import CheckoutAdvice from '../../layout/provider/history-care_orders/check-out/checkout_advice';

export default function CheckOutUI() {
    const params = useParams();
    const id = params?.id as string || 'LC-8492';

    return (
        <div className="flex min-h-screen bg-[#F8F9FC] font-sans">
            <ProviderSidebar />
            <div className="flex-1 flex flex-col">
                <ProviderNavbar />
                <div className="p-6 md:p-8 w-full max-w-[1200px] mx-auto flex-1 flex flex-col">
                    
                    <CheckoutHeader id={id} />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                        {/* Left Column - 7/12 */}
                        <div className="lg:col-span-7 flex flex-col gap-6">
                            <CheckoutImages />
                            <CheckoutComparison />
                        </div>

                        {/* Right Column - 5/12 */}
                        <div className="lg:col-span-5 flex flex-col gap-6">
                            <CheckoutHealth />
                            <CheckoutAdvice />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
