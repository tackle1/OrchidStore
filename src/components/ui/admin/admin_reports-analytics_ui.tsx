'use client';

import AdminNavbar from '../../common/navbar/admin_navbar';
import AdminSidebar from '../../common/sidebar/admin_sidebar';

import { Calendar, DollarSign, Wallet, Scale } from 'lucide-react';
import ReportsHeader from '../../../components/layout/admin/reports/reports_header';
import SummaryCard from '../../../components/layout/admin/reports/summary_card';
import RevenueChart from '../../../components/layout/admin/reports/revenue_chart';

import TopExpertsList from '../../../components/layout/admin/reports/top-experts_list';
import ServiceBookingStats from '../../../components/layout/admin/reports/service-booking_stats';
import TransactionStatusChart from '../../../components/layout/admin/reports/transaction-status_chart';
import CashFlowTable from '../../../components/layout/admin/reports/cash-flow_table';
export default function ReportsAnalyticsUI() {
    const handleExport = () => {
        alert('Đang xuất báo cáo...');
        // TODO: Gọi API xuất Excel/PDF
    };

    const handleFilterChange = (value: string) => {
        console.log('Filter changed:', value);
        // TODO: Fetch lại dữ liệu theo filter
    };

    return (
        <div className="flex min-h-screen bg-[#F8F9FC]">
            {/* Sidebar */}
            <AdminSidebar />

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                <AdminNavbar />
                <div className="relative p-5">
                    <ReportsHeader
                        onExport={handleExport}
                        onFilterChange={handleFilterChange}
                    />
                    {/* 4 Summary Cards - Giống hình 100% */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">

                        {/* Card 1: Tổng doanh thu */}
                        <SummaryCard
                            icon={Wallet}
                            iconBg="bg-[#6D28D9]"
                            title="Tổng doanh thu (VNĐ)"
                            value="1,245,000,000"
                            change="+12.5% so với tháng trước"
                            isPositive={true}
                        />

                        {/* Card 2: Tổng số lịch đặt */}
                        <SummaryCard
                            icon={Calendar}
                            iconBg="bg-[#10B981]"
                            title="Tổng số lịch đặt"
                            value="3,842"
                            change="+8.2% so với tháng trước"
                            isPositive={true}
                        />

                        {/* Card 3: Phí nền tảng thu được */}
                        <SummaryCard
                            icon={DollarSign}
                            iconBg="bg-[#8B5CF6]"
                            title="Phí nền tảng thu được (VND)"
                            value="186,750,000"
                            change="+15.3% so với tháng trước"
                            isPositive={true}
                        />

                        {/* Card 4: Tỷ lệ tranh chấp */}
                        <SummaryCard
                            icon={Scale}
                            iconBg="bg-[#F59E0B]"
                            title="Tỷ lệ tranh chấp"
                            value="1.2%"
                            change="+0.1% so với tháng trước"
                            isPositive={false}
                        />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-6">

                        {/* Biểu đồ doanh thu - Chiếm 2 cột bên trái */}
                        <div className="lg:col-span-2">
                            <RevenueChart />
                        </div>

                        {/* Phần bên phải (Trạng thái giao dịch) */}
                        <div className="lg:col-span-1">
                            <TransactionStatusChart />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mb-6">
                        <div className="lg:col-span-2">
                            <ServiceBookingStats />
                        </div>

                        <div className="lg:col-span-2">
                            <TopExpertsList />
                        </div>

                    </div>

                    <CashFlowTable />
                </div>
            </div>
        </div>
    );
}