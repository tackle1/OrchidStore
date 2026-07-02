import React from 'react';
import { Camera } from 'lucide-react';

export default function CheckInImages() {
    return (
        <div className="bg-white rounded-[20px] p-6 shadow-sm border border-[#E5E7EB]">
            <div className="flex justify-between items-center mb-5">
                <h2 className="text-[16px] font-bold text-[#1F2937]">Hình ảnh ghi nhận (Bắt buộc)</h2>
                <span className="bg-[#FEE2E2] text-[#DC2626] text-[12px] font-semibold px-2.5 py-1 rounded-full">
                    0/6 đã tải lên
                </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {['Toàn cảnh', 'Lá', 'Rễ', 'Thân', 'Hoa / nụ', 'Vấn đề bất thường'].map((label, i) => (
                    <div key={i} className="aspect-[4/3] sm:aspect-square rounded-[14px] border-2 border-dashed border-[#D1D5DB] bg-[#F8F9FA] flex flex-col p-2 cursor-pointer hover:bg-gray-50 transition-colors group relative">
                        <div className="flex flex-col items-center justify-center flex-1">
                            <Camera className="w-6 h-6 text-[#9CA3AF] mb-1 group-hover:text-[#6D28D9] transition-colors" />
                            <span className="text-[12px] text-[#6B7280] group-hover:text-[#6D28D9] transition-colors">Thêm ảnh</span>
                        </div>
                        <div className="bg-white border border-[#E5E7EB] rounded-lg py-1.5 text-center text-[12px] font-semibold text-[#374151]">
                            {label}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
