'use client';

import { Search } from 'lucide-react';

export default function ReportsHeader() {
    return (
        <div className="border-b border-[#E5E7EB]">
            <div className="max-w-6xl mx-auto px-6 py-5">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold">Báo cáo chăm sóc</h1>
                        <p className="text-sm text-[#6B7280] mt-1">
                            Theo dõi tất cả các báo cáo phát triển của các chậu lan.
                        </p>
                    </div>

                    {/* Search */}
                    <div className="relative w-80">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9CA3AF]" />
                        <input
                            type="text"
                            placeholder="Tìm kiếm báo cáo, tên lan..."
                            className="w-full h-11 pl-11 pr-4 border border-[#E5E7EB] rounded-2xl text-sm focus:outline-none focus:ring-1 focus:ring-[#6D28D9]"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}