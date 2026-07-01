'use client';

import { Images } from 'lucide-react';

interface StatusComparisonProps {
    checkInImage: string;
    checkOutImage: string;
    checkInTime: string;
    checkOutTime: string;
}

export default function StatusComparison({
    checkInImage,
    checkOutImage,
    checkInTime,
    checkOutTime,
}: StatusComparisonProps) {
    return (
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-[#E5E7EB]">
            <div className="flex items-center gap-2 mb-5">
                <Images className="w-5 h-5 text-[#6D28D9]" />
                <h2 className="font-semibold text-lg text-[#111827]">So sánh tình trạng Lan</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Check-in */}
                <div>
                    <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-[#374151]">Lúc Check-in</span>
                        <span className="text-xs px-3 py-0.5 bg-[#F3E8FF] text-[#6D28D9] rounded-full">Bạn tải lên</span>
                    </div>
                    <div className="relative rounded-2xl overflow-hidden border border-[#E5E7EB]">
                        <img src={checkInImage} alt="Check-in" className="w-full h-[260px] object-cover" />
                        <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2.5 py-0.5 rounded">
                            {checkInTime}
                        </div>
                    </div>
                </div>

                {/* Check-out */}
                <div>
                    <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-[#374151]">Lúc Check-out</span>
                        <span className="text-xs px-3 py-0.5 bg-[#E0E7FF] text-[#6366F1] rounded-full">Nhà vườn tải lên</span>
                    </div>
                    <div className="relative rounded-2xl overflow-hidden border border-[#E5E7EB]">
                        <img src={checkOutImage} alt="Check-out" className="w-full h-[260px] object-cover" />
                        <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2.5 py-0.5 rounded">
                            {checkOutTime}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}