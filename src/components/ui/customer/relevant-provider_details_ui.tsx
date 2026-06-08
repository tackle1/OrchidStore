'use client';

import CustomerSidebar from '../../common/sidebar/customer_sidebar';
import CustomerNavbar from '../../common/navbar/customer_navbar';
import { useParams } from 'next/navigation';
import { getProviderBySlug } from '../../../data/providersList';
import Breadcrumb from '../../common/bread-crumb';
import CustomerRelevantProviderHeader from '../../common/header/customer-relevant-provider_header';
import ProviderAbout from '../../layout/customer/relevant_provider/view-details/provider_about';
import ProviderPortfolio from '../../layout/customer/relevant_provider/view-details/provider_portfolio';
import ProviderReviews from '../../layout/customer/relevant_provider/view-details/provider_reviews';
import ProviderServicePackages from '../../layout/customer/relevant_provider/view-details/provider_service-packages';
import RequestConsultationCTA from '../../layout/customer/relevant_provider/view-details/request_consultation_cta';
export default function RelevantProviderDetailsUI() {
    const params = useParams();
    const slug = params.slug as string;

    const provider = getProviderBySlug(slug);

    if (!provider) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-red-500">Không tìm thấy nhà vườn</h1>
                    <p className="text-[#6B7280] mt-2">Nhà vườn bạn tìm kiếm không tồn tại hoặc đã bị xóa.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="flex min-h-screen bg-[#F2F3FF] w-full overflow-hidden">
            {/* Sidebar */}
            <CustomerSidebar />

            {/* Main Content */}
            <div className="flex-1 flex flex-col bg-[#F2F3FF]">
                <CustomerNavbar />

                <div className="max-w-7xl mx-auto px-6 mt-6">

                    {/* Breadcrumb */}
                    <Breadcrumb
                        items={[
                            { label: "Nhà vườn liên kết", href: "/providers" },
                            { label: provider.name },
                        ]}
                    />

                    {/* Header */}
                    <CustomerRelevantProviderHeader
                        name={provider.name}
                        avatar={provider.avatar}
                        rating={provider.rating}
                        reviewCount={provider.reviewCount}
                        completedOrders={provider.completedOrders}
                        location={provider.location}
                        title={provider.title}
                        slug={provider.slug}
                    />

                    {/* Nội dung 2 cột */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-8">

                        {/* Cột trái - ProviderAbout */}
                        <div className="lg:col-span-7">
                            <ProviderAbout
                                about={provider.about}
                                achievements={provider.achievements?.map(a => ({
                                    ...a,
                                    icon: a.icon === 'medal' ? 'award' : a.icon
                                }))}
                            />
                            <ProviderPortfolio
                                portfolio={provider.portfolio}
                                name={provider.name}
                            />

                            <ProviderReviews
                                reviews={provider.reviews}
                                rating={provider.rating}
                                reviewCount={provider.reviewCount}
                            />
                        </div>

                        {/* Cột phải (để trống hoặc thêm nội dung sau) */}
                        <div className="lg:col-span-5">
                            {/* Có thể thêm: Thông tin liên hệ, nút đặt lịch, v.v. */}
                            <ProviderServicePackages
                                services={provider.services || []}
                                providerSlug={provider.slug}
                            />

                            {/* CTA Tư vấn */}
                            <RequestConsultationCTA providerSlug={provider.slug} />
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}