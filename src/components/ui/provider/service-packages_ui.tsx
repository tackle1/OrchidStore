'use client';

import ProviderNavbar from '../../common/navbar/provider_navbar';
import ProviderSidebar from '../../common/sidebar/provider_sidebar';
import ProviderMyServicesHeader from '../../common/header/provider-my-services_header';
import ServicePackageCard from '../../layout/provider/service-package/service-package_card'
export default function ServicePackagesUI() {

    return (
        <div className="flex min-h-screen bg-[#F8F9FC]">
            {/* Sidebar */}
            <ProviderSidebar />

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                <ProviderNavbar />
                <div className='p-6'>
                    <ProviderMyServicesHeader />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">

                    {/* Card 1 */}
                    <ServicePackageCard
                        title="Chăm sóc lan Hồ Điệp định kỳ"
                        price="850.000đ"
                        period="/ tháng"
                        status="Active"
                        features={[
                            "Thời hạn: 3 tháng",
                            "Báo cáo: Hàng tuần",
                            "Số cây thi ba: 1-2 cây",
                            "Phí vận chuyển: Miễn phí < 10km"
                        ]}
                        buttonText="Chỉnh sửa"
                        onEdit={() => console.log("Chỉnh sửa gói 1")}
                    />

                    {/* Card 2 */}
                    <ServicePackageCard
                        title="Cứu cây yếu VIP"
                        price="1.200.000đ"
                        period="/ liệu trình"
                        status="Draft"
                        features={[
                            "Thời hạn: 1 tháng",
                            "Báo cáo: Hàng ngày",
                            "Số cây tối đa: 1 cây",
                            "Phí vận chuyển: Có tính phí"
                        ]}
                        buttonText="Tiếp tục chỉnh sửa"
                        onEdit={() => console.log("Tiếp tục chỉnh sửa gói 2")}
                    />

                    {/* Card 3 */}
                    <ServicePackageCard
                        title="Kích mầm & Kích hoa"
                        price="500.000đ"
                        period="/ lần"
                        status="Active"
                        features={[
                            "Thời hạn: 1 lần",
                            "Báo cáo: Sau thực hiện",
                            "Số cây tối đa: Lên đến 5 cây",
                            "Phí vận chuyển: Thỏa thuận"
                        ]}
                        buttonText="Chỉnh sửa"
                        onEdit={() => console.log("Chỉnh sửa gói 3")}
                    />
                </div>
            </div>
        </div>
    );
}
