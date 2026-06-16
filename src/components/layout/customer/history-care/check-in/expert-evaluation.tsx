'use client';

import { X, AlertTriangle, Check, Bug } from 'lucide-react';

const evaluations = [
    { label: 'Lá', value: 'Có bị vết', color: 'red', icon: <X className="w-4 h-4" /> },
    { label: 'Rễ', value: 'Yếu', color: 'red', icon: <AlertTriangle className="w-4 h-4" /> },
    { label: 'Thân', value: 'Bình thường', color: 'green', icon: <Check className="w-4 h-4" /> },
    { label: 'Hoa/nụ', value: 'Tốt', color: 'green', icon: <Check className="w-4 h-4" /> },
    { label: 'Sâu bệnh', value: 'Phát hiện nấm', color: 'red', icon: <Bug className="w-4 h-4" /> },
];

export default function ExpertEvaluation() {
    return (
        <div>
            <h3 className="font-semibold mb-4">Đánh giá từ chuyên gia</h3>

            <div className="space-y-3 mb-6">
                {evaluations.map((item, index) => (
                    <div key={index} className="flex justify-between items-center text-sm">
                        <span className="text-[#6B7280]">{item.label}</span>
                        <span className={`px-3 py-1 inline-flex items-center justify-center gap-1 rounded-full text-xs font-medium ${item.color === 'green'
                            ? 'bg-[#DCFCE7] text-[#166534]'
                            : 'bg-[#FEE2E2] text-[#DC2626]'
                            }`}>
                            {item.icon}
                            {item.value}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}