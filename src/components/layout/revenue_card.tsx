'use client';

import { Info } from 'lucide-react';

export default function RevenueCard() {
    return (
        <div className="bg-gradient-to-br from-[#7A47D5] to-[#630ED4] 
                        rounded-2xl px-8 py-8 text-white
                        w-full max-w-[420px] shadow-lg border border-white/30">

            {/* Header */}
            <div className="mb-2">
                <p className="text-sm text-white/90 font-medium">
                    Số dư chờ quyết toán
                </p>
            </div>

            {/* Số tiền */}
            <div className="mb-4">
                <h2 className="text-[34px] leading-[38px] font-bold tracking-[-0.8px]">
                    12.500.000đ
                </h2>
            </div>

            {/* Thông tin ngày chuyển - Pill tối hơn */}
            <div className="mb-6">
                <div className="inline-flex items-center gap-2 bg-[#4C0BA8] text-white text-xs px-3 py-1.5 rounded-full">
                    <div className="w-4 h-4 rounded-full bg-white/25 flex items-center justify-center">
                        <Info className="w-3 h-3 text-white" />
                    </div>
                    <span>Sẽ được chuyển vào ngày 15/10/2023</span>
                </div>
            </div>

            {/* Nút */}
            <button
                type='button'
                className="w-full bg-white text-[#630ED4] font-semibold py-2.5 rounded-xl text-sm hover:bg-gray-100 transition active:scale-[0.985]"
                onClick={() => console.log('Chi tiết dòng tiền clicked')}
            >
                Chi tiết dòng tiền
            </button>
        </div>
    );
}