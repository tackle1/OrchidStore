import React from 'react';
import { Leaf, Sprout, ChevronDown } from 'lucide-react';

export default function CheckInEvaluation() {
    return (
        <div className="bg-white rounded-[20px] p-6 shadow-sm border border-[#E5E7EB]">
            <h2 className="text-[16px] font-bold text-[#1F2937] mb-6">Đánh giá chi tiết</h2>
            
            <div className="space-y-6">
                {/* Lá */}
                <div className="flex justify-between items-center pb-4 border-b border-[#F3F4F6]">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#ECFDF5] flex items-center justify-center">
                            <Leaf className="w-4 h-4 text-[#10B981]" />
                        </div>
                        <span className="font-semibold text-[#1F2937] text-[14px]">Lá</span>
                    </div>
                    <div className="flex bg-[#F3F4F6] rounded-lg p-1 border border-[#E5E7EB]">
                        <button className="px-5 py-1.5 bg-white rounded-md text-[#6D28D9] font-bold text-[13px] shadow-sm">Tốt</button>
                        <button className="px-5 py-1.5 text-[#4B5563] font-medium text-[13px] hover:text-[#1F2937]">Héo</button>
                    </div>
                </div>
                
                {/* Rễ */}
                <div className="flex justify-between items-center pb-4 border-b border-[#F3F4F6]">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#F3E8FF] flex items-center justify-center">
                            <Sprout className="w-4 h-4 text-[#7C3AED]" />
                        </div>
                        <span className="font-semibold text-[#1F2937] text-[14px]">Rễ</span>
                    </div>
                    <div className="flex bg-[#F3F4F6] rounded-lg p-1 border border-[#E5E7EB]">
                        <button className="px-5 py-1.5 bg-white rounded-md text-[#6D28D9] font-bold text-[13px] shadow-sm">Khỏe</button>
                        <button className="px-5 py-1.5 text-[#4B5563] font-medium text-[13px] hover:text-[#1F2937]">Yếu</button>
                    </div>
                </div>

                {/* Checkboxes grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <label className="flex items-center gap-3 p-3 rounded-xl border border-[#D1D5DB] cursor-pointer hover:bg-gray-50 transition-colors">
                        <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#6D28D9] focus:ring-[#6D28D9]" />
                        <span className="text-[14px] text-[#374151]">Thân bình thường</span>
                    </label>
                    <label className="flex items-center gap-3 p-3 rounded-xl border border-[#D1D5DB] cursor-pointer hover:bg-gray-50 transition-colors">
                        <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#6D28D9] focus:ring-[#6D28D9]" />
                        <span className="text-[14px] text-[#374151]">Có Hoa/Nụ</span>
                    </label>
                    <label className="flex items-center gap-3 p-3 rounded-xl border border-[#D1D5DB] cursor-pointer hover:bg-gray-50 transition-colors">
                        <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#6D28D9] focus:ring-[#6D28D9]" />
                        <span className="text-[14px] text-[#374151]">Phát hiện Sâu bệnh</span>
                    </label>
                    <div className="flex items-center justify-between p-3 rounded-xl border border-[#D1D5DB] cursor-pointer hover:bg-gray-50 transition-colors">
                        <span className="text-[14px] text-[#374151]">Độ ẩm</span>
                        <div className="flex items-center gap-1 text-[#6D28D9] font-medium text-[13px]">
                            Bình thường <ChevronDown className="w-4 h-4" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
