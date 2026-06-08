'use client';

import { useState } from 'react';
import { Star, X } from 'lucide-react';
import StarRating from '@/src/components/common/star-rating/star_rating';
interface Review {
    id: string;
    initial: string;
    name: string;
    time: string;
    service: string;
    rating: number;
    content: string;
}

interface ProviderReviewsProps {
    reviews: Review[];
    rating: number;
    reviewCount: number;
}

export default function ProviderReviews({ reviews, rating, reviewCount }: ProviderReviewsProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const displayedReviews = reviews.slice(0, 2); // Hiển thị 2 đánh giá mới nhất

    return (
        <>
            <div className="bg-white rounded-3xl border border-[#E5E7EB] p-6 mt-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                    <h2 className="text-xl font-semibold text-[#1F2937]">Đánh giá từ khách hàng</h2>

                    <div className="text-right">
                        <div className="flex items-center justify-end gap-2">
                            <span className="text-3xl font-bold text-[#1F2937]">{rating}</span>
                            <div className="flex">
                               <StarRating rating={rating} size={16} />
                            </div>
                        </div>
                        <p className="text-sm text-[#6B7280] mt-0.5">{reviewCount} đánh giá</p>
                    </div>
                </div>

                {/* Danh sách đánh giá (hiển thị 2 cái) */}
                <div className="space-y-6">
                    {displayedReviews.map((review) => (
                        <div key={review.id} className="border-b border-[#F3F4F6] pb-6 last:border-b-0 last:pb-0">
                            <div className="flex items-start gap-4">
                                <div className="w-9 h-9 rounded-full bg-[#6D28D9] flex-shrink-0 flex items-center justify-center text-white font-semibold text-sm">
                                    {review.initial}
                                </div>

                                <div className="flex-1">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="font-semibold text-[#1F2937]">{review.name}</p>
                                            <p className="text-xs text-[#6B7280] mt-0.5">
                                                {review.time} • {review.service}
                                            </p>
                                        </div>
                                        <div className="flex">
                                            <StarRating rating={review.rating} size={16} />
                                        </div>
                                    </div>
                                    <p className="text-[#4B5563] text-sm mt-3 leading-relaxed">
                                        “{review.content}”
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Nút Xem tất cả - ĐÃ THÊM XỬ LÝ */}
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="mt-6 w-full py-3 border border-[#E5E7EB] rounded-2xl text-[#6D28D9] font-semibold text-sm hover:bg-[#F8F7FA] transition-colors"
                >
                    Xem tất cả {reviewCount} đánh giá
                </button>
            </div>

            {/* ==================== MODAL XEM TẤT CẢ ĐÁNH GIÁ ==================== */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
                    <div className="bg-white w-full max-w-2xl rounded-3xl max-h-[85vh] overflow-hidden flex flex-col">

                        {/* Header Modal */}
                        <div className="flex items-center justify-between px-6 py-4 border-b">
                            <div>
                                <h3 className="text-lg font-semibold">Tất cả đánh giá</h3>
                                <p className="text-sm text-[#6B7280]">{reviewCount} đánh giá • Trung bình {rating}/5</p>
                            </div>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="text-[#6B7280] hover:text-black p-1"
                                title="Đóng"
                                aria-label="Đóng"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Danh sách đánh giá trong Modal */}
                        <div className="overflow-y-auto p-6 space-y-6 flex-1">
                            {reviews.map((review) => (
                                <div key={review.id} className="border-b border-[#F3F4F6] pb-6 last:border-b-0">
                                    <div className="flex items-start gap-4">
                                        <div className="w-9 h-9 rounded-full bg-[#6D28D9] flex-shrink-0 flex items-center justify-center text-white font-semibold text-sm">
                                            {review.initial}
                                        </div>

                                        <div className="flex-1">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <p className="font-semibold text-[#1F2937]">{review.name}</p>
                                                    <p className="text-xs text-[#6B7280] mt-0.5">
                                                        {review.time} • {review.service}
                                                    </p>
                                                </div>
                                                <div className="flex">
                                                    <StarRating rating={review.rating} size={16} />
                                                </div>
                                            </div>
                                            <p className="text-[#4B5563] text-sm mt-3 leading-relaxed">
                                                “{review.content}”
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Footer Modal */}
                        <div className="p-4 border-t">
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="w-full py-3 bg-[#6D28D9] text-white rounded-2xl font-semibold hover:bg-[#5B21B6] transition-colors"
                            >
                                Đóng
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}