'use client';

interface ServiceDiscoveryHeaderProps {
    sortBy?: string;
    onSortChange?: (value: string) => void;
}

export default function ServiceDiscoveryHeader({
    sortBy = 'highest-rated',
    onSortChange,
}: ServiceDiscoveryHeaderProps) {
    return (
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-6">

            {/* Left Content */}
            <div>
                <h1 className="text-[26px] font-bold text-[#1F2937]">
                    Khám phá Dịch vụ Chăm sóc
                </h1>
                <p className="text-[14.5px] text-[#6B7280] mt-1.5">
                    Tìm kiếm chuyên gia và nhà vườn phù hợp nhất cho bộ sưu tập lan của bạn.
                </p>
            </div>

            {/* Right - Sort Dropdown */}
            <div className="flex items-center gap-3">
                <span className="text-[14px] text-[#6B7280] whitespace-nowrap">
                    Sắp xếp theo:
                </span>

                <select
                    title="Sắp xếp theo"
                    value={sortBy}
                    onChange={(e) => onSortChange?.(e.target.value)}
                    className="custom-select h-[42px] px-4 pr-8 rounded-xl border border-[#D1D5DB] bg-white text-[14px] text-[#374151] focus:outline-none focus:border-[#6D28D9] cursor-pointer"
                >
                    <option value="highest-rated">Đánh giá cao nhất</option>
                    <option value="lowest-price">Giá thấp nhất</option>
                    <option value="highest-price">Giá cao nhất</option>
                    <option value="newest">Mới nhất</option>
                </select>
            </div>
        </div>
    );
}