'use client';

import { Calendar, Download, ChevronDown } from 'lucide-react';

export default function AdminDashboardHeader() {
    return (
        <div className="flex items-start justify-between mb-6">

            {/* Left Content */}
            <div>
                <h1 className="text-3xl font-bold text-[#1F2937]">Tổng quan hệ thống</h1>
                <p className="text-gray-500 mt-1">
                    Cập nhật nhanh tình hình hoạt động của nền tảng trong 30 ngày qua.
                </p>
            </div>

            {/* Right Buttons */}
            <div className="flex items-center gap-3">

                {/* Nút Tháng này (Dropdown style) */}
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-xl text-sm font-medium hover:bg-gray-50 transition cursor-pointer">
                    <Calendar className="w-4 h-4 text-gray-600" />
                    Tháng này
                    <ChevronDown className="w-4 h-4 text-gray-500" />
                </button>

                {/* Nút Xuất báo cáo */}
                <button className="flex items-center gap-2 px-5 py-2 bg-[#7C3AED] hover:bg-[#6D28D9] text-white rounded-xl text-sm font-semibold transition">
                    <Download className="w-4 h-4" />
                    Xuất báo cáo
                </button>
            </div>
        </div>
    );
}