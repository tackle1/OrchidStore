'use client';

import { useRouter } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
interface PaymentSummaryProps {
    serviceTitle: string;
    serviceDuration: string;
    serviceImage: string;
    originalAmount: number;
    discount: number;
    total: number;
    packageSlug: string;
}

export default function PaymentSummary({
    serviceTitle,
    serviceDuration,
    serviceImage,
    originalAmount,
    discount,
    total,
    packageSlug,
}: PaymentSummaryProps) {
    const router = useRouter();

    return (
        <div className="bg-white border border-[#E5E7EB] rounded-3xl p-6 sticky top-6 shadow-sm">
            <h3 className="font-semibold text-lg mb-5">Tóm tắt đơn hàng</h3>

            <div className="flex gap-4 mb-6">
                <div className="w-14 h-14 bg-gray-200 rounded-xl flex-shrink-0">
                    <img src={serviceImage} alt={serviceTitle} className="w-full h-full object-cover rounded-xl" />
                </div>
                <div>
                    <p className="font-semibold">{serviceTitle}</p>
                    <p className="text-sm text-[#6B7280]">Kỳ hạn: {serviceDuration}</p>
                </div>
            </div>

            <div className="space-y-3 text-sm mb-6">
                <div className="flex justify-between">
                    <span className="text-[#6B7280]">Tạm tính</span>
                    <span>{originalAmount.toLocaleString('vi-VN')}đ</span>
                </div>
                <div className="flex justify-between text-[#16A34A]">
                    <span>Khuyến mãi (LanCare10)</span>
                    <span>-{discount.toLocaleString('vi-VN')}đ</span>
                </div>
            </div>

            <div className="h-px bg-[#E5E7EB] my-4" />

            <div className="flex justify-between items-center mb-6">
                <span className="font-semibold text-lg">Tổng cộng</span>
                <span className="font-bold text-2xl text-[#6D28D9]">
                    {total.toLocaleString('vi-VN')}đ
                </span>
            </div>

            <button
                onClick={() => router.push('/customer-service-packages/booking/success')}
                className="w-full py-3.5 bg-[#6D28D9] hover:bg-[#5B21B6] text-white font-semibold rounded-2xl mb-3"
            >
                Xác nhận đã thanh toán
                <ArrowRight className="w-4 h-4 inline ml-2" />
            </button>

            <p className="text-xs text-center text-[#6B7280]">
                Hệ thống sẽ tự động xác nhận sau khi nhận được tiền.
            </p>
        </div>
    );
}