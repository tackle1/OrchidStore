import React from 'react';

interface HistoryCareTabsProps {
    tabs: string[];
    activeTab: string;
    onTabChange: (tab: string) => void;
}

export default function HistoryCareTabs({ tabs, activeTab, onTabChange }: HistoryCareTabsProps) {
    return (
        <div className="border-b border-[#E5E7EB] mb-6 flex overflow-x-auto hide-scrollbar">
            {tabs.map((tab, idx) => (
                <button
                    key={idx}
                    onClick={() => onTabChange(tab)}
                    className={`px-5 py-3 text-sm font-semibold whitespace-nowrap border-b-2 transition-colors ${activeTab === tab
                        ? 'border-[#7C3AED] text-[#7C3AED]'
                        : 'border-transparent text-[#4B5563] hover:text-[#111827] hover:border-gray-300'
                        }`}
                >
                    {tab}
                </button>
            ))}
        </div>
    );
}
