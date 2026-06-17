'use client';

import { Headset } from 'lucide-react';

export default function SupportCard() {
    return (
        <div className="bg-[#F3E8FF] border border-[#E5E7EB] rounded-3xl p-5">
            <div className="flex items-start gap-3">
                <div className="w-9 h-9 bg-[#6D28D9] rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Headset className="w-5 h-5 text-white" />
                </div>

                <div className="flex-1">
                    <h4 className="font-semibold mb-1">Cần hỗ trợ thêm?</h4>
                    <p className="text-sm text-[#6B7280] mb-3">
                        Liên hệ chuyên gia tư vấn từ LanCare để được giải đáp thắc mắc về đề xuất này.
                    </p>
                    <button className="text-[#6D28D9] text-sm font-semibold hover:underline">
                        Liên hệ ngay
                    </button>
                </div>
            </div>
        </div>
    );
}