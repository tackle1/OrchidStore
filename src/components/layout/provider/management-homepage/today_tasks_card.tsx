'use client';

import { MapPin, FileText, Calendar, ArrowRight, ListChecks } from 'lucide-react';

export default function TodayTasksCard() {
    return (
        <div className="bg-white rounded-2xl border border-gray-200 px-10 py-10 w-full max-w-[800px]">

            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#6D28D9] flex items-center justify-center">
                        <ListChecks className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-[17px] font-semibold text-[#111827]">Nhiệm vụ hôm nay</h3>
                </div>

                <button className="text-[#6D28D9] text-sm font-medium flex items-center gap-1 hover:underline">
                    Xem tất cả
                    <ArrowRight className="w-4 h-4" />
                </button>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 mb-2" />

            {/* Task Items - Đã chỉnh grid và spacing */}

            {/* Task 1 */}
            <div className="flex items-center justify-between py-[14px]">
                <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#7CF994] flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-[#007230]" />
                    </div>
                    <span className="text-[#1F2937] text-[15px]">Lịch check-in hôm nay</span>
                </div>
                <div className="bg-[#006E2D] text-white text-xs font-semibold w-6 h-6 rounded-full flex items-center justify-center">
                    3
                </div>
            </div>

            {/* Task 2 */}
            <div className="flex items-center justify-between py-[14px]">
                <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#FFDAD6] flex items-center justify-center">
                        <FileText className="w-5 h-5 text-[#BA1A1A]" />
                    </div>
                    <span className="text-[#1F2937] text-[15px]">Báo cáo cần gửi</span>
                </div>
                <div className="bg-[#BA1A1A] text-white text-xs font-semibold w-6 h-6 rounded-full flex items-center justify-center">
                    5
                </div>
            </div>

            {/* Task 3 */}
            <div className="flex items-center justify-between py-[14px]">
                <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#FEF3C7] flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-[#D97706]" />
                    </div>
                    <span className="text-[#1F2937] text-[15px]">Check-out sắp đến hạn</span>
                </div>
                <div className="bg-[#ED6C02] text-white text-xs font-semibold w-6 h-6 rounded-full flex items-center justify-center">
                    1
                </div>
            </div>

        </div>
    );
}