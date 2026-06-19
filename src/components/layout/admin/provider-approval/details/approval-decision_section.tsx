'use client';

import { CheckCircle2, FileCheck, XCircle } from 'lucide-react';

export default function ApprovalDecisionSection() {
    return (
        <div className="bg-[#F8F6FF] border border-[#D8B4FE] rounded-[28px] p-7">
            <h3 className="text-[20px] font-bold text-[#1F2937] mb-6">Quyết định xét duyệt</h3>

            <label className="block text-[15px] text-[#6B7280] mb-3">
                Ghi chú / Lý do <span className="text-[#9CA3AF]">(Bắt buộc khi từ chối)</span>
            </label>

            <textarea
                placeholder="Nhập ghi chú nội bộ hoặc lý do yêu cầu bổ sung..."
                className="w-full h-[115px] rounded-[18px] border border-[#D1D5DB] bg-white px-5 py-4 text-[16px] text-[#111827] placeholder:text-[#9CA3AF] resize-none focus:outline-none focus:border-[#C4B5FD]"
            />

            <button
                onClick={() => alert('Đã phê duyệt thành công!')}
                className="mt-5 w-full h-[54px] rounded-[16px] bg-[#6D28D9] hover:bg-[#5B21B6] text-white font-semibold text-[16px] flex items-center justify-center gap-2 transition"
            >
                <CheckCircle2 className="w-5 h-5" />
                Phê duyệt
            </button>

            <div className="grid grid-cols-2 gap-5 mt-5">
                <button className="h-[52px] rounded-[16px] border border-[#16A34A] bg-white text-[#15803D] font-semibold text-[16px] flex items-center justify-center gap-2 hover:bg-[#F0FDF4] transition">
                    <FileCheck className="w-5 h-5" />
                    Yêu cầu thêm
                </button>

                <button
                    onClick={() => alert('Đã từ chối đơn đăng ký')}
                    className="h-[52px] rounded-[16px] border border-[#EF4444] bg-white text-[#DC2626] font-semibold text-[16px] flex items-center justify-center gap-2 hover:bg-[#FEF2F2] transition"
                >
                    <XCircle className="w-5 h-5" />
                    Từ chối
                </button>
            </div>
        </div>
    );
}