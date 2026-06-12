'use client';

import { MapPin } from 'lucide-react';

interface ProviderInfoProps {
    provider: string;
    avatar: string;
    location?: string;
}

export default function ProviderInfo({ provider, avatar, location }: ProviderInfoProps) {
    return (
        <div>
            <p className="text-sm text-[#6B7280] mb-3">Nhà vườn tiếp nhận</p>
            <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full overflow-hidden flex-shrink-0 border border-[#E5E7EB]">
                    <img
                        src={avatar}
                        alt={provider}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div>
                    <p className="font-semibold text-base">{provider}</p>
                    <p className="text-sm text-[#6B7280]">
                        <MapPin className="w-3 h-3 inline mr-1" />
                        {location || 'Chưa cập nhật'}
                    </p>
                </div>
            </div>
        </div>
    );
}