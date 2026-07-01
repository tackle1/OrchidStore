'use client';

import { Check } from 'lucide-react';

interface BookingStepperProps {
    currentStep: number; // 2 trong trường hợp này
}

const steps = [
    { label: 'Dịch vụ', number: 1 },
    { label: 'Thông tin cây', number: 2 },
    { label: 'Ảnh hiện trạng', number: 3 },
    { label: 'Lịch hẹn', number: 4 },
    { label: 'Xem lại', number: 5 },           // ← Bước Review (bằng tiếng Việt)
    { label: 'Xác nhận', number: 6 },
    { label: 'Thanh toán', number: 7 },
];

export default function BookingStepper({ currentStep }: BookingStepperProps) {
    return (
        <div className="mb-10">
            <h1 className="text-2xl font-bold text-center mb-8">Tạo đơn đặt dịch vụ</h1>

            <div className="flex items-center justify-between max-w-[720px] mx-auto relative">
                <div className="absolute top-[15px] left-[40px] right-[40px] h-[2px] bg-[#E5E7EB] z-0" />

                {steps.map((step, index) => {
                    const isCompleted = index + 1 < currentStep;
                    const isActive = index + 1 === currentStep;

                    return (
                        <div key={index} className="flex flex-col items-center z-10">
                            <div
                                className={`
                                    w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold border-2
                                    ${isCompleted || isActive
                                        ? 'bg-[#6D28D9] border-[#6D28D9] text-white'
                                        : 'bg-white border-[#CBD5E1] text-[#64748B]'
                                    }
                                `}
                            >
                                {isCompleted ? <Check className="w-4 h-4" /> : step.number}
                            </div>
                            <span className={`mt-2 text-xs text-center whitespace-nowrap ${isActive ? 'text-[#6D28D9] font-semibold' : 'text-[#64748B]'}`}>
                                {step.label}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}