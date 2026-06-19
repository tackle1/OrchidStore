'use client';

import { Info } from 'lucide-react';

export default function ImportantNote() {
    return (
        <div className="bg-[#F3E8FF] border border-[#E0D4FF] rounded-2xl p-5">
            <div className="flex items-start gap-3">
                <div className="mt-0.5 flex-shrink-0">
                    <div className="w-5 h-5 rounded-full bg-[#6D28D9] flex items-center justify-center">
                        <Info className="w-3.5 h-3.5 text-white" />
                    </div>
                </div>

                <div className="flex-1">
                    <div className="font-semibold text-[#4C1D95] mb-1.5">
                        Lưu ý quan trọng
                    </div>
                    <div className="text-sm text-[#4C1D95] leading-relaxed">
                        Hệ thống sẽ tự động xác nhận sau <span className="font-medium">48h</span> nếu không có phản hồi từ bạn.
                        Số tiền thanh toán sẽ được giữ thêm <span className="font-medium">3 ngày</span> trước khi chuyển cho nhà cung cấp để đảm bảo quyền lợi.
                    </div>
                </div>
            </div>
        </div>
    );
}