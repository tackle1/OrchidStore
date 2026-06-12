'use client';

import { QrCode, ShieldAlert } from 'lucide-react';

export default function VNPayQRContent() {
    return (
        <div className="border border-dashed border-[#E5E7EB] rounded-2xl p-6 flex flex-col md:flex-row gap-6 items-start bg-white">
            <div className="p-2 border border-[#C084FC] rounded-3xl bg-white">
                <div className="w-40 h-40 border-2 border-dashed border-[#CCC3D8] rounded-3xl flex items-center justify-center flex-shrink-0 bg-white">
                    <QrCode className="w-20 h-20 text-[#7B7487]" />
                </div>
            </div>
            <div className="flex-1 pt-1">
                <h4 className="font-semibold mb-3">Hướng dẫn thanh toán</h4>
                <div className="text-sm text-[#6B7280] space-y-1.5">
                    <p>Mở ứng dụng Ngân hàng hoặc Ví điện tử.</p>
                    <p>Chọn tính năng <strong>Quét mã QR</strong>.</p>
                    <p>Quét mã QR trên màn hình.</p>
                    <p>Kiểm tra thông tin và xác nhận thanh toán.</p>
                </div>
                <div className="h-px bg-[#E5E7EB] my-4" />
                <p className="text-xs text-green-600 mt-4 flex items-center gap-1.5">
                    <ShieldAlert className="w-4 h-4 text-green-500" />
                    Giao dịch an toàn được bảo vệ bởi VNPAY
                </p>
            </div>
        </div>
    );
}