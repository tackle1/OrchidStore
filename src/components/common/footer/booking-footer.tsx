'use client';

import Link from 'next/link';

interface BookingFooterProps {
    backHref: string;
    nextHref: string;
    backLabel?: string;
    nextLabel?: string;
    disableNext?: boolean; // Tùy chọn: vô hiệu hóa nút Tiếp tục
}

export default function BookingFooter({
    backHref,
    nextHref,
    backLabel = 'Quay lại',
    nextLabel = 'Tiếp tục',
    disableNext = false,
}: BookingFooterProps) {
    return (
        <div className="mt-8 border-t pt-6 flex items-center justify-between max-w-6xl mx-auto">
            <Link
                href={backHref}
                className="px-6 py-2.5 text-sm font-medium border border-[#E5E7EB] rounded-xl hover:bg-gray-50 transition-colors"
            >
                {backLabel}
            </Link>

            <Link
                href={nextHref}
                className={`
                    px-8 py-2.5 text-sm font-semibold rounded-xl transition-colors
                    ${disableNext
                        ? 'bg-[#D1D5DB] text-[#9CA3AF] cursor-not-allowed pointer-events-none'
                        : 'bg-[#6D28D9] hover:bg-[#5B21B6] text-white'
                    }
                `}
            >
                {nextLabel}
            </Link>
        </div>
    );
}