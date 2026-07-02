'use client';

import ProviderNavbar from '../../common/navbar/provider_navbar';
import ProviderSidebar from '../../common/sidebar/provider_sidebar';
import ProviderMyServicesHeader from '../../common/header/provider-my-services_header';
import ServicePackageCard from '../../layout/provider/service-package/service-package_card'
import { useRouter } from 'next/navigation';

export default function ServicePackagesUI() {
    const router = useRouter();
    
    const handleEdit = (packageData: any) => {
        const queryString = new URLSearchParams({ data: JSON.stringify(packageData) }).toString();
        router.push(`/service-packages/create?${queryString}`);
    };

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
                        onViewDetail={() => router.push(`/service-packages/SP-001`)}
                        onEdit={() => handleEdit({
                            id: "SP-001",
                            name: "Chăm sóc lan Hồ Điệp định kỳ",
                            packagePrice: 850000,
                            duration: 3,
                            reportFrequency: 'Hàng tuần',
                            maxPlants: 2,
                            shippingFee: 0,
                            description: "Gói chăm sóc định kỳ chuyên sâu cho hoa lan Hồ Điệp."
                        })}
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
                        onViewDetail={() => router.push(`/service-packages/SP-002`)}
                        onEdit={() => handleEdit({
                            id: "SP-002",
                            name: "Cứu cây yếu VIP",
                            packagePrice: 1200000,
                            duration: 1,
                            reportFrequency: 'Hàng ngày',
                            maxPlants: 1,
                            shippingFee: 50000,
                            description: "Dịch vụ cấp cứu chuyên sâu dành riêng cho cây yếu, cần theo dõi hàng ngày."
                        })}
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
                        onViewDetail={() => router.push(`/service-packages/SP-003`)}
                        onEdit={() => handleEdit({
                            id: "SP-003",
                            name: "Kích mầm & Kích hoa",
                            packagePrice: 500000,
                            duration: 0,
                            reportFrequency: 'Sau thực hiện',
                            maxPlants: 5,
                            shippingFee: 0,
                            description: "Dịch vụ bón phân và chăm sóc kích mầm, kích hoa cho lan."
                        })}
                    />
                </div>
            </div>
        </div>
    );
}
