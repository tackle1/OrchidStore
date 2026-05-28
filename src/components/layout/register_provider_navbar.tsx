'use client';

import { Flower2, X } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function ProviderRegisterNavbar() {
    const router = useRouter();

    return (
        <nav className="w-full h-[66px] bg-[#F5F3FA] border-b border-[#E7E5EF] px-7 flex items-center justify-between">

            {/* LEFT - Logo */}
            <div className="flex items-center gap-3">
                <Flower2 className="w-[26px] h-[26px] text-[#6D28D9] fill-[#6D28D9]" />
                <h1 className="text-[19px] font-extrabold tracking-[-0.4px] text-[#6D28D9]">
                    LanCare Hub
                </h1>
            </div>

            {/* RIGHT - Actions */}
            <div className="flex items-center gap-6">
                <span className="text-[15px] font-semibold text-[#6D28D9]">
                    Đăng ký Provider
                </span>

                <button
                    onClick={() => router.push('/')}
                    className="flex items-center gap-1.5 text-[15px] text-[#4B5563] hover:text-[#111827] transition cursor-pointer"
                >
                    <X className="w-[17px] h-[17px]" />
                    Hủy
                </button>
            </div>
        </nav>
    );
}