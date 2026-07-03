import React from 'react';
import { Send } from 'lucide-react';

export default function ReportSubmit() {
    return (
        <div className="flex justify-end gap-4 mt-6">
            <button className="px-8 h-[46px] rounded-[10px] border border-[#10B981] text-[#10B981] font-bold text-[14px] hover:bg-[#F0FDF4] transition-colors bg-white">
                Lưu nháp
            </button>
            <button className="px-8 h-[46px] rounded-[10px] bg-[#6D28D9] text-white font-bold text-[14px] flex items-center gap-2 hover:bg-[#5B21B6] transition-colors shadow-md">
                <Send className="w-4 h-4" />
                Gửi báo cáo
            </button>
        </div>
    );
}
