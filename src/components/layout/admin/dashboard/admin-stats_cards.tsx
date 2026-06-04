'use client';

import {
    TrendingUp,
    AlertTriangle,
    Smartphone,
    Wallet,
    Store,
    ArrowLeftRight,
} from 'lucide-react';

export default function StatsCards() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">

            {/* Card 1: Tổng booking */}
            <div className="bg-white rounded-2xl border border-gray-200 p-5">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm text-gray-500">Tổng booking</p>
                        <p className="text-3xl font-bold text-[#1F2937] mt-1">1,280</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                        <Smartphone className="w-5 h-5 text-[#6D28D9]" />
                    </div>
                </div>
                <div className="flex items-center gap-1 mt-3 text-sm">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                    <span className="text-green-600 font-medium">+12% so với tháng trước</span>
                </div>
            </div>

            {/* Card 2: Doanh thu nền tảng (Kích thước linh hoạt) */}
            <div className="bg-[#7C3AED] text-white rounded-2xl p-5 flex flex-col justify-between">
                <div>
                    <div className="flex items-center justify-between">
                        <p className="text-sm text-white/80">Doanh thu nền tảng</p>
                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                            <Wallet className="w-4 h-4 text-white" />
                        </div>
                    </div>

                    {/* Số tiền có kích thước tự động co lại */}
                    <p className="text-[clamp(22px, 5vw, 28px)] leading-[34px] font-bold mt-1 tracking-[-0.5px]">
                        450.000.000đ
                    </p>
                </div>

                <div className="flex items-center gap-1 mt-4 text-sm">
                    <TrendingUp className="w-4 h-4 text-[#7CF994]" />
                    <span className="text-[#7CF994] font-medium">+8.5% so với tháng trước</span>
                </div>
            </div>

            {/* Card 3: Provider chờ duyệt */}
            <div className="bg-white rounded-2xl border border-gray-200 p-5">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm text-gray-500">Provider chờ duyệt</p>
                        <p className="text-3xl font-bold text-[#1F2937] mt-1">12</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                        <Store className="w-5 h-5 text-[#6D28D9]" />
                    </div>
                </div>
                <p className="text-sm text-gray-500 mt-3">Cần xử lý trong 24h</p>
            </div>

            {/* Card 4: Dispute đang mở */}
            <div className="bg-white rounded-2xl border border-gray-200 p-5">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm text-gray-500">Dispute đang mở</p>
                        <p className="text-3xl font-bold text-[#1F2937] mt-1">5</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                        <AlertTriangle className="w-5 h-5 text-red-600" />
                    </div>
                </div>
                <div className="flex items-center gap-1.5 mt-3 text-sm text-red-600">
                    <span>2 khiếu nại mức độ cao !</span>
                </div>
            </div>

            {/* Card 5: Giao dịch trong tháng */}
            <div className="bg-white rounded-2xl border border-gray-200 p-5">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm text-gray-500">Giao dịch trong tháng</p>
                        <p className="text-3xl font-bold text-[#1F2937] mt-1">320</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#7CF994] flex items-center justify-center">
                        <ArrowLeftRight className="w-5 h-5 text-green-600" />
                    </div>
                </div>
                <p className="text-sm text-gray-500 mt-3">Trung bình 10 gd/ngày</p>
            </div>
        </div>
    );
}