'use client';

import { AlertCircle } from 'lucide-react';
import { ServicePackage } from '../../../../../data/servicePackages';
import Link from 'next/link';

interface OrderSummaryProps {
    service: ServicePackage;
    packageSlug: string;
}

export default function OrderSummary({ service, packageSlug }: OrderSummaryProps) {
    const priceNumber = parseInt(service.price.replace(/[^\d]/g, '')) || 0;
    const platformFee = Math.round(priceNumber * 0.05);
    const total = priceNumber + platformFee;

    return (
        <div className="bg-white border border-[#E5E7EB] rounded-3xl p-6 sticky top-6 shadow-sm">
            <h3 className="font-semibold mb-5 text-lg">Tạm tính đơn hàng</h3>

            <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                    <span className="text-[#6B7280]">Gói chăm sóc</span>
                    <span className="font-medium">{priceNumber.toLocaleString('vi-VN')}đ</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-[#6B7280]">Phí nhận cây (Dự kiến)</span>
                    <span className="font-medium">0đ</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-[#6B7280]">Phí nền tảng (5%)</span>
                    <span className="font-medium">{platformFee.toLocaleString('vi-VN')}đ</span>
                </div>
            </div>

            <div className="h-px bg-[#E5E7EB] my-4" />

            <div className="flex justify-between items-end">
                <span className="font-semibold text-base">Tổng tạm tính</span>
                <span className="text-xl font-bold text-[#6D28D9]">{total.toLocaleString('vi-VN')}đ</span>
            </div>
            <p className="text-xs text-[#6B7280] mt-1 text-right">Đã bao gồm VAT</p>

            <div className="mt-5 p-3.5 bg-[#F5F3FF] rounded-2xl flex gap-2 text-xs text-[#5B21B6]">
                <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <p>Lưu ý: Phí vận chuyển có thể thay đổi sau khi nhân viên khảo sát thực tế tại vườn.</p>
            </div>
        </div>
    );
}