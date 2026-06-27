'use client';
import { useState } from 'react';
import AdminNavbar from '../../common/navbar/admin_navbar';
import AdminSidebar from '../../common/sidebar/admin_sidebar';
import DisputesTable from '../../layout/admin/disputes/disputes_table';
import DisputeFilters from '../../layout/admin/disputes/dispute_filters';
import DisputeHeader from '../../layout/admin/disputes/dispute_header';
export default function AdminDisputedUI() {
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('Tất cả');
    const [resolutionTypeFilter, setResolutionTypeFilter] = useState('Tất cả');
    const [timeFilter, setTimeFilter] = useState('Tất cả');
    return (
        <div className="flex min-h-screen bg-[#F8F9FC]">

            {/* Sidebar */}
            <AdminSidebar />

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                <AdminNavbar />
                <div className="p-8">
                    <DisputeHeader />
                    <div className="p-6">
                        <DisputeFilters
                            searchTerm={searchTerm}
                            setSearchTerm={setSearchTerm}
                            timeFilter={timeFilter}
                            setTimeFilter={setTimeFilter}
                            statusFilter={statusFilter}
                            setStatusFilter={setStatusFilter}
                            resolutionTypeFilter={resolutionTypeFilter}
                            setResolutionTypeFilter={setResolutionTypeFilter}
                        />
                        <DisputesTable
                            searchTerm={searchTerm}
                            timeFilter={timeFilter}
                            statusFilter={statusFilter}
                            resolutionTypeFilter={resolutionTypeFilter}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}