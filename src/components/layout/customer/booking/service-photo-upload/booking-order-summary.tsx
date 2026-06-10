'use client';

import { ArrowRight } from 'lucide-react';
import { ServicePackage } from '../../../../../data/servicePackages';

interface BookingOrderSummaryProps {
    service: ServicePackage;
    packageSlug: string;
}

export default function BookingOrderSummary({ service, packageSlug }: BookingOrderSummaryProps) {
    // Lấy giá gốc từ service
    const priceNumber = parseInt(service.price.replace(/[^\d]/g, '')) || 0;

    // Các khoản phí
    const shippingFee = 50000;                    // Phí vận chuyển (có thể sau này lấy từ API)
    const platformFee = Math.round(priceNumber * 0.05); // Phí nền tảng 5%
    const total = priceNumber + shippingFee + platformFee;

    return (
        <div className="bg-white border border-[#E5E7EB] rounded-3xl p-6 sticky top-6 shadow-sm">

            <h3 className="font-semibold text-lg mb-4">Tạm tính đơn hàng</h3>

            {/* Thông tin gói dịch vụ */}
            <div className="flex gap-3 mb-4">
                <div className="w-14 h-14 rounded-2xl overflow-hidden border border-[#E5E7EB] flex-shrink-0">
                    <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="flex-1 min-w-0">
                    <p className="font-semibold text-[#1F2937] line-clamp-2">{service.title}</p>
                </div>
            </div>

            {/* Chi tiết phí */}
            <div className="space-y-3 text-sm mb-4">
                <div className="flex justify-between">
                    <span className="text-[#6B7280]">Gói chăm sóc</span>
                    <span className="font-medium">{priceNumber.toLocaleString('vi-VN')} ₫</span>
                </div>

                <div className="flex justify-between">
                    <span className="text-[#6B7280]">Phí vận chuyển (Dự kiến)</span>
                    <span className="font-medium">{shippingFee.toLocaleString('vi-VN')} ₫</span>
                </div>

                <div className="flex justify-between">
                    <span className="text-[#6B7280]">Phí nền tảng (5%)</span>
                    <span className="font-medium">{platformFee.toLocaleString('vi-VN')} ₫</span>
                </div>
            </div>

            <div className="h-px bg-[#E5E7EB] my-4" />

            {/* Tổng cộng */}
            <div className="flex justify-between items-center mb-1">
                <span className="font-semibold text-base">Tổng cộng</span>
                <span className="text-xl font-bold text-[#6D28D9]">
                    {total.toLocaleString('vi-VN')} ₫
                </span>
            </div>

            {/* Nút Tiếp tục */}
            <button
                onClick={() => {
                    window.location.href = `/customer-service-packages/booking/time?package=${packageSlug}`;
                }}
                className="mt-4 w-full py-3.5 bg-[#6D28D9] hover:bg-[#5B21B6] text-white font-semibold rounded-2xl flex items-center justify-center gap-2 transition-colors"
            >
                Tiếp tục <ArrowRight className="w-5 h-5" />
            </button>

            {/* Nút Lưu nháp */}
            <button className="mt-3 w-full py-3 border border-[#E5E7EB] text-[#374151] font-medium rounded-2xl hover:bg-gray-50 transition-colors">
                Lưu nháp
            </button>
        </div>
    );
}