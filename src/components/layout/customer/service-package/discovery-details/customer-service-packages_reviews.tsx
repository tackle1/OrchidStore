'use client';

import { ArrowRight } from 'lucide-react';
import { Feedback } from '../../../../../data/servicePackages';
import StarRating from '../../../../common/star-rating/star_rating';

interface CustomerReviewsProps {
    feedbacks: Feedback[];
}

export default function CustomerServicePackagesReviews({ feedbacks }: CustomerReviewsProps) {
    return (
        <div className="mb-10">
            {/* Header */}
            <div className="flex items-center justify-between mb-5">
                <h3 className="text-xl font-semibold">Đánh giá từ khách hàng</h3>
                <a
                    href="#"
                    className="flex items-center gap-1 text-sm text-[#6D28D9] hover:underline font-medium"
                >
                    Xem tất cả
                    <ArrowRight className="w-4 h-4" />
                </a>
            </div>

            {/* Danh sách đánh giá */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {feedbacks.map((feedback) => (
                    <div
                        key={feedback.id}
                        className="bg-white border border-[#E5E7EB] rounded-2xl p-5"
                    >
                        {/* Header: Avatar + Name + Stars + Time */}
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                                {/* Avatar */}
                                <div className="w-9 h-9 rounded-full bg-[#6D28D9] flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                                    {feedback.initial}
                                </div>

                                <div>
                                    <p className="font-semibold text-[#1F2937]">{feedback.name}</p>

                                    {/* Stars với hỗ trợ nửa sao */}
                                    <div className="mt-1">
                                        <StarRating rating={feedback.rating} size={16} />
                                    </div>
                                </div>
                            </div>

                            {/* Thời gian */}
                            <span className="text-xs text-[#6B7280] whitespace-nowrap mt-1">
                                {feedback.time}
                            </span>
                        </div>
                        {/* Nội dung review */}
                        <p className="text-sm text-[#4B5563] leading-relaxed">
                            “{feedback.content}”
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}