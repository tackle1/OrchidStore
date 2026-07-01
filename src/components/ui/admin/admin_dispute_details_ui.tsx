'use client';
import AdminNavbar from '../../common/navbar/admin_navbar';
import AdminSidebar from '../../common/sidebar/admin_sidebar';

import { useParams, useSearchParams } from 'next/navigation';
import DisputeDetailHeader from '../../../components/layout/admin/disputes/details/dispute-detail_header';
import EvidenceComparisonWorkspace from '../../../components/layout/admin/disputes/details/evidence-comparison_workspace';
import CostBreakdownTable from '../../../components/layout/admin/disputes/details/cost-breakdown_table'
import ActionChecklist from '../../../components/layout/admin/disputes/details/action-check_list'
import AdminResolutionActions from '../../layout/admin/disputes/details/admin-resolution_actions';
export default function DisputeDetailUI() {
    const params = useParams();
    const searchParams = useSearchParams();
    const disputeId = params.id; // VD: TC-2023-0891
    // Lấy dữ liệu từ URL
    const customerName = searchParams.get('customer') || 'Không có thông tin';
    const providerName = searchParams.get('provider') || 'Không có thông tin';
    const status = searchParams.get('status') || 'In progress';
    const orderCode = searchParams.get('orderCode') || '';

    return (
        <div className="flex min-h-screen bg-[#F8F9FC]">

            {/* Sidebar */}
            <AdminSidebar />

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                <AdminNavbar />
                <div className="p-6">
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
                        {/* ==================== CỘT BÊN TRÁI ==================== */}
                        <div className="lg:col-span-8 space-y-6">
                            {/* Header */}
                            <DisputeDetailHeader
                                disputeId={`DISP-${disputeId}`}
                                bookingId={orderCode}
                                priority="High"
                                status={status}
                                customerName={customerName}
                                providerName={providerName}
                            />

                            {/* Evidence Comparison Workspace */}
                            <EvidenceComparisonWorkspace />
                        </div>

                        {/* ==================== CỘT BÊN PHẢI ==================== */}
                        <div className="lg:col-span-4 space-y-6">
                            {/* Cost Breakdown Table */}
                            <CostBreakdownTable />
                            <ActionChecklist />
                            <AdminResolutionActions />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}