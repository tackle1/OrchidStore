'use client';

import Link from 'next/link';
import { Star, MapPin, CheckCircle } from 'lucide-react';

interface ProviderCardProps {
    slug: string;
    name: string;
    avatar: string;
    rating: number;
    reviewCount: number;
    location: string;
    description: string;
    serviceCount: number;
    isVerified?: boolean;
}

export default function ProviderCard({
    slug,
    name,
    avatar,
    rating,
    reviewCount,
    location,
    description,
    serviceCount,
    isVerified = true,
}: ProviderCardProps) {
    return (
        <Link href={`/providers/${slug}`} className="group block">
            <div className="bg-white border border-[#E5E7EB] rounded-3xl overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">

                {/* Avatar + Thông tin cơ bản */}
                <div className="p-5 flex items-center gap-4">
                    <div className="relative flex-shrink-0">
                        <img
                            src={avatar}
                            alt={name}
                            className="w-16 h-16 rounded-2xl object-cover border border-[#E5E7EB]"
                        />
                        {isVerified && (
                            <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5">
                                <CheckCircle className="w-5 h-5 text-[#10B981]" />
                            </div>
                        )}
                    </div>

                    <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-[#1F2937] text-lg group-hover:text-[#6D28D9] transition-colors line-clamp-1">
                            {name}
                        </h3>

                        <div className="flex items-center gap-1 mt-1">
                            <div className="flex items-center gap-0.5">
                                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                <span className="font-semibold text-[#1F2937]">{rating}</span>
                            </div>
                            <span className="text-[#6B7280] text-sm">({reviewCount})</span>
                        </div>
                    </div>
                </div>

                {/* Mô tả + Thông tin */}
                <div className="px-5 pb-4 flex-1">
                    <div className="flex items-center gap-1.5 text-[#6B7280] text-sm mb-3">
                        <MapPin className="w-4 h-4" />
                        <span className="line-clamp-1">{location}</span>
                    </div>

                    <p className="text-[#4B5563] text-sm line-clamp-2 mb-4">
                        {description}
                    </p>

                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#F3E8FF] text-[#6D28D9] text-xs font-medium">
                        {serviceCount} gói dịch vụ
                    </div>
                </div>

                {/* Footer */}
                <div className="px-5 py-4 border-t border-[#E5E7EB] bg-[#FAFAFC]">
                    <span className="text-[#6D28D9] text-sm font-semibold group-hover:underline">
                        Xem chi tiết →
                    </span>
                </div>
            </div>
        </Link>
    );
}