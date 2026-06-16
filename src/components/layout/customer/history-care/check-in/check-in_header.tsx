'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

export default function CheckInHeader() {
    const router = useRouter();

    return (
        <div className="flex items-center gap-4 mb-8">
            <button
                onClick={() => router.back()}
                className="flex items-center gap-2 text-[#6B7280] hover:text-[#374151]"
            >
                <ArrowLeft className="w-5 h-5" />
                Quay lại
            </button>
            <h1 className="text-3xl font-bold text-[#111827] flex-1 text-center">
                Xác nhận Check-in
            </h1>
        </div>
    );
}