'use client';

import { Check } from 'lucide-react';

export default function TransparentProcess() {
    const steps = [
        {
            number: 1,
            title: "Ảnh hiện trạng ban đầu",
            desc: "Chụp cận cảnh lá, rễ và góc trước khi bắt đầu quy trình để làm cơ sở so sánh.",
            hasImage: true,
        },
        {
            number: 2,
            title: "Check-in nhận cây",
            desc: "Xác nhận cây đã đến vườn an toàn qua mã QR định danh gắn trên chậu.",
        },
        {
            number: 3,
            title: "Báo cáo định kỳ (Hàng tuần)",
            desc: "Cập nhật hình ảnh/video về sự phát triển của mầm mới, rễ non trực tiếp qua app.",
        },
        {
            number: 4,
            title: "Check-out & Bàn giao",
            desc: "Đánh giá tổng thể sức khỏe cây trước khi đóng gói và gửi trả khách hàng.",
            isLast: true,
        },
    ];

    return (
        <div className="mb-10">
            <h3 className="flex items-center gap-2 text-xl font-semibold mb-5">
                <Check className="w-5 h-5 text-[#6D28D9]" />
                Quy trình minh bạch
            </h3>

            <div className="bg-white border border-[#E5E7EB] rounded-3xl p-6 space-y-6">
                {steps.map((step, index) => (
                    <div key={index} className="flex gap-4">
                        <div className={`w-8 h-8 flex-shrink-0 rounded-full flex items-center justify-center text-sm font-semibold
                            ${step.isLast
                                ? 'border-2 border-[#D1D5DB] text-[#9CA3AF]'
                                : 'bg-[#6D28D9] text-white'}`}>
                            {step.number}
                        </div>
                        <div className="flex-1">
                            <h4 className="font-semibold text-[#1F2937]">{step.title}</h4>
                            <p className="text-sm text-[#6B7280] mt-1">{step.desc}</p>
                            {step.hasImage && (
                                <div className="mt-3 w-16 h-16 rounded-xl overflow-hidden border border-[#E5E7EB]">
                                    <img src="/assets/images/leaf-closeup.jpg" alt="Leaf" className="w-full h-full object-cover" />
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}