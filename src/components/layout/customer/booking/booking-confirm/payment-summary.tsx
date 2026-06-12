'use client';

import { ArrowRight, Lock } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface PaymentSummaryProps {
    serviceTitle: string;
    servicePrice: string;
    shippingFee: number;
    receiveFee: number;
    platformFee: number;
    total: number;
    packageSlug: string;
}

export default function PaymentSummary({
    serviceTitle,
    servicePrice,
    shippingFee,
    receiveFee,
    platformFee,
    total,
    packageSlug,
}: PaymentSummaryProps) {
    const router = useRouter();

    return (
        <div className="bg-white border border-[#E5E7EB] rounded-3xl p-6 sticky top-6 shadow-sm">
            <h3 className="font-semibold text-lg mb-5">Chi tiết thanh toán</h3>

            <div className="space-y-3 text-sm mb-6">
                <div className="flex justify-between">
                    <span className="text-[#6B7280]">Gói {serviceTitle}</span>
                    <span>{servicePrice}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-[#6B7280]">Phí vận chuyển</span>
                    <span>{shippingFee.toLocaleString('vi-VN')}đ</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-[#6B7280]">Phí nhận cây</span>
                    <span>{receiveFee.toLocaleString('vi-VN')}đ</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-[#6B7280]">Phí nền tảng (5%)</span>
                    <span>{platformFee.toLocaleString('vi-VN')}đ</span>
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
                onClick={() => router.push(`/customer-service-packages/booking/payment?package=${packageSlug}`)}
                className="w-full py-3.5 bg-[#6D28D9] hover:bg-[#5B21B6] text-white font-semibold rounded-2xl mb-3"
            >
                Thanh toán qua VNPay
                <ArrowRight className="w-5 h-5 inline" />
            </button>

            <p className="text-xs text-center text-[#6B7280] flex items-center justify-center gap-1">
                <Lock className="w-4 h-4" />
                Thanh toán an toàn & bảo mật
            </p>
        </div>
    );
}