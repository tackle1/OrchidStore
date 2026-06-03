'use client';

import ProviderNavbar from '../layout/provider_navbar';
import ProviderSidebar from '../layout/provider_sidebar';
import DashboardHeader from '../layout/provider-dashboard_header';
import StatsCards from '../layout/provider-stats_cards';
import TodayTasksCard from '../layout/today_tasks_card';
import BookingRequestsCard from '../layout/booking_requests_card';
import RevenueCard from '../layout/revenue_card';
import ScheduleCalendarCard from '../layout/schedule_calendar_card';

export default function ProviderManagementHomepageUI() {
    return (
        <div className="flex min-h-screen bg-[#F8F9FC]">
            {/* Sidebar */}
            <ProviderSidebar />

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                <ProviderNavbar />

                <div className="p-8 space-y-8">

                    {/* Header + Stats Cards */}
                    <div>
                        <DashboardHeader />
                        <StatsCards />
                    </div>

                    {/* ==================== LAYOUT CHÍNH ==================== */}
                    <div className="flex flex-row gap-2 items-start">
                        {/* CỘT TRÁI */}
                        <div className="flex flex-col flex-[3] space-y-2">
                            <TodayTasksCard />
                            <BookingRequestsCard />
                        </div>

                        {/* CỘT PHẢI */}
                        <div className="flex flex-col flex-[1.5] space-y-2 self-start">
                            <RevenueCard />
                            <ScheduleCalendarCard />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
