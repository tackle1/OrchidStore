'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import ProviderNavbar from '../../common/navbar/provider_navbar';
import ProviderSidebar from '../../common/sidebar/provider_sidebar';
import ServicePackageHeader from '../../layout/provider/service-package/details/service-package_header';
import ServicePackageInfo from '../../layout/provider/service-package/details/service-package_info';
import ServicePackageAddons from '../../layout/provider/service-package/details/service-package_addons';

// Types
interface AddonItem {
    id: string;
    name: string;
    price: string;
    status: string;
    date: string;
    reason: string;
}

interface PackageDetail {
    id: string;
    name: string;
    status: string;
    price: string;
    period: string;
    features: string[];
    description: string;
    addons: AddonItem[];
}

// Mock data for packages
const MOCK_PACKAGES: Record<string, PackageDetail> = {
    "SP-001": {
        id: "SP-001",
        name: "Chăm sóc lan Hồ Điệp định kỳ",
        status: "Active",
        price: "850.000đ",
        period: "/ tháng",
        features: [
            "Thời hạn: 3 tháng",
            "Báo cáo: Hàng tuần",
            "Số cây tối đa: 2 cây",
            "Phí vận chuyển: Miễn phí < 10km"
        ],
        description: "Gói chăm sóc định kỳ chuyên sâu cho hoa lan Hồ Điệp. Bao gồm thay giá thể, cắt tỉa rễ, bón phân định kỳ và theo dõi tình trạng nấm bệnh.",
        addons: [
            {
                id: "AO-001",
                name: "Thay chậu gốm cao cấp",
                price: "150.000đ",
                status: "Active",
                date: "12/07/2026",
                reason: "Chậu cũ bị nứt vỡ do di chuyển, cần thay để đảm bảo thẩm mỹ và an toàn cho cây."
            },
            {
                id: "AO-002",
                name: "Xử lý nấm rễ nặng",
                price: "200.000đ",
                status: "Draft",
                date: "15/07/2026",
                reason: "Cây có dấu hiệu thối rễ lan rộng nhanh chóng, cần cắt bỏ rễ hỏng và bôi thuốc nấm đặc trị."
            }
        ]
    },
    "SP-002": {
        id: "SP-002",
        name: "Cứu cây yếu VIP",
        status: "Draft",
        price: "1.200.000đ",
        period: "/ liệu trình",
        features: [
            "Thời hạn: 1 tháng",
            "Báo cáo: Hàng ngày",
            "Số cây tối đa: 1 cây",
            "Phí vận chuyển: Có tính phí"
        ],
        description: "Dịch vụ cấp cứu chuyên sâu dành riêng cho cây yếu, cần theo dõi hàng ngày.",
        addons: [
            {
                id: "AO-003",
                name: "Truyền dịch dinh dưỡng khẩn cấp",
                price: "300.000đ",
                status: "Active",
                date: "10/07/2026",
                reason: "Cây suy kiệt nặng, mất lá và teo thân, cần truyền dịch trực tiếp để cứu sống."
            }
        ]
    },
    "SP-003": {
        id: "SP-003",
        name: "Kích mầm & Kích hoa",
        status: "Active",
        price: "500.000đ",
        period: "/ lần",
        features: [
            "Thời hạn: 1 lần",
            "Báo cáo: Sau thực hiện",
            "Số cây tối đa: Lên đến 5 cây",
            "Phí vận chuyển: Thỏa thuận"
        ],
        description: "Dịch vụ bón phân và chăm sóc kích mầm, kích hoa cho lan.",
        addons: [
            {
                id: "AO-004",
                name: "Tặng kèm bộ phân bón organics",
                price: "100.000đ",
                status: "Active",
                date: "05/07/2026",
                reason: "Để hỗ trợ quá trình phát triển rễ và lá sau khi kích mầm thành công."
            }
        ]
    }
};

export default function ServicePackageDetailUI() {
    const params = useParams();
    const id = params?.id as string;

    const packageDetails = MOCK_PACKAGES[id] || MOCK_PACKAGES["SP-001"];
    const addons = packageDetails.addons;

    return (
        <div className="flex min-h-screen bg-[#F8F9FC]">
            {/* Sidebar */}
            <ProviderSidebar />

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                <ProviderNavbar />

                <div className="p-6 md:p-8 w-full max-w-6xl mx-auto font-sans">
                    <ServicePackageHeader id={id} packageName={packageDetails.name} />

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                        {/* Package Info */}
                        <div className="lg:col-span-2 space-y-6">
                            <ServicePackageInfo packageDetails={packageDetails} />
                        </div>

                        {/* Add-ons List */}
                        <div className="lg:col-span-1">
                            <ServicePackageAddons addons={addons} />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
