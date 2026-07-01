'use client';

import Link from 'next/link';
import { Clock, FileText, Star, CheckCircle, Gem } from 'lucide-react';

interface DiscoveryServiceCardProps {
    id?: string;                    // Giữ lại nếu cần (không bắt buộc dùng cho link)
    slug: string;                   // ← Dùng slug thay vì id
    image: string;
    title: string;
    provider: string;
    isVerified?: boolean;
    rating: number;
    reviewCount: number;
    duration: string;
    reportFrequency: string;
    price: string;
    badge?: string;
}

export default function DiscoveryServiceCard({
    slug,                           // ← Nhận slug
    image,
    title,
    provider,
    isVerified = true,
    rating,
    reviewCount,
    duration,
    reportFrequency,
    price,
    badge,
}: DiscoveryServiceCardProps) {

    // ==================== THAY ĐỔI QUAN TRỌNG ====================
    const detailsHref = `/customer-service-packages/service-discovery/${slug}/details`;

    return (
        <Link href={detailsHref} className="group block">
            <div className="bg-white border border-[#E5E7EB] rounded-3xl overflow-hidden hover:shadow-md transition-all duration-300">

                {/* Image */}
                <div className="relative h-[170px]">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover"
                    />

                    {/* Badge */}
                    {badge && (
                        <div className="absolute top-3 right-3">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium bg-white text-[#6D28D9] rounded-full shadow-sm">
                                <Gem className="w-3.5 h-3.5" />
                                {badge}
                            </span>
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="p-5">

                    {/* Provider + Verified + Rating */}
                    <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                            <span className="text-sm text-[#374151]">{provider}</span>

                            {isVerified && (
                                <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium bg-[#D1FAE5] text-[#065F46] rounded-full mr-2">
                                    <CheckCircle className="w-3 h-3" />
                                    Đã xác minh
                                </span>
                            )}
                        </div>

                        <div className="flex items-center gap-1 text-sm">
                            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                            <span className="font-semibold text-[#1F2937]">{rating}</span>
                            <span className="text-[#6B7280]">({reviewCount})</span>
                        </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-[16px] font-semibold text-[#1F2937] leading-snug mb-4 line-clamp-2 group-hover:text-[#6D28D9] transition-colors">
                        {title}
                    </h3>

                    {/* Info Tags */}
                    <div className="flex items-center gap-2 mb-4">
                        <div className="flex items-center gap-1.5 px-3 py-1 bg-[#F2F3FF] rounded-full text-xs text-[#630ED4]">
                            <Clock className="w-3.5 h-3.5" />
                            <p className='text-[#4A4455]'>
                                {duration}
                            </p>
                        </div>
                        <div className="flex items-center gap-1.5 px-3 py-1 bg-[#F2F3FF] rounded-full text-xs text-[#630ED4]">
                            <FileText className="w-3.5 h-3.5" />
                            <p className='text-[#4A4455]'>
                                {reportFrequency}
                            </p>
                        </div>
                    </div>

                    {/* Price + Button */}
                    <div className="flex items-center justify-between pt-2 border-t border-[#E5E7EB]">
                        <div>
                            <p className="text-xs text-[#6B7280]">Giá từ</p>
                            <span className='w-[flex] inline-flex items-end gap-1'>
                                <p className="text-[clamp(18px, 5vw, 20px)] leading-[20px] font-bold text-[#630ED4] tracking-[-0.5px]">{price} </p>
                                <p className='text-[14px]'>
                                    /tháng
                                </p>
                            </span>
                        </div>

                        <span className="px-4 py-2 mt-2 bg-[#6D28D9] hover:bg-[#5B21B6] text-white text-center text-sm font-semibold rounded-xl transition-colors">
                            Xem chi tiết
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
}