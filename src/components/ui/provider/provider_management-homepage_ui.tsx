'use client';

import ProviderNavbar from '../../common/navbar/provider_navbar';
import ProviderSidebar from '../../common/sidebar/provider_sidebar';
import DashboardHeader from '../../common/header/provider-dashboard_header';
import StatsCards from '../../layout/provider/management-homepage/provider-stats_cards';
import TodayTasksCard from '../../layout/provider/management-homepage/today_tasks_card';
import BookingRequestsCard from '../../layout/provider/management-homepage/booking_requests_card';
import RevenueCard from '../../layout/provider/management-homepage/revenue_card';
import ScheduleCalendarCard from '../../layout/provider/management-homepage/schedule_calendar_card';

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
