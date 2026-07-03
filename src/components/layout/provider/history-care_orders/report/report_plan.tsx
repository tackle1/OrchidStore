import React from 'react';
import { CalendarDays } from 'lucide-react';

export default function ReportPlan() {
    return (
        <div className="mb-8">
            <h3 className="font-bold text-[#1F2937] text-[16px] mb-3">Kế hoạch chăm sóc tiếp theo</h3>
            <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                    <CalendarDays className="w-5 h-5 text-[#6B7280]" />
                </div>
                <input 
                    type="text" 
                    className="w-full border border-[#D1D5DB] rounded-[10px] py-[14px] pl-[44px] pr-4 text-[14px] text-[#1F2937] placeholder:text-[#9CA3AF] outline-none focus:border-[#6D28D9] focus:ring-1 focus:ring-[#6D28D9]"
                    placeholder="VD: Phun thuốc phòng nấm vào 3 ngày tới"
                />
            </div>
        </div>
    );
}
