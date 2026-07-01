
'use client';

import { useState } from 'react';
import { Calendar, Filter, ChevronDown, X } from 'lucide-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface ReportsFiltersProps {
    onFilterChange: (filters: {
        month: string;
        status: string;
        startDate?: string;
        endDate?: string;
    }) => void;
}

export default function ReportsFilters({
    onFilterChange,
}: ReportsFiltersProps) {
    const [selectedMonth, setSelectedMonth] = useState('Tháng 10, 2026');
    const [selectedStatus, setSelectedStatus] =
        useState('Tất cả trạng thái');


    const [showStatusDropdown, setShowStatusDropdown] = useState(false);
    const [showDateRange, setShowDateRange] = useState(false);

    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);

    const statusOptions = [
        'Tất cả trạng thái',
        'Tuyệt vời',
        'Cần theo dõi',
        'Ổn định',
    ];

    const formatDateForApi = (date: Date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');

        return `${year}-${month}-${day}`;
    };

    const handleStatusSelect = (status: string) => {
        setSelectedStatus(status);
        setShowStatusDropdown(false);

        onFilterChange({
            month: selectedMonth,
            status,
            startDate: startDate
                ? formatDateForApi(startDate)
                : undefined,
            endDate: endDate
                ? formatDateForApi(endDate)
                : undefined,
        });
    };

    const handleDateRangeApply = () => {
        let monthLabel = 'Tháng 10, 2026';

        if (startDate && endDate) {
            monthLabel = `${startDate.toLocaleDateString(
                'vi-VN'
            )} → ${endDate.toLocaleDateString('vi-VN')}`;
        }

        setSelectedMonth(monthLabel);
        setShowDateRange(false);

        onFilterChange({
            month: monthLabel,
            status: selectedStatus,
            startDate: startDate
                ? formatDateForApi(startDate)
                : undefined,
            endDate: endDate
                ? formatDateForApi(endDate)
                : undefined,
        });
    };

    const handleClearDateRange = () => {
        setStartDate(null);
        setEndDate(null);
        setSelectedMonth('Tháng 10, 2026');
        setShowDateRange(false);

        onFilterChange({
            month: 'Tháng 10, 2026',
            status: selectedStatus,
        });
    };

    return (
        <div className="flex items-center gap-3 mb-6 relative">
            {/* Filter Tháng */}
            <div
                onClick={() => setShowDateRange(!showDateRange)}
                className="flex items-center gap-2 border border-[#E5E7EB] rounded-2xl px-4 h-10 text-sm cursor-pointer hover:bg-[#F9FAFB] active:bg-[#F3F4F6]"
            >
                <Calendar className="w-4 h-4 text-[#6B7280]" />
                <span>{selectedMonth}</span>
            </div>

            {/* Filter Trạng thái */}
            <div className="relative">
                <div
                    onClick={() =>
                        setShowStatusDropdown(!showStatusDropdown)
                    }
                    className="flex items-center gap-2 border border-[#E5E7EB] rounded-2xl px-4 h-10 text-sm cursor-pointer hover:bg-[#F9FAFB] active:bg-[#F3F4F6]"
                >
                    <Filter className="w-4 h-4 text-[#6B7280]" />
                    <span>{selectedStatus}</span>
                    <ChevronDown className="w-4 h-4 text-[#9CA3AF]" />
                </div>

                {showStatusDropdown && (
                    <div className="absolute top-12 left-0 w-48 bg-white border border-[#E5E7EB] rounded-2xl shadow-lg py-1 z-50">
                        {statusOptions.map((option) => (
                            <div
                                key={option}
                                onClick={() =>
                                    handleStatusSelect(option)
                                }
                                className={`px-4 py-2.5 text-sm cursor-pointer hover:bg-[#F9FAFB] ${selectedStatus === option
                                    ? 'bg-[#F3E8FF] text-[#6D28D9] font-medium'
                                    : ''
                                    }`}
                            >
                                {option}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Popup chọn khoảng thời gian */}
            {showDateRange && (
                <div className="absolute top-12 left-0 bg-white border border-[#E5E7EB] rounded-2xl shadow-xl p-4 w-72 z-50">
                    <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium">
                            Chọn khoảng thời gian
                        </span>

                        <button
                            type="button"
                            onClick={() =>
                                setShowDateRange(false)
                            }
                            aria-label="Đóng"
                        >
                            <X className="w-4 h-4 text-[#9CA3AF]" />
                        </button>
                    </div>

                    <div className="space-y-3">
                        <div>
                            <label className="text-xs text-[#6B7280] block mb-1">
                                Từ ngày
                            </label>

                            <div className="relative">
                                <DatePicker
                                    selected={startDate}
                                    onChange={(date: Date | null) => setStartDate(date)}
                                    dateFormat="dd/MM/yyyy"
                                    placeholderText="DD/MM/YYYY"
                                    className="w-full border border-[#E5E7EB] rounded-lg px-3 py-2 pr-10 text-sm"
                                />

                                <Calendar
                                    className=" absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B7280] pointer-events-none "
                                />
                            </div>
                        </div>

                        <div>
                            <label className="text-xs text-[#6B7280] block mb-1">
                                Đến ngày
                            </label>

                            <div className="relative">
                                <DatePicker
                                    selected={endDate}
                                    onChange={(date: Date | null) => setEndDate(date)}
                                    dateFormat="dd/MM/yyyy"
                                    placeholderText="DD/MM/YYYY"
                                    className="w-full border border-[#E5E7EB] rounded-lg px-3 py-2 pr-10 text-sm"
                                />
                                <Calendar
                                    className=" absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B7280] pointer-events-none "
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-2 mt-4">
                        <button
                            type="button"
                            onClick={handleClearDateRange}
                            className="flex-1 py-2 text-sm border border-[#E5E7EB] rounded-2xl hover:bg-[#F9FAFB]"
                        >
                            Xóa
                        </button>

                        <button
                            type="button"
                            onClick={handleDateRangeApply}
                            className="flex-1 py-2 text-sm bg-[#6D28D9] text-white rounded-2xl hover:bg-[#5B21B6]"
                        >
                            Áp dụng
                        </button>
                    </div>
                </div>
            )}
        </div>
    );


}
