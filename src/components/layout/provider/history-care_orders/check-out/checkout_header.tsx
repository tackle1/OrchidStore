import React from 'react';
import { Sprout } from 'lucide-react';

interface CheckoutHeaderProps {
    id: string;
}

export default function CheckoutHeader({ id }: CheckoutHeaderProps) {
    return (
        <div className="flex justify-between items-start mb-6">
            <div>
                <h1 className="text-[28px] font-bold text-[#111827] mb-2">Kiểm tra check-out</h1>
                <div className="flex items-center text-[#6B7280] text-[14px]">
                    <Sprout className="w-4 h-4 mr-1.5" />
                    Dịch vụ Phục hồi chuyên sâu • ID: {id}
                </div>
            </div>
            <button className="px-6 h-11 rounded-lg border border-[#D1D5DB] text-[#374151] font-bold text-[14px] bg-white hover:bg-gray-50 shadow-sm transition-colors">
                Lưu nháp
            </button>
        </div>
    );
}
