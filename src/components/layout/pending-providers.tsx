'use client';

import { FileText, Trees } from 'lucide-react';

export default function PendingProviders() {
    const providers = [
        {
            id: 1,
            name: 'Vườn Lan Thùy Mộc',
            time: 'Đăng ký 2h trước',
            icon: FileText,
        },
        {
            id: 2,
            name: 'GreenSpace Care',
            time: 'Đăng ký 5h trước',
            icon: Trees,
        },
    ];

    return (
        <div
            className="
                w-full
                bg-white
                rounded-[20px]
                border
                border-[#ECE8F5]
                p-5
            "
        >
            {/* Header */}
            <h2
                className="
                    text-[18px]
                    font-bold
                    text-[#1F2937]
                    mb-5
                "
            >
                Provider chờ xét duyệt
            </h2>

            {/* List */}
            <div className="space-y-4">
                {providers.map((provider) => {
                    const Icon = provider.icon;

                    return (
                        <div
                            key={provider.id}
                            className="
                                flex
                                items-center
                                justify-between
                            "
                        >
                            {/* Left */}
                            <div className="flex items-center gap-3">
                                {/* Icon */}
                                <div
                                    className="
                                        w-8
                                        h-8
                                        rounded-[8px]
                                        bg-[#F3EEFF]
                                        flex
                                        items-center
                                        justify-center
                                        flex-shrink-0
                                    "
                                >
                                    <Icon
                                        className="
                                            w-4
                                            h-4
                                            text-[#7C3AED]
                                        "
                                    />
                                </div>

                                {/* Info */}
                                <div>
                                    <h3
                                        className="
                                            text-[14px]
                                            font-semibold
                                            text-[#1F2937]
                                            leading-[18px]
                                        "
                                    >
                                        {provider.name}
                                    </h3>

                                    <p
                                        className="
                                            text-[12px]
                                            text-[#9CA3AF]
                                            mt-[2px]
                                        "
                                    >
                                        {provider.time}
                                    </p>
                                </div>
                            </div>

                            {/* Button */}
                            <button
                                type="button"
                                className="
                                    w-[64px]
                                    h-[36px]
                                    rounded-[8px]
                                    border
                                    border-[#D8D5E5]
                                    bg-white
                                    text-[11px]
                                    font-medium
                                    text-[#374151]
                                    leading-[13px]
                                    hover:bg-[#F9FAFB]
                                    transition
                                "
                            >
                                Xem hồ sơ
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}