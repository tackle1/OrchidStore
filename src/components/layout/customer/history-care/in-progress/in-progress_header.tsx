'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft, Leaf } from 'lucide-react';

interface InProgressHeaderProps {
    slug: string;
}

export default function InProgressHeader({ slug }: InProgressHeaderProps) {
    const router = useRouter();

    return (
        <div className="mb-8">
            <div className="flex items-center gap-2 text-sm text-[#6B7280] mb-1">
                <button
                    onClick={() => router.back()}
                    className="flex items-center gap-1.5 hover:text-[#374151]"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Đơn chăm sóc
                </button>
                <span>/</span>
                <span className="font-medium text-[#374151]">{slug.toUpperCase()}</span>
            </div>

            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold">Chi tiết đơn chăm sóc</h1>

                <div className="flex items-center gap-2 bg-[#DCFCE7] text-[#166534] px-4 py-1.5 rounded-full text-sm font-medium">
                    <Leaf className="w-4 h-4" />
                    Đang chăm sóc
                </div>
            </div>
        </div>
    );
}