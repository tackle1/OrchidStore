'use client';

import {
    FileText,
    ClipboardList,
    Image as ImageIcon,
    ChevronLeft,
    ChevronRight,
    Clock,
    AlertTriangle,
} from 'lucide-react';
import { useState, useEffect } from 'react';

interface Filters {
    status: string;
    type: string;
    date: Date | null;
}

interface ProviderApprovalTableProps {
    filters?: Filters;
}

export default function ProviderApprovalTable({ filters }: ProviderApprovalTableProps) {
    // ==================== DATA CỨNG ====================
    const allProviders = [
        {
            id: 1,
            name: 'Vườn Lan Hương Đan',
            email: 'contact@huongdan.vn',
            type: 'Nhà vườn',
            date: '12/10/2023',
            status: 'Chờ duyệt',
            risk: 'Low',
        },
        {
            id: 2,
            name: 'Minh Trí',
            email: 'minhtri.orchid@gmail.com',
            type: 'Cá nhân',
            date: '11/10/2023',
            status: 'Cần bổ sung',
            risk: 'Medium',
        },
        {
            id: 3,
            name: 'Lan Việt Orchid',
            email: 'contact@lanviet.vn',
            type: 'Nhà vườn',
            date: '10/10/2023',
            status: 'Chờ duyệt',
            risk: 'Low',
        },
        {
            id: 4,
            name: 'Nguyễn Thị Lan',
            email: 'nguyenthilan@gmail.com',
            type: 'Cá nhân',
            date: '09/10/2023',
            status: 'Cần bổ sung',
            risk: 'High',
        },
    ];

    // ==================== STATE ====================
    const [currentPage, setCurrentPage] = useState(1);

    // ==================== FILTER LOGIC ====================
    const filteredProviders = allProviders.filter((provider) => {
        const matchStatus =
            !filters?.status ||
                filters.status === 'Tất cả'
                ? true
                : filters.status === 'Đã từ chối'
                    ? provider.status === 'Cần bổ sung'
                    : provider.status === filters.status;

        const matchType =
            !filters?.type || filters.type === 'Tất cả' || provider.type === filters.type;

        let matchDate = true;
        if (filters?.date) {
            const providerDate = new Date(provider.date.split('/').reverse().join('-'));
            const filterDate = new Date(filters.date);
            matchDate = providerDate.toDateString() === filterDate.toDateString();
        }

        return matchStatus && matchType && matchDate;
    });

    // ==================== PAGINATION ====================
    const itemsPerPage = 2;
    const totalResults = filteredProviders.length;
    const totalPages = Math.ceil(totalResults / itemsPerPage);

    const currentProviders = filteredProviders.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const getPageNumbers = () => {
        const pages: (number | string)[] = [];
        const maxVisible = 5;

        if (totalPages <= maxVisible) {
            for (let i = 1; i <= totalPages; i++) pages.push(i);
        } else {
            if (currentPage <= 3) {
                pages.push(1, 2, 3, '...', totalPages);
            } else if (currentPage >= totalPages - 2) {
                pages.push(1, '...', totalPages - 2, totalPages - 1, totalPages);
            } else {
                pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
            }
        }
        return pages;
    };

    const pageNumbers = getPageNumbers();

    const handlePageChange = (page: number | string) => {
        if (typeof page === 'number' && page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    // Reset về trang 1 khi filter thay đổi
    useEffect(() => {
        setCurrentPage(1);
    }, [filters]);

    // ==================== RENDER ====================
    return (
        <div className="bg-white border border-[#D8DDF7] rounded-[12px] overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-[2.4fr_0.9fr_1.1fr_1fr_1.2fr_1.2fr_1fr] items-center h-[58px] px-5 bg-[#F4F6FF] border-b border-[#D8DDF7] text-[14px] font-medium text-[#4B5563]">
                <div>Tên nhà vườn/Chuyên gia</div>
                <div>Loại</div>
                <div>Ngày gửi</div>
                <div>Tài liệu</div>
                <div>Trạng thái</div>
                <div>Mức độ rủi ro</div>
                <div>Thao tác</div>
            </div>

            {/* Rows */}
            {currentProviders.length > 0 ? (
                currentProviders.map((provider) => (
                    <div
                        key={provider.id}
                        className="grid grid-cols-[2.4fr_0.9fr_1.1fr_1fr_1.2fr_1.2fr_1fr] items-center px-5 py-5 border-b border-[#D8DDF7] last:border-b-0"
                    >
                        {/* Name + Email */}
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#7BAE16] to-[#2E5D09] flex items-center justify-center text-white text-sm">
                                {provider.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                            </div>
                            <div>
                                <div className="font-semibold text-[#1F2937] text-[15px]">{provider.name}</div>
                                <div className="text-[13px] text-[#6B7280]">{provider.email}</div>
                            </div>
                        </div>

                        {/* Type */}
                        <div className="text-[15px] text-[#374151]">{provider.type}</div>

                        {/* Date */}
                        <div className="text-[15px] text-[#374151]">{provider.date}</div>

                        {/* Documents */}
                        <div className="flex items-center gap-2">
                            {provider.status === 'Cần bổ sung' ? (
                                <ClipboardList className="w-4 h-4 text-[#DC2626]" />
                            ) : (
                                <>
                                    <ClipboardList className="w-4 h-4 text-[#6B7280]" />
                                    <FileText className="w-4 h-4 text-[#6B7280]" />
                                    <ImageIcon className="w-4 h-4 text-[#6B7280]" />
                                </>
                            )}
                        </div>

                        {/* Status */}
                        <div>
                            {provider.status === 'Chờ duyệt' && (
                                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FDE68A] text-[#8A5800] text-[13px] font-medium">
                                    <Clock className="w-4 h-4" />
                                    Chờ duyệt
                                </span>
                            )}
                            {provider.status === 'Cần bổ sung' && (
                                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FEE2E2] text-[#B91C1C] text-[13px] font-medium">
                                    <AlertTriangle className="w-4 h-4" />
                                    Cần bổ sung
                                </span>
                            )}
                        </div>

                        {/* Risk */}
                        <div className="flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full ${provider.risk === 'Low' ? 'bg-[#15803D]' :
                                provider.risk === 'Medium' ? 'bg-[#EAB308]' : 'bg-[#DC2626]'
                                }`} />
                            <span className={`text-[15px] ${provider.risk === 'Low' ? 'text-[#15803D]' :
                                provider.risk === 'Medium' ? 'text-[#B45309]' : 'text-[#DC2626]'
                                }`}>
                                {provider.risk}
                            </span>
                        </div>

                        {/* Action */}
                        <div>
                            <button className="w-[74px] h-[42px] rounded-[8px] bg-[#7C3AED] text-white text-[14px] font-medium hover:bg-[#6D28D9]">
                                Xét duyệt
                            </button>
                        </div>
                    </div>
                ))
            ) : (
                <div className="px-5 py-10 text-center text-gray-500">
                    Không tìm thấy nhà cung cấp phù hợp với bộ lọc
                </div>
            )}

            {/* Footer + Pagination */}
            <div className="flex items-center justify-between px-5 h-[50px] border-t border-[#D8DDF7] text-[13px] text-[#6B7280]">
                <span>
                    Hiển thị {totalResults > 0 ? (currentPage - 1) * itemsPerPage + 1 : 0}-
                    {Math.min(currentPage * itemsPerPage, totalResults)} trong {totalResults} kết quả
                </span>

                <div className="flex items-center gap-1">
                    <button
                        type="button"
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        aria-label="Previous page"
                        title="Previous page"
                        className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 disabled:opacity-40"
                    >
                        <ChevronLeft className="w-4 h-4" />
                    </button>

                    {pageNumbers.map((page, index) => (
                        <button
                            key={index}
                            type="button"
                            onClick={() => typeof page === 'number' && handlePageChange(page)}
                            className={`w-8 h-8 flex items-center justify-center rounded-lg text-sm font-medium transition-colors ${page === currentPage ? 'bg-[#7C3AED] text-white' : 'hover:bg-gray-100 text-[#374151]'
                                }`}
                        >
                            {page}
                        </button>
                    ))}

                    <button
                        type="button"
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        aria-label="Next page"
                        title="Next page"
                        className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 disabled:opacity-40"
                    >
                        <ChevronRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}