'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import CustomerSidebar from '../../common/sidebar/customer_sidebar';
import CustomerNavbar from '../../common/navbar/customer_navbar';

// Import các component đã tách
import CustomerServiceHeader from '../../common/header/customer-service_header';
import ProviderInfoCard from '../../layout/customer/service-package/discovery-details/provider-Info_card';
import ServiceIncluded from '../../layout/customer/service-package/discovery-details/service_included';
import TransparentProcess from '../../layout/customer/service-package/discovery-details/transparent-process';
import CustomerServiceSidebar from '../../common/sidebar/customer_service_sidebar';
import CustomerServicePackagesReviews from '../../layout/customer/service-package/discovery-details/customer-service-packages_reviews';
import { servicePackages } from '../../../data/servicePackages';

export default function ServicePackageDetailsUI() {
    const params = useParams();
    const packageId = params.id as string;

    const service = servicePackages.find((item) => item.id === packageId);

    if (!service) {
        return (
            <div className="max-w-7xl mx-auto p-6 text-center">
                <h1 className="text-2xl font-bold text-red-500">Không tìm thấy gói dịch vụ</h1>
                <Link href="/customer/service-discovery" className="text-[#6D28D9] mt-4 inline-block">
                    Quay lại trang khám phá
                </Link>
            </div>
        );
    }

    return (
        <div className="flex min-h-screen bg-[#F2F3FF] w-full overflow-hidden">
            <CustomerSidebar />

            <div className="flex-1 flex flex-col bg-[#F2F3FF]">
                <CustomerNavbar />

                <div className="max-w-7xl mx-auto p-6">
                    {/* Main Image */}
                    <div className="rounded-3xl overflow-hidden border border-[#E5E7EB] mb-6">
                        <img src={service.image} alt={service.title} className="w-full h-[420px] object-cover" />
                    </div>

                    {/* GRID: Left + Right Sidebar */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                        {/* LEFT CONTENT */}
                        <div className="lg:col-span-7">
                            <CustomerServiceHeader
                                title={service.title}
                                description={service.description}
                            />

                            <ProviderInfoCard
                                provider={service.provider}
                                avatar={service.avatar}
                                rating={service.rating}
                                reviewCount={service.reviewCount}
                            />

                            <div className="mb-8">
                                <h3 className="text-xl font-semibold mb-3">Mô tả gói dịch vụ</h3>
                                <p className="text-[#4B5563] leading-relaxed">{service.description}</p>
                            </div>

                            <ServiceIncluded />
                            <TransparentProcess />
                        </div>

                        {/* RIGHT SIDEBAR */}
                        <div className="lg:col-span-5">
                            <CustomerServiceSidebar
                                price={service.price}
                                duration={service.duration}
                                reportFrequency={service.reportFrequency}
                                packageId={packageId}
                            />
                        </div>
                    </div>

                    {/* ==================== ĐÁNH GIÁ TỪ KHÁCH HÀNG (ĐẶT DƯỚI CÙNG) ==================== */}
                    <div className="mt-8">
                        {/* Divider */}
                        <div className="h-px bg-gray-200 my-6" />

                        <CustomerServicePackagesReviews feedbacks={service.feedbacks} />
                    </div>
                </div>
            </div>
        </div>
    );
}