'use client';

import { useState } from 'react';
import AdminNavbar from '../../common/navbar/admin_navbar';
import AdminSidebar from '../../common/sidebar/admin_sidebar';
import ProviderApprovalHeader from '../../common/header/admin-provider-approval_header';
import ProviderFilterBar from '../../layout/admin/provider-approval/provider-filter_bar';
import ProviderApprovalTable from '../../layout/admin/provider-approval/provider-approval_table';

export default function AdminProviderApprovalUI() {
    // ==================== STATE QUẢN LÝ FILTER ====================
    const [activeTab, setActiveTab] = useState('Tất cả');
    const [filters, setFilters] = useState({
        type: 'Tất cả',
        date: null as Date | null,
    });

    // Hàm nhận filter từ ProviderFilterBar
    const handleFilterChange = (newFilters: { type: string; date: Date | null }) => {
        setFilters(newFilters);
    };

    return (
        <div className="flex min-h-screen bg-[#F8F9FC]">
            {/* Sidebar */}
            <AdminSidebar />

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                <AdminNavbar />
                <ProviderApprovalHeader />

                <div className="px-5 py-6">
                    <ProviderFilterBar
                        activeTab={activeTab}
                        onTabChange={setActiveTab}
                        onFilterChange={handleFilterChange}
                    />
                </div>

                <div className="px-5 py-2">
                    <ProviderApprovalTable
                        filters={{
                            status: activeTab,
                            type: filters.type,
                            date: filters.date,
                        }}
                    />
                </div>
            </div>
        </div>
    );
}