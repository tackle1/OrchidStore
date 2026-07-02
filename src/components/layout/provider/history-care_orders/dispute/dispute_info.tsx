import React from 'react';
import { Info } from 'lucide-react';

export default function DisputeInfo() {
    return (
        <div className="w-full lg:w-[320px] flex-shrink-0">
            <div className="bg-white rounded-[20px] p-6 shadow-sm border border-[#E5E7EB] h-full">
                <div className="flex items-center gap-2 mb-6">
                    <div className="w-6 h-6 rounded-full bg-[#F3E8FF] flex items-center justify-center">
                        <Info className="w-4 h-4 text-[#6D28D9]" />
                    </div>
                    <h2 className="text-[16px] font-bold text-[#1F2937]">Thông tin tranh chấp</h2>
                </div>
                
                <div className="space-y-4">
                    <div className="pb-4 border-b border-[#F3F4F6]">
                        <div className="text-[13px] text-[#6B7280] mb-1">Mã khiếu nại</div>
                        <div className="font-bold text-[#1F2937]">#DISP-2023-8892</div>
                    </div>
                    <div className="pb-4 border-b border-[#F3F4F6]">
                        <div className="text-[13px] text-[#6B7280] mb-2">Khách hàng</div>
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-[#10B981] text-white flex items-center justify-center text-[10px] font-bold">
                                NB
                            </div>
                            <span className="font-medium text-[#1F2937] text-[14px]">Nguyễn Trần Bảo</span>
                        </div>
                    </div>
                    <div className="pb-4 border-b border-[#F3F4F6]">
                        <div className="text-[13px] text-[#6B7280] mb-1">Đối tượng (Lan)</div>
                        <div className="font-bold text-[#6D28D9] text-[14px]">Phi Điệp 5 Cánh Trắng (Chậu A2)</div>
                    </div>
                    <div>
                        <div className="text-[13px] text-[#6B7280] mb-1">Phân loại</div>
                        <div className="font-medium text-[#1F2937] text-[14px] leading-snug">Tình trạng cây suy giảm sau chăm sóc</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
