import React from 'react';
import { PenLine, LogOut } from 'lucide-react';

export default function CheckoutAdvice() {
    return (
        <div className="bg-white rounded-[20px] p-6 shadow-sm border border-[#E5E7EB] flex-1 flex flex-col min-h-[400px]">
            <div className="flex items-center gap-2 mb-5">
                <PenLine className="w-5 h-5 text-[#6D28D9]" />
                <h2 className="text-[18px] font-bold text-[#1F2937]">Lời khuyên cho khách hàng</h2>
            </div>

            <textarea
                className="w-full flex-1 border border-[#D1D5DB] rounded-2xl p-5 text-[14px] text-[#4B5563] placeholder:text-[#9CA3AF] outline-none focus:border-[#6D28D9] focus:ring-1 focus:ring-[#6D28D9] resize-none mb-6 leading-relaxed"
                placeholder="Nhập lưu ý chăm sóc tại nhà sau khi nhận lại lan... (Vd: Tưới nước 2 lần/tuần, tránh nắng gắt trực tiếp)"
            ></textarea>

            <button className="w-full h-[52px] rounded-xl bg-[#6D28D9] text-white font-bold text-[15px] flex items-center justify-center gap-2 hover:bg-[#5B21B6] transition-colors shadow-md">
                <LogOut className="w-5 h-5" />
                Gửi kết quả check-out
            </button>
        </div>
    );
}
