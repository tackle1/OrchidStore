'use client';

import { Leaf, CheckCircle2, Flag, Check } from 'lucide-react';

export default function ProgressTimeline() {
    const steps = [
        { label: 'Đã đặt lịch', done: true, icon: 'check' },
        { label: 'Đã thanh toán', done: true, icon: 'check' },
        { label: 'Đã check-in', done: true, icon: 'check' },
        { label: 'Đang chăm sóc', done: true, current: true, icon: 'leaf' },
        { label: 'Chờ check-out', done: false, icon: 'check-circle' },
        { label: 'Hoàn tất', done: false, icon: 'flag' },
    ];

    return (
        <div className="bg-white border border-[#E5E7EB] rounded-3xl p-6">
            <h3 className="font-semibold mb-8">Tiến độ quy trình</h3>

            <div className="flex items-center justify-between relative px-2">
                {steps.map((step, index, array) => (
                    <div key={index} className="flex flex-col items-center relative z-10 w-24">
                        <div className={`
                            w-9 h-9 rounded-full flex items-center justify-center text-sm font-medium border-2
                            ${step.current
                                ? 'bg-white border-[#6D28D9] text-[#6D28D9]'
                                : step.done
                                    ? 'bg-[#6D28D9] border-[#6D28D9] text-white'
                                    : 'bg-white border-[#D1D5DB] text-[#9CA3AF]'
                            }
                        `}>
                            {step.icon === 'leaf' && <Leaf className="w-4 h-4 text-[#6D28D9]" />}
                            {step.icon === 'check' && '✓'}
                            {step.icon === 'check-circle' && <CheckCircle2 className="w-4 h-4 text-[#CCC3D8]" />}
                            {step.icon === 'flag' && <Flag className="w-4 h-4 text-[#CCC3D8]" />}
                        </div>

                        <span className={`
                            text-xs mt-3 text-center leading-tight
                            ${step.current
                                ? 'font-semibold text-[#6D28D9]'
                                : step.done
                                    ? 'text-[#6B7280]'
                                    : 'text-[#9CA3AF]'
                            }
                        `}>
                            {step.label}
                        </span>

                        {index < array.length - 1 && (
                            <div className={`
                                absolute top-4 left-[calc(50%+18px)] h-[2px] w-[calc(100%-36px)]
                                ${step.done ? 'bg-[#6D28D9]' : 'bg-[#E5E7EB]'}
                            `} />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}