'use client';

import CustomerSidebar from '../../common/sidebar/customer_sidebar';
import CustomerNavbar from '../../common/navbar/customer_navbar';
import ServiceDiscoveryHeader from '../../common/header/customer-service-discovery_header';
import CustomerServiceFilterSidebar from '../../common/sidebar/customer_service-filter_sidebar';
import DiscoveryServiceCard from '../../layout/customer/service-package/discovery-service_card';

export default function CustomerOrchidCareDiscoveryUI() {
    const handleSortChange = (value: string) => {
        console.log("Sắp xếp theo:", value);
    };

    return (
        <div className="flex min-h-screen bg-[#F2F3FF] w-full overflow-hidden">
            {/* Sidebar */}
            <CustomerSidebar />

            {/* Main Content */}
            <div className="flex-1 flex flex-col bg-[#F2F3FF]">
                <CustomerNavbar />

                <div className="p-6">
                    <ServiceDiscoveryHeader
                        sortBy="highest-rated"
                        onSortChange={handleSortChange}
                    />

                    <div className="flex gap-6">
                        {/* Filter Sidebar */}
                        <div className="w-1/4">
                            <CustomerServiceFilterSidebar />
                        </div>

                        {/* Danh sách Card */}
                        <div className="w-3/4">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                                {/* Card 1 - Giống hình bên trái */}
                                <DiscoveryServiceCard
                                    image="/assets/images/orchid-greenhouse.jpg"
                                    title="Gói Chăm Sóc Toàn Diện Cho Lan Rừng Quý Hiếm"
                                    provider="Vườn Lan Ngọc Châu"
                                    isVerified={true}
                                    rating={4.9}
                                    reviewCount={124}
                                    duration="6 Tháng"
                                    reportFrequency="Báo cáo 2 tuần/lần"
                                    price="1.500.000đ /tháng"
                                    badge="Lan Đột Biến"
                                    href="/customer-service-packages/service-discovery/1"
                                />

                                {/* Card 2 - Giống hình bên phải */}
                                <DiscoveryServiceCard
                                    image="/assets/images/orchid-expert.jpg"
                                    title="Phục Hồi Sức Khỏe Lan Hồ Điệp Sau Tết"
                                    provider="Chuyên gia: Trần Minh"
                                    isVerified={true}
                                    rating={5.0}
                                    reviewCount={86}
                                    duration="3 Tháng"
                                    reportFrequency="Báo cáo hàng tuần"
                                    price="800.000đ /tháng"
                                    href="customer-service-packages/service-discovery/2"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}