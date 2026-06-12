'use client';

import { AlertTriangle } from 'lucide-react';

interface PlantStatusInfoProps {
    plantName: string;
    orderId: string;
    plantCondition: string;
}

export default function PlantStatusInfo({ plantName, orderId, plantCondition }: PlantStatusInfoProps) {
    return (
        <div>
            <p className="text-sm text-[#6B7280] mb-2">Thông tin lan & Hiện trạng</p>
            <div className="bg-[#F8F9FC] rounded-2xl p-4 flex gap-4">
                <div className="w-16 h-16 bg-gray-200 rounded-xl flex-shrink-0 overflow-hidden">
                    <img
                        src="/assets/images/orchid-sample.png"
                        alt="Lan"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div>
                    <p className="font-semibold">{plantName}</p>
                    <p className="text-sm text-[#6B7280]">Mã: {orderId}</p>
                    <p className="text-sm text-[#BA1A1A] flex items-center gap-1 mt-1">
                        <AlertTriangle className="w-4 h-4" />
                        {plantCondition}
                    </p>
                </div>
            </div>
        </div>
    );
}