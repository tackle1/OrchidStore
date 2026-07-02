import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Gavel, AlertTriangle } from 'lucide-react';

interface DisputeHeaderProps {
    id: string;
}

export default function DisputeHeader() {
    return (
        <div className="mb-8">
            <Link href={`/history-care_orders`} className="inline-flex items-center gap-2 text-[14px] text-[#6B7280] hover:text-[#111827] transition-colors mb-4">
                <ArrowLeft className="w-4 h-4" /> Quay lại chi tiết chăm sóc
            </Link>
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div>
                    <div className="flex items-center gap-3 mb-1">
                        <Gavel className="w-8 h-8 text-[#DC2626]" />
                        <h1 className="text-[32px] font-bold text-[#111827]">Phản hồi tranh chấp</h1>
                    </div>
                    <p className="text-[#6B7280] text-[14px]">Vui lòng cung cấp thông tin chi tiết và bằng chứng để giải quyết khiếu nại từ khách hàng.</p>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-[#FEE2E2] rounded-lg text-[#DC2626] font-bold text-[14px] shadow-sm">
                    <AlertTriangle className="w-4 h-4" />
                    Cần xử lý gấp (Còn 24h)
                </div>
            </div>
        </div>
    );
}
