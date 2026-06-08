'use client';

import { Star, MapPin, MessageCircle, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
interface ProviderHeaderProps {
    name: string;
    avatar: string;
    rating: number;
    reviewCount: number;
    completedOrders: number;
    location: string;
    title: string;
    slug: string;
}

export default function CustomerRelevantProviderHeader({
    name,
    avatar,
    rating,
    reviewCount,
    completedOrders,
    location,
    title,
    slug,
}: ProviderHeaderProps) {
    return (
        <div className="relative">
            {/* Background Image */}
            <div className="w-[98%] h-[320px] relative">
                <Image
                    src="/assets/images/relevant-provider-bg.png"
                    alt="Orchid greenhouse"
                    fill
                    className="object-cover rounded-4xl relative"
                />
                {/* Overlay nhẹ để chữ nổi bật hơn */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30 rounded-4xl" />
            </div>

            {/* White Card */}
            <div className="max-w-7xl mx-auto px-6 mr-8 -mt-20 relative z-10">
                <div className="bg-white h-[250px] rounded-3xl shadow-lg p-6 flex flex-col lg:flex-row lg:items-center gap-6 border border-[#E5E7EB]">

                    {/* Left Content */}
                    <div className="flex items-center gap-5 flex-1">
                        {/* Avatar */}
                        <div className="relative flex-shrink-0">
                            <img
                                src={avatar}
                                alt={name}
                                className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
                            />
                            <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1">
                                <div className="w-6 h-6 bg-[#10B981] rounded-full flex items-center justify-center">
                                    <span className="text-white text-xs">✓</span>
                                </div>
                            </div>
                        </div>

                        {/* Info */}
                        <div className="flex-1 items-center mt-16 flex-wrap">
                            <div className="flex items-center gap-3 flex-wrap">
                                <h1 className="text-2xl font-bold text-[#1F2937]">{name}</h1>
                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#D1FAE5] text-[#065F46] text-xs font-medium">
                                    Đối tác xác minh
                                </span>
                            </div>

                            <p className="text-[#6B7280] mt-1 text-sm">{title}</p>

                            {/* Stats */}
                            <div className="flex items-center gap-x-2 mt-3 text-sm flex-wrap">

                                {/* Rating */}
                                <div className='grid grid-rows-2 sm:grid-cols-8 gap-4'>
                                    <div className='lg:col-span-4'>
                                        <div className="flex items-center gap-1.5">

                                            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                            <span className="font-semibold text-[#1F2937]">{rating}</span>
                                            <span className="text-[#6B7280]">({reviewCount} đánh giá)</span>
                                            {/* Dấu phân cách */}
                                            <span className="text-[#E5E7EB]">|</span>
                                        </div>

                                        <div className="flex items-center gap-1.5 text-[#6B7280] mt-6">
                                            <MapPin className="w-4 h-4 text-[#630ED4]" />
                                            <span className="font-medium text-[#1F2937]">Khu vực:</span>
                                            <span>{location}</span>
                                        </div>
                                    </div>
                                    <div className='lg:col-span-4'>
                                        {/* Lượt hoàn thành */}
                                        <div className="flex items-center gap-1.5 text-[#6B7280]">
                                            <CheckCircle className="w-4 h-4 text-[#630ED4]" />
                                            <span className="font-medium text-[#1F2937]">{completedOrders}+</span>
                                            <span>Lượt hoàn thành</span>
                                            {/* Dấu phân cách */}
                                            <span className="text-[#E5E7EB] gap-4">|</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Right Buttons */}
                    <div className="flex flex-col sm:flex-col gap-3 lg:ml-auto">
                        <Link
                            href={`/customer/providers/${slug}/services`}
                            className="px-6 py-3 bg-[#6D28D9] hover:bg-[#5B21B6] text-white font-semibold rounded-2xl text-sm transition-colors text-center"
                        >
                            Xem dịch vụ
                        </Link>

                        <button
                            className="px-6 py-3 bg-[#EAEDFF] border border-[#6D28D9] text-[#6D28D9] hover:bg-[#F3E8FF] font-semibold rounded-2xl text-sm transition-colors flex items-center justify-center gap-2"
                        >
                            <MessageCircle className="w-4 h-4" />
                            Nhắn tin
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}