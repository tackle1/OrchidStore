'use client';

import { Scale, ThumbsDown, CheckCircle2 } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
export default function ActionButtons() {
    const params = useParams();
    const router = useRouter();
    const slug = params.slug as string;

    const handleDispute = () => {
        if (!slug) {
            console.error("Slug is undefined!");
            return;
        }
        router.push(`/history-care/in-progress/${slug}/disputes`);
    };
    return (
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
                onClick={handleDispute}
                className="flex-1 flex items-center justify-center gap-2 px-5 py-3 border border-[#E5E7EB] text-[#374151] font-medium rounded-full hover:bg-[#F9FAFB] transition-all active:scale-[0.985]">
                <Scale className="w-4 h-4" />
                Mở tranh chấp
            </button>

            <button className="flex-1 flex items-center justify-center gap-2 px-5 py-3 border border-[#FCA5A5] text-[#DC2626] font-medium rounded-full hover:bg-[#FEF2F2] transition-all active:scale-[0.985]">
                <ThumbsDown className="w-4 h-4" />
                Không đồng ý
            </button>

            <button className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-semibold rounded-full transition-all active:scale-[0.985]">
                <CheckCircle2 className="w-4 h-4" />
                Xác nhận hoàn tất
            </button>
        </div>
    );
}