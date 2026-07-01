'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

interface ServicePackageCardProps {
    image: string;
    title: string;
    description: string;
    serviceCount: number;
    href: string;
}

export default function ServicePackageCard({
    image,
    title,
    description,
    serviceCount,
    href,
}: ServicePackageCardProps) {
    return (
        <Link href={href} className="group block">
            <div className="h-[360px] bg-white border border-[#E5E7EB] rounded-3xl p-3 hover:shadow-md transition-all duration-300">

                {/* Image - Nằm gọn trong background + Bo tròn đẹp */}
                <div className="relative w-full h-[170px] overflow-hidden rounded-2xl bg-white">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover rounded-2xl group-hover:scale-[1.03] transition-transform duration-300"
                    />
                </div>

                {/* Content */}
                <div className="pt-5 pb-2 px-1 relative">

                    {/* Title + Badge */}
                    <div className="flex items-start justify-between mb-3 pr-10">
                        <h3 className="text-[17px] font-semibold text-[#1F2937] group-hover:text-[#6D28D9] transition-colors leading-snug">
                            {title}
                        </h3>

                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#F3E8FF] text-[#6D28D9] text-xs font-medium whitespace-nowrap">
                            {serviceCount} Dịch vụ
                        </span>
                    </div>

                    {/* Description */}
                    <p className="text-[13px] text-[#6B7280] line-clamp-3 pr-8">
                        {description}
                    </p>

                    {/* Nút mũi tên tròn */}
                    <div className="absolute top-30 right-5">
                        <div className="w-10 h-10 rounded-full bg-[#630ED4] flex items-center justify-center group-hover:bg-[#5B21B6] transition-colors">
                            <ArrowUpRight className="w-4 h-4 text-white" />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}