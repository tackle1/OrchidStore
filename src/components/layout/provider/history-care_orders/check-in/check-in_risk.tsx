import React from 'react';
import { AlertTriangle } from 'lucide-react';

export default function CheckInRisk() {
    return (
        <div className="bg-white rounded-[20px] p-6 shadow-sm border border-[#E5E7EB]">
            <div className="flex justify-between items-center mb-5">
                <div className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-[#DC2626] flex-shrink-0" />
                    <h2 className="text-[16px] font-bold text-[#DC2626]">High Risk Flag</h2>
                </div>
                {/* Toggle Switch */}
                <div className="w-11 h-6 bg-[#D1D5DB] rounded-full flex items-center p-0.5 cursor-pointer">
                    <div className="w-5 h-5 bg-white rounded-full shadow-sm"></div>
                </div>
            </div>
            <div className="bg-[#FEF2F2] border border-[#FCA5A5] rounded-xl p-4 text-[#991B1B] text-[12px] leading-relaxed font-medium">
                Notice: 'High Risk flag chỉ ghi nhận tình trạng rủi ro ban đầu, không miễn trách nhiệm tuyệt đối.'
            </div>
        </div>
    );
}
