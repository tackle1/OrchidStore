'use client';

import { FileText } from 'lucide-react';

export default function NurseryNote() {
    return (
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-[#E5E7EB]">
            <div className="flex items-center gap-2 mb-4">
                <FileText className="w-5 h-5 text-[#7C3AED]" />
                <h3 className="font-semibold text-[#111827] text-lg">Ghi chú từ nhà vườn</h3>
            </div>

            <div className="bg-[#F3E8FF] rounded-2xl p-4">
                <div className="text-sm text-[#4C1D95] leading-relaxed italic">
                    “Cây lan đã phát triển tốt về mặt rễ khỏe. Lá cứng cáp, không có dấu hiệu nấm bệnh.
                    Khách hàng mang về nên để chỗ thoáng mát, tránh nắng gắt trực tiếp trong tuần đầu tiên.
                    Tưới nước 2 ngày/lần. Cảm ơn quý khách đã tin tưởng dịch vụ.”
                </div>

                <div className="h-px bg-[#CCC3D8] my-4" />

                <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-[#7C3AED] text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                        HV
                    </div>
                    <div>
                        <div className="font-semibold text-[#111827]">Vườn Lan Hoa Việt</div>
                        <div className="text-xs text-[#6B7280]">Chuyên gia chăm sóc</div>
                    </div>
                </div>
            </div>
        </div>
    );
}