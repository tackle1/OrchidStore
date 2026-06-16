'use client';

import { useRouter } from 'next/navigation';
import { Building2, Star } from 'lucide-react';
import OrderStatusBadge from '../history-care/order-status_badge';

export interface Order {
    id: string;
    orchidName: string;
    status: 'in-progress' | 'check-in' | 'completed';
    statusLabel: string;
    provider: string;
    servicePackage: string;
    orderDate: string;
    nextAction?: string;
    nextActionIcon?: React.ReactNode;
    rating?: number;
}

interface OrderCardProps {
    order: Order;
}

export default function OrderCard({ order }: OrderCardProps) {
    const router = useRouter();

    const handleViewDetail = () => {
        const slug = order.id.toLowerCase(); // ví dụ: lch-9830

        if (order.status === 'check-in') {
            // Chuyển đến trang Xác nhận Check-in
            router.push(`/history-care/check-in/${slug}`);
        } else {
            // Các trạng thái khác (in-progress, completed) → có thể dẫn đến trang chi tiết chung
            router.push(`/history-care/detail/${slug}`);
        }
    };

    return (
        <div className="bg-white border border-[#E5E7EB] rounded-3xl p-6 hover:shadow-md transition-shadow">

            {/* Order ID + Status */}
            <div className="flex items-center justify-between mb-4">
                <div>
                    <p className="text-sm text-[#6B7280]">Mã đơn: #{order.id}</p>
                    <h3 className="font-semibold text-lg mt-0.5">{order.orchidName}</h3>
                </div>
                <OrderStatusBadge order={order} />
            </div>

            {/* Provider */}
            <div className="flex items-center gap-2 mb-4 p-3 bg-[#F8F9FC] rounded-2xl">
                <div className="w-8 h-8 bg-white rounded-xl flex items-center justify-center border border-[#E5E7EB]">
                    <Building2 className="w-4 h-4 text-[#6B7280]" />
                </div>
                <div>
                    <p className="text-xs text-[#6B7280]">Nhà cung cấp</p>
                    <p className="font-medium text-sm">{order.provider}</p>
                </div>
            </div>

            {/* Service Info */}
            <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                <div>
                    <p className="text-[#6B7280] text-xs">Gói dịch vụ</p>
                    <p className="font-medium mt-0.5">{order.servicePackage}</p>
                </div>
                <div>
                    <p className="text-[#6B7280] text-xs">Ngày đặt</p>
                    <p className="font-medium mt-0.5">{order.orderDate}</p>
                </div>
            </div>

            {/* Next Action / Rating */}
            {order.nextAction && (
                <div className="flex items-center gap-2 text-sm mb-4 text-[#6B7280]">
                    {order.nextActionIcon}
                    <span>{order.nextAction}</span>
                </div>
            )}

            {order.rating && (
                <div className="flex items-center gap-2 text-sm mb-4 text-[#16A34A]">
                    <Star className="w-4 h-4 fill-current" />
                    <span>Đã đánh giá ({order.rating} sao)</span>
                </div>
            )}

            {/* Action Button - ĐÃ CẬP NHẬT */}
            <button
                onClick={handleViewDetail}
                className="w-full mt-2 py-2.5 text-sm font-medium text-[#6D28D9] bg-[#F3E8FF] hover:bg-[#EDE4FF] rounded-2xl transition-colors"
            >
                Xem chi tiết
            </button>
        </div>
    );
}