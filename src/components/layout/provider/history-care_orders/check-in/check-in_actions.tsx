import React from 'react';
import { Send } from 'lucide-react';

export default function CheckInActions() {
    return (
        <div className="flex flex-col gap-3">
            <button className="w-full h-[48px] bg-[#6D28D9] text-white rounded-[12px] font-semibold text-[14px] flex items-center justify-center gap-2 hover:bg-[#5B21B6] transition-colors shadow-md">
                <Send className="w-4 h-4" />
                Gửi kết quả check-in
            </button>
            <button className="w-full h-[48px] bg-white text-[#374151] border border-[#D1D5DB] rounded-[12px] font-semibold text-[14px] flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm">
                Lưu nháp
            </button>
        </div>
    );
}
