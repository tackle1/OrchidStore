'use client';

import StarRating from '@/src/components/common/star-rating/star_rating';

interface ReviewCardProps {
    avatar: string;
    name: string;
    rating: number;
    date: string;
    service: string;                    // Tên gói chăm sóc
    content: string;
    images?: string[];
    badge?: string;
    serviceColor?: 'green' | 'purple';  // ← Thêm prop này
}

export default function ReviewCard({
    avatar,
    name,
    rating,
    date,
    service,
    content,
    images = [],
    badge,
    serviceColor = 'green',             // Mặc định là màu xanh lá
}: ReviewCardProps) {

    // Xác định màu cho badge tên gói dịch vụ
    const serviceBadgeStyles = {
        green: 'bg-[#7CF994] text-[#065F46]',
        purple: 'bg-[#C4B5FD] text-[#4C1D95]',
    };

    const serviceBadgeClass = serviceBadgeStyles[serviceColor];

    return (
        <div className="bg-white rounded-3xl border border-[#E5E7EB] p-6">
            {/* Header */}
            <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                    <img src={avatar} alt={name} className="w-10 h-10 rounded-full object-cover" />
                    <div>
                        <p className="font-semibold text-[#1F2937]">{name}</p>
                        <div className="flex items-center gap-2 mt-1">
                            <div className="flex">
                                <StarRating rating={rating} />
                            </div>
                            {badge && (
                                <span className="px-2.5 py-0.5 text-xs bg-green-100 text-green-700 rounded-full font-medium">
                                    {badge}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
                <span className="text-xs text-[#6B7280] whitespace-nowrap">{date}</span>
            </div>

            {/* Tên gói dịch vụ - ĐÃ CÓ 2 MÀU */}
            <div className="mt-3">
                <span className={`inline-block px-3 py-1 text-sm rounded-full font-medium ${serviceBadgeClass}`}>
                    {service}
                </span>
            </div>

            {/* Nội dung đánh giá */}
            <p className="mt-3 text-sm text-[#4B5563] leading-relaxed">
                “{content}”
            </p>

            {/* Hình ảnh đính kèm */}
            {images.length > 0 && (
                <div className="flex gap-3 mt-4">
                    {images.map((img, index) => (
                        <div key={index} className="w-16 h-16 rounded-xl overflow-hidden border border-[#E5E7EB]">
                            <img src={img} alt={`review-img-${index}`} className="w-full h-full object-cover" />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}