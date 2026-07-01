'use client';

import { BadgeCheck, MapPin, Flower } from 'lucide-react';

export default function ProviderInfoCard() {
    return (
        <div className="bg-white border border-[#E5E7EB] rounded-3xl overflow-hidden">
            <div className="bg-gradient-to-r from-[#F3E8FF] to-white p-5">
                <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden border-2 border-white shadow">
                        <img src="/assets/images/avatar-provider.png" alt="Avatar" className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <h3 className="font-bold text-lg">Vườn Lan Thảo Điền</h3>
                            <div className="w-5 h-5 bg-[#6D28D9] rounded-full flex items-center justify-center">
                                <BadgeCheck className="w-3 h-3 text-white" />
                            </div>
                        </div>
                        <p className="text-sm text-[#6B7280] flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-[#6D28D9]" /> Quận 2, TP. Hồ Chí Minh
                        </p>
                    </div>
                </div>
            </div>

            <div className="p-5 space-y-4">
                <div>
                    <p className="text-xs text-[#6B7280] mb-1.5">Đang chăm sóc</p>
                    <div className="inline-flex items-center gap-2 bg-[#F3E8FF] px-3 py-1.5 rounded-xl mb-2">
                        <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                            <Flower className="w-3 h-3 text-[#6D28D9]" />
                        </div>
                        <span className="font-semibold text-sm">Đột Biến 5 Cánh Trắng</span>
                    </div>
                    <p className="text-sm text-[#6B7280]">
                        Mã định danh: <span className="font-medium text-[#374151]">ORC-9921</span>
                    </p>
                </div>

                <div className="bg-[#F8FAFC] px-3 py-2 rounded-2xl">
                    <p className="text-sm">
                        <span className="text-[#6B7280]">Gói:</span> <span className="font-medium">Chăm sóc phục hồi VIP (3 tháng)</span>
                    </p>
                </div>
            </div>
        </div>
    );
}