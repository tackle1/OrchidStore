'use client';

import AdminNavbar from '../layout/admin-navbar';
import AdminSidebar from '../layout/admin-sidebar';
import DashboardHeader from '../layout/admin-dashboard_header';
import StatsCards from '../layout/admin-stats_cards';
import RevenueChart from '../layout/revenue_chart';
import RecentTransactions from '../layout/recent-transactions';
import LatestDisputes from '../layout/latest-dispute';
import PendingProviders from '../layout/pending-providers';

export default function AdminDashboardUI() {
    return (
        <div className="flex min-h-screen bg-[#F8F9FC]">

            {/* Sidebar */}
            <AdminSidebar />

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                <AdminNavbar />

                <div className="p-8 space-y-8">

                    {/* Header + Stats Cards */}
                    <div>
                        <DashboardHeader />
                        <StatsCards />
                    </div>

                    {/* Biểu đồ doanh thu */}
                    <RevenueChart />

                    {/* Bottom Section - 3 cột giống hình */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                        {/* Giao dịch gần đây (Rộng hơn) */}
                        <div className="lg:col-span-7">
                            <RecentTransactions />
                        </div>

                        {/* Cột phải: Tranh chấp + Provider chờ duyệt */}
                        <div className="lg:col-span-5 space-y-6">
                            <LatestDisputes />
                            <PendingProviders />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}