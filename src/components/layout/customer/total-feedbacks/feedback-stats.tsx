'use client';

import StarRating from '@/src/components/common/star-rating/star_rating';


interface FeedbackStatsProps {
    averageRating: number;
    totalReviews: number;
}

const getWidthClass = (percentage: number) => {
    switch (percentage) {
        case 85:
            return 'w-[85%]';
        case 10:
            return 'w-[10%]';
        case 3:
            return 'w-[3%]';
        case 1:
            return 'w-[1%]';
        default:
            return 'w-full';
    }
};

export default function FeedbackStats({ averageRating, totalReviews }: FeedbackStatsProps) {
    const ratingDistribution = [
        { star: 5, percentage: 85 },
        { star: 4, percentage: 10 },
        { star: 3, percentage: 3 },
        { star: 2, percentage: 1 },
        { star: 1, percentage: 1 },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">

            {/* Card 1: Đánh giá trung bình */}
            <div className="bg-white md:col-span-2 rounded-3xl border border-[#E5E7EB] p-6 flex flex-col items-center justify-center">
                <div className="text-5xl font-bold text-[#6D28D9]">{averageRating}</div>

                <div className="flex mt-2">
                    <StarRating rating={averageRating} />
                </div>

                <p className="text-sm text-[#6B7280] mt-2">Dựa trên {totalReviews} đánh giá</p>
            </div>

            {/* Card 2: Phân bố đánh giá */}
            <div className="bg-white md:col-span-3 rounded-3xl border border-[#E5E7EB] p-6">
                <h4 className="font-semibold mb-4 text-[#1F2937]">Phân bố đánh giá</h4>

                <div className="space-y-3 text-sm">
                    {ratingDistribution.map((item) => (
                        <div key={item.star} className="flex items-center gap-3">

                            {/* Label "5 sao" */}
                            <span className="w-14 text-[#374151]">{item.star} sao</span>

                            {/* Progress Bar */}
                            <div className="flex-1 h-2.5 bg-[#EAEDFF] rounded-full overflow-hidden">
                                <div
                                    className={`progress-fill h-full bg-[#6D28D9] rounded-full transition-all ${getWidthClass(item.percentage)}`}
                                />
                            </div>

                            {/* Phần trăm */}
                            <span className="w-12 text-right text-[#6B7280] font-medium">
                                {item.percentage}%
                            </span>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}