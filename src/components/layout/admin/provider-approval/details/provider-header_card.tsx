'use client';

import { MapPin, Calendar, BadgeCheck } from 'lucide-react';

interface ProviderHeaderCardProps {
    provider: any;
}

export default function ProviderHeaderCard({ provider }: ProviderHeaderCardProps) {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#E5E7EB] mb-6">
            <div className="flex items-start gap-5">
                <div className="w-20 h-20 rounded-2xl overflow-hidden border border-[#E5E7EB] flex-shrink-0 bg-gray-100">
                    <img
                        src="/assets/images/avatar-approval_provider.png"
                        alt={provider.name}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                        <h2 className="text-2xl font-bold text-[#111827]">{provider.name}</h2>
                        <BadgeCheck className="w-6 h-6 text-[#16A34A]" />
                    </div>

                    <div className="flex items-center gap-2 text-[#6B7280] mb-1">
                        <MapPin className="w-4 h-4" />
                        <span>{provider.location}</span>
                    </div>

                    <div className="flex items-center gap-2 text-[#6B7280]">
                        <Calendar className="w-4 h-4" />
                        <span>Ngày đăng ký: {provider.date}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}