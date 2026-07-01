'use client';

import { SlidersHorizontal } from 'lucide-react';   // ← Thay Filter bằng SlidersHorizontal

interface CustomerServicePackageHeaderProps {
    onFilterClick?: () => void;
}

export default function CustomerServicePackageHeader({ onFilterClick }: CustomerServicePackageHeaderProps) {
    return (
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">

            {/* Left Content */}
            <div>
                <h1 className="text-[28px] font-bold text-[#1F2937]">
                    Danh mục dịch vụ
                </h1>
                <p className="text-[15px] text-[#6B7280] mt-2 max-w-[620px]">
                    Khám phá các gói dịch vụ chăm sóc chuyên sâu, được thiết kế bởi các chuyên
                    gia thực hành hàng đầu để bảo vệ và phát triển bộ sưu tập lan của bạn.
                </p>
            </div>

            {/* Right Button */}
            <button
                onClick={onFilterClick}
                className="flex items-center justify-center gap-2 h-[44px] px-5 rounded-xl 
                border border-[#D1D5DB] bg-[#E2E7FF] text-[#374151] text-[14px] font-medium 
                hover:bg-[#D6DDF7] transition-colors active:bg-[#C9D1F0]"
            >
                <SlidersHorizontal className="w-4 h-4" />   {/* ← Icon mới */}
                Lọc dịch vụ
            </button>
        </div>
    );
}