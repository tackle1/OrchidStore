'use client';

import { useRouter } from 'next/navigation';
import { X, AlertCircle } from 'lucide-react';

export default function ProposalTopBar() {
    const router = useRouter();

    return (
        <div className="border-b border-[#E5E7EB] bg-white sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Left: Close + Title */}
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => router.back()}
                        className="text-[#6B7280] hover:text-black transition-colors"
                        aria-label="Quay lại"
                    >
                        <X className="w-6 h-6" />
                    </button>
                    <span className="text-[#6D28D9] font-semibold text-lg">Chi tiết đề xuất</span>
                </div>

                {/* Right: Badge */}
                <div className="flex items-center gap-2 bg-[#FEF2F2] text-[#93000A] px-4 py-1.5 rounded-full text-sm font-medium">
                    <AlertCircle className="w-4 h-4 text-white bg-[#93000A] rounded-full" />
                    Cần phản hồi
                </div>
            </div>
        </div>
    );
}