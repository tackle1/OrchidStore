'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

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
            <div className="bg-white border border-[#E5E7EB] rounded-3xl overflow-hidden hover:shadow-md transition-all duration-300">

                {/* Image */}
                <div className="relative h-[160px]">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Content */}
                <div className="p-5 relative">

                    {/* Title + Badge */}
                    <div className="flex items-start justify-between mb-2 pr-8">
                        <h3 className="text-[17px] font-semibold text-[#1F2937] group-hover:text-[#6D28D9] transition-colors leading-snug">
                            {title}
                        </h3>

                        {/* Badge */}
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#F3E8FF] text-[#6D28D9] text-xs font-medium whitespace-nowrap">
                            {serviceCount} Dịch vụ
                        </span>
                    </div>

                    {/* Description */}
                    <p className="text-[13px] text-[#6B7280] line-clamp-2 mb-4 pr-8">
                        {description}
                    </p>

                    {/* Nút mũi tên tròn ở góc dưới bên phải */}
                    <div className="absolute bottom-5 right-5">
                        <div className="w-8 h-8 rounded-full bg-[#6D28D9] flex items-center justify-center group-hover:bg-[#5B21B6] transition-colors">
                            <ArrowRight className="w-4 h-4 text-white" />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}