'use client';
import { useState } from 'react';
import ReportsHeader from '../../../components/layout/customer/history-care/in-progress/care-reports/reports_header';
import ReportsFilters from '../../../components/layout/customer/history-care/in-progress/care-reports/reports_filters';
import ReportsTimeline from '../../../components/layout/customer/history-care/in-progress/care-reports/reports_time-line';
import CustomerSidebar from '../../common/sidebar/customer_sidebar';
import CustomerNavbar from '../../common/navbar/customer_navbar';
const allReports = [
    {
        id: 1,
        title: "Đột biến 5CT Phú Thọ",
        date: new Date(2026, 9, 24, 9, 15),
        status: "Tuyệt vời",
        statusColor: "bg-[#DCFCE7] text-[#16A34A]",
        description: "Cây phát triển rất tốt, lá xanh mướt. Đột biến 5 cánh trắng đang trong giai đoạn phát triển mạnh.",
        extraInfo: "Phun phòng nấm (Dự kiến 30/10)",
        images: ["/assets/images/orchid-report_1.jpg", "/assets/images/orchid-report_2.jpg"],
        variant: "default" as const,
    },
    {
        id: 2,
        title: "Kiếm Xanh Thái Nguyên",
        date: new Date(2026, 9, 22, 14, 30),
        status: "Cần theo dõi",
        statusColor: "bg-[#FEE2E2] text-[#DC2626]",
        description: "Phát hiện dấu hiệu nhiễm nấm nhẹ trên lá. Đã tiến hành phun thuốc và theo dõi.",
        extraInfo: "Giảm tưới, tăng thông gió 5 ngày tới",
        images: ["/assets/images/orchid-report_3.jpg"],
        variant: "warning" as const,
    },
    {
        id: 3,
        title: "Đại Châu Rừng",
        date: new Date(2026, 9, 15, 8, 0),
        status: "Ổn định",
        statusColor: "bg-[#E0E7FF] text-[#6366F1]",
        images: ["/assets/images/orchid-report_4.jpg", "/assets/images/orchid-report_5.jpg"],
        variant: "expert-note" as const,
        expertNote: "Tiếp nhận cây vào hệ thống chăm sóc. Cây khỏe, đã thuần chậu tốt. Bắt đầu áp dụng quy trình dinh dưỡng tiêu chuẩn Mùa Thu.",
    },

    {
        id: 4,
        title: "Phi Điệp Hòa Bình",
        date: new Date(2026, 9, 10, 10, 45),
        status: "Ổn định",
        statusColor: "bg-[#E0E7FF] text-[#6366F1]",
        description: "Cây sinh trưởng tốt, bộ rễ bám giá thể chắc chắn. Chưa ghi nhận dấu hiệu sâu bệnh hay vàng lá.",
        extraInfo: "Bổ sung phân hữu cơ vi sinh (Dự kiến 15/10)",
        images: [
            "/assets/images/orchid-report_3.jpg",
            "/assets/images/orchid-report_2.jpg",
        ],
        variant: "expert-note" as const,
    },
    {
        id: 5,
        title: "Hồng Lan Nhân",
        date: new Date(2026, 9, 5, 16, 20),
        status: "Tuyệt vời",
        statusColor: "bg-[#DCFCE7] text-[#16A34A]",
        images: [
            "/assets/images/orchid-report_2.jpg",
            "/assets/images/orchid-report_1.jpg",
        ],
        variant: "default" as const,
        expertNote:
            "Cây đang bước vào giai đoạn phát triển thân và lá mạnh. Bộ rễ trắng khỏe, khả năng hấp thụ dinh dưỡng tốt. Tiếp tục duy trì chế độ tưới và dinh dưỡng hiện tại để chuẩn bị cho mùa ra hoa sắp tới.",
    },
];

export default function CustomerCareReportsUI() {
    const [filteredReports, setFilteredReports] = useState(allReports);

    const handleFilterChange = (filters: {
        month: string;
        status: string;
        startDate?: string;
        endDate?: string;
    }) => {
        let result = allReports;

        // 1. Lọc theo trạng thái
        if (filters.status !== 'Tất cả trạng thái') {
            result = result.filter((report) => report.status === filters.status);
        }

        // 2. Lọc theo khoảng thời gian (startDate - endDate)
        if (filters.startDate && filters.endDate) {
            const start = new Date(filters.startDate);
            const end = new Date(filters.endDate);
            end.setHours(23, 59, 59, 999); // Bao gồm cả ngày kết thúc

            result = result.filter((report) => {
                return report.date >= start && report.date <= end;
            });
        }

        setFilteredReports(result);
    };

    return (
        <div className="flex min-h-screen bg-[#F2F3FF] w-full overflow-hidden">
            {/* Sidebar */}
            <CustomerSidebar />

            {/* Main Content */}
            <div className="flex-1 flex flex-col bg-[#F2F3FF]">
                <CustomerNavbar />
                <div className="min-h-screen bg-white">
                    <ReportsHeader />

                    <div className="max-w-6xl mx-auto px-6 py-8">
                        <ReportsFilters onFilterChange={handleFilterChange} />

                        <ReportsTimeline reports={filteredReports} />
                    </div>
                </div>
            </div>
        </div>
    );
}