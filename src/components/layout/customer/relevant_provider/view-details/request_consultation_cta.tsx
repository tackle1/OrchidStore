'use client';

import Link from 'next/link';

interface RequestConsultationCTAProps {
    providerSlug: string;
}

export default function RequestConsultationCTA({ providerSlug }: RequestConsultationCTAProps) {
    return (
        <div className="bg-[#EAEDFF] rounded-3xl p-6 text-center mt-6">
            <p className="text-[#374151] text-[15px] leading-snug mb-4">
                Bạn cần tư vấn dịch vụ phù hợp cho lan của mình?
            </p>

            <Link
                href={`/providers/${providerSlug}/consultation`}
                className="inline-block w-full bg-[#6D28D9] hover:bg-[#5B21B6] transition-colors text-white font-semibold py-3.5 rounded-2xl text-sm"
            >
                Yêu cầu tư vấn ngay
            </Link>
        </div>
    );
}