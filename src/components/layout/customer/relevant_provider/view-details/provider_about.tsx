'use client';

import { Award, Leaf, BadgeCheck } from 'lucide-react';

interface Achievement {
    title: string;
    icon?: 'award' | 'leaf' | 'certificate';
}

interface ProviderAboutProps {
    about: string;
    achievements?: Achievement[];
}

export default function ProviderAbout({ about, achievements = [] }: ProviderAboutProps) {
    // Hàm map icon theo loại
    const getIcon = (iconType?: string) => {
        switch (iconType) {
            case 'award':
                return <Award className="w-4 h-4 text-[#6D28D9]" />;
            case 'leaf':
                return <Leaf className="w-4 h-4 text-[#006E2D]" />;
                case 'certificate':
                return <BadgeCheck className="w-4 h-4 text-[#F59E0B]" />; // certificate icon
            default:
                return <Award className="w-4 h-4" />;
        }
    };

    return (
        <div className="bg-white rounded-3xl border border-[#E5E7EB] p-8">
            {/* Tiêu đề */}
            <h2 className="text-xl font-semibold text-[#1F2937] mb-4">
                Về chúng tôi
            </h2>

            {/* Mô tả */}
            <p className="text-[#4B5563] leading-relaxed text-[15px] whitespace-pre-line">
                {about}
            </p>

            {/* Chứng chỉ & Giải thưởng */}
            {achievements.length > 0 && (
                <div className="mt-8">
                    <h3 className="text-base font-semibold text-[#1F2937] mb-4">
                        Chứng chỉ & Giải thưởng
                    </h3>

                    <div className="flex flex-wrap gap-3">
                        {achievements.map((item, index) => (
                            <div
                                key={index}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                                           bg-[#EAEDFF] text-[#6D28D9] text-sm font-medium"
                            >
                                {getIcon(item.icon)}
                                {item.title}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}