'use client';

import Link from 'next/link';
import { Star, ArrowRight } from 'lucide-react'; // ← Thêm import icon

interface FeaturedServiceCardProps {
    image: string;
    title: string;
    description: string;
    serviceCount: number;
    href: string;
}

export default function FeaturedServiceCard({
    image,
    title,
    description,
    serviceCount,
    href,
}: FeaturedServiceCardProps) {
    return (
        <Link href={href} className="group block">
            <div className="bg-white border border-[#E5E7EB] rounded-3xl overflow-hidden flex flex-col md:flex-row hover:shadow-lg transition-all duration-300">

                {/* Image - Bên trái */}
                <div className="md:w-[42%]">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover md:min-h-[260px]"
                    />
                </div>

                {/* Content - Bên phải */}
                <div className="p-6 md:w-[58%] flex flex-col">

                    {/* Badges */}
                    <div className="flex items-center gap-2 mb-4">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F3E8FF] text-[#6D28D9] text-xs font-medium">
                            <Star className="w-3 h-3 fill-current" /> {/* ← Icon sao */}
                            Phổ biến nhất
                        </span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#EAEDFF] text-[#6D28D9] text-xs font-medium">
                            {serviceCount} Dịch vụ
                        </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-[21px] font-bold text-[#1F2937] leading-snug mb-3 group-hover:text-[#6D28D9] transition-colors">
                        {title}
                    </h3>

                    {/* Description */}
                    <p className="text-[14.5px] text-[#6B7280] leading-relaxed flex-1">
                        {description}
                    </p>

                    {/* Link Xem chi tiết */}
                    <div className="mt-5 flex items-center gap-1 text-[#6D28D9] text-sm font-medium group-hover:gap-2 transition-all">
                        Xem chi tiết
                        <ArrowRight className="w-4 h-4" /> {/* ← Icon mũi tên */}
                    </div>
                </div>
            </div>
        </Link>
    );
}