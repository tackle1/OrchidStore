'use client';

import { useRouter } from 'next/navigation';
import { Plus } from 'lucide-react';

export default function ProviderMyServicesHeader() {
    const router = useRouter();

    const handleClick = () => {

        router.replace('/service-packages/create'); // Mặc định chuyển trang

    };

    return (
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            {/* Left Content */}
            <div>
                <h1 className="text-[28px] font-bold text-[#1F2937]">
                    Dịch vụ của tôi
                </h1>
                <p className="text-[15px] text-[#6B7280] mt-1">
                    Quản lý các gói chăm sóc lan bạn đang cung cấp.
                </p>
            </div>

            {/* Right Button */}
            <button
                onClick={handleClick}
                className="flex items-center justify-center gap-2 h-[44px] px-5 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-[14px] font-semibold transition-all active:scale-[0.985]"
            >
                <Plus className="w-4 h-4" />
                Thêm gói dịch vụ
            </button>
        </div>
    );
}