'use client';

import { Search, MapPin, Calendar } from 'lucide-react';

export default function HeroOverlay() {
    return (
        <div className="relative  px-8  h-full flex flex-col items-start justify-center">
            <div className="flex max-w-[750px] text-[48px] leading-[28px] text-[#4B5563] drop-shadow-sm mb-5 font-extrabold tracking-[-0.4px]">
                <h1>
                    Tìm người chăm sóc{' '}
                    <span className="text-[#6D28D9]">hoa lan</span>
                    <br />
                    đáng tin cậy
                </h1>
            </div>

            <p className="max-w-[580px] text-[15.5px] leading-[25px] text-[#4B5563] mb-8">
                Kết nối với các chuyên gia và nhà vườn uy tín để bảo vệ và phát triển
                <br />
                bộ sưu tập phong lan quý giá của bạn.
            </p>

            {/* SEARCH */}
            <div
                className="
                    flex
                    items-center
                    gap-3
                    bg-white
                    p-4
                    rounded-xl
                    shadow-xl
                "
            >
                {/* Loại lan */}
                <div className="flex items-center gap-3 px-4 h-[46px] w-[150px] border border-[#E5E7EB] rounded-xl bg-white">
                    <Search className="w-5 h-5 text-[#6B7280]" />
                    <input
                        placeholder="Loại lan..."
                        className="flex-1 outline-none text-sm bg-transparent"
                    />
                </div>

                {/* Khu vực */}
                <div className="flex items-center gap-3 px-4 h-[46px] w-[150px] border border-[#E5E7EB] rounded-xl bg-white">
                    <MapPin className="w-5 h-5 text-[#6B7280]" />
                    <input
                        placeholder="Khu vực..."
                        className="flex-1 outline-none text-sm bg-transparent"
                    />
                </div>

                {/* Thời gian */}
                <div className="flex items-center gap-3 px-4 h-[46px] w-[150px] border border-[#E5E7EB] rounded-xl bg-white">
                    <Calendar className="w-5 h-5 text-[#6B7280]" />
                    <input
                        placeholder="Thời gian..."
                        className="flex-1 outline-none text-sm bg-transparent"
                    />
                </div>

                {/* Button */}
                <button
                    type="button"
                    className="
                        h-[46px]
                        px-8
                        rounded-xl
                        bg-[#6D28D9]
                        text-white
                        text-sm
                        font-semibold
                        hover:bg-[#5B21B6]
                        transition
                    "
                >
                    Tìm kiếm
                </button>
            </div>
        </div>
    );
}
