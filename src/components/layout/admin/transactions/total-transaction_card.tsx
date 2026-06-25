'use client';

import { Wallet, TrendingUp } from 'lucide-react';

export default function TotalTransactionCard() {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#F0ECF7]">
            <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#6D28D9] flex items-center justify-center">
                    <Wallet className="w-6 h-6 text-white" />
                </div>
                <span className="font-semibold text-[#374151]">Tổng tiền giao dịch</span>
            </div>

            <div className="text-3xl font-bold text-[#111827] mb-1">
                1,245,000,000 ₫
            </div>

            <div className="flex items-center gap-1.5 text-sm text-[#10B981]">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>+12.5% so với tháng trước</span>
            </div>
        </div>
    );
}