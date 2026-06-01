'use client';

import {
    Bell,
    Settings,
    User,
} from 'lucide-react';

export default function CustomerNavbar() {
    return (
        <header className="h-[60px] bg-white border-b border-[#E5E7EB] flex items-center justify-end px-10">

            <div className="flex items-center gap-6 h-[54px] w-[200px] rounded-full bg-[#F3F4F6] px-5">

                {/* Notification */}
                <button
                    type="button"
                    className="p-2 text-[#4B5563] hover:text-[#6D28D9] transition-colors"
                    title="Notifications"
                    aria-label="Notifications"
                >
                    <Bell className="w-6 h-6 stroke-[2]" />
                </button>

                {/* Setting */}
                <button
                    type="button"
                    className="p-2 text-[#4B5563] hover:text-[#6D28D9] transition-colors"
                    title="Settings"
                    aria-label="Settings"
                >
                    <Settings className="w-6 h-6 stroke-[2]" />
                </button>

                {/* Avatar */}
                <button
                    type="button"
                    className="
                        w-[60px]
                        h-[60px]
                        rounded-full
                        bg-[#9FB0BD]
                        flex
                        items-center
                        justify-center
                        border-2
                        border-[#6D28D9]
                        shadow-sm
                        transition
                        hover:border-[#5B21B6]
                    "
                    title="User profile"
                    aria-label="User profile"
                >
                    <User className="w-6 h-6 text-black" />
                </button>

            </div>
        </header>
    );
}