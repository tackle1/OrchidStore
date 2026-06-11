'use client';

import { Clock } from 'lucide-react';
import MiniCalendar from '../../../../common/calendar/mini-calendar';

interface DeliveryTimeSelectionProps {
    selectedDate: Date;
    selectedTime: string;
    onDateChange: (date: Date) => void;
    onTimeChange: (time: string) => void;
    timeSlots: string[];
    formatDate: (date: Date) => string;
}

export default function DeliveryTimeSelection({
    selectedDate,
    selectedTime,
    onDateChange,
    onTimeChange,
    timeSlots,
    formatDate,
}: DeliveryTimeSelectionProps) {
    return (
        <div className="bg-white rounded-3xl border border-[#E5E7EB] p-6">
            <div className="flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-[#6D28D9]" />
                <h3 className="font-semibold text-lg">Chọn thời gian giao nhận</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Mini Calendar */}
                <div>
                    <p className="text-sm font-medium mb-3">Ngày giao nhận</p>
                    <MiniCalendar
                        selectedDate={selectedDate}
                        onDateChange={onDateChange}
                    />
                </div>

                {/* Time Slots */}
                <div>
                    <p className="text-sm font-medium mb-2">
                        Khung giờ trống
                        <span className="font-normal text-[#6B7280] ml-2">
                            (Ngày {formatDate(selectedDate)})
                        </span>
                    </p>

                    <div className="grid grid-cols-2 gap-3">
                        {timeSlots.map((time) => (
                            <button
                                key={time}
                                onClick={() => onTimeChange(time)}
                                className={`py-2.5 rounded-2xl border text-sm font-medium transition-all text-center ${selectedTime === time
                                        ? 'bg-[#6D28D9] text-white border-[#6D28D9]'
                                        : 'bg-white border-[#E5E7EB] hover:border-[#6D28D9]'
                                    }`}
                            >
                                {time}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}