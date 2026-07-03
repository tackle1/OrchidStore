import React from 'react';
import { CheckSquare, Check } from 'lucide-react';

export default function CheckoutHealth() {
    return (
        <div className="bg-white rounded-[20px] p-6 shadow-sm border border-[#E5E7EB]">
            <div className="flex items-center gap-2 mb-5">
                <CheckSquare className="w-5 h-5 text-[#6D28D9]" />
                <h2 className="text-[18px] font-bold text-[#1F2937]">Đánh giá sức khỏe cuối cùng</h2>
            </div>

            <div className="space-y-4">
                {/* Item 1 */}
                <div className="border border-[#E5E7EB] rounded-[14px] p-4 flex gap-4 bg-white shadow-sm">
                    <div className="mt-0.5">
                        <div className="w-5 h-5 rounded bg-[#10B981] flex items-center justify-center">
                            <Check className="w-3.5 h-3.5 text-white stroke-[3px]" />
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="flex justify-between items-start mb-1">
                            <h3 className="font-bold text-[#1F2937] text-[14px]">Tình trạng rễ tơ</h3>
                            <span className="px-2 py-0.5 rounded-[4px] bg-[#DCFCE7] text-[#16A34A] text-[10px] font-black tracking-wide">ĐẠT</span>
                        </div>
                        <p className="text-[13px] text-[#6B7280] leading-snug">Phát triển mạnh, đầu rễ xanh, không nấm bệnh.</p>
                    </div>
                </div>
                {/* Item 2 */}
                <div className="border border-[#E5E7EB] rounded-[14px] p-4 flex gap-4 bg-white shadow-sm">
                    <div className="mt-0.5">
                        <div className="w-5 h-5 rounded bg-[#10B981] flex items-center justify-center">
                            <Check className="w-3.5 h-3.5 text-white stroke-[3px]" />
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="flex justify-between items-start mb-1">
                            <h3 className="font-bold text-[#1F2937] text-[14px]">Độ căng của lá (Turgor)</h3>
                            <span className="px-2 py-0.5 rounded-[4px] bg-[#DCFCE7] text-[#16A34A] text-[10px] font-black tracking-wide">ĐẠT</span>
                        </div>
                        <p className="text-[13px] text-[#6B7280] leading-snug">Lá phục hồi độ cứng, bề mặt bóng khỏe.</p>
                    </div>
                </div>
                {/* Item 3 */}
                <div className="border border-[#E5E7EB] rounded-[14px] p-4 flex gap-4 bg-white shadow-sm">
                    <div className="mt-0.5">
                        <div className="w-5 h-5 rounded bg-[#10B981] flex items-center justify-center">
                            <Check className="w-3.5 h-3.5 text-white stroke-[3px]" />
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="flex justify-between items-start mb-1">
                            <h3 className="font-bold text-[#1F2937] text-[14px]">Giá thể & Chậu</h3>
                            <span className="px-2 py-0.5 rounded-[4px] bg-[#DCFCE7] text-[#16A34A] text-[10px] font-black tracking-wide">ĐẠT</span>
                        </div>
                        <p className="text-[13px] text-[#6B7280] leading-snug">Đã thay mới Dớn Chi-lê cao cấp, chậu thoát nước tốt.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
