'use client';

import { Calendar, FileText, Sprout, Truck, ArrowRight } from 'lucide-react';
interface ServicePackageCardProps {
    title: string;
    price: string;
    period: string;
    features: string[];
    status: 'Active' | 'Draft';
    buttonText: string;
    onEdit?: () => void;
    onViewDetail?: () => void;
}

export default function ServicePackageCard({
    title,
    price,
    period,
    features,
    status,
    buttonText,
    onEdit,
    onViewDetail,
}: ServicePackageCardProps) {
    const isActive = status === 'Active';

    return (
        <div className="bg-white border border-[#E5E7EB] rounded-3xl p-6 w-full max-w-[320px] shadow-sm flex flex-col">

            {/* Header: Title + Status */}
            <div className="flex items-start justify-between mb-3">
                <h3 className="text-[17px] font-bold text-[#1F2937] leading-snug pr-3">
                    {title}
                </h3>

                {/* Status Badge */}
                <div className={`
                    flex items-center gap-1.5 px-3 py-[5px] rounded-full text-xs font-medium whitespace-nowrap flex-shrink-0
                    ${isActive
                        ? 'bg-[#D1FAE5] text-[#065F46]'
                        : 'bg-[#F3E8FF] text-[#6B21A8]'
                    }
                `}>
                    {isActive ? (
                        <>
                            <span className="text-[#10B981]">●</span>
                            Active
                        </>
                    ) : (
                        <>
                            <ArrowRight className="w-4 h-4" />
                            Draft
                        </>
                    )}
                </div>
            </div>

            {/* Price */}
            <div className="mb-5">
                <span className="text-[26px] font-bold text-[#6D28D9] tracking-tight">
                    {price}
                </span>
                <span className="text-[#6B7280] text-[14px] ml-1">
                    {period}
                </span>
            </div>

            {/* Features List */}
            <div className="flex-1 space-y-[10px] mb-6">
                {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 text-[14px] text-[#374151]">
                        {index === 0 && <Calendar className="w-4 h-4 text-[#6B7280] flex-shrink-0" />}
                        {index === 1 && <FileText className="w-4 h-4 text-[#6B7280] flex-shrink-0" />}
                        {index === 2 && <Sprout className="w-4 h-4 text-[#6B7280] flex-shrink-0" />}
                        {index === 3 && <Truck className="w-4 h-4 text-[#6B7280] flex-shrink-0" />}
                        <span>{feature}</span>
                    </div>
                ))}
            </div>

            {/* Actions */}
            <div className="space-y-3 mt-auto">
                {onViewDetail && (
                    <button
                        onClick={onViewDetail}
                        className="w-full h-[44px] bg-[#F5F3FF] text-[#7C3AED] rounded-xl text-[14px] font-semibold hover:bg-[#EDE9FE] transition-colors"
                    >
                        Xem chi tiết
                    </button>
                )}
                <button
                    onClick={onEdit}
                    className="w-full h-[44px] border border-[#7C3AED] text-[#7C3AED] rounded-xl text-[14px] font-semibold hover:bg-[#F5F3FF] active:bg-[#EDE9FE] transition-colors"
                >
                    {buttonText}
                </button>
            </div>
        </div>
    );
}