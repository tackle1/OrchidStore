import React from 'react';

export default function ReportActions() {
    return (
        <div className="mb-8">
            <h3 className="font-bold text-[#1F2937] text-[16px] mb-3">Hành động đã thực hiện</h3>
            <div className="flex flex-wrap gap-3">
                <button className="px-5 py-2 rounded-full bg-[#8B5CF6] text-white text-[14px] font-semibold shadow-sm hover:bg-[#7C3AED] transition-colors">
                    Tưới nước
                </button>
                <button className="px-5 py-2 rounded-full border border-[#D1D5DB] text-[#4B5563] text-[14px] font-semibold shadow-sm hover:bg-gray-50 transition-colors bg-white">
                    Bón phân
                </button>
                <button className="px-5 py-2 rounded-full bg-[#8B5CF6] text-white text-[14px] font-semibold shadow-sm hover:bg-[#7C3AED] transition-colors">
                    Vệ sinh lá
                </button>
                <button className="px-5 py-2 rounded-full border border-dashed border-[#C4B5FD] text-[#6D28D9] text-[14px] font-semibold bg-white hover:bg-[#F5F3FF] transition-colors">
                    + Thêm hành động
                </button>
            </div>
        </div>
    );
}
