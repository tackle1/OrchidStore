import React from 'react';
import { Filter, Download } from 'lucide-react';

export default function HistoryCareHeader() {
    return (
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <h1 className="text-[28px] font-bold text-[#111827]">Quản lý đơn chăm sóc</h1>
            <div className="flex gap-3">
                <button type="button" title="Lọc đơn" className="flex items-center gap-2 px-4 py-2 bg-white border border-[#D1D5DB] text-[#374151] rounded-xl font-medium hover:bg-gray-50 transition-colors shadow-sm text-sm">
                    <Filter className="w-4 h-4" />
                    Lọc
                </button>
                <button type="button" title="Xuất báo cáo" className="flex items-center gap-2 px-4 py-2 bg-white border border-[#D1D5DB] text-[#374151] rounded-xl font-medium hover:bg-gray-50 transition-colors shadow-sm text-sm">
                    <Download className="w-4 h-4" />
                    Xuất báo cáo
                </button>
            </div>
        </div>
    );
}
