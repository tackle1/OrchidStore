'use client';

import React from 'react';
import { Star } from 'lucide-react';

interface Expert {
    id: number;
    name: string;
    role: string;
    avatar: string;
    isInitials?: boolean;
    initials?: string;
    bookings: number;
    rating: number;
}

const experts: Expert[] = [
    {
        id: 1,
        name: 'Nguyễn Văn An',
        role: 'Chuyên gia Lan Hồ Điệp',
        avatar: 'https://i.pravatar.cc/48?img=32',
        bookings: 142,
        rating: 4.9,
    },
    {
        id: 2,
        name: 'Trần Thị Bích',
        role: 'Thiết kế tiểu cảnh',
        avatar: 'https://i.pravatar.cc/48?img=47',
        bookings: 118,
        rating: 4.8,
    },
    {
        id: 3,
        name: 'Lê Minh Tuấn',
        role: 'Bảo dưỡng định kỳ',
        avatar: '',
        isInitials: true,
        initials: 'LM',
        bookings: 95,
        rating: 4.7,
    },
    {
        id: 4,
        name: 'Phạm Văn Hùng',
        role: 'Chăm sóc cây cảnh',
        avatar: 'https://i.pravatar.cc/48?img=60',
        bookings: 89,
        rating: 4.5,
    },
    {
        id: 5,
        name: 'Hoàng Thị Mai',
        role: 'Chuyên gia Lan Hồ Điệp',
        avatar: 'https://i.pravatar.cc/48?img=21',
        bookings: 76,
        rating: 4.2,
    },
];

export default function TopExpertsList() {
    return (
        <div className="bg-white rounded-2xl h-[380px] p-6 shadow-sm border border-[#F0ECF7]">
            {/* Header */}
            <div className="flex items-center justify-between mb-5">
                <h3 className="text-lg font-semibold text-[#111827]">Chuyên gia nổi bật</h3>
                <button className="text-sm font-medium text-[#6D28D9] hover:underline">
                    Xem tất cả
                </button>
            </div>

            {/* Expert List */}
            <div className="space-y-4">
                {experts.map((expert) => (
                    <div key={expert.id} className="flex items-center justify-between">
                        {/* Avatar + Info */}
                        <div className="flex items-center gap-3">
                            {/* Avatar */}
                            {expert.isInitials ? (
                                <div className="w-11 h-11 rounded-full bg-[#EDE9FE] flex items-center justify-center text-[#6D28D9] font-bold text-sm">
                                    {expert.initials}
                                </div>
                            ) : (
                                <img
                                    src={expert.avatar}
                                    alt={expert.name}
                                    className="w-11 h-11 rounded-full object-cover border border-[#F3F4F6]"
                                />
                            )}

                            {/* Name + Role */}
                            <div>
                                <div className="font-semibold text-[#111827]">{expert.name}</div>
                                <div className="text-sm text-[#6B7280]">{expert.role}</div>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="text-right">
                            <div className="font-semibold text-[#111827]">
                                {expert.bookings} Lịch
                            </div>
                            <div className="flex items-center justify-end gap-1 text-sm">
                                <Star className="w-4 h-4 text-[#F59E0B] fill-[#F59E0B]" />
                                <span className="font-medium text-[#374151]">{expert.rating}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}