import React from 'react';
import { Calendar, FileText, Sprout, Truck } from 'lucide-react';

interface ServicePackageInfoProps {
    packageDetails: any;
}

export default function ServicePackageInfo({ packageDetails }: ServicePackageInfoProps) {
    return (
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100">
            <div className="flex items-start justify-between mb-6">
                <div>
                    <h2 className="text-xl font-bold text-[#1F2937] mb-2">{packageDetails.name}</h2>
                    <p className="text-gray-500 text-sm leading-relaxed max-w-xl">
                        {packageDetails.description}
                    </p>
                </div>
                <div className="bg-[#D1FAE5] text-[#065F46] flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap">
                    <span className="text-[#10B981]">●</span>
                    {packageDetails.status}
                </div>
            </div>

            <div className="mb-8">
                <span className="text-3xl font-bold text-[#6D28D9]">{packageDetails.price}</span>
                <span className="text-gray-500 ml-1">{packageDetails.period}</span>
            </div>

            <h3 className="font-semibold text-slate-800 mb-4">Chi tiết bao gồm</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {packageDetails.features.map((feature: string, idx: number) => (
                    <div key={idx} className="flex items-center gap-3 text-sm text-[#374151] bg-[#F8F9FA] p-3 rounded-xl border border-gray-100">
                        {idx === 0 && <Calendar className="w-5 h-5 text-[#7C3AED] flex-shrink-0" />}
                        {idx === 1 && <FileText className="w-5 h-5 text-[#7C3AED] flex-shrink-0" />}
                        {idx === 2 && <Sprout className="w-5 h-5 text-[#7C3AED] flex-shrink-0" />}
                        {idx === 3 && <Truck className="w-5 h-5 text-[#7C3AED] flex-shrink-0" />}
                        <span>{feature}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
