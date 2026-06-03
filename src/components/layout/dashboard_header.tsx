'use client';

import { CalendarDays, ChevronDown } from 'lucide-react';

export default function DashboardHeader() {
    return (
        <div
            className="
                w-full
                flex
                items-start
                justify-between
                border-b
                border-[#E8E5F2]
                pb-6
            "
        >
            {/* Left */}
            <div>
                <h1
                    className="
                        text-[24px]
                        font-bold
                        text-[#1F2937]
                        leading-none
                    "
                >
                    Bảng điều khiển Provider
                </h1>

                <p
                    className="
                        mt-3
                        text-[14px]
                        text-[#6B7280]
                    "
                >
                    Tổng quan hoạt động chăm sóc và doanh thu của bạn.
                </p>
            </div>

            {/* Right */}
            <button
                type="button"
                className="
                    h-[52px]
                    px-5
                    rounded-[12px]
                    border
                    border-[#D8D3E8]
                    bg-white
                    flex
                    items-center
                    gap-3
                    text-[#374151]
                    font-semibold
                    text-[18px]
                    hover:bg-[#FAFAFC]
                    transition-colors
                "
            >
                <CalendarDays
                    size={22}
                    className="text-[#4B5563]"
                />

                <span>Tháng 10, 2023</span>

                <ChevronDown
                    size={20}
                    className="text-[#6B7280]"
                />
            </button>
        </div>
    );
}