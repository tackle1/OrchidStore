'use client';

import {
    LayoutGrid,
    ShoppingBasket,
    Store,
    Flower2,
    History,
    Sprout,
    Settings,
    LogOut,
    Plus,
} from 'lucide-react';
import Link from 'next/link';

export default function ProviderSidebar() {
    return (
        <aside className="w-[220px] min-h-screen bg-white border-r border-[#E5E7EB] flex flex-col">

            {/* LOGO + ICON */}
            <div className="px-5 pt-6 pb-4">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-[10px] bg-[#6D28D9] flex items-center justify-center flex-shrink-0">
                        <Flower2 className="w-5 h-5 text-white fill-white" />
                    </div>
                    <div>
                        <h1 className="text-[18px] font-bold text-[#6D28D9] leading-none">
                            LanCare Hub
                        </h1>
                        <p className="text-[12px] text-[#8B8B95] mt-1">
                            Quản lý lan cao cấp
                        </p>
                    </div>
                </div>
            </div>

            {/* MENU */}
            <nav className="mt-4 px-3 flex-1">
                <ul className="space-y-1">

                    {/* ACTIVE ITEM */}
                    <li>
                        <Link
                            href="/management-homepage"
                            className="flex items-center gap-3 h-[40px] px-4 rounded-r-[18px] rounded-l-[6px] 
                                       bg-[#EDEBF7] border-l-[5px] border-[#6D28D9] text-[#6D28D9]"
                        >
                            <LayoutGrid size={17} />
                            <span className="text-[13px] font-semibold">Bảng điều khiển</span>
                        </Link>
                    </li>

                    <li>
                        <Link href="/provider/packages" className="flex items-center gap-3 h-[40px] px-4 rounded-lg hover:bg-[#F8F7FA] text-[#4B4453] transition-colors">
                            <ShoppingBasket size={17} />
                            <span className="text-[13px]">Gói chăm sóc</span>
                        </Link>
                    </li>

                    <li>
                        <Link href="/provider/partners" className="flex items-center gap-3 h-[40px] px-4 rounded-lg hover:bg-[#F8F7FA] text-[#4B4453] transition-colors">
                            <Store size={17} />
                            <span className="text-[13px]">Nhà vườn liên kết</span>
                        </Link>
                    </li>

                    <li>
                        <Link href="/provider/my-orchids" className="flex items-center gap-3 h-[40px] px-4 rounded-lg hover:bg-[#F8F7FA] text-[#4B4453] transition-colors">
                            <Flower2 size={17} />
                            <span className="text-[13px]">Lan của tôi</span>
                        </Link>
                    </li>

                    <li>
                        <Link href="/provider/history" className="flex items-center gap-3 h-[40px] px-4 rounded-lg hover:bg-[#F8F7FA] text-[#4B4453] transition-colors">
                            <History size={17} />
                            <span className="text-[13px]">Lịch sử chăm sóc</span>
                        </Link>
                    </li>

                    <li>
                        <Link href="/provider/support" className="flex items-center gap-3 h-[40px] px-4 rounded-lg hover:bg-[#F8F7FA] text-[#4B4453] transition-colors">
                            <Sprout size={17} />
                            <span className="text-[13px]">Hỗ trợ chuyên gia</span>
                        </Link>
                    </li>
                </ul>
            </nav>

            {/* REGISTER BUTTON - Bo nhẹ hơn */}
            <div className="px-4 py-3">
                <Link
                    href="/provider/register-care"
                    className="flex items-center justify-center gap-2 h-[42px] rounded-lg bg-[#6D28D9] hover:bg-[#5B21B6] text-white text-[13px] font-semibold shadow-md transition-all"
                >
                    <Plus className="w-4 h-4" />
                    Đăng ký chăm sóc
                </Link>
            </div>

            {/* BOTTOM MENU */}
            <div className="mt-auto border-t border-[#E5E7EB] py-2">
                <Link href="/provider/settings" className="flex items-center gap-3 h-[40px] px-4 text-[#4B4453] hover:bg-[#F8F7FA] rounded-lg transition-colors">
                    <Settings size={17} />
                    <span className="text-[13px]">Cài đặt</span>
                </Link>

                <Link href="/login" className="flex items-center gap-3 h-[40px] px-4 text-[#4B4453] hover:bg-[#F8F7FA] rounded-lg transition-colors">
                    <LogOut size={17} />
                    <span className="text-[13px]">Đăng xuất</span>
                </Link>
            </div>
        </aside>
    );
}