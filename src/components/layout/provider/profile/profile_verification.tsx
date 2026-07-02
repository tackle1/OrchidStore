import React from 'react';
import { ShieldCheck, CheckCircle2, Clock } from 'lucide-react';

export default function ProfileVerification() {
    return (
        <div className="bg-white rounded-2xl shadow-sm p-6 border border-[#E5E7EB]">
            <div className="flex items-center gap-2 mb-5">
                <ShieldCheck className="w-5 h-5 text-[#6D28D9]" />
                <h3 className="font-bold text-[#1F2937] text-[15px]">Trạng thái xác thực</h3>
            </div>
            <div className="space-y-4">
                <div className="flex justify-between items-center text-sm">
                    <span className="text-[#4B5563]">Giấy phép kinh doanh</span>
                    <span className="bg-[#E8F5E9] text-[#2E7D32] px-2.5 py-1 rounded-full text-[11px] font-semibold flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3" /> Đã duyệt</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                    <span className="text-[#4B5563]">Chứng chỉ chuyên môn</span>
                    <span className="bg-[#E8F5E9] text-[#2E7D32] px-2.5 py-1 rounded-full text-[11px] font-semibold flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3" /> Đã duyệt</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                    <span className="text-[#4B5563]">Thẩm định thực tế</span>
                    <span className="bg-[#F3F4F6] text-[#4B5563] px-2.5 py-1 rounded-full text-[11px] font-semibold flex items-center gap-1.5"><Clock className="w-3 h-3" /> Chờ lịch</span>
                </div>
            </div>
        </div>
    );
}
