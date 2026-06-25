'use client';

import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
    onPageChange: (page: number) => void;
}

export default function Pagination({
    currentPage,
    totalPages,
    totalItems,
    itemsPerPage,
    onPageChange,
}: PaginationProps) {
    const startItem = (currentPage - 1) * itemsPerPage + 1;
    const endItem = Math.min(currentPage * itemsPerPage, totalItems);

    // Tạo danh sách số trang (hiển thị tối đa 5 số trang)
    const getPageNumbers = () => {
        const pages: (number | string)[] = [];
        const maxVisible = 5;

        if (totalPages <= maxVisible) {
            for (let i = 1; i <= totalPages; i++) pages.push(i);
        } else {
            if (currentPage <= 3) {
                pages.push(1, 2, 3, 4, '...', totalPages);
            } else if (currentPage >= totalPages - 2) {
                pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
            } else {
                pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
            }
        }
        return pages;
    };

    const pageNumbers = getPageNumbers();

    return (
        <div className="flex items-center justify-between mt-4 px-2 text-sm text-[#6B7280]">
            {/* Text hiển thị */}
            <div>
                Hiển thị {startItem}-{endItem} trên {totalItems} giao dịch
            </div>

            {/* Nút phân trang */}
            <div className="flex items-center gap-1">
                {/* Previous */}
                <button
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="w-8 h-8 flex items-center justify-center rounded-lg border border-[#CCC3D8] hover:bg-[#F3F4F6] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    title="Trang trước"
                >
                    <ChevronLeft className="w-4 h-4" />
                </button>

                {/* Page Numbers */}
                {pageNumbers.map((page, index) => {
                    if (page === '...') {
                        return (
                            <span key={index} className="px-2 text-[#9CA3AF]">
                                ...
                            </span>
                        );
                    }

                    return (
                        <button
                            key={index}
                            onClick={() => onPageChange(page as number)}
                            className={`w-8 h-8 flex items-center justify-center rounded-lg text-sm font-medium transition-colors ${currentPage === page
                                    ? 'bg-[#6D28D9] text-white'
                                    : 'hover:bg-[#F3F4F6] text-[#374151]'
                                }`}
                        >
                            {page}
                        </button>
                    );
                })}

                {/* Next */}
                <button
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="w-8 h-8 flex items-center justify-center rounded-lg border border-[#CCC3D8] hover:bg-[#F3F4F6] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    title="Trang tiếp theo"
                >
                    <ChevronRight className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
}