'use client';

import { useParams } from 'next/navigation';

import InProgressHeader from '../../../components/layout/customer/history-care/in-progress/in-progress_header';
import ProgressTimeline from '../../../components/layout/customer/history-care/in-progress/progress-timeline';
import CareReportCard from '../../layout/customer/history-care/in-progress/care-report_card';
import PhotoLog from '../../../components/layout/customer/history-care/in-progress/photo-log';
import ProviderInfoCard from '../../layout/customer/history-care/in-progress/provider-info_card';
import PaymentDetailsCard from '../../../components/layout/customer/history-care/in-progress/payment-details_card';

export default function InProgressOrderDetailUI() {
    const params = useParams();
    const slug = params.slug as string;

    return (
        <div className="min-h-screen bg-[#F8F9FC]">
            <div className="max-w-7xl mx-auto px-6 py-8">

                <InProgressHeader slug={slug} />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* LEFT CONTENT */}
                    <div className="lg:col-span-7 space-y-6">
                        <ProgressTimeline />
                        <CareReportCard />
                        <PhotoLog />
                    </div>

                    {/* RIGHT SIDEBAR */}
                    <div className="lg:col-span-5 space-y-6">
                        <ProviderInfoCard />
                        <PaymentDetailsCard />
                    </div>
                </div>
            </div>
        </div>
    );
}