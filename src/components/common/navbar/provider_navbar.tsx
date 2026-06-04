'use client';

import {
    Search,
    Bell,
    Mail,
    Settings,
} from 'lucide-react';

export default function ProviderNavbar() {
    return (
        <header
            className="
                h-[62px]
                bg-white
                border-b
                border-[#E5E7EB]
                flex
                items-center
                justify-between
                px-5
            "
        >
            {/* Search */}
            <div
                className="
                    w-[280px]
                    h-[38px]
                    rounded-[8px]
                    bg-[#F3F1FA]
                    flex
                    items-center
                    px-3
                    gap-2
                "
            >
                <Search
                    className="w-4 h-4 text-[#4A4455]"
                    strokeWidth={2}
                />

                <input
                    type="text"
                    placeholder="Tìm kiếm gói, nhà vườn, đơn hàng..."
                    className="
                        flex-1
                        bg-transparent
                        outline-none
                        text-[13px]
                        text-[#374151]
                        placeholder:text-[#6B7280]
                    "
                />
            </div>

            {/* Right */}
            <div className="flex items-center">

                {/* Notification */}
                <button
                    type="button"
                    aria-label="View notifications"
                    title="View notifications"
                    className="
                        relative
                        w-9
                        h-9
                        flex
                        items-center
                        justify-center
                        text-[#4B5563]
                    "
                >
                    <Bell
                        className="w-[18px] h-[18px]"
                        strokeWidth={2}
                    />

                    <span
                        className="
                            absolute
                            top-[8px]
                            right-[8px]
                            w-[7px]
                            h-[7px]
                            rounded-full
                            bg-[#DC2626]
                        "
                    />
                </button>

                {/* Mail */}
                <button
                    type="button"
                    aria-label="View messages"
                    title="View messages"
                    className="
                        w-9
                        h-9
                        flex
                        items-center
                        justify-center
                        text-[#4B5563]
                    "
                >
                    <Mail
                        className="w-[18px] h-[18px]"
                        strokeWidth={2}
                    />
                </button>

                {/* Settings */}
                <button
                    type="button"
                    aria-label="Open settings"
                    title="Open settings"
                    className="
                        w-9
                        h-9
                        flex
                        items-center
                        justify-center
                        text-[#4B5563]
                    "
                >
                    <Settings
                        className="w-[18px] h-[18px]"
                        strokeWidth={2}
                    />
                </button>

                {/* Divider */}
                <div className="mx-4 h-6 w-px bg-[#D1D5DB]" />

                {/* Avatar */}
                <div
                    className="
                        w-[30px]
                        h-[30px]
                        rounded-full
                        overflow-hidden
                        border
                        border-[#D1D5DB]
                        cursor-pointer
                    "
                >
                    <img
                        src="https://i.pravatar.cc/100?img=32"
                        alt="Profile"
                        className="w-8 h-8 object-cover rounded-full"
                    />
                </div>
            </div>
        </header>
    );
}