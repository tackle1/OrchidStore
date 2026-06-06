'use client';

import Link from 'next/link';
import { Clock, FileText, Leaf, Truck, Calendar } from 'lucide-react';

interface ServiceSidebarProps {
    price: string;
    duration: string;
    reportFrequency: string;
    packageId: string;
}

export default function ServiceSidebar({ price, duration, reportFrequency, packageId }: ServiceSidebarProps) {
    return (
        <div className="bg-white border border-[#E5E7EB] rounded-3xl p-6 sticky top-6 shadow-sm">
            <div className="mb-4">
                <p className="text-sm font-medium text-[#6B7280]">PHÍ DỊCH VỤ</p>
                <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-[32px] font-bold text-[#6D28D9] tracking-tight">
                        {price.replace('đ', '')}
                    </span>
                    <span className="text-lg text-[#6B7280]">VND / tháng</span>
                </div>
            </div>

            <div className="h-px bg-[#E5E7EB] my-4" />

            <div className="space-y-4 mb-6 text-sm">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-[#4B5563]">
                        <Clock className="w-4 h-4" /> <span>Thời lượng tối thiểu</span>
                    </div>
                    <span className="font-medium text-[#1F2937]">{duration}</span>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-[#4B5563]">
                        <FileText className="w-4 h-4" /> <span>Tần suất báo cáo</span>
                    </div>
                    <span className="font-medium text-[#1F2937]">{reportFrequency}</span>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-[#4B5563]">
                        <Leaf className="w-4 h-4" /> <span>Số cây tối đa/gói</span>
                    </div>
                    <span className="font-medium text-[#1F2937]">1 Chậu (Cỡ vừa)</span>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-[#4B5563]">
                        <Truck className="w-4 h-4" /> <span>Phí nhận/trả cây</span>
                    </div>
                    <span className="inline-flex items-center px-3 py-0.5 text-xs font-medium bg-[#D1FAE5] text-[#065F46] rounded-full">
                        Miễn phí &lt; 10km
                    </span>
                </div>
            </div>

            <Link
                href={`/customer/booking?packageId=${packageId}`}
                className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#6D28D9] hover:bg-[#5B21B6] text-white font-semibold rounded-2xl text-[15px] transition-colors"
            >
                <Calendar className="w-4 h-4" />
                Đặt dịch vụ chăm sóc
            </Link>

            <p className="text-center text-xs text-[#6B7280] mt-4">
                Không tính phí cho đến khi xác nhận tình trạng cây.
            </p>
        </div>
    );
}