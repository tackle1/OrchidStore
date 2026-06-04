'use client';

import { Download } from 'lucide-react';

export default function ProviderApprovalHeader() {
    return (
        <div className="w-full bg-white border-b border-[#F1F1F4] px-6 py-4">
            <div className="flex items-start justify-between">
                {/* Left */}
                <div>
                    <h1
                        className="
                            text-[52px]
                            leading-[56px]
                            font-extrabold
                            tracking-[-1.5px]
                            text-[#1F2937]
                        "
                    >
                        Duyệt Provider
                    </h1>

                    <p
                        className="
                            mt-1
                            text-[16px]
                            text-[#6B7280]
                            font-normal
                        "
                    >
                        Quản lý và xét duyệt hồ sơ đăng ký nhà cung cấp mới.
                    </p>
                </div>

                {/* Right Button */}
                <button
                    type="button"
                    className="
                        flex
                        items-center
                        gap-2
                        h-[44px]
                        px-5
                        rounded-[8px]
                        border
                        border-[#D8D5E5]
                        bg-[#F7F7FC]
                        text-[#1F2937]
                        text-[15px]
                        font-semibold
                        hover:bg-[#F3F4F6]
                        transition
                    "
                >
                    <Download className="w-4 h-4" />

                    <span>Xuất danh sách</span>
                </button>
            </div>
        </div>
    );
}