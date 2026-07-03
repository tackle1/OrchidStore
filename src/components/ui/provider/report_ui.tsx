'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import ProviderNavbar from '../../common/navbar/provider_navbar';
import ProviderSidebar from '../../common/sidebar/provider_sidebar';

import ReportHeader from '../../layout/provider/history-care_orders/report/report_header';
import ReportMedia from '../../layout/provider/history-care_orders/report/report_media';
import ReportHealth from '../../layout/provider/history-care_orders/report/report_health';
import ReportActions from '../../layout/provider/history-care_orders/report/report_actions';
import ReportNotes from '../../layout/provider/history-care_orders/report/report_notes';
import ReportPlan from '../../layout/provider/history-care_orders/report/report_plan';
import ReportSubmit from '../../layout/provider/history-care_orders/report/report_submit';

export default function ReportUI() {
    const params = useParams();
    const id = params?.id as string || 'LC-8824';

    return (
        <div className="flex min-h-screen bg-[#F8F9FC] font-sans">
            <ProviderSidebar />

            <div className="flex-1 flex flex-col">
                <ProviderNavbar />

                <div className="p-6 md:p-8 w-full max-w-4xl mx-auto flex-1 flex flex-col">
                    
                    <ReportHeader id={id} />

                    <div className="bg-white rounded-[20px] p-6 md:p-8 shadow-sm border border-[#E5E7EB]">
                        <ReportMedia />
                        <ReportHealth />
                        <ReportActions />
                        <ReportNotes />
                        <ReportPlan />
                    </div>
                    
                    <ReportSubmit />

                </div>
            </div>
        </div>
    );
}
