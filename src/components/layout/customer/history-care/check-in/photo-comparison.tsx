'use client';

import { Search } from 'lucide-react';

export default function PhotoComparison() {
    return (
        <div>
            <h3 className="font-semibold mb-4">So sánh tình trạng</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Ảnh khách hàng */}
                <div>
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Ảnh bạn đã chụp</span>
                        <span className="text-xs bg-[#E0E7FF] text-[#4338CA] px-2 py-0.5 rounded">
                            10:00 12/10/2023
                        </span>
                    </div>
                    <div className="rounded-2xl overflow-hidden border border-[#E5E7EB]">
                        <img
                            src="/assets/images/orchid-customer.png"
                            alt="Customer photo"
                            className="w-full h-64 object-cover"
                        />
                    </div>
                </div>

                {/* Ảnh nhà vườn */}
                <div>
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Ảnh nhà vườn chụp (Check-in)</span>
                        <span className="text-xs bg-[#E0E7FF] text-[#4338CA] px-2 py-0.5 rounded">
                            14:30 14/10/2023
                        </span>
                    </div>
                    <div className="rounded-2xl overflow-hidden border border-[#E5E7EB] relative">
                        <img
                            src="/assets/images/orchid-provider.png"
                            alt="Provider check-in photo"
                            className="w-full h-64 object-cover"
                        />
                        <div className="absolute top-3 right-3">
                            <div className="flex items-center gap-1.5 bg-[#BA1A1A] text-white text-xs font-medium px-3 py-1 rounded-full shadow-md">
                                <Search className="w-3.5 h-3.5" />
                                <span>Chú ý lá</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}