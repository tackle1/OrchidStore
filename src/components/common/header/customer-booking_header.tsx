'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function BookingHeader() {
    return (
        <div className="border-b bg-white">
            <div className="max-w-6xl mx-auto px-6 h-[60px] flex items-center justify-between">
                <Link
                    href="/customer-service-packages/service-discovery"
                    className="flex items-center gap-2 text-[#6B7280] hover:text-[#374151] font-medium"
                >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Hủy đơn</span>
                </Link>

                <div className="absolute left-1/2 -translate-x-1/2">
                    <span className="text-xl font-bold text-[#6D28D9]">LanCare Hub</span>
                </div>
            </div>
        </div>
    );
}