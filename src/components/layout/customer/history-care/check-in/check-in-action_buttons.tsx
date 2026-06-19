'use client';
import { useParams, useRouter } from 'next/navigation';
import { CheckCircle2, XCircle, Scale } from 'lucide-react';

export default function CheckInActionButtons() {
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
        <div className="space-y-3">
            <button className="w-full flex items-center justify-center gap-2 bg-[#6D28D9] hover:bg-[#5B21B6] text-white font-semibold py-3 rounded-2xl transition-colors">
                <CheckCircle2 className="w-5 h-5" /> Đồng ý kết quả check-in
            </button>

            <button className="w-full flex items-center justify-center gap-2 border border-[#E5E7EB] hover:bg-[#F8F9FC] text-[#374151] font-medium py-3 rounded-2xl transition-colors">
                <XCircle className="w-5 h-5" /> Không đồng ý
            </button>

            <button
                onClick={handleDispute}
                className="w-full flex items-center justify-center gap-2 bg-[#FEF2F2] text-[#DC2626] hover:bg-[#FEE2E2] font-medium py-3 rounded-2xl transition-colors">
                <Scale className="w-4 h-4" /> Mở tranh chấp
            </button>
        </div>
    );
}