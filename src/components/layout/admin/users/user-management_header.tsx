'use client';

import { UserPlus } from 'lucide-react';

interface UserManagementHeaderProps {
    onAddUser?: () => void;
}

export default function UserManagementHeader({ onAddUser }: UserManagementHeaderProps) {
    return (
        <div className="flex items-center justify-between mb-6">
            {/* Left: Title + Subtitle */}
            <div>
                <h1 className="text-2xl font-bold text-[#111827]">Quản lý người dùng</h1>
                <p className="text-[#6B7280] mt-1 text-sm">
                    Giám sát, phân quyền và hỗ trợ tài khoản trên hệ thống.
                </p>
            </div>

            {/* Right: Button Thêm người dùng */}
            <button
                onClick={onAddUser}
                className="flex items-center gap-2 px-5 py-2.5 bg-[#6D28D9] hover:bg-[#5B21B6] text-white rounded-xl text-sm font-medium transition-colors shadow-sm"
            >
                <UserPlus className="w-4 h-4" />
                Thêm người dùng
            </button>
        </div>
    );
}