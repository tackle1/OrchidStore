'use client';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Eye, ArrowLeft, ArrowRight } from 'lucide-react';

interface Dispute {
    id: string;
    orderCode: string;
    customer: { name: string };
    provider: { name: string };
    createdAt: string;
    status: 'pending' | 'resolved' | 'refunded' | 'closed';
    statusLabel: string;
}

interface DisputesTableProps {
    searchTerm: string;
    timeFilter: string;
    statusFilter: string;
    resolutionTypeFilter: string;
}

const disputesData: Dispute[] = [
    {
        id: '#TC-2023-0891',
        orderCode: 'ORD-9921',
        customer: { name: 'Nguyễn Văn C.' },
        provider: { name: 'Hoa Lan Thảo Điền' },
        createdAt: '2 giờ trước',
        status: 'pending',
        statusLabel: 'Đang chờ xử lý',
    },
    {
        id: '#TC-2023-0890',
        orderCode: 'ORD-9855',
        customer: { name: 'Lê Thị T.' },
        provider: { name: 'Vườn Lan Phương Hoàng' },
        createdAt: '27/06/2026',
        status: 'resolved',
        statusLabel: 'Đã giải quyết',
    },
    // Thêm data mẫu để test phân trang
    {
        id: '#TC-2023-0885',
        orderCode: 'ORD-9702',
        customer: { name: 'Trần Đức D.' },
        provider: { name: 'Lan Rừng Ngọc' },
        createdAt: '20/05/2026',
        status: 'refunded',
        statusLabel: 'Đã hoàn tiền',
    },
    {
        id: '#TC-2023-0880',
        orderCode: 'ORD-9650',
        customer: { name: 'Phạm Thị M.' },
        provider: { name: 'Hoa Lan Anh Đào' },
        createdAt: '12/04/2026',
        status: 'closed',
        statusLabel: 'Đã đóng',
    },
];

const statusColors = {
    pending: 'bg-pink-100 text-pink-700',
    resolved: 'bg-green-100 text-green-700',
    refunded: 'bg-purple-100 text-purple-700',
    closed: 'bg-gray-100 text-gray-600',
};

const ITEMS_PER_PAGE = 3;

// ==================== HÀM HỖ TRỢ TÍNH NGÀY ====================
function getDaysAgo(createdAt: string): number {
    const now = new Date();

    // Trường hợp "2 giờ trước", "3 ngày trước"
    if (createdAt.includes('giờ trước') || createdAt.includes('ngày trước')) {
        if (createdAt.includes('giờ')) return 0;
        const days = parseInt(createdAt);
        return isNaN(days) ? 0 : days;
    }

    // Trường hợp DD/MM/YYYY
    const parts = createdAt.split('/');
    if (parts.length === 3) {
        const day = parseInt(parts[0]);
        const month = parseInt(parts[1]) - 1;
        const year = parseInt(parts[2]);
        const createdDate = new Date(year, month, day);
        const diffTime = now.getTime() - createdDate.getTime();
        return Math.floor(diffTime / (1000 * 60 * 60 * 24));
    }

    return 9999; // Không xác định được → coi như rất cũ
}

export default function DisputesTable({
    searchTerm,
    timeFilter,
    statusFilter,
    resolutionTypeFilter,
}: DisputesTableProps) {
    const [currentPage, setCurrentPage] = useState(1);

    // === Lọc dữ liệu ===
    const filteredDisputes = disputesData.filter((dispute) => {
        const matchesSearch =
            dispute.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
            dispute.orderCode.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesStatus =
            statusFilter === 'Tất cả' || dispute.statusLabel === statusFilter;

        const matchesResolution =
            resolutionTypeFilter === 'Tất cả' || dispute.statusLabel.includes(resolutionTypeFilter);

        // === LỌC THEO THỜI GIAN (MỚI) ===
        const daysAgo = getDaysAgo(dispute.createdAt);
        let matchesTime = true;

        if (timeFilter === '7 ngày qua') {
            matchesTime = daysAgo <= 7;
        } else if (timeFilter === '30 ngày qua') {
            matchesTime = daysAgo <= 30;
        } else if (timeFilter === '90 ngày qua') {
            matchesTime = daysAgo <= 90;
        } else if (timeFilter === 'Tất cả') {
            matchesTime = true;
        }

        return matchesSearch && matchesStatus && matchesResolution && matchesTime;
    });

    // Reset về trang 1 khi filter thay đổi
    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm, timeFilter, statusFilter, resolutionTypeFilter]);

    // === Phân trang ===
    const totalItems = filteredDisputes.length;
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, totalItems);
    const currentItems = filteredDisputes.slice(startIndex, endIndex);

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };
    const router = useRouter();
    const handleViewDetail = (dispute: Dispute) => {
        const slug = dispute.id.replace('#', '');

        router.push(
            `/disputes/details/${slug}?` +
            `customer=${encodeURIComponent(dispute.customer.name)}` +
            `&provider=${encodeURIComponent(dispute.provider.name)}` +
            `&status=${encodeURIComponent(dispute.statusLabel)}` +
            `&orderCode=${encodeURIComponent(dispute.orderCode)}`
        );
    };

    return (
        <div>
            {/* Table */}
            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
                <table className="w-full">
                    <thead className="bg-gray-50">
                        <tr className="text-left text-sm text-gray-600">
                            <th className="w-10 px-4 py-3">
                                <input type="checkbox" className="rounded" title="Chọn tất cả tranh chấp" />
                            </th>
                            <th className="px-4 py-3 font-medium">MÃ TRANH CHẤP</th>
                            <th className="px-4 py-3 font-medium">MÃ ĐẶT LỊCH</th>
                            <th className="px-4 py-3 font-medium">KHÁCH HÀNG</th>
                            <th className="px-4 py-3 font-medium">NHÀ CUNG CẤP</th>
                            <th className="px-4 py-3 font-medium">NGÀY TẠO</th>
                            <th className="px-4 py-3 font-medium">TRẠNG THÁI</th>
                            <th className="px-4 py-3 font-medium text-right">THAO TÁC</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-sm">
                        {currentItems.length > 0 ? (
                            currentItems.map((dispute) => (
                                <tr key={dispute.id} className="hover:bg-gray-50">
                                    <td className="px-4 py-4">
                                        <input type="checkbox" className="rounded" title="Chọn tranh chấp này" />
                                    </td>
                                    <td className="px-4 py-4 font-medium text-purple-600">{dispute.id}</td>
                                    <td className="px-4 py-4 text-gray-700">{dispute.orderCode}</td>
                                    <td className="px-4 py-4">
                                        <div className="flex items-center gap-2">
                                            <div className="h-8 w-8 rounded-full bg-gray-200" />
                                            <span>{dispute.customer.name}</span>
                                        </div>
                                    </td>
                                    <td className="px-4 py-4">
                                        <div className="flex items-center gap-2">
                                            <div className="h-8 w-8 rounded-full bg-green-100" />
                                            <span>{dispute.provider.name}</span>
                                        </div>
                                    </td>
                                    <td className="px-4 py-4 text-gray-600">{dispute.createdAt}</td>
                                    <td className="px-4 py-4">
                                        <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${statusColors[dispute.status]}`}>
                                            {dispute.status === 'pending' && <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />}
                                            {dispute.statusLabel}
                                        </span>
                                    </td>
                                    <td className="px-4 py-4 text-right">
                                        <button
                                            onClick={() => handleViewDetail(dispute)}
                                            className="inline-flex items-center gap-1.5 text-sm font-medium text-purple-600 hover:text-purple-700">
                                            <Eye className="h-4 w-4" />
                                            Xem chi tiết
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={8} className="px-4 py-8 text-center text-gray-500">
                                    Không tìm thấy tranh chấp nào phù hợp.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            {totalItems > 0 && (
                <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
                    <div>
                        Hiển thị {startIndex + 1} đến {endIndex} trong tổng số {totalItems} tranh chấp
                    </div>

                    <div className="flex items-center gap-1">
                        {/* Previous Button */}
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            title="Trang trước"
                            aria-label="Trang trước"
                            className="rounded px-3 py-1 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            <ArrowLeft className='w-4 h-4' />
                        </button>

                        {/* Page Numbers */}
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <button
                                key={page}
                                onClick={() => handlePageChange(page)}
                                className={`rounded px-3 py-1 ${currentPage === page
                                    ? 'bg-purple-600 text-white'
                                    : 'hover:bg-gray-100'
                                    }`}
                            >
                                {page}
                            </button>
                        ))}

                        {/* Next Button */}
                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            title="Trang tiếp"
                            aria-label="Trang tiếp"
                            className="rounded px-3 py-1 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            <ArrowRight className='w-4 h-4' />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}