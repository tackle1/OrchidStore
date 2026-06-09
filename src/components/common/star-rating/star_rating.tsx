'use client';

import { Star } from 'lucide-react';

interface StarRatingProps {
    rating: number; // ví dụ: 4.5, 5, 3.5
    size?: number;
}

export default function StarRating({ rating, size = 16 }: StarRatingProps) {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    // Full stars
    for (let i = 0; i < fullStars; i++) {
        stars.push(
            <Star
                key={`full-${i}`}
                className="text-yellow-400 fill-yellow-400"
                size={size}
            />
        );
    }

    // Half star
    if (hasHalfStar) {
        stars.push(
            <div key="half" className="relative inline-flex">
                {/* Empty star (background) */}
                <Star
                    className="text-yellow-400"
                    size={size}
                />
                {/* Half filled star */}
                <div className="absolute inset-y-0 left-0 overflow-hidden w-1/2">
                    <Star
                        className="text-yellow-400 fill-yellow-400"
                        size={size}
                    />
                </div>
            </div>
        );
    }

    // Empty stars
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        stars.push(
            <Star
                key={`empty-${i}`}
                className="text-yellow-400"
                size={size}
            />
        );
    }

    return <div className="flex items-center gap-1">{stars}</div>;
}