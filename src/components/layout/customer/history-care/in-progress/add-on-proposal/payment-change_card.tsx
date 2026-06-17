'use client';

import { useRouter, useParams } from 'next/navigation';
import { Check, XCircle, PlusCircle, Plus } from 'lucide-react';

export default function PaymentChangeCard() {
    const router = useRouter();
    const params = useParams();
    const slug = params.slug as string;

    const handleAcceptAddOn = () => {
        router.push(`/history-care/in-progress/${slug}/add-on-proposal/accept-success`);
    };

    return (
        <div className="bg-white border border-[#E5E7EB] rounded-3xl p-6">

            <h3 className="font-semibold mb-5">Thay đổi thanh toán</h3>

            <div className="space-y-4 text-sm">
                <div className="flex justify-between">
                    <span className="text-[#6B7280]">Tổng tiền gói hiện tại</span>
                    <span className="font-medium">5,000,000 ₫</span>
                </div>

                <div className="flex justify-between items-center bg-[#FDF2F8] px-3 py-2 rounded-2xl">
                    <span className="text-[#6B7280] flex items-center gap-2">
                        <span className="bg-[#F3E8FF] text-[#6D28D9] w-5 h-5 rounded-full flex items-center justify-center">
                            <PlusCircle className="w-3 h-3" />
                        </span>
                        Giá dịch vụ phát sinh
                    </span>
                    <span className="font-medium text-[#16A34A] flex items-center gap-1">
                        <Plus className="w-3 h-3" /> 350,000 ₫
                    </span>
                </div>
            </div>

            <div className="h-px bg-[#E5E7EB] my-5" />

            <div className="flex justify-between items-center mb-6">
                <span className="font-semibold">Tổng thanh toán mới</span>
                <span className="font-bold text-2xl text-[#6D28D9]">5,350,000 ₫</span>
            </div>

            <div className="space-y-3">
                <button
                    onClick={handleAcceptAddOn}
                    className="w-full flex items-center justify-center gap-2 bg-[#6D28D9] hover:bg-[#5B21B6] text-white font-semibold py-3 rounded-2xl transition-colors"
                >
                    <Check className="w-4 h-4" /> Chấp nhận add-on
                </button>

                <button className="w-full flex items-center justify-center gap-2 border border-[#E5E7EB] text-[#DC2626] font-medium py-3 rounded-2xl hover:bg-[#FEF2F2] transition-colors">
                    <XCircle className="w-4 h-4" /> Từ chối add-on
                </button>
            </div>

            <p className="text-xs text-[#6B7280] mt-4 leading-relaxed">
                Nếu từ chối, dịch vụ chăm sóc sẽ tiếp tục theo gói hiện tại. Bạn có thể mở tranh chấp nếu cần.
            </p>
        </div>
    );
}