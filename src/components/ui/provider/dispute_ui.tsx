'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import ProviderNavbar from '../../common/navbar/provider_navbar';
import ProviderSidebar from '../../common/sidebar/provider_sidebar';

import DisputeHeader from '../../layout/provider/history-care_orders/dispute/dispute_header';
import DisputeInfo from '../../layout/provider/history-care_orders/dispute/dispute_info';
import DisputeClaim from '../../layout/provider/history-care_orders/dispute/dispute_claim';
import DisputeResponse from '../../layout/provider/history-care_orders/dispute/dispute_response';
import { ALL_ORDERS } from './care-orders_ui';

export default function DisputeUI() {
    const params = useParams();
    const id = params?.id as string || "ORD-001";

    // Find the order or use a fallback if not found
    const order = ALL_ORDERS.find(o => o.id === id) || {
        customer: undefined,
        orchidType: undefined
    };

    return (
        <div className="flex min-h-screen bg-[#F8F9FC] font-sans">
            <ProviderSidebar />

            <div className="flex-1 flex flex-col">
                <ProviderNavbar />

                <div className="p-6 md:p-8 w-full max-w-6xl mx-auto flex-1 flex flex-col">

                    <DisputeHeader />

                    <div className="flex flex-col lg:flex-row gap-6 mb-6">
                        <DisputeInfo
                            customer={order.customer}
                            orchidType={order.orchidType}
                        />
                        <DisputeClaim />
                    </div>

                    <DisputeResponse />

                </div>
            </div>
        </div>
    );
}
