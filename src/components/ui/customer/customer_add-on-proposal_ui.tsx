'use client';


import ProposalTopBar from '../../../components/layout/customer/history-care/in-progress/add-on-proposal/proposal-top_bar';
import ProposalInfoCard from '../../../components/layout/customer/history-care/in-progress/add-on-proposal/proposal-info_card';
import EvidencePhotosCard from '../../../components/layout/customer/history-care/in-progress/add-on-proposal/evidence-photos_card';
import PaymentChangeCard from '../../../components/layout/customer/history-care/in-progress/add-on-proposal/payment-change_card';
import SupportCard from '../../../components/layout/customer/history-care/in-progress/add-on-proposal/support-card';

export default function CustomerAddOnProposalUI() {
    return (
        <div className="min-h-screen bg-white">
            <ProposalTopBar />

            <div className="max-w-6xl mx-auto px-6 py-8">

                <div className="mb-8">
                    <h1 className="text-3xl font-bold mb-2">Đề xuất dịch vụ phát sinh</h1>
                    <p className="text-[#6B7280] max-w-3xl">
                        Chuyên gia chăm sóc đã phát hiện vấn đề cần xử lý trong quá trình thực hiện gói dịch vụ của bạn.
                        Vui lòng xem xét chi tiết bên dưới.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* LEFT CONTENT */}
                    <div className="lg:col-span-7 space-y-6">
                        <ProposalInfoCard />
                        <EvidencePhotosCard />
                    </div>

                    {/* RIGHT SIDEBAR */}
                    <div className="lg:col-span-5 space-y-6">
                        <PaymentChangeCard />
                        <SupportCard />
                    </div>
                </div>
            </div>
        </div>
    );
}