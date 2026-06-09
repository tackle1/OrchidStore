'use client';

import {
    LayoutDashboard,
    PackageCheck,
    Store,
    Flower2,
    History,
    Star
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function CustomerSidebar() {
    const pathname = usePathname();

    const menuItems = [
        { icon: LayoutDashboard, label: "Bảng điều khiển", href: "/home-marketplace" },
        { icon: PackageCheck, label: "Gói chăm sóc", href: "/customer-service-packages" },
        { icon: Store, label: "Nhà vườn liên kết", href: "/providers" },
        { icon: Star, label: "Đánh giá & Phản hồi", href: "/total-feedbacks" },
        { icon: Flower2, label: "Lan của tôi", href: "/customer/my-orchids" },
        { icon: History, label: "Lịch sử chăm sóc", href: "/customer/history" },
    ];

    return (
        <aside className="w-[200px] min-h-screen bg-white border-r border-[#E5E7EB] flex flex-col">

            {/* LOGO */}
            <div className="px-5 pt-6 pb-4">
                <h1 className="text-[24px] font-extrabold text-[#6D28D9] leading-none">
                    LanCare Hub
                </h1>
                <p className="text-[13px] text-[#8B8B95] mt-1">
                    Premium Orchid Care
                </p>
            </div>

            {/* MENU */}
            <nav className="mt-5 px-3 flex-1">
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

            {/* BOTTOM BUTTON */}
            <div className="px-4 py-4">
                <Link
                    href="/customer/booking"
                    className="flex items-center justify-center h-[44px] rounded-2xl bg-[#6D28D9] hover:bg-[#5B21B6] text-white text-[13px] font-semibold shadow-md transition-all"
                >
                    Đặt lịch chăm sóc
                </Link>
            </div>
        </aside>
    );
}