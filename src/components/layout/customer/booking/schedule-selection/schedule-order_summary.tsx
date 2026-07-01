'use client';

import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { ServicePackage } from '../../../../../data/servicePackages';

interface ScheduleOrderSummaryProps {
    service: ServicePackage;
    packageSlug: string;
    selectedDate: string;
    formatDate: (dateString: string) => string;
    calculateEndDate: (startDate: string, duration: string) => string;
    platformFee: number;
    total: number;
}

export default function ScheduleOrderSummary({
    service,
    packageSlug,
    selectedDate,
    formatDate,
    calculateEndDate,
    platformFee,
    total,
}: ScheduleOrderSummaryProps) {
    const router = useRouter();

    return (
        <div className="bg-white border border-[#E5E7EB] rounded-3xl p-6 sticky top-6 shadow-sm">
            <h3 className="font-semibold text-lg mb-4">Tạm tính đơn hàng</h3>

            <div className="space-y-2 text-sm mb-4">
                <div className="flex justify-between">
                    <span className="text-[#6B7280]">Gói chăm sóc</span>
                    <span className="font-bold text-[12px] line-clamp-1">{service.title}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-[#6B7280]">Thời gian chăm sóc</span>
                    <span>
                        {formatDate(selectedDate)} → {calculateEndDate(selectedDate, service.duration)}
                    </span>
                </div>
                <div className="flex justify-between">
                    <span className="text-[#6B7280]">Nhà vườn</span>
                    <span>{service.provider}</span>
                </div>
            </div>

            <div className="h-px bg-[#E5E7EB] my-4" />

            <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                    <span className="text-[#6B7280]">Phí dịch vụ</span>
                    <span>{service.price}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-[#6B7280]">Phí nền tảng (5%)</span>
                    <span>{platformFee.toLocaleString('vi-VN')} ₫</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-[#6B7280]">Phí nhận cây (Tạm tính)</span>
                    <span>50.000 ₫</span>
                </div>
            </div>

            <div className="h-px bg-[#E5E7EB] my-4" />

            <div className="flex justify-between font-semibold text-lg">
                <span>Tổng cộng</span>
                <span className="text-[#6D28D9]">{total.toLocaleString('vi-VN')} ₫</span>
            </div>

            <button
                onClick={() => router.push(`/customer-service-packages/booking/review?package=${packageSlug}`)}
                className="mt-6 w-full py-3.5 bg-[#6D28D9] hover:bg-[#5B21B6] text-white font-semibold rounded-2xl flex items-center justify-center gap-2"
            >
                Tiếp tục <ArrowRight className="w-5 h-5" />
            </button>
        </div>
    );
}