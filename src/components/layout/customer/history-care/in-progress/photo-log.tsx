'use client';

import { ChevronRight, Ellipsis } from 'lucide-react';

export default function PhotoLog() {
    return (
        <div className="bg-white border border-[#E5E7EB] rounded-3xl p-6">
            <div className="flex items-center justify-between mb-5">
                <h3 className="font-semibold text-lg">Nhật ký hình ảnh</h3>
                <button className="text-[#6D28D9] text-sm font-medium hover:underline flex items-center gap-1">
                    Xem tất cả <ChevronRight className="w-4 h-4" />
                </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {/* Ảnh 1 */}
                <div className="relative group">
                    <img src="/assets/images/orchid-initial.png" alt="Ban đầu" className="w-full h-36 object-cover rounded-2xl shadow-sm" />
                    <div className="absolute bottom-2 left-2 bg-white/95 text-xs px-2.5 py-0.5 rounded-lg font-medium shadow">
                        Ban đầu (12/10)
                    </div>
                </div>

                {/* Ảnh 2 */}
                <div className="relative group">
                    <img src="/assets/images/orchid-check-in.png" alt="Check-in" className="w-full h-36 object-cover rounded-2xl shadow-sm" />
                    <div className="absolute bottom-2 left-2 bg-white/95 text-xs px-2.5 py-0.5 rounded-lg font-medium shadow">
                        Check-in (14/10)
                    </div>
                </div>

                {/* Ảnh 3 - Có badge Mới */}
                <div className="relative group">
                    <img src="/assets/images/orchid-report.png" alt="Báo cáo" className="w-full h-36 object-cover rounded-2xl shadow-sm border border-[#630ED4]" />
                    <div className="absolute top-2 right-2 bg-[#6D28D9] text-white text-[10px] font-semibold px-2.5 py-0.5 rounded-full">
                        Mới
                    </div>
                    <div className="absolute bottom-2 left-2 bg-white/95 text-xs px-2.5 py-0.5 rounded-lg font-medium shadow">
                        Báo cáo (28/10)
                    </div>
                </div>

                {/* Ô trống */}
                <div className="border-2 border-dashed border-[#F2F3FF] rounded-2xl h-36 flex flex-col items-center justify-center text-center">
                    <div className="text-[#9CA3AF] mb-1">
                        <Ellipsis className="w-5 h-5" />
                    </div>
                    <p className="text-xs text-[#6B7280]">Chờ ảnh check-out</p>
                </div>
            </div>
        </div>
    );
}