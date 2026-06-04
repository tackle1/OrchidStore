'use client';

import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import {
    Filter,
    CalendarDays,
    ChevronDown,
} from 'lucide-react';

interface ProviderFilterBarProps {
    activeTab: string;

    onTabChange: (tab: string) => void;

    onFilterChange: (filters: {
        status: string;
        type: string;
        date: Date | null;
    }) => void;
}

export default function ProviderFilterBar({
    activeTab,
    onTabChange,
    onFilterChange,
}: ProviderFilterBarProps) {
    const [selectedType, setSelectedType] = useState('Tất cả');

    const [selectedDate, setSelectedDate] =
        useState<Date | null>(null);

    const tabs = [
        'Tất cả',
        'Chờ duyệt',
        'Đã duyệt',
        'Đã từ chối',
    ];

    const handleTabClick = (tab: string) => {
        onTabChange(tab);

        onFilterChange({
            status: tab,
            type: selectedType,
            date: selectedDate,
        });
    };

    const handleTypeChange = (
        e: React.ChangeEvent<HTMLSelectElement>
    ) => {
        const newType = e.target.value;

        setSelectedType(newType);

        onFilterChange({
            status: activeTab,
            type: newType,
            date: selectedDate,
        });
    };

    const handleDateChange = (
        date: Date | null
    ) => {
        setSelectedDate(date);

        onFilterChange({
            status: activeTab,
            type: selectedType,
            date,
        });
    };

    return (
        <div className="w-full bg-[#F8F8FC] border border-[#D8DDF7] rounded-[12px] p-4">

            {/* Tabs */}
            <div className="flex items-center gap-3 mb-5">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        type="button"
                        onClick={() => handleTabClick(tab)}
                        className={`h-[40px] px-5 rounded-full text-[14px] font-medium transition-all ${activeTab === tab
                                ? 'bg-[#7C3AED] text-white'
                                : 'bg-[#E9E9F4] border border-[#CFCFE3] text-[#4B5563] hover:bg-[#E0E0F0]'
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4">

                {/* Loại hình */}
                <div className="w-[250px]">
                    <div className="relative">

                        <Filter
                            className="
                                absolute
                                left-4
                                top-1/2
                                -translate-y-1/2
                                w-4
                                h-4
                                text-[#6B7280]
                                pointer-events-none
                            "
                        />

                        <select
                            aria-label="Loại hình"
                            value={selectedType}
                            onChange={handleTypeChange}
                            className="
                                w-full
                                h-[44px]
                                bg-[#EEF0FC]
                                border
                                border-[#CFCFE3]
                                rounded-[8px]
                                pl-10
                                pr-10
                                text-[14px]
                                text-[#374151]
                                appearance-none
                                cursor-pointer
                            "
                        >
                            <option value="Tất cả">
                                Tất cả loại hình
                            </option>

                            <option value="Nhà vườn">
                                Nhà vườn
                            </option>

                            <option value="Cá nhân">
                                Cá nhân
                            </option>
                        </select>

                        <ChevronDown
                            className="
                                absolute
                                right-4
                                top-1/2
                                -translate-y-1/2
                                w-4
                                h-4
                                text-[#6B7280]
                                pointer-events-none
                            "
                        />
                    </div>
                </div>

                {/* Ngày gửi */}
                <div className="relative w-[250px]">
                    <DatePicker
                        selected={selectedDate}
                        onChange={handleDateChange}
                        placeholderText="Chọn ngày gửi"
                        dateFormat="dd/MM/yyyy"
                        className="
                            w-full
                            h-[44px]
                            bg-[#EEF0FC]
                            border
                            border-[#CFCFE3]
                            rounded-[8px]
                            pl-4
                            pr-10
                            text-[14px]
                            text-[#374151]
                            outline-none
                        "
                    />

                    <CalendarDays
                        className="
                            absolute
                            right-4
                            top-1/2
                            -translate-y-1/2
                            w-4
                            h-4
                            text-[#6B7280]
                            pointer-events-none
                        "
                    />
                </div>
            </div>
        </div>
    );
}