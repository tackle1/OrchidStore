'use client';

import { Truck } from 'lucide-react';

interface PickupScheduleProps {
    selectedDate: string;
    selectedTime: string;
    deliveryMethod: string;
}

export default function PickupSchedule({ selectedDate, selectedTime, deliveryMethod }: PickupScheduleProps) {
    return (
        <div>
            <p className="text-sm text-[#6B7280] mb-3">Thời gian nhận cây</p>

            <div className="border border-[#E5E7EB] bg-[#F2F3FF] rounded-2xl p-4 space-y-2 text-sm">
                <div className="flex justify-between">
                    <span className="text-[#6B7280]">Ngày:</span>
                    <span className="font-medium">{selectedDate}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-[#6B7280]">Khung giờ:</span>
                    <span className="font-medium">{selectedTime}</span>
                </div>
                <div className="h-px bg-[#E5E7EB] my-4" />
                <div className="flex justify-between items-center">
                    <span className="text-[#6B7280]">Hình thức:</span>
                    <span className="font-medium flex items-center gap-1.5">
                        <Truck className="w-4 h-4 text-[#6B7280]" />
                        {deliveryMethod}
                    </span>
                </div>
            </div>
        </div>
    );
}