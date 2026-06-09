'use client';

interface FilterOption {
    label: string;
    value: string;
}

interface FeedbackFilterBarProps {
    activeFilter: string;
    onFilterChange: (filter: string) => void;
    sortOrder: 'newest' | 'oldest';
    onSortChange: (order: 'newest' | 'oldest') => void;
    filters?: FilterOption[];
}

const defaultFilters: FilterOption[] = [
    { label: 'Tất cả (124)', value: 'all' },
    { label: '5 sao', value: '5' },
    { label: '4 sao', value: '4' },
    { label: 'Có hình ảnh (42)', value: 'with-image' },
];

export default function FeedbackFilterBar({
    activeFilter,
    onFilterChange,
    sortOrder,
    onSortChange,
    filters = defaultFilters,
}: FeedbackFilterBarProps) {
    return (
        <div className="flex flex-wrap items-center justify-between gap-3 mt-6">
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
                {filters.map((filter) => (
                    <button
                        key={filter.value}
                        onClick={() => onFilterChange(filter.value)}
                        className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${activeFilter === filter.value
                                ? 'bg-[#6D28D9] text-white shadow-sm'
                                : 'bg-white border border-[#E5E7EB] text-[#4B5563] hover:bg-[#F8F7FA]'
                            }`}
                    >
                        {filter.label}
                    </button>
                ))}
            </div>

            {/* Sort Button - ĐÃ CÓ CHỨC NĂNG */}
            <button
                onClick={() => onSortChange(sortOrder === 'newest' ? 'oldest' : 'newest')}
                className="px-4 py-1.5 text-sm border border-[#E5E7EB] rounded-xl hover:bg-[#F8F7FA] flex items-center gap-1"
            >
                {sortOrder === 'newest' ? 'Mới nhất ↓' : 'Cũ nhất ↑'}
            </button>
        </div>
    );
}