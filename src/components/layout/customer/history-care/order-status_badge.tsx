'use client';

import { CheckCircle, SquareArrowRightExit } from 'lucide-react';
import { Order } from '../history-care/order-card';

interface OrderStatusBadgeProps {
    order: Order;
}

export default function OrderStatusBadge({ order }: OrderStatusBadgeProps) {
    if (order.status === 'in-progress') {
        return (
            <div className="flex items-center gap-1.5 px-3 py-1 bg-[#F3E8FF] text-[#6D28D9] text-xs font-medium rounded-full">
                <div className="w-2 h-2 bg-[#6D28D9] rounded-full"></div>
                {order.statusLabel}
            </div>
        );
    }

    if (order.status === 'check-in') {
        return (
            <div className="flex items-center gap-1.5 px-3 py-1 bg-[#E0E7FF] text-[#7B7487] text-xs font-medium rounded-full">
                <div className="w-2 h-2 bg-[#7B7487] rounded-full"></div>
                {order.statusLabel}
            </div>
        );
    }

    if (order.status === 'check-out') {
        return (
            <div className="flex items-center gap-1.5 px-3 py-1 bg-[#CCFBF1] text-[#0F766E] text-xs font-medium rounded-full">
                <SquareArrowRightExit className="w-3.5 h-3.5" />
                {order.statusLabel}
            </div>
        );
    }

    if (order.status === 'completed') {
        return (
            <div className="flex items-center gap-1.5 px-3 py-1 bg-[#DCFCE7] text-[#166534] text-xs font-medium rounded-full">
                <CheckCircle className="w-3.5 h-3.5" />
                {order.statusLabel}
            </div>
        );
    }

    return null;
}