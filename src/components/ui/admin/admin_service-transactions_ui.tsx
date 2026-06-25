'use client';

import { useState } from 'react';
import {
    Calendar, Download, Search, Percent, Wallet,
    Filter, ChevronDown, RefreshCw, TrendingUp, Info
} from 'lucide-react';
import AdminNavbar from '../../common/navbar/admin_navbar';
import AdminSidebar from '../../common/sidebar/admin_sidebar';
import TransactionTable from '../../../components/layout/admin/transactions/transaction_table';
import Pagination from '../../../components/layout/admin/transactions/pagination';
import TotalTransactionCard from '../../../components/layout/admin/transactions/total-transaction_card';
import PlatformFeeCard from '../../../components/layout/admin/transactions/platform-fee_card';
import TotalRefundCard from '../../../components/layout/admin/transactions/total-refund_card';
import { Transaction } from '../../../types/transaction';

// Dữ liệu mẫu
const sampleTransactions: Transaction[] = [
    {
        id: '#VNP98234',
        date: '24/10/2023 14:30',
        orderCode: 'ORD-7721',
        customerName: 'Trần Văn A',
        customerCode: 'TA',
        amount: 12500000,
        platformFee: 625000,
        vnpayStatus: 'Thành công',
        disbursementStatus: 'Đã trả',
    },
    {
        id: '#VNP98235',
        date: '24/10/2023 15:15',
        orderCode: 'ORD-7722',
        customerName: 'Lê Thị M',
        customerCode: 'LM',
        amount: 8200000,
        platformFee: 410000,
        vnpayStatus: 'Thành công',
        disbursementStatus: 'Chờ',
    },
    {
        id: '#VNP98236',
        date: '24/10/2023 16:05',
        orderCode: 'ORD-7723',
        customerName: 'Phạm H',
        customerCode: 'PH',
        amount: 45000000,
        platformFee: 0,
        vnpayStatus: 'Lỗi',
        disbursementStatus: '-',
    },
    {
        id: '#VNP98237',
        date: '24/10/2023 17:20',
        orderCode: 'ORD-7724',
        customerName: 'Nguyễn Văn B',
        customerCode: 'NB',
        amount: 21000000,
        platformFee: 1050000,
        vnpayStatus: 'Thành công',
        disbursementStatus: 'Đã trả',
    },
    {
        id: '#VNP98238',
        date: '24/10/2023 18:45',
        orderCode: 'ORD-7725',
        customerName: 'Hoàng Văn C',
        customerCode: 'HC',
        amount: 32000000,
        platformFee: 1600000,
        vnpayStatus: 'Thành công',
        disbursementStatus: 'Chờ',
    },
    {
        id: '#VNP98239',
        date: '24/10/2023 19:30',
        orderCode: 'ORD-7726',
        customerName: 'Đỗ Văn D',
        customerCode: 'DD',
        amount: 18000000,
        platformFee: 900000,
        vnpayStatus: 'Thành công',
        disbursementStatus: 'Đã trả',
    },
    {
        id: '#VNP98240',
        date: '24/10/2023 20:15',
        orderCode: 'ORD-7727',
        customerName: 'Vũ Thị E',
        customerCode: 'VE',
        amount: 9800000,
        platformFee: 490000,
        vnpayStatus: 'Chờ',
        disbursementStatus: 'Chờ',
    }

];

export default function TransactionsRevenueUI() {
    const [searchTerm, setSearchTerm] = useState('');
    const [vnpayFilter, setVnpayFilter] = useState('Tất cả');

    const filteredTransactions = sampleTransactions.filter(tx =>
        (tx.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
            tx.orderCode.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (vnpayFilter === 'Tất cả' || tx.vnpayStatus === vnpayFilter)
    );

    // Trong component:
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5; // ← Đổi thành 5 nếu muốn

    // 2. Reset về trang 1 khi thay đổi filter/search
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1);
    };

    const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setVnpayFilter(e.target.value);
        setCurrentPage(1);
    };

    // 3. Tính toán phân trang
    const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentTransactions = filteredTransactions.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className="flex min-h-screen bg-[#F8F9FC]">
            <AdminSidebar />

            <div className="flex-1 flex flex-col">
                <AdminNavbar />

                <div className="p-6 max-w-7xl mx-auto w-full">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h1 className="text-2xl font-bold text-[#111827]">Giao dịch & doanh thu</h1>
                            <p className="text-[#6B7280] mt-1 text-sm">
                                Quản lý đối soát và dòng tiền nền tảng
                            </p>
                        </div>

                        <div className="flex items-center gap-3">
                            <button className="flex items-center gap-2 px-4 py-2.5 border border-[#E5E7EB] rounded-xl text-sm font-medium hover:bg-white transition-colors">
                                <Calendar className="w-4 h-4" />
                                Tháng này
                            </button>
                            <button className="flex items-center gap-2 px-4 py-2.5 bg-[#EAEDFF] border border-[#E5E7EB] rounded-xl text-sm font-medium hover:bg-[#F9FAFB] transition-colors">
                                <Download className="w-4 h-4 text-[#630ED4]" />
                                Xuất CSV
                            </button>
                        </div>
                    </div>

                    {/* Summary Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
                        <TotalTransactionCard />
                        <PlatformFeeCard />
                        <TotalRefundCard />
                    </div>

                    {/* Filters */}
                    <div className="flex flex-col md:flex-row gap-3 mb-5 bg-white border-white border-1 py-5 px-2 rounded-xl shadow">
                        {/* Search */}
                        <div className="flex-1 relative">
                            <Search className="absolute left-4 top-3.5 w-5 h-5 text-[#9CA3AF]" />
                            <input
                                type="text"
                                placeholder="Tìm kiếm mã GD, mã đơn..."
                                className="w-[400px] pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-2xl text-sm focus:outline-none focus:border-[#6D28D9] bg-white"
                                value={searchTerm}
                                onChange={handleSearchChange}
                            />
                        </div>

                        {/* Dropdown trạng thái VNPay */}
                        <div className="relative">
                            <select
                                value={vnpayFilter}
                                onChange={handleFilterChange}
                                title="Lọc trạng thái VNPay"
                                aria-label="Lọc trạng thái VNPay"
                                className="appearance-none px-5 py-3 pr-10 border border-[#E5E7EB] rounded-2xl text-sm font-medium bg-white focus:outline-none focus:border-[#6D28D9] cursor-pointer"
                            >
                                <option value="Tất cả">Tất cả trạng thái VNPay</option>
                                <option value="Thành công">Thành công</option>
                                <option value="Chờ">Chờ</option>
                                <option value="Lỗi">Lỗi</option>
                            </select>
                            {/* Icon mũi tên xuống */}
                            <ChevronDown className="absolute right-4 top-3.5 w-4 h-4 text-[#6B7280] pointer-events-none" />
                        </div>

                        {/* Nút Filter icon (giống hình) */}
                        <button
                            title="Lọc"
                            aria-label="Mở bộ lọc nâng cao"
                            onClick={() => alert('Mở advanced filter')}
                            className="flex items-center justify-center w-12 h-12 border border-[#E5E7EB] rounded-2xl hover:bg-white transition-colors"
                        >
                            <Filter className="w-5 h-5 text-[#6B7280]" />
                        </button>
                    </div>

                    {/* Table */}
                    <TransactionTable
                        transactions={currentTransactions}
                        onViewDetail={(tx) => console.log('View detail:', tx)}
                    />
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        totalItems={filteredTransactions.length}
                        itemsPerPage={itemsPerPage}
                        onPageChange={setCurrentPage}
                    />
                </div>
            </div>
        </div>
    );
}