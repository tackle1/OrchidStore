'use client';

import { AlertTriangle } from 'lucide-react';

export default function HighRiskWarning() {
    return (
        <div className="bg-[#FEF2F2] border-l-4 border-[#EF4444] rounded-r-2xl p-4">
            <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-[#EF4444] mt-0.5 flex-shrink-0" />
                <div>
                    <p className="font-semibold text-[#991B1B]">RỦI RO CAO</p>
                    <p className="text-sm text-[#B91C1C] mt-1">
                        Phát hiện dấu hiệu sâu bệnh ở lá và rễ. Cần xác nhận kỹ lưỡng trước khi bắt đầu quy trình chăm sóc.
                    </p>
                </div>
            </div>
        </div>
    );
}