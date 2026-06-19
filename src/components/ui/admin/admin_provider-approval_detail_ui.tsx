'use client';

import { useRouter, useParams } from 'next/navigation';
import AdminNavbar from '../../common/navbar/admin_navbar';
import AdminSidebar from '../../common/sidebar/admin_sidebar';

import { ArrowLeft } from 'lucide-react';
import ProviderHeaderCard from '../../layout/admin/provider-approval/details/provider-header_card';
import BasicInfoSection from '../../layout/admin/provider-approval/details/basic-info_section';
import LegalDocumentsSection from '../../layout/admin/provider-approval/details/legal-documents_section';
import PortfolioServicesSection from '../../layout/admin/provider-approval/details/portfolio-services_section';
import AdminChecklistSection from '../../layout/admin/provider-approval/details/admin-check-list_section';
import ApprovalDecisionSection from '../../layout/admin/provider-approval/details/approval-decision_section';

// ==================== DATA ====================
const allProviders = [
    {
        id: 1,
        name: 'Vườn Lan Hương Đan',
        slug: 'vuon-lan-huong-dan',
        email: 'contact@huongdan.vn',
        phone: '090 123 4567',
        type: 'Nhà vườn',
        date: '12/10/2023',
        status: 'Chờ duyệt',
        risk: 'Low',
        location: 'Đà Lạt, Lâm Đồng, Việt Nam',
        address: '123 Phú Đông Thiên Vương, Phường 8, Đà Lạt',
        representative: 'Nguyễn Văn A',
        introduction: 'Chuyên cung cấp các dòng lan đột biến, lan hồ điệp cao cấp với hơn 10 năm kinh nghiệm tại Đà Lạt. Cam kết chất lượng giống chuẩn, sạch bệnh và hỗ trợ kỹ thuật sau bán hàng chuyên nghiệp. Vườn lan đạt chuẩn VietGAP.',
        documents: [
            { name: 'Giấy phép kinh doanh', type: 'PDF', size: '2.4MB' },
            { name: 'CCCD (Mặt trước)', type: 'JPG', size: '1.8MB' },
            { name: 'Chứng chỉ chuyên môn', type: 'PDF', size: '3.1MB' },
        ],
        services: [
            'Cung cấp sỉ & lẻ Lan Hồ Điệp, Lan Đột Biến',
            'Dịch vụ chăm sóc lan tận nơi (Đà Lạt & lân cận)',
        ],
    },
    {
        id: 2,
        name: 'Minh Trí',
        slug: 'minh-tri',
        email: 'minhtri.orchid@gmail.com',
        phone: '091 234 5678',
        type: 'Cá nhân',
        date: '11/10/2023',
        status: 'Cần bổ sung',
        risk: 'Medium',
        location: 'TP. Hồ Chí Minh',
        address: '45 Nguyễn Thị Minh Khai, Quận 1, TP.HCM',
        representative: 'Trần Minh Trí',
        introduction: 'Chuyên gia chăm sóc lan với 7 năm kinh nghiệm. Tập trung vào các dòng lan rừng và lan đột biến. Đã từng tham gia nhiều triển lãm lan tại TP.HCM.',
        documents: [
            { name: 'CCCD (Mặt trước)', type: 'JPG', size: '1.2MB' },
            { name: 'CCCD (Mặt sau)', type: 'JPG', size: '1.1MB' },
        ],
        services: [
            'Chăm sóc lan tại nhà',
            'Tư vấn kỹ thuật trồng lan',
        ],
    },
    {
        id: 3,
        name: 'Lan Việt Orchid',
        slug: 'lan-viet-orchid',
        email: 'contact@lanviet.vn',
        phone: '093 345 6789',
        type: 'Nhà vườn',
        date: '10/10/2023',
        status: 'Chờ duyệt',
        risk: 'Low',
        location: 'Đà Lạt, Lâm Đồng',
        address: 'Khu du lịch Langbiang, Đà Lạt',
        representative: 'Lê Thị Hồng',
        introduction: 'Vườn lan chuyên nghiệp với hơn 15 năm kinh nghiệm. Cung cấp đa dạng các loại lan cao cấp và dịch vụ chăm sóc toàn diện.',
        documents: [
            { name: 'Giấy phép kinh doanh', type: 'PDF', size: '3.2MB' },
            { name: 'Chứng chỉ VietGAP', type: 'PDF', size: '2.8MB' },
        ],
        services: [
            'Cung cấp lan các loại',
            'Dịch vụ thiết kế vườn lan',
        ],
    },
    {
        id: 4,
        name: 'Nguyễn Thị Lan',
        slug: 'nguyen-thi-lan',
        email: 'nguyenthilan@gmail.com',
        phone: '094 456 7890',
        type: 'Cá nhân',
        date: '09/10/2023',
        status: 'Cần bổ sung',
        risk: 'High',
        location: 'Hà Nội',
        address: '78 Trần Duy Hưng, Cầu Giấy, Hà Nội',
        representative: 'Nguyễn Thị Lan',
        introduction: 'Người chơi lan lâu năm, chuyên sưu tầm và chăm sóc các dòng lan quý hiếm.',
        documents: [
            { name: 'CCCD (Mặt trước)', type: 'JPG', size: '1.5MB' },
        ],
        services: [
            'Chia sẻ kinh nghiệm chăm sóc lan',
        ],
    },
];

export default function AdminProviderApprovalDetailUI() {
    const router = useRouter();
    const params = useParams();
    const slug = params.slug as string;

    const provider = allProviders.find((p) => p.slug === slug);

    if (!provider) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <p className="text-xl text-red-500 font-semibold">Không tìm thấy nhà cung cấp</p>
                    <button onClick={() => router.push('/provider-approval')} className="mt-4 px-6 py-2 bg-[#7C3AED] text-white rounded-xl">
                        Quay về danh sách
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="flex min-h-screen bg-[#F8F9FC]">
            <AdminSidebar />
            <div className="flex-1 flex flex-col">
                <AdminNavbar />
                <div className="p-6">
                    <div className="max-w-7xl mx-auto">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-3">
                                <button onClick={() => router.back()} title="Quay lại" className="flex items-center gap-2 text-[#6B7280] hover:text-[#111827]">
                                    <ArrowLeft className="w-5 h-5" />
                                </button>
                                <h1 className="text-2xl font-bold text-[#111827]">Chi tiết xét duyệt Provider</h1>
                            </div>
                            <div className="px-4 py-1.5 bg-[#DAE2FD] text-[#4A4455] text-sm font-medium rounded-full flex items-center gap-2">
                                <span className="w-2 h-2 bg-[#7B7487] rounded-full animate-pulse"></span>
                                Chờ xử lý
                            </div>
                        </div>

                        <ProviderHeaderCard provider={provider} />

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            <div className="lg:col-span-2 space-y-6">
                                <BasicInfoSection provider={provider} />
                                <LegalDocumentsSection documents={provider.documents} />
                                <PortfolioServicesSection services={provider.services} />
                            </div>

                            <div className="space-y-6">
                                <AdminChecklistSection />
                                <ApprovalDecisionSection />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}