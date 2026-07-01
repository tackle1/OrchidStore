'use client';

import { AlertCircle } from 'lucide-react';

export default function ImportantNote() {
    return (
        <div className="bg-[#E2E7FF] border border-[#DDD6FE] rounded-2xl p-4 flex gap-3">
            <div className="text-[#6D28D9] mt-0.5">
                <AlertCircle className="w-4 h-4" />
            </div>
            <div className="text-sm text-[#5B21B6]">
                <strong>Lưu ý quan trọng:</strong> Ảnh sẽ được dùng làm bằng chứng đầu vào.
                Vui lòng chụp rõ nét dưới ánh sáng tự nhiên.
            </div>
        </div>
    );
}