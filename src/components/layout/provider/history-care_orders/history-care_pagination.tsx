import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface HistoryCarePaginationProps {
    currentPage: number;
    totalPages: number;
    startItem: number;
    endItem: number;
    totalItems: number;
    onPageChange: (page: number) => void;
}

export default function HistoryCarePagination({
    currentPage,
    totalPages,
    startItem,
    endItem,
    totalItems,
    onPageChange
}: HistoryCarePaginationProps) {
    return (
        <div className="border-t border-[#E5E7EB] px-6 py-4 flex items-center justify-between bg-white text-sm">
            <span className="text-[#6B7280]">
                Hiển thị {startItem}-{endItem} trên {totalItems} đơn
            </span>

            <div className="flex items-center gap-1">
                <button
                    onClick={() => onPageChange(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    type="button"
                    title="Trang trước"
                    aria-label="Trang trước"
                    className="p-1.5 hover:bg-gray-100 rounded-md text-[#9CA3AF] hover:text-[#4B5563] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <ChevronLeft className="w-5 h-5" />
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <button
                        key={page}
                        onClick={() => onPageChange(page)}
                        type="button"
                        title={`Trang ${page}`}
                        aria-label={`Trang ${page}`}
                        className={`w-8 h-8 flex items-center justify-center rounded-md font-medium transition-colors ${currentPage === page
                            ? 'bg-[#6D28D9] text-white'
                            : 'hover:bg-gray-100 text-[#4B5563]'
                            }`}
                    >
                        {page}
                    </button>
                ))}

                <button
                    onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    type="button"
                    title="Trang tiếp"
                    aria-label="Trang tiếp"
                    className="p-1.5 hover:bg-gray-100 rounded-md text-[#9CA3AF] hover:text-[#4B5563] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
}
