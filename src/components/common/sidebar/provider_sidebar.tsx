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
import { usePathname } from 'next/navigation';

export default function ProviderSidebar() {
    const pathname = usePathname();

    const menuItems = [
        { icon: LayoutGrid, label: "Bảng điều khiển", href: "/management-homepage" },
        { icon: ShoppingBasket, label: "Gói chăm sóc", href: "/service-packages" },
        { icon: Store, label: "Nhà vườn liên kết", href: "/provider/partners" },
        { icon: Flower2, label: "Lan của tôi", href: "/provider/my-orchids" },
        { icon: History, label: "Lịch sử chăm sóc", href: "/provider/history" },
        { icon: Sprout, label: "Hỗ trợ chuyên gia", href: "/provider/support" },
    ];

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
                    {menuItems.map((item, index) => {
                        const isActive =
                            pathname === item.href ||
                            pathname.startsWith(item.href + '/');

                        return (
                            <li key={index}>
                                <Link
                                    href={item.href}
                                    className={`
                                        flex items-center gap-3 h-[40px] px-4 rounded-lg text-[13px] font-medium transition-all duration-200
                                        ${isActive
                                            ? "bg-[#EDEBF7] border-l-[5px] border-[#6D28D9] text-[#6D28D9] font-semibold"
                                            : "text-[#4B4453] hover:bg-[#F8F7FA] hover:text-[#1F2937]"
                                        }
                                    `}
                                >
                                    <item.icon size={17} />
                                    <span>{item.label}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            {/* REGISTER BUTTON */}
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
                <Link
                    href="/provider/settings"
                    className="flex items-center gap-3 h-[40px] px-4 text-[#4B4453] hover:bg-[#F8F7FA] hover:text-[#1F2937] rounded-lg transition-colors"
                >
                    <Settings size={17} />
                    <span className="text-[13px]">Cài đặt</span>
                </Link>

                <Link
                    href="/login"
                    className="flex items-center gap-3 h-[40px] px-4 text-[#4B4453] hover:bg-[#F8F7FA] hover:text-[#1F2937] rounded-lg transition-colors"
                >
                    <LogOut size={17} />
                    <span className="text-[13px]">Đăng xuất</span>
                </Link>
            </div>
        </aside>
    );
}