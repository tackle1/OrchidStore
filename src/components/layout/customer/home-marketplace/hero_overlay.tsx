'use client';

import { Search, MapPin, Calendar } from 'lucide-react';
export default function HeroOverlay() {
    return (
        <>
            <div
                className="absolute flex align-center w-[82%] min-h-[520px] rounded-[20px] overflow-hidden 
         bg-[url('/assets/images/customer-home-marketplace.jpg')] bg-cover bg-right"
            >
                <div className="relative z-10 px-8 py-25 max-w-3xl">
                    {/* Title */}
                    <h1 className="text-[50px] leading-[50px] text-[#1F2937] font-extrabold tracking-tight mb-4">
                        Tìm người chăm sóc{' '}
                        <span className="text-[#7C3AED]">hoa lan</span>
                        <br />
                        đáng tin cậy
                    </h1>

                    {/* Subtitle */}
                    <p className="text-[22px] leading-[25px] text-[#4B5563] mb-8 max-w-[800px]">
                        Kết nối với các chuyên gia và nhà vườn uy tín để bảo vệ và phát triển
                        <br />
                        bộ sưu tập phong lan quý giá của bạn.
                    </p>

                    {/* Search Bar */}
                    <div className="flex items-center gap-2 bg-white p-3 rounded-2xl shadow-lg max-w-fit">
                        {/* Loại lan */}
                        <div className="flex items-center gap-2 px-3 h-[44px] min-w-[130px] border border-[#E5E7EB] rounded-xl bg-white">
                            <Search className="w-4 h-4 text-[#4A4455]" />
                            <input
                                placeholder="Loại lan..."
                                className="flex-1 outline-none text-sm bg-transparent placeholder:text-[#4A4455] w-20"
                            />
                        </div>

                        {/* Khu vực */}
                        <div className="flex items-center gap-2 px-3 h-[44px] min-w-[130px] border border-[#E5E7EB] rounded-xl bg-white">
                            <MapPin className="w-4 h-4 text-[#4A4455]" />
                            <input
                                placeholder="Khu vực..."
                                className="flex-1 outline-none text-sm  bg-transparent placeholder:text-[#4A4455] w-20"
                            />
                        </div>

                        {/* Thời gian */}
                        <div className="flex items-center gap-2 px-3 h-[44px] min-w-[130px] border border-[#E5E7EB] rounded-xl bg-white">
                            <Calendar className="w-4 h-4 text-[#4A4455]" />
                            <span className="text-sm text-[#4A4455]">
                                Thời gian...
                            </span>
                        </div>

                        {/* Button */}
                        <button
                            type="button"
                            className="h-[44px] px-6 rounded-lg bg-[#630ED4] text-white text-sm font-semibold hover:bg-[#6D28D9] transition"
                        >
                            Tìm kiếm
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
