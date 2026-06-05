"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutGrid,
    Store,
    Scale,
    FileText,
    Tag,
    BarChart3,
    Users,
    Settings,
    LogOut,
    Headphones,
} from "lucide-react";

const menuItems = [
    { icon: LayoutGrid, label: "Tổng quan", href: "/dashboard" },
    { icon: Store, label: "Nhà cung cấp", href: "/provider-approval" },
    { icon: Scale, label: "Tranh chấp", href: "/admin/disputes" },
    { icon: FileText, label: "Giao dịch", href: "/admin/transactions" },
    { icon: Tag, label: "Danh mục", href: "/admin/categories" },
    { icon: BarChart3, label: "Báo cáo", href: "/admin/reports" },
    { icon: Users, label: "Người dùng", href: "/admin/users" },
];

export default function AdminSidebar() {
    const pathname = usePathname(); // Lấy đường dẫn hiện tại
    const router = useRouter();
    const handleLogout = () => {
        router.push("/login");
        console.log("Đăng xuất");
    };

    return (
        <aside className="w-[220px] bg-white border-r border-gray-200 flex flex-col min-h-screen">
            {/* Logo */}
            <div className="p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-linear-to-br from-[#7C3AED] to-[#9333EA] rounded-xl flex items-center justify-center">
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M12 2L2 7l10 5 10-5-10-5z" />
                        <path d="M2 17l10 5 10-5" />
                        <path d="M2 12l10 5 10-5" />
                    </svg>
                </div>
                <div>
                    <h1 className="text-lg font-bold text-[#1F2937]">
                        LanCare
                        <br />
                        Hub
                    </h1>
                    <p className="text-xs text-gray-500">Admin Console</p>
                </div>
            </div>

            {/* Menu */}
            <nav className="flex-1 px-3 py-2">
                <ul className="space-y-1">
                    {menuItems.map((item, index) => {
                        const isActive =
                            pathname === item.href ||
                            pathname.startsWith(item.href + '/');
                        return (
                            <li key={index}>
                                <Link
                                    href={item.href}
                                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${isActive
                                        ? "bg-[#7C3AED] text-white border-l-4 border-[#630ED4]"
                                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                                        }`}
                                >
                                    <item.icon className="w-5 h-5" />
                                    <span>{item.label}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            {/* Bottom Section */}
            <div className="p-4 space-y-3">
                {/* Support Link */}
                <Link
                    href="#"
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-[#7C3AED] text-white rounded-lg text-sm font-medium hover:bg-[#6D28D9] transition-colors"
                >
                    <Headphones className="w-4 h-4" />
                    <span>Hỗ trợ hệ thống</span>
                </Link>

                {/* Settings & Logout */}
                <div className="space-y-1">
                    <Link
                        href="/admin/settings"
                        className="w-full flex items-center gap-3 px-3 py-2.5 text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded-lg text-sm font-medium transition-colors"
                    >
                        <Settings className="w-5 h-5" />
                        <span>Cài đặt</span>
                    </Link>

                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-3 py-2.5 text-red-500 hover:bg-red-50 rounded-lg text-sm font-medium transition-colors"
                    >
                        <LogOut className="w-5 h-5" />
                        <span>Đăng xuất</span>
                    </button>
                </div>
            </div>
        </aside>
    );
}