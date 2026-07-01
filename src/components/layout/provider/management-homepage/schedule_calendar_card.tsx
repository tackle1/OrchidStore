'use client';

import { MoreHorizontal, Clock, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ScheduleCalendarCard() {
    const days = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'];

    const dates = [
        { day: 28, currentMonth: false, selected: false },
        { day: 29, currentMonth: false, selected: false },
        { day: 30, currentMonth: false, selected: false },
        { day: 1, currentMonth: true, selected: false },
        { day: 2, currentMonth: true, selected: false },
        { day: 3, currentMonth: true, selected: true },
        { day: 4, currentMonth: true, selected: false },
    ];

    return (
        // thêm flex justify-end ở đây
        <div className="flex justify-end">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 px-8 py-8 w-full max-w-[420px]">
                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                    <h3 className="text-xl font-semibold text-[#111827]">Lịch chăm sóc</h3>
                    <button className="text-gray-400 hover:text-gray-600" title="Thêm tùy chọn">
                        <MoreHorizontal className="w-5 h-5" />
                    </button>
                </div>

                {/* Calendar Header */}
                <div className="flex items-center justify-between mb-6 px-1">
                    <button className="p-1 hover:bg-gray-100 rounded-full" title="Tháng trước">
                        <ChevronLeft className="w-4 h-4 text-gray-500" />
                    </button>
                    <span className="font-medium text-[#374151]">Tháng 10, 2023</span>
                    <button className="p-1 hover:bg-gray-100 rounded-full" title="Tháng sau">
                        <ChevronRight className="w-4 h-4 text-gray-500" />
                    </button>
                </div>

                {/* Calendar Days */}
                {/* Calendar Days */}
                <div className="flex justify-between mb-2">
                    {days.map((day, index) => (
                        <div
                            key={index}
                            className="flex-1 text-xs text-gray-500 font-medium text-center"
                        >
                            {day}
                        </div>
                    ))}
                </div>

                {/* Calendar Dates */}
                <div className="flex justify-between mb-6">
                    {dates.map((date, index) => (
                        <div key={index} className="flex-1 py-1 text-center">
                            <div
                                className={`
          w-9 h-9 mx-auto flex items-center justify-center rounded-full text-sm
          ${date.selected
                                        ? 'bg-[#6D28D9] text-white font-semibold'
                                        : date.currentMonth
                                            ? 'text-[#111827] hover:bg-gray-100'
                                            : 'text-gray-400'
                                    }
        `}
                            >
                                {date.day}
                            </div>
                            {/* Chấm màu dưới ngày */}
                            {date.day === 2 && (
                                <div className="w-1.5 h-1.5 bg-[#006E2D] rounded-full mt-0.5 ml-5.5"></div>
                            )}
                            {date.day === 4 && (
                                <div className="w-1.5 h-1.5 bg-[#BA1A1A] rounded-full mt-0.5 ml-5.5"></div>
                            )}
                        </div>
                    ))}
                </div>
                {/* Upcoming Event */}
                <div>
                    {/* Divider */}
                    <div className="w-full border-b border-gray-200 mb-3" />

                    <p className="text-sm font-medium text-[#374151] mb-3">Sắp diễn ra</p>

                    <div className="flex gap-3 hover:shadow-sm transition">
                        <div className="flex-shrink-0">
                            <div className="bg-[#7CF994] border border-[#006E2D]-200 text-[#007230] rounded-xl px-6 py-8 text-xs  w-[46px] h-[46px]  flex flex-col items-center justify-center leading-none">
                                <span className="text-[16px] font-bold">03</span>
                                <span className="text-[10px] -mb-1 ">Th 10</span>
                            </div>
                        </div>

                        <div className="flex-1 min-w-0">
                            <p className="font-medium text-[#111827] text-[15px] leading-snug">
                                Kiểm tra độ ẩm định kỳ
                            </p>
                            <div className="flex items-center gap-1.5 mt-1 text-gray-500 text-sm">
                                <Clock className="w-4 h-4" />
                                <span>14:00 - 15:30</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}