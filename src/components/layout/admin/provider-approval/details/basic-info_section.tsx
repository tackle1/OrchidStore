'use client';

import { Info } from 'lucide-react';

interface BasicInfoSectionProps {
    provider: any;
}

export default function BasicInfoSection({ provider }: BasicInfoSectionProps) {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#E5E7EB]">
            <div className="flex items-center gap-3 mb-5">
                <div className="w-5 h-5 rounded-full bg-[#7C3AED] flex items-center justify-center flex-shrink-0">
                    <Info className="w-3.5 h-3.5 text-white" />
                </div>
                <h3 className="font-semibold text-[#111827] text-lg">Thông tin cơ bản</h3>
            </div>

            <div className="space-y-4 text-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                    <div>
                        <p className="text-[#6B7280] mb-0.5">Người đại diện</p>
                        <p className="font-semibold text-[#111827]">{provider.representative}</p>
                    </div>
                    <div>
                        <p className="text-[#6B7280] mb-0.5">Số điện thoại</p>
                        <p className="font-semibold text-[#111827]">{provider.phone}</p>
                    </div>
                </div>

                <div className="h-px bg-[#F3F4F6]" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                    <div>
                        <p className="text-[#6B7280] mb-0.5">Email liên hệ</p>
                        <p className="font-semibold text-[#111827]">{provider.email}</p>
                    </div>
                    <div>
                        <p className="text-[#6B7280] mb-0.5">Địa chỉ kinh doanh</p>
                        <p className="font-semibold text-[#111827]">{provider.address}</p>
                    </div>
                </div>

                <div className="h-px bg-[#F3F4F6]" />

                <div>
                    <p className="text-[#6B7280] mb-2">Giới thiệu (Bio)</p>
                    <div className="bg-[#F8F9FC] border border-[#E5E7EB] rounded-xl p-4 text-[#374151] leading-relaxed">
                        {provider.introduction}
                    </div>
                </div>
            </div>
        </div>
    );
}