'use client';

import UserManagementHeader from '../../../components/layout/admin/users/user-management_header';
import UserSummaryCards from '../../../components/layout/admin/users/user-summary_cards';
import UserTable from '../../../components/layout/admin/users/user_table';
import AdminNavbar from '../../common/navbar/admin_navbar';
import AdminSidebar from '../../common/sidebar/admin_sidebar';
export default function UserManagementUI() {
    const handleAddUser = () => {
        alert('Mở modal thêm người dùng');
        // TODO: Mở modal hoặc chuyển trang thêm người dùng
    };

    return (
        <div className="flex min-h-screen bg-[#F8F9FC]">
            <AdminSidebar />

            <div className="flex-1 flex flex-col">
                <AdminNavbar />
                <div className="p-6 max-w-7xl mx-auto">

                    {/* Header */}
                    <UserManagementHeader onAddUser={handleAddUser} />

                    {/* 4 Summary Cards */}
                    <UserSummaryCards />
                    <UserTable />
                </div>
            </div>
        </div>
    );
}