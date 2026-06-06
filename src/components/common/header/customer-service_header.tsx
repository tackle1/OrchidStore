'use client';

import { Leaf, Clock } from 'lucide-react';

interface ServiceHeaderProps {
    title: string;
    description: string;
}

export default function CustomerServiceHeader({ title, description }: ServiceHeaderProps) {
    return (
        <div className="mb-6">
            {/* Badges */}
            <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium bg-[#D1FAE5] text-[#065F46] rounded-full">
                    <Leaf className="w-3.5 h-3.5" /> Premium Care
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium bg-[#EDE9FE] text-[#6D28D9] rounded-full">
                    <Clock className="w-3.5 h-3.5" /> Bắt đầu sau 24h
                </span>
            </div>

            {/* Title */}
            <h1 className="text-[28px] font-bold text-[#1F2937] leading-tight mb-3">
                {title}
            </h1>

            {/* Description */}
            <p className="text-[#4B5563] text-[15px] leading-relaxed">
                {description}
            </p>
        </div>
    );
}