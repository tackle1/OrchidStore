'use client';

import { ArrowLeft } from 'lucide-react';

interface CheckoutNavbarProps {
    orderId: string;
}

export default function CheckoutNavbar({ orderId }: CheckoutNavbarProps) {
    return (
        <div className="bg-white border-b border-[#E5E7EB] px-6 py-4">
            <div className="max-w-5xl mx-auto flex items-center justify-between">
                {/* Left */}
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => window.history.back()}
                        className="flex items-center text-[#6B7280] hover:text-[#111827] transition"
                        aria-label="Quay lại"
                    >
                        <ArrowLeft className="w-5 h-5" />
                    </button>
                    <span className="text-xl font-bold text-[#7C3AED]">LanCare Hub</span>
                </div>

                {/* Right: Order ID */}
                <div className="px-4 py-1.5 bg-[#F3E8FF] text-[#6D28D9] text-sm font-medium rounded-full">
                    ID Gói: #{orderId}
                </div>
            </div>
        </div>
    );
}