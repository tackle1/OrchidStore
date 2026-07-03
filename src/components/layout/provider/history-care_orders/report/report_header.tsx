import React from 'react';
import Link from 'next/link';
import { ArrowLeft, QrCode } from 'lucide-react';

interface ReportHeaderProps {
    id: string;
}

export default function ReportHeader({ id }: ReportHeaderProps) {
    return (
        <div className="flex justify-between items-start mb-6">
            <div>
                <Link href={`/history-care_orders`} className="inline-flex items-center gap-2 text-[#4B5563] hover:text-[#1F2937] font-medium text-[14px] mb-2 transition-colors">
                    <ArrowLeft className="w-4 h-4" />
                    Quay lại
                </Link>
                <h1 className="text-[28px] font-bold text-[#111827]">Gửi báo cáo chăm sóc</h1>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-[#F3E8FF] rounded-full text-[#6D28D9] font-bold text-[14px] shadow-sm">
                <QrCode className="w-4 h-4" />
                ID: {id}
            </div>
        </div>
    );
}
