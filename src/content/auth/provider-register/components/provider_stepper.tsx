'use client';

interface ProviderStepperProps {
    currentStep: number;
}

const steps = [
    'Thông tin cơ bản',
    'Hồ sơ dịch vụ',
    'Xác minh',
    'Gửi xét duyệt',
];

export default function ProviderStepper({
    currentStep,
}: ProviderStepperProps) {
    return (
        <div className="h-[74px] border-b border-[#ECE8F5] bg-[#FBFAFE] px-10 flex items-center">
            <div className="flex items-center w-full">

                {steps.map((step, index) => {
                    const stepNumber = index + 1;

                    const isActive = currentStep === stepNumber;
                    const isCompleted = currentStep > stepNumber;

                    return (
                        <div
                            key={step}
                            className="flex items-center flex-1"
                        >
                            <div className="flex items-center gap-3">

                                <div
                                    className={`
                                        w-7 h-7 rounded-full
                                        flex items-center justify-center
                                        text-[13px]
                                        ${isActive
                                            ? 'bg-[#6D28D9] text-white font-semibold'
                                            : isCompleted
                                                ? 'bg-[#6D28D9] text-white'
                                                : 'border border-[#D8D1E6] text-[#9CA3AF]'
                                        }
                                    `}
                                >
                                    {stepNumber}
                                </div>

                                <span
                                    className={`
                                        text-[13px] whitespace-nowrap
                                        ${isActive
                                            ? 'font-semibold text-[#6D28D9]'
                                            : isCompleted
                                                ? 'font-medium text-[#6D28D9]'
                                                : 'text-[#9CA3AF]'
                                        }
                                    `}
                                >
                                    {step}
                                </span>
                            </div>

                            {stepNumber !== steps.length && (
                                <div className="flex-1 h-[1px] bg-[#E6E0F0] mx-6" />
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}