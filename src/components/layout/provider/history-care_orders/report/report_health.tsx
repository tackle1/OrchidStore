import React from 'react';
import { CheckCircle2, AlertTriangle, AlertCircle } from 'lucide-react';

export default function ReportHealth() {
    return (
        <div className="mb-8">
            <h3 className="font-bold text-[#1F2937] text-[16px] mb-3">Tình trạng sức khỏe</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button className="h-[46px] rounded-[10px] flex items-center justify-center gap-2 border border-[#22C55E] bg-[#DCFCE7] text-[#16A34A] font-semibold text-[14px] shadow-sm transition-colors">
                    <CheckCircle2 className="w-4 h-4" />
                    Tốt
                </button>
                <button className="h-[46px] rounded-[10px] flex items-center justify-center gap-2 border border-[#D1D5DB] text-[#4B5563] font-semibold text-[14px] hover:bg-gray-50 transition-colors shadow-sm">
                    <AlertTriangle className="w-4 h-4" />
                    Cần theo dõi
                </button>
                <button className="h-[46px] rounded-[10px] flex items-center justify-center gap-2 border border-[#D1D5DB] text-[#4B5563] font-semibold text-[14px] hover:bg-gray-50 transition-colors shadow-sm">
                    <AlertCircle className="w-4 h-4" />
                    Bất thường
                </button>
            </div>
        </div>
    );
}
