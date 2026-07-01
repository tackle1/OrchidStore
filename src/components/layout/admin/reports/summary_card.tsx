'use client';

import { LucideIcon } from 'lucide-react';
import { TrendingUp, TrendingDown } from 'lucide-react';
interface SummaryCardProps {
    icon: LucideIcon;
    iconBg: string;
    title: string;
    value: string;
    change: string;
    isPositive: boolean;
}

export default function SummaryCard({
    icon: Icon,
    iconBg,
    title,
    value,
    change,
    isPositive,
}: SummaryCardProps) {
    return (
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-[#F0ECF7]">
            <div className="flex items-center gap-3 mb-3">
                <div className={`w-9 h-9 rounded-xl ${iconBg} flex items-center justify-center`}>
                    <Icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm font-medium text-[#374151]">{title}</span>
            </div>

            <div className="text-[22px] font-bold text-[#111827] tracking-tight mb-1">
                {value}
            </div>

            <div className={`text-sm flex items-center gap-1 ${isPositive ? 'text-[#10B981]' : 'text-[#EF4444]'}`}>
                {isPositive ?
                    <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                {change}
            </div>
        </div>
    );
}