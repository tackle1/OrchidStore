import React from 'react';
import { Calendar } from 'lucide-react';

export default function CheckInHeader() {
    return (
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-8">
            <div>
                <h1 className="text-[32px] font-bold text-[#111827] mb-1">Kiểm tra check-in</h1>
                <p className="text-[#6B7280] text-[14px]">Ghi nhận tình trạng hiện tại của lan lúc tiếp nhận chăm sóc.</p>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-[#F3E8FF] border border-[#E9D5FF] rounded-lg text-[#6D28D9] font-medium text-[14px] shadow-sm">
                <Calendar className="w-4 h-4" />
                24 Oct 2023
            </div>
        </div>
    );
}
