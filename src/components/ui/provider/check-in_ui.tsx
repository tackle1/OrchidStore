'use client';

import React from 'react';
import ProviderNavbar from '../../common/navbar/provider_navbar';
import ProviderSidebar from '../../common/sidebar/provider_sidebar';

import CheckInHeader from '../../layout/provider/history-care_orders/check-in/check-in_header';
import CheckInImages from '../../layout/provider/history-care_orders/check-in/check-in_images';
import CheckInEvaluation from '../../layout/provider/history-care_orders/check-in/check-in_evaluation';
import CheckInNotes from '../../layout/provider/history-care_orders/check-in/check-in_notes';
import CheckInRisk from '../../layout/provider/history-care_orders/check-in/check-in_risk';
import CheckInActions from '../../layout/provider/history-care_orders/check-in/check-in_actions';

export default function CheckInUI() {
    return (
        <div className="flex min-h-screen bg-[#F8F9FC] font-sans">
            <ProviderSidebar />

            <div className="flex-1 flex flex-col">
                <ProviderNavbar />

                <div className="p-6 md:p-8 w-full max-w-6xl mx-auto flex-1 flex flex-col">

                    <CheckInHeader />

                    <div className="flex flex-col lg:flex-row gap-6 items-start">

                        {/* Left Column */}
                        <div className="flex-1 flex flex-col gap-6 w-full">
                            <CheckInImages />
                            <CheckInEvaluation />
                        </div>

                        {/* Right Column */}
                        <div className="w-full lg:w-[320px] flex-shrink-0 flex flex-col gap-6">
                            <CheckInNotes />
                            <CheckInRisk />
                            <CheckInActions />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
