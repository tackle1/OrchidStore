import React from 'react';

export default function CheckInNotes() {
    return (
        <div className="bg-white rounded-[20px] p-6 shadow-sm border border-[#E5E7EB]">
            <h2 className="text-[16px] font-bold text-[#1F2937] mb-4">Ghi chú bất thường</h2>
            <textarea 
                rows={4}
                placeholder="Nhập chi tiết các vấn đề bất thường (nếu có)..."
                className="w-full p-4 rounded-xl border border-[#D1D5DB] bg-[#F8F9FA] focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all text-[14px] text-[#1F2937] resize-none placeholder-gray-400"
            />
        </div>
    );
}
