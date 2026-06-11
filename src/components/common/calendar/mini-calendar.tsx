'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface MiniCalendarProps {
    selectedDate: Date;
    onDateChange: (date: Date) => void;
}

export default function MiniCalendar({
    selectedDate,
    onDateChange,
}: MiniCalendarProps) {

    const [currentMonth, setCurrentMonth] =
        useState<Date>(selectedDate);

    useEffect(() => {
        setCurrentMonth(selectedDate);
    }, [selectedDate]);

    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();

    // Thứ đầu tiên của tháng
    const firstDay = new Date(year, month, 1);

    // Chuyển từ CN-first sang T2-first
    const firstDayOfMonth =
        firstDay.getDay() === 0
            ? 6
            : firstDay.getDay() - 1;

    const daysInMonth =
        new Date(year, month + 1, 0).getDate();

    const daysArray: (number | null)[] = [];

    for (let i = 0; i < firstDayOfMonth; i++) {
        daysArray.push(null);
    }

    for (let i = 1; i <= daysInMonth; i++) {
        daysArray.push(i);
    }

    const monthNames = [
        'Tháng 1',
        'Tháng 2',
        'Tháng 3',
        'Tháng 4',
        'Tháng 5',
        'Tháng 6',
        'Tháng 7',
        'Tháng 8',
        'Tháng 9',
        'Tháng 10',
        'Tháng 11',
        'Tháng 12',
    ];

    const handlePrevMonth = () => {
        setCurrentMonth(
            new Date(year, month - 1, 1)
        );
    };

    const handleNextMonth = () => {
        setCurrentMonth(
            new Date(year, month + 1, 1)
        );
    };

    const handleSelectDate = (day: number) => {
        const date = new Date(
            year,
            month,
            day
        );

        onDateChange(date);
    };

    const isSelected = (day: number) => {
        return (
            selectedDate.getFullYear() === year &&
            selectedDate.getMonth() === month &&
            selectedDate.getDate() === day
        );
    };

    return (
        <div className="w-full">
            {/* Header tháng */}
            <div className="flex items-center justify-between mb-3 px-1">
                <button
                    type="button"
                    onClick={handlePrevMonth}
                    aria-label="Previous month"
                    title="Previous month"
                    className="p-1 hover:bg-gray-100 rounded-full"
                >
                    <ChevronLeft className="w-5 h-5" />
                </button>

                <span className="font-semibold text-base">
                    {monthNames[month]} {year}
                </span>

                <button
                    type="button"
                    onClick={handleNextMonth}
                    aria-label="Next month"
                    title="Next month"
                    className="p-1 hover:bg-gray-100 rounded-full"
                >
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>

            {/* Thứ trong tuần */}
            <div className="grid grid-cols-7 text-center text-xs text-[#6B7280] mb-1">
                {['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'].map(
                    (day) => (
                        <div
                            key={day}
                            className="py-1"
                        >
                            {day}
                        </div>
                    )
                )}
            </div>

            {/* Các ngày */}
            <div className="grid grid-cols-7 gap-1 text-center text-sm">
                {daysArray.map((day, index) => (
                    <div
                        key={index}
                        className="aspect-square flex items-center justify-center"
                    >
                        {day && (
                            <button
                                type="button"
                                onClick={() =>
                                    handleSelectDate(day)
                                }
                                className={`
                                    w-9 h-9
                                    flex items-center justify-center
                                    rounded-full
                                    transition-all
                                    ${isSelected(day)
                                        ? 'bg-[#6D28D9] text-white font-semibold'
                                        : 'hover:bg-[#F3E8FF] text-[#374151]'
                                    }
                                `}
                            >
                                {day}
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}