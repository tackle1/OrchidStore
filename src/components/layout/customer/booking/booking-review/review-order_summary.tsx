'use client';

import { CheckCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { ServicePackage } from '../../../../../data/servicePackages';

interface ReviewOrderSummaryProps {
    service: ServicePackage;
    packageSlug: string;
    selectedTime: string;
    total: number;
    platformFee: number;
}

export default function ReviewOrderSummary({
    service,
    packageSlug,
    selectedTime,
    total,
    platformFee,
}: ReviewOrderSummaryProps) {
    const router = useRouter();

    return (
        <div className="bg-white border border-[#E5E7EB] rounded-3xl p-6 sticky top-6 shadow-sm">
            <h3 className="font-semibold text-lg mb-4">Tạm tính đơn hàng</h3>

            <div className="space-y-2 text-sm mb-4">
                <div className="flex justify-between">
                    <span className="text-[#6B7280]">Gói chăm sóc</span>
                    <span className="font-medium text-right line-clamp-1">{service.title}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-[#6B7280]">Nhà vườn</span>
                    <span>{service.provider}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-[#6B7280]">Số lượng lan</span>
                    <span className="font-medium">{service.numberOfOrchids || 1} chậu</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-[#6B7280]">Thời gian chăm sóc</span>
                    <span className="font-medium">
                        {service.careStartDate} → {service.careEndDate}
                    </span>
                </div>
                <div className="flex justify-between">
                    <span className="text-[#6B7280]">Báo cáo định kỳ</span>
                    <span className="font-medium">{service.reportFrequency}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-[#6B7280]">Thời gian lấy cây</span>
                    <span>{selectedTime}</span>
                </div>
            </div>

            <div className="h-px bg-[#E5E7EB] my-4" />

            <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                    <span className="text-[#6B7280]">Phí dịch vụ</span>
                    <span>{service.price}</span>
                </div>
                <div className="flex justify-between text-[#16A34A]">
                    <span>Phí nhận cây (Tạm tính)</span>
                    <span>+50.000 ₫</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-[#6B7280]">Phí nền tảng (5%)</span>
                    <span>{platformFee.toLocaleString('vi-VN')} ₫</span>
                </div>
            </div>

            <div className="h-px bg-[#E5E7EB] my-4" />

            <div className="flex justify-between font-semibold text-lg mb-6">
                <span>Tổng cộng</span>
                <span className="text-[#6D28D9]">{total.toLocaleString('vi-VN')} ₫</span>
            </div>

            <button
                onClick={() => router.push(`/customer-service-packages/booking/payment?package=${packageSlug}`)}
                className="w-full py-3.5 bg-[#6D28D9] hover:bg-[#5B21B6] text-white font-semibold rounded-2xl flex items-center justify-center gap-2"
            >
                <CheckCircle className="w-5 h-5" />
                Xác nhận & Tiếp tục thanh toán
            </button>
        </div>
    );
}