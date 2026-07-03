import React from 'react';
import { Flower2, Plus } from 'lucide-react';

export default function MyOrchidsHeader() {
    return (
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
                <h1 className="text-[28px] font-bold text-[#111827] flex items-center gap-2">
                    Lan của tôi <Flower2 className="w-6 h-6 text-[#6D28D9]" />
                </h1>
                <p className="text-[#6B7280] text-[14px] mt-1">
                    Quản lý danh sách hoa lan đang được chăm sóc tại vườn
                </p>
            </div>
            <button className="h-11 px-5 rounded-xl bg-[#6D28D9] text-white font-bold text-[14px] flex items-center gap-2 hover:bg-[#5B21B6] transition-colors shadow-sm">
                <Plus className="w-5 h-5" />
                Thêm lan mới
            </button>
        </div>
    );
}
