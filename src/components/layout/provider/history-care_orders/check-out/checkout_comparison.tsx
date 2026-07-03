import React from 'react';
import Image from 'next/image';
import { GitCompare } from 'lucide-react';

export default function CheckoutComparison() {
    return (
        <div className="bg-white rounded-[20px] p-6 shadow-sm border border-[#E5E7EB]">
            <div className="flex items-center gap-2 mb-5">
                <GitCompare className="w-6 h-6 text-[#6D28D9]" />
                <h2 className="text-[18px] font-bold text-[#1F2937]">So sánh với tình trạng check-in</h2>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-square rounded-[16px] overflow-hidden bg-gray-100 border border-[#E5E7EB]">
                    <Image src="/assets/images/compare-to_check-in-1.png" width={300} height={300} className="w-full h-full object-cover" alt="Before" />
                    <div className="absolute top-4 left-4 bg-white/95 px-3 py-1.5 rounded-full text-[12px] font-bold text-[#1F2937] shadow-sm">
                        Trước (12/10/2023)
                    </div>
                </div>
                <div className="relative aspect-square rounded-[16px] overflow-hidden bg-gray-100 border-4 border-[#065F46]">
                    <Image src="/assets/images/compare-to_check-in-2.png" width={300} height={300} className="w-full h-full object-cover" alt="After" />
                    <div className="absolute top-3 left-3 bg-[#065F46] px-3 py-1.5 rounded-full text-[12px] font-bold text-white shadow-sm">
                        Hiện tại (05/11/2023)
                    </div>
                </div>
            </div>
        </div>
    );
}
