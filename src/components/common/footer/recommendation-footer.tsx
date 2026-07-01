'use client';

import {
    Leaf,
    FlaskConical,
    BriefcaseBusiness,
} from 'lucide-react';

export default function RecommendationFooter() {
    const recommendations = [
        {
            title: 'Dưỡng lan ra hoa',
            description: 'Kích thích sinh học an toàn',
            icon: Leaf,
            bgColor: 'bg-[#E7F2EA]',
            iconColor: 'text-[#15803D]',
        },
        {
            title: 'Phòng trừ sâu bệnh',
            description: 'Sản phẩm hữu cơ 100%',
            icon: FlaskConical,
            bgColor: 'bg-[#F0EBF9]',
            iconColor: 'text-[#6D28D9]',
        },
        {
            title: 'Cải tạo giá thể',
            description: 'Thay vỏ thông, dớn cao cấp',
            icon: BriefcaseBusiness,
            bgColor: 'bg-[#F0EBF9]',
            iconColor: 'text-[#6D28D9]',
        },
    ];

    return (
        <section className="w-full mt-10">
            {/* Divider */}
            <div className="w-full h-[1px] bg-[#DADCE5] mb-6" />

            {/* Header */}
            <div className="flex items-center justify-between mb-5">
                <h2 className="text-[18px] font-semibold text-[#1F2937]">
                    Danh mục gợi ý cho bạn
                </h2>

                <button
                    type="button"
                    className="
                        text-[#6D28D9]
                        text-[14px]
                        font-semibold
                        hover:opacity-80
                        transition
                    "
                >
                    Xem tất cả
                </button>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-3 gap-4">
                {recommendations.map((item) => {
                    const Icon = item.icon;

                    return (
                        <div
                            key={item.title}
                            className="
                                bg-white
                                border
                                border-[#E5E7EB]
                                rounded-[16px]
                                px-4
                                py-4
                                flex
                                items-center
                                gap-4
                                hover:shadow-sm
                                transition
                            "
                        >
                            {/* Icon */}
                            <div
                                className={`
                                    w-[56px]
                                    h-[56px]
                                    rounded-full
                                    flex
                                    items-center
                                    justify-center
                                    ${item.bgColor}
                                `}
                            >
                                <Icon
                                    className={`w-6 h-6 ${item.iconColor}`}
                                    strokeWidth={2}
                                />
                            </div>

                            {/* Content */}
                            <div>
                                <h3
                                    className="
                                        text-[22px]
                                        font-semibold
                                        text-[#1F2937]
                                        leading-none
                                        mb-2
                                    "
                                >
                                    {item.title}
                                </h3>

                                <p
                                    className="
                                        text-[16px]
                                        text-[#6B7280]
                                        leading-none
                                    "
                                >
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}