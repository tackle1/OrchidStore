'use client';

import { Users, UserCheck, Store, UserX } from 'lucide-react';

const summaryData = [
    {
        icon: Users,
        iconBg: 'bg-[#6D28D9]',
        label: 'Tổng người dùng',
        value: '12,450',
    },
    {
        icon: UserCheck,
        iconBg: 'bg-[#10B981]',
        label: 'Đang hoạt động',
        value: '11,820',
    },
    {
        icon: Store,
        iconBg: 'bg-[#6D28D9]',
        label: 'Nhà cung cấp',
        value: '845',
    },
    {
        icon: UserX,
        iconBg: 'bg-[#EF4444]',
        label: 'Tài khoản bị khóa',
        value: '34',
    },
];

export default function UserSummaryCards() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {summaryData.map((item, index) => {
                const Icon = item.icon;
                return (
                    <div key={index} className="bg-white rounded-2xl p-5 border border-[#F0ECF7] shadow-sm">
                        <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-full ${item.iconBg} flex items-center justify-center`}>
                                <Icon className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <p className="text-sm text-[#6B7280]">{item.label}</p>
                                <p className="text-2xl font-bold text-[#111827]">{item.value}</p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}