"use client";

import { Search, Bell, HelpCircle } from "lucide-react";

export default function AdminNavbar() {
  return (
    <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-6">
      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Tìm kiếm giao dịch, người dùng..."
          className="w-[320px] pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-full text-sm text-gray-600 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/20 focus:border-[#7C3AED]"
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Notification Bell with red dot */}
        <button
          className="relative p-2 text-gray-500 hover:text-gray-700 transition-colors"
          title="Notifications"
          aria-label="View notifications"
        >
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" aria-hidden="true"></span>
        </button>

        {/* Help Icon */}
        <button
          className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
          title="Help"
          aria-label="Open help"
        >
          <HelpCircle className="w-5 h-5" />
        </button>

        {/* Admin Avatar and Name */}
        <div className="flex items-center gap-3">
          {/* Divider before avatar */}
          <div className="w-px h-8 bg-gray-200" />
          <div className="w-9 h-9 rounded-full bg-[#7C3AED] flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
          <span className="text-sm font-medium text-gray-700">Admin T.</span>
        </div>
      </div>
    </header>
  );
}
