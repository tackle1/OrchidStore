'use client';

import { RefreshCw, Info } from 'lucide-react';

export default function TotalRefundCard() {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#F0ECF7]">
            <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#FEE2E2] flex items-center justify-center flex-shrink-0">
                    <RefreshCw className="w-5 h-5 text-[#DC2626]" />
                </div>
                <span className="font-semibold text-[#374151]">Tổng hoàn tiền</span>
            </div>

            <div className="text-3xl font-bold text-[#111827] mb-1">
                15,400,000 ₫
            </div>

            <div className="flex items-center gap-1.5 text-sm text-[#6B7280]">
                <Info className="w-3.5 h-3.5" />
                <span>12 yêu cầu hoàn tiền</span>
            </div>
        </div>
    );
}