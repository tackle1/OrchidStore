'use client';

import {
    Wallet,
    BadgeCheck,
    FileWarning,
    Star,
    TrendingUp
} from 'lucide-react';

export default function DashboardStats() {
    const stats = [
        {
            title: 'Tổng thu tháng',
            value: '35.000.000đ',
            icon: <Wallet size={22} className="text-[#250059]" />,
            iconBg: 'bg-[#EBDDFF]',
            badge: '+12%',
        },
        {
            title: 'Đơn đang chăm sóc',
            value: '12',
            icon: <BadgeCheck size={22} className="text-[#250059]" />,
            iconBg: 'bg-[#EBDDFF]',
        },
        {
            title: 'Báo cáo cần gửi',
            value: '5',
            icon: <FileWarning size={22} className="text-[#DC2626]" />,
            iconBg: 'bg-[#FEE2E2]',
            danger: true,
        },
        {
            title: 'Đánh giá trung bình',
            value: '4.9/5',
            icon: <Star size={22} className="text-[#F59E0B]" fill="#F59E0B" />,
            iconBg: 'bg-[#FEF3C7]',
        },
    ];

    return (
        <div className="flex gap-4 w-full">
            {stats.map((item, index) => (
                <div
                    key={index}
                    className="flex-1 bg-white rounded-2xl border border-[#E5E7EB] p-5 h-[128px] flex flex-col justify-between relative overflow-hidden"
                >
                    {/* Viền đỏ bên phải */}
                    {item.danger && (
                        <div className="absolute right-0 top-0 h-full w-[5px] bg-[#DC2626]" />
                    )}

                    {/* Icon + Badge */}
                    <div className="flex items-start justify-between">
                        <div className={`w-[44px] h-[44px] rounded-full ${item.iconBg} flex items-center justify-center`}>
                            {item.icon}
                        </div>

                        {/* Badge có TrendingUp nằm trước */}
                        {item.badge && (
                            <div className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-[#7CF994] text-[#006E2D]">
                                <TrendingUp className="w-3.5 h-3.5" />
                                <span>{item.badge}</span>
                            </div>
                        )}
                    </div>

                    {/* Title + Value */}
                    <div>
                        <p className="text-sm text-[#6B7280] font-medium">{item.title}</p>
                        <h3 className="text-[28px] leading-none font-bold text-[#111827] mt-1.5 tracking-[-0.5px]">
                            {item.value}
                        </h3>
                    </div>
                </div>
            ))}
        </div>
    );
}