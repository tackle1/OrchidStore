'use client';

interface ProviderFooterActionsProps {
    currentStep: number;
    onNext: () => void;
    onPrevious: () => void;
}

export default function ProviderFooterActions({
    currentStep,
    onNext,
    onPrevious,
}: ProviderFooterActionsProps) {
    return (
        <div className="h-[88px] border-t border-[#ECE8F5] px-10 flex items-center justify-between bg-white">

            <div>
                {currentStep > 1 && (
                    <button
                        onClick={onPrevious}
                        className="
                            h-[46px]
                            px-6
                            rounded-full
                            border
                            border-[#D8D1E6]
                            text-[14px]
                            font-semibold
                        "
                    >
                        ← Quay lại
                    </button>
                )}
            </div>

            <div className="flex items-center gap-4">

                <button
                    className="
                        text-[14px]
                        font-semibold
                        text-[#16A34A]
                    "
                >
                    Lưu nháp
                </button>

                {currentStep < 4 ? (
                    <button
                        onClick={onNext}
                        className="
                            h-[46px]
                            px-7
                            rounded-full
                            bg-[#6D28D9]
                            hover:bg-[#5B21B6]
                            text-white
                            text-[14px]
                            font-semibold
                        "
                    >
                        Tiếp tục →
                    </button>
                ) : (
                    <button
                        className="
                            h-[46px]
                            px-7
                            rounded-full
                            bg-[#16A34A]
                            text-white
                            text-[14px]
                            font-semibold
                        "
                    >
                        Gửi xét duyệt
                    </button>
                )}
            </div>
        </div>
    );
}