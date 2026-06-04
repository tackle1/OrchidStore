'use client';

import { Bell, Settings, User } from 'lucide-react';

export default function CustomerNavbar() {
    return (
        <header className="h-[60px] bg-white border-b border-[#E5E7EB] flex items-center justify-end px-6">
            <div className="flex items-center gap-4">
                {/* Notification */}
                <button
                    type="button"
                    className="p-2 text-[#6B7280] hover:text-[#374151] transition-colors"
                    title="Notifications"
                    aria-label="Notifications"
                >
                    <Bell className="w-5 h-5" />
                </button>

                {/* Settings */}
                <button
                    type="button"
                    className="p-2 text-[#6B7280] hover:text-[#374151] transition-colors"
                    title="Settings"
                    aria-label="Settings"
                >
                    <Settings className="w-5 h-5" />
                </button>

                {/* Avatar */}
                <div className="w-9 h-9 rounded-full bg-[#5EEAD4] flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                </div>
            </div>
        </header>
    );
}
