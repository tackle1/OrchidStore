'use client';

import {
    LayoutDashboard,
    PackageCheck,
    Store,
    Flower2,
    History,
} from 'lucide-react';
import Link from 'next/link';

export default function CustomerSidebar() {
    return (
        <aside className="w-[168px] min-h-screen bg-white border-r-[8px] border-[#6D28D9] shadow-xl flex flex-col">
            {/* LOGO */}
            <div className="px-8 pt-6 pb-4">
                <h1 className="text-[24px] font-bold text-[#6D28D9] tracking-[-0.4px]">
                    LanCare Hub
                </h1>
                <p className="text-[24px] text-[#8B8B95] mt-0.5">
                    Premium Orchid Care
                </p>
            </div>

            {/* MENU */}
            <nav className="mt-6 px-3 flex-1">
                <ul className="space-y-5">

                    {/* ACTIVE ITEM */}
                    <li>
                        <Link
                            href="/home-marketplace"
                            className="flex items-center gap-3 h-[40px] px-4 rounded-r-[22px] rounded-l-[6px] 
                   bg-[#EDEBF7] border-l-[5px] border-[#6D28D9] text-[#6D28D9]
                   hover:bg-[#E5E1F5] active:bg-[#DCD7F0] transition-all duration-150"
                        >
                            <LayoutDashboard size={17} />
                            <span className="text-[13px] font-semibold">Bảng điều khiển</span>
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/customer/packages"
                            className="flex items-center gap-3 h-[42px] px-4 rounded-lg hover:bg-[#F8F7FA] text-[#4B4453] transition-colors"
                        >
                            <PackageCheck size={17} />
                            <span className="text-[13px]">Gói chăm sóc</span>
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/customer/partners"
                            className="flex items-center gap-3 h-[42px] px-4 rounded-lg hover:bg-[#F8F7FA] text-[#4B4453] transition-colors"
                        >
                            <Store size={17} />
                            <span className="text-[13px]">Nhà vườn liên kết</span>
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/customer/my-orchids"
                            className="flex items-center gap-3 h-[42px] px-4 rounded-lg hover:bg-[#F8F7FA] text-[#4B4453] transition-colors"
                        >
                            <Flower2 size={17} />
                            <span className="text-[13px]">Lan của tôi</span>
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/customer/history"
                            className="flex items-center gap-3 h-[42px] px-4 rounded-lg hover:bg-[#F8F7FA] text-[#4B4453] transition-colors"
                        >
                            <History size={17} />
                            <span className="text-[13px]">Lịch sử chăm sóc</span>
                        </Link>
                    </li>
                </ul>
            </nav>

            {/* BOTTOM BUTTON */}
            <div className="px-6 py-4">
                <Link
                    href="/customer/booking"
                    className="flex items-center justify-center h-[46px] rounded-full bg-[#6D28D9] hover:bg-[#5B21B6] text-white text-[14px] font-semibold shadow-md transition-all"
                >
                    Đặt lịch chăm sóc
                </Link>
            </div>
        </aside>
    );
}
