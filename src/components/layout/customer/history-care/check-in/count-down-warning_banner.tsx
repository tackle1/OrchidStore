'use client';

import { Clock } from 'lucide-react';

interface CountdownWarningBannerProps {
    timeLeft: number;
    formatTime: (seconds: number) => string;
}

export default function CountdownWarningBanner({ timeLeft, formatTime }: CountdownWarningBannerProps) {
    return (
        <div className="bg-[#FEF2F2] border border-[#FECACA] rounded-2xl p-4 flex items-start gap-3">
            <div className="text-[#EF4444]">
                <Clock className="w-5 h-5 mt-0.5" />
            </div>
            <div className="flex-1">
                <p className="font-medium text-[#991B1B]">
                    Vui lòng xác nhận trong vòng 48h
                </p>
                <p className="text-sm text-[#B91C1C] mt-1">
                    Hệ thống sẽ tự động xác nhận nếu bạn không phản hồi.
                </p>
            </div>
            <div className="text-right">
                <p className="text-2xl font-bold text-[#EF4444] font-mono">
                    {formatTime(timeLeft)}
                </p>
            </div>
        </div>
    );
}