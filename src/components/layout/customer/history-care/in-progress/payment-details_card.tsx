'use client';

import { AlertCircle } from 'lucide-react';

export default function PaymentDetailsCard() {
    return (
        <div className="bg-white border border-[#E5E7EB] rounded-3xl p-6">
            <h3 className="font-semibold mb-4">Chi tiết thanh toán</h3>

            <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                    <span className="text-[#6B7280]">Giá gói (3 tháng)</span>
                    <span>4,500,000 ₫</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-[#6B7280]">Phí vận chuyển 2 chiều</span>
                    <span>350,000 ₫</span>
                </div>
                <div className="flex justify-between items-center text-[#16A34A]">
                    <div className="flex items-center gap-2">
                        <span>Add-on: Đối chậu sứ</span>
                        <span className="bg-[#F3E8FF] text-[#6D28D9] text-xs px-2 py-0.5 rounded-full font-medium">Đã duyệt</span>
                    </div>
                    <span>- 250,000 ₫</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-[#6B7280]">Phí nền tảng (5%)</span>
                    <span>255,000 ₫</span>
                </div>
            </div>

            <div className="h-px bg-[#E5E7EB] my-4" />

            <div className="flex justify-between items-center mb-4">
                <span className="font-semibold">Tổng cộng</span>
                <span className="font-bold text-xl text-[#6D28D9]">5,355,000 ₫</span>
            </div>

            <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-2xl p-3 mb-5 text-xs text-[#6B7280]">
                <div className="flex gap-2">
                    <AlertCircle className="w-3 h-3 mt-0.5 text-[#6D28D9]" />
                    <p>
                        Tiền đang được giữ an toàn trên hệ thống. Sẽ giải ngân cho nhà vườn sau khi bạn <span className="font-medium">Xác nhận hoàn tất</span>.
                        Hệ thống tự động xác nhận sau 48h kể từ lúc check-out.
                    </p>
                </div>
            </div>

            <div className="space-y-3">
                <button className="w-full bg-[#6D28D9] hover:bg-[#5B21B6] text-white font-semibold py-3 rounded-2xl transition-colors">
                    Duyệt Add-on mới
                </button>

                <div className="grid grid-cols-2 gap-3">
                    <button className="border border-[#E5E7EB] hover:bg-[#F8F9FC] text-[#DC2626] font-medium py-3 rounded-2xl transition-colors">
                        Mở tranh chấp
                    </button>
                    <button className="bg-[#F3E8FF] text-[#6D28D9] font-medium py-3 rounded-2xl hover:bg-[#EDE4FF] transition-colors">
                        Xác nhận hoàn tất
                    </button>
                </div>
            </div>
        </div>
    );
}