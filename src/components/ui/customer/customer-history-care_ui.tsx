'use client';

import { useState } from 'react';
import { Clock, Truck } from 'lucide-react';
import CustomerSidebar from '../../common/sidebar/customer_sidebar';
import CustomerNavbar from '../../common/navbar/customer_navbar';
import OrderFilterTabs from '../../../components/layout/customer/history-care/order-filter_tabs';
import OrderCard, { Order } from '../../../components/layout/customer/history-care/order-card';

type OrderStatus = 'all' | 'check-in' | 'in-progress' | 'check-out' | 'dispute' | 'completed';

const orders: Order[] = [
    {
        id: 'LCH-9824',
        orchidName: 'Phi Điệp Đột Biến',
        status: 'in-progress',
        statusLabel: 'Đang chăm sóc',
        provider: 'Vườn Lan Thủy Tiên',
        servicePackage: 'Phục hồi VIP 3 tháng',
        orderDate: '12/10/2023',
        nextAction: 'Lịch đón phân định kỳ (ngày mai)',
        nextActionIcon: <Clock className="w-4 h-4" />,
    },
    {
        id: 'LCH-9830',
        orchidName: 'Lan Hồ Điệp Trắng',
        status: 'check-in',
        statusLabel: 'Chờ check-in',
        provider: 'Mộc Lan Garden',
        servicePackage: 'Chăm sóc cơ bản',
        orderDate: '15/10/2023',
        nextAction: 'Bàn giao lan cho nhà vườn',
        nextActionIcon: <Truck className="w-4 h-4" />,
    },
    {
        id: 'LCH-9755',
        orchidName: 'Đại Châu Ngọc Điểm',
        status: 'completed',
        statusLabel: 'Hoàn tất',
        provider: 'Hoa Lan Việt',
        servicePackage: 'Kích rễ 1 tháng',
        orderDate: '01/09/2023',
        rating: 5,
    },
];

export default function CustomerHistoryCareUI() {
    const [activeFilter, setActiveFilter] = useState<OrderStatus>('all');

    // === FILTER LOGIC ĐÃ SỬA ===
    const filteredOrders = orders.filter((order) => {
        if (activeFilter === 'all') return true;
        if (activeFilter === 'in-progress') return order.status === 'in-progress';
        if (activeFilter === 'check-in') return order.status === 'check-in';
        if (activeFilter === 'completed') return order.status === 'completed';
        // Các tab chưa có đơn (check-out, dispute) sẽ trả về mảng rỗng
        return false;
    });

    return (
        <div className="flex min-h-screen bg-[#F2F3FF] w-full overflow-hidden">
            {/* Sidebar */}
            <CustomerSidebar />

            {/* Main Content */}
            <div className="flex-1 flex flex-col bg-[#F2F3FF]">
                <CustomerNavbar />

                <div className="min-h-screen bg-[#F8F9FC]">
                    <div className="max-w-7xl mx-auto px-6 py-8">

                        {/* Header */}
                        <div className="mb-8">
                            <h1 className="text-3xl font-bold">Đơn của tôi</h1>
                            <p className="text-[#6B7280] mt-1">
                                Quản lý và theo dõi tiến trình chăm sóc các chậu lan của bạn.
                            </p>
                        </div>

                        {/* Filter Tabs */}
                        <OrderFilterTabs
                            activeFilter={activeFilter}
                            onFilterChange={setActiveFilter}
                        />

                        {/* Orders Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredOrders.map((order) => (
                                <OrderCard key={order.id} order={order} />
                            ))}
                        </div>

                        {/* Empty State */}
                        {filteredOrders.length === 0 && (
                            <div className="text-center py-12 text-[#6B7280]">
                                Không có đơn hàng nào trong trạng thái này.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}