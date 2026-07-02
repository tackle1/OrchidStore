'use client';

import React, { useState, useMemo, useEffect } from 'react';
import ProviderNavbar from '../../common/navbar/provider_navbar';
import ProviderSidebar from '../../common/sidebar/provider_sidebar';

import HistoryCareHeader from '../../layout/provider/history-care_orders/history-care_header';
import HistoryCareTabs from '../../layout/provider/history-care_orders/history-care_tabs';
import HistoryCareTable from '../../layout/provider/history-care_orders/history-care_table';
import HistoryCarePagination from '../../layout/provider/history-care_orders/history-care_pagination';

const TABS = ["Tất cả", "Chờ check-in", "Đang chăm sóc", "Cần gửi báo cáo", "Chờ check-out", "Tranh chấp"];
const ITEMS_PER_PAGE = 4;

const ALL_ORDERS = [
    { id: 'LC-8821', customer: { name: 'Nguyễn Văn A', initials: 'NA', bgColor: 'bg-[#E5E0FF]', textColor: 'text-[#6D28D9]' }, orchidType: 'Lan Hồ Điệp', service: 'Gói Phục hồi', status: { label: 'Đang chăm sóc', color: 'text-[#065F46]', bgColor: 'bg-[#D1FAE5]', dot: 'bg-[#10B981]' }, nextAction: 'Gửi báo cáo', deadline: '24/10/2023', isWarning: false },
    { id: 'LC-8822', customer: { name: 'Trần Thị B', initials: 'TB', bgColor: 'bg-[#E5E0FF]', textColor: 'text-[#6D28D9]' }, orchidType: 'Lan Đột Biến', service: 'Gói Vip VIP', status: { label: 'Chờ check-in', color: 'text-[#6B21A8]', bgColor: 'bg-[#F3E8FF]', dot: 'bg-[#8B5CF6]' }, nextAction: 'Xác nhận nhận cây', deadline: '25/10/2023', isWarning: false },
    { id: 'LC-8823', customer: { name: 'Lê Văn C', initials: 'LC', bgColor: 'bg-[#E5E0FF]', textColor: 'text-[#6D28D9]' }, orchidType: 'Lan Kiếm', service: 'Gói Cơ Bản', status: { label: 'Cần gửi báo cáo', color: 'text-[#B91C1C]', bgColor: 'bg-[#FEE2E2]', dot: 'bg-[#EF4444]' }, nextAction: 'Báo cáo tuần 3', deadline: 'Hôm nay', isWarning: true },
    { id: 'LC-8824', customer: { name: 'Phạm Thị D', initials: 'PD', bgColor: 'bg-[#E5E0FF]', textColor: 'text-[#6D28D9]' }, orchidType: 'Lan Phi Điệp', service: 'Gói Ra Hoa', status: { label: 'Đang chăm sóc', color: 'text-[#065F46]', bgColor: 'bg-[#D1FAE5]', dot: 'bg-[#10B981]' }, nextAction: 'Bón phân định kỳ', deadline: '28/10/2023', isWarning: false },
    { id: 'LC-8825', customer: { name: 'Hoàng Văn E', initials: 'HE', bgColor: 'bg-[#E5E0FF]', textColor: 'text-[#6D28D9]' }, orchidType: 'Lan Kiếm', service: 'Gói Cơ Bản', status: { label: 'Chờ check-out', color: 'text-[#B45309]', bgColor: 'bg-[#FEF3C7]', dot: 'bg-[#F59E0B]' }, nextAction: 'Bàn giao cây', deadline: '29/10/2023', isWarning: false },
    { id: 'LC-8826', customer: { name: 'Đỗ Thị F', initials: 'DF', bgColor: 'bg-[#E5E0FF]', textColor: 'text-[#6D28D9]' }, orchidType: 'Lan Ngọc Điểm', service: 'Gói Vip VIP', status: { label: 'Tranh chấp', color: 'text-[#BE123C]', bgColor: 'bg-[#FFE4E6]', dot: 'bg-[#F43F5E]' }, nextAction: 'Xử lý khiếu nại', deadline: 'Quá hạn', isWarning: true },
    { id: 'LC-8827', customer: { name: 'Vũ Văn G', initials: 'VG', bgColor: 'bg-[#E5E0FF]', textColor: 'text-[#6D28D9]' }, orchidType: 'Lan Đột Biến', service: 'Gói Phục hồi', status: { label: 'Đang chăm sóc', color: 'text-[#065F46]', bgColor: 'bg-[#D1FAE5]', dot: 'bg-[#10B981]' }, nextAction: 'Tưới nước', deadline: '30/10/2023', isWarning: false },
    { id: 'LC-8828', customer: { name: 'Ngô Thị H', initials: 'NH', bgColor: 'bg-[#E5E0FF]', textColor: 'text-[#6D28D9]' }, orchidType: 'Lan Hồ Điệp', service: 'Gói Ra Hoa', status: { label: 'Chờ check-in', color: 'text-[#6B21A8]', bgColor: 'bg-[#F3E8FF]', dot: 'bg-[#8B5CF6]' }, nextAction: 'Chờ khách gửi', deadline: '31/10/2023', isWarning: false },
    { id: 'LC-8829', customer: { name: 'Lý Văn I', initials: 'LI', bgColor: 'bg-[#E5E0FF]', textColor: 'text-[#6D28D9]' }, orchidType: 'Lan Kiếm', service: 'Gói Cơ Bản', status: { label: 'Cần gửi báo cáo', color: 'text-[#B91C1C]', bgColor: 'bg-[#FEE2E2]', dot: 'bg-[#EF4444]' }, nextAction: 'Báo cáo tháng 1', deadline: 'Hôm nay', isWarning: true },
    { id: 'LC-8830', customer: { name: 'Bùi Thị K', initials: 'BK', bgColor: 'bg-[#E5E0FF]', textColor: 'text-[#6D28D9]' }, orchidType: 'Lan Ngọc Điểm', service: 'Gói Vip VIP', status: { label: 'Đang chăm sóc', color: 'text-[#065F46]', bgColor: 'bg-[#D1FAE5]', dot: 'bg-[#10B981]' }, nextAction: 'Bón phân', deadline: '01/11/2023', isWarning: false },
];

export default function HistoryCareOrdersUI() {
    const [activeTab, setActiveTab] = useState("Tất cả");
    const [currentPage, setCurrentPage] = useState(1);

    const filteredOrders = useMemo(() => {
        if (activeTab === "Tất cả") return ALL_ORDERS;
        return ALL_ORDERS.filter(order => order.status.label === activeTab);
    }, [activeTab]);

    const totalPages = Math.ceil(filteredOrders.length / ITEMS_PER_PAGE) || 1;

    useEffect(() => {
        if (currentPage > totalPages) {
            setCurrentPage(totalPages);
        }
    }, [totalPages, currentPage]);

    const currentOrders = useMemo(() => {
        const start = (currentPage - 1) * ITEMS_PER_PAGE;
        const end = start + ITEMS_PER_PAGE;
        return filteredOrders.slice(start, end);
    }, [filteredOrders, currentPage]);

    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
        setCurrentPage(1);
    };

    const startItem = filteredOrders.length === 0 ? 0 : (currentPage - 1) * ITEMS_PER_PAGE + 1;
    const endItem = Math.min(currentPage * ITEMS_PER_PAGE, filteredOrders.length);

    return (
        <div className="flex min-h-screen bg-[#F8F9FC] font-sans">
            <ProviderSidebar />

            <div className="flex-1 flex flex-col">
                <ProviderNavbar />

                <div className="p-6 md:p-8 w-full max-w-7xl mx-auto flex-1 flex flex-col">
                    <HistoryCareHeader />
                    
                    <HistoryCareTabs 
                        tabs={TABS} 
                        activeTab={activeTab} 
                        onTabChange={handleTabChange} 
                    />

                    {/* Table Container */}
                    <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm flex flex-col flex-1 overflow-hidden">
                        <HistoryCareTable orders={currentOrders} />
                        
                        <HistoryCarePagination 
                            currentPage={currentPage}
                            totalPages={totalPages}
                            startItem={startItem}
                            endItem={endItem}
                            totalItems={filteredOrders.length}
                            onPageChange={setCurrentPage}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
