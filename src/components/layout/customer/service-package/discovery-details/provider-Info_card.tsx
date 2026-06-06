'use client';

import { Star, Check, MessageCircle } from 'lucide-react';

interface ProviderInfoCardProps {
    provider: string;
    avatar: string;
    rating: number;
    reviewCount: number;
}

export default function ProviderInfoCard({ provider, avatar, rating, reviewCount }: ProviderInfoCardProps) {
    return (
        <div className="flex items-center justify-between bg-white border border-[#E5E7EB] rounded-2xl p-4 mb-8">
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-[#E5E7EB]">
                    <img src={avatar} alt={provider} className="w-full h-full object-cover" />
                </div>
                <div>
                    <div className="flex items-center gap-2">
                        <span className="font-semibold text-[#1F2937]">{provider}</span>
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium bg-[#D1FAE5] text-[#065F46] rounded-full">
                            <Check className="w-3 h-3" /> Đã xác minh
                        </span>
                    </div>
                    <div className="flex items-center gap-2 mt-0.5 text-sm">
                        <div className="flex items-center text-yellow-400">
                            <Star className="w-4 h-4 fill-current" />
                        </div>
                        <span className="font-semibold text-[#1F2937]">{rating}</span>
                        <span className="text-[#6B7280]">• {reviewCount} đánh giá</span>
                    </div>
                </div>
            </div>

            <button className="flex items-center gap-2 px-5 py-2 border border-[#E5E7EB] rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors">
                <MessageCircle className="w-4 h-4" />
                Nhắn tin
            </button>
        </div>
    );
}