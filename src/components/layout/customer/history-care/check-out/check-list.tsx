'use client';

import { Check } from 'lucide-react';

const checklistItems = [
    "Kiểm tra rễ và giá thể",
    "Vệ sinh lá, tưới rễ",
    "Phun thuốc phòng bệnh nấm",
    "Bón phân kích rễ định kỳ",
];

export default function Checklist() {
    return (
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-[#E5E7EB]">
            <div className="flex items-center gap-3 mb-5">
                <div className="w-7 h-7 bg-[#006E2D] rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                </div>
                <h3 className="font-semibold text-[#111827] text-lg">Checklist hoàn tất</h3>
            </div>

            <ul className="space-y-4">
                {checklistItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-[#374151]">
                        <div className="w-5 h-5 border-[#006E2D] border-2 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-[#006E2D]" />
                        </div>
                        <span className="text-sm leading-snug">{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}