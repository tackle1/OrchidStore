'use client';

import { Calendar } from 'lucide-react';

interface CareScheduleCardProps {
    duration: string;
    selectedDate: string;
    onDateChange: (date: string) => void;
    calculateEndDate: (startDate: string, duration: string) => string;
    formatDate: (dateString: string) => string;
}

export default function CareScheduleCard({
    duration,
    selectedDate,
    onDateChange,
    calculateEndDate,
    formatDate,
}: CareScheduleCardProps) {
    return (
        <div className="bg-white rounded-3xl border border-[#E5E7EB] p-6">
            <div className="flex items-center gap-2 mb-4">
                <Calendar className="w-5 h-5 text-[#6D28D9]" />
                <span className="font-semibold">Thời gian chăm sóc</span>
            </div>

            <div className="space-y-4">
                {/* Gói chăm sóc */}
                <div className="flex items-center justify-between bg-[#F8F9FC] px-4 py-3 rounded-2xl">
                    <span className="text-[#6B7280]">Gói chăm sóc</span>
                    <span className="font-semibold text-[#1F2937]">{duration}</span>
                </div>

                {/* Ngày bắt đầu */}
                <div>
                    <label htmlFor="start-date" className="block text-sm font-medium mb-2">
                        Ngày bắt đầu chăm sóc
                    </label>
                    <input
                        id="start-date"
                        type="date"
                        value={selectedDate}
                        onChange={(e) => onDateChange(e.target.value)}
                        className="w-full border border-[#E5E7EB] rounded-2xl px-4 py-3 text-lg"
                    />
                </div>

                {/* Ngày kết thúc */}
                <div>
                    <label className="block text-sm font-medium mb-2">Ngày kết thúc chăm sóc</label>
                    <div className="w-full border border-[#E5E7EB] bg-[#F8F9FC] rounded-2xl px-4 py-3 text-lg font-medium text-[#1F2937]">
                        {calculateEndDate(selectedDate, duration)}
                    </div>
                    <p className="text-xs text-[#6B7280] mt-1">
                        Thời gian chăm sóc được tính theo duration của gói ({duration})
                    </p>
                </div>
            </div>
        </div>
    );
}