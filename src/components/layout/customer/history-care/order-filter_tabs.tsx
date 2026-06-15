'use client';

// Define the OrderStatus type as a string union
type OrderStatus = 'all' | 'check-in' | 'in-progress' | 'check-out' | 'dispute' | 'completed';

interface OrderFilterTabsProps {
    activeFilter: OrderStatus;
    onFilterChange: (filter: OrderStatus) => void;
}

const tabs: { key: OrderStatus; label: string }[] = [
    { key: 'all', label: 'Tất cả' },
    { key: 'check-in', label: 'Chờ check-in' },
    { key: 'in-progress', label: 'Đang chăm sóc' },
    { key: 'check-out', label: 'Chờ check-out' },
    { key: 'dispute', label: 'Có tranh chấp' },
    { key: 'completed', label: 'Hoàn tất' },
];

export default function OrderFilterTabs({ activeFilter, onFilterChange }: OrderFilterTabsProps) {
    return (
        <div className="flex flex-wrap gap-2 mb-8">
            {tabs.map((tab) => (
                <button
                    key={tab.key}
                    onClick={() => onFilterChange(tab.key)}
                    className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${activeFilter === tab.key
                            ? 'bg-[#6D28D9] text-white'
                            : 'bg-white text-[#6B7280] border border-[#E5E7EB] hover:bg-[#F3E8FF]'
                        }`}
                >
                    {tab.label}
                    {tab.key === 'in-progress' && (
                        <span className="ml-1.5 w-2 h-2 bg-[#6D28D9] rounded-full inline-block"></span>
                    )}
                </button>
            ))}
        </div>
    );
}