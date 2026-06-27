'use client';

import { Search, Calendar, ChevronDown, X } from 'lucide-react';

interface DisputeFiltersProps {
    searchTerm: string;
    setSearchTerm: (value: string) => void;
    timeFilter: string;
    setTimeFilter: (value: string) => void;
    statusFilter: string;
    setStatusFilter: (value: string) => void;
    resolutionTypeFilter: string;
    setResolutionTypeFilter: (value: string) => void;
}

export default function DisputeFilters({
    searchTerm,
    setSearchTerm,
    timeFilter,
    setTimeFilter,
    statusFilter,
    setStatusFilter,
    resolutionTypeFilter,
    setResolutionTypeFilter,
}: DisputeFiltersProps) {

    // Active Filters
    const activeFilters: { label: string; key: 'status' | 'resolution' }[] = [];

    if (statusFilter !== 'Tất cả') {
        activeFilters.push({ label: `Trạng thái: ${statusFilter}`, key: 'status' });
    }
    if (resolutionTypeFilter !== 'Tất cả') {
        activeFilters.push({ label: `Loại giải quyết: ${resolutionTypeFilter}`, key: 'resolution' });
    }

    const clearAllFilters = () => {
        setSearchTerm('');
        setTimeFilter('30 ngày qua');
        setStatusFilter('Tất cả');
        setResolutionTypeFilter('Tất cả');
    };

    const removeFilter = (key: 'status' | 'resolution') => {
        if (key === 'status') setStatusFilter('Tất cả');
        if (key === 'resolution') setResolutionTypeFilter('Tất cả');
    };

    return (
        <div className="mb-6 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            {/* Filter Bar */}
            <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">

                {/* Tìm kiếm chi tiết */}
                <div className="lg:col-span-2">
                    <label className="mb-1.5 block text-xs font-medium text-gray-600">Tìm kiếm chi tiết</label>
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Mã tranh chấp, Mã đặt lịch..."
                            className="w-full rounded-lg border border-gray-300 bg-white pl-10 pr-4 py-2.5 text-sm focus:border-purple-500 focus:outline-none"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                {/* Thời gian */}
                <div>
                    <label htmlFor="dispute-time-filter" className="mb-1.5 block text-xs font-medium text-gray-600">Thời gian</label>
                    <div className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-700">
                        <Calendar className="h-4 w-4 text-gray-500" />
                        <select
                            id="dispute-time-filter"
                            aria-label="Thời gian"
                            title="Thời gian"
                            value={timeFilter}
                            onChange={(e) => setTimeFilter(e.target.value)}
                            className="flex-1 bg-transparent outline-none"
                        >
                            <option value="Tất cả">Tất cả</option>
                            <option value="7 ngày qua">7 ngày qua</option>
                            <option value="30 ngày qua">30 ngày qua</option>
                            <option value="90 ngày qua">90 ngày qua</option>

                        </select>
                    </div>
                </div>

                {/* Trạng thái */}
                <div>
                    <label htmlFor="dispute-status-filter" className="mb-1.5 block text-xs font-medium text-gray-600">Trạng thái</label>
                    <div className="relative">
                        <select
                            id="dispute-status-filter"
                            aria-label="Trạng thái"
                            title="Trạng thái"
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            className="w-full appearance-none rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-700 focus:border-purple-500 focus:outline-none"
                        >
                            <option value="Tất cả">Tất cả</option>
                            <option value="Đang chờ xử lý">Đang chờ xử lý</option>
                            <option value="Đã giải quyết">Đã giải quyết</option>
                            <option value="Đã hoàn tiền">Đã hoàn tiền</option>
                            <option value="Đã đóng">Đã đóng</option>
                        </select>
                        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                    </div>
                </div>

                {/* Loại giải quyết */}
                <div>
                    <label htmlFor="dispute-resolution-filter" className="mb-1.5 block text-xs font-medium text-gray-600">Loại giải quyết</label>
                    <div className="relative">
                        <select
                            id="dispute-resolution-filter"
                            aria-label="Loại giải quyết"
                            title="Loại giải quyết"
                            value={resolutionTypeFilter}
                            onChange={(e) => setResolutionTypeFilter(e.target.value)}
                            className=" w-full appearance-none rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-700 focus:border-purple-500 focus:outline-none"
                        >
                            <option value="Tất cả">Tất cả</option>
                            <option value="Hoàn tiền">Hoàn tiền</option>
                            <option value="Bồi thường">Bồi thường</option>
                            <option value="Khác">Khác</option>
                        </select>
                        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                    </div>
                </div>
            </div>

            {/* Active Filters */}
            {(activeFilters.length > 0 || searchTerm) && (
                <div className="flex flex-wrap items-center gap-2 border-t border-gray-100 pt-4 text-sm">
                    <span className="text-gray-600">Lọc theo:</span>

                    <div className="flex flex-wrap items-center gap-2">
                        {searchTerm && (
                            <span className="flex items-center gap-1 rounded-full bg-purple-100 px-3 py-1 text-xs text-purple-700">
                                Tìm kiếm: {searchTerm}
                                <button onClick={() => setSearchTerm('')} className="ml-1 hover:text-purple-900" aria-label="Xóa tìm kiếm">
                                    <X className="h-3 w-3" />
                                </button>
                            </span>
                        )}

                        {activeFilters.map((filter) => (
                            <span
                                key={filter.key}
                                className="flex items-center gap-1 rounded-full bg-purple-100 px-3 py-1 text-xs text-purple-700"
                            >
                                {filter.label}
                                <button
                                    onClick={() => removeFilter(filter.key)}
                                    className="ml-1 hover:text-purple-900"
                                    aria-label={`Xóa bộ lọc ${filter.label}`}
                                >
                                    <X className="h-3 w-3" />
                                </button>
                            </span>
                        ))}
                    </div>

                    <button
                        onClick={clearAllFilters}
                        className="ml-2 text-xs font-medium text-purple-600 hover:underline"
                    >
                        Xóa tất cả
                    </button>
                </div>
            )}
        </div>
    );
}