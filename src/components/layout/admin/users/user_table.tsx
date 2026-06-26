'use client';

import React, { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';

interface User {
    id: number;
    avatar: string;
    name: string;
    email: string;
    role: string;
    joinDate: string;
    status: 'Hoạt động' | 'Bị khóa';
    orders: string;
}

// === Dữ liệu mẫu (12 người dùng) ===
const allUsers: User[] = [
    { id: 1, avatar: 'https://i.pravatar.cc/40?img=47', name: 'Trần Thị Mai', email: 'mai.tran@example.com', role: 'Nhà cung cấp', joinDate: '12/05/2023', status: 'Hoạt động', orders: '12 / 450' },
    { id: 2, avatar: 'https://i.pravatar.cc/40?img=32', name: 'Nguyễn Văn An', email: 'an.nguyen@example.com', role: 'Khách hàng', joinDate: '28/08/2023', status: 'Hoạt động', orders: '34 / 0' },
    { id: 3, avatar: 'https://i.pravatar.cc/40?img=15', name: 'Lê Hoàng', email: 'hoang.le@spam.com', role: 'Khách hàng', joinDate: '10/10/2023', status: 'Bị khóa', orders: '0 / 0' },
    { id: 4, avatar: 'https://i.pravatar.cc/40?img=28', name: 'Phạm Lan Anh', email: 'admin.lananh@lancare.vn', role: 'Quản trị viên', joinDate: '01/01/2023', status: 'Hoạt động', orders: '-' },
    { id: 5, avatar: 'https://i.pravatar.cc/40?img=25', name: 'Vũ Thị Hương', email: 'huong.vu@example.com', role: 'Nhà cung cấp', joinDate: '05/03/2024', status: 'Hoạt động', orders: '8 / 120' },
    { id: 6, avatar: 'https://i.pravatar.cc/40?img=40', name: 'Đặng Minh Tuấn', email: 'tuan.dang@example.com', role: 'Khách hàng', joinDate: '15/06/2024', status: 'Hoạt động', orders: '5 / 0' },
    { id: 7, avatar: 'https://i.pravatar.cc/40?img=12', name: 'Nguyễn Đức Tuấn', email: 'tuan.nguyen@example.com', role: 'Nhà cung cấp', joinDate: '22/01/2024', status: 'Bị khóa', orders: '0 / 0' },
    { id: 8, avatar: 'https://i.pravatar.cc/40?img=60', name: 'Trần Văn Hùng', email: 'hung.tran@example.com', role: 'Khách hàng', joinDate: '03/09/2023', status: 'Hoạt động', orders: '21 / 0' },
    { id: 9, avatar: 'https://i.pravatar.cc/40?img=8', name: 'Lê Hoàng Phương', email: 'phuong.le@example.com', role: 'Quản trị viên', joinDate: '10/02/2023', status: 'Hoạt động', orders: '-' },
    { id: 10, avatar: 'https://i.pravatar.cc/40?img=35', name: 'Phạm Văn Đức', email: 'duc.pham@example.com', role: 'Khách hàng', joinDate: '18/11/2023', status: 'Hoạt động', orders: '7 / 0' },
    { id: 11, avatar: 'https://i.pravatar.cc/40?img=49', name: 'Hoàng Thị Yến', email: 'yen.hoang@example.com', role: 'Nhà cung cấp', joinDate: '07/07/2024', status: 'Hoạt động', orders: '15 / 89' },
    { id: 12, avatar: 'https://i.pravatar.cc/40?img=20', name: 'Bùi Minh Huệ', email: 'hue.bui@example.com', role: 'Khách hàng', joinDate: '29/04/2024', status: 'Bị khóa', orders: '0 / 0' },
];

const roles = ['Tất cả', 'Khách hàng', 'Nhà cung cấp', 'Quản trị viên'];
const statuses = ['Tất cả', 'Hoạt động', 'Bị khóa'];

export default function UserTable() {
    const [activeRole, setActiveRole] = useState('Tất cả');
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('Tất cả');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5; // Giảm xuống 5 để dễ thấy phân trang

    // Lọc dữ liệu
    const filteredUsers = allUsers.filter(user => {
        const matchRole = activeRole === 'Tất cả' || user.role === activeRole;
        const matchStatus = statusFilter === 'Tất cả' || user.status === statusFilter;
        const matchSearch =
            user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase());
        return matchRole && matchStatus && matchSearch;
    });

    // Phân trang
    const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
    const paginatedUsers = filteredUsers.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handlePageChange = (page: number) => setCurrentPage(page);

    return (
        <div className="bg-white rounded-2xl border border-[#F0ECF7] overflow-hidden">

            {/* Filter Bar */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 p-4 border-b">
                {/* Tabs vai trò */}
                <div className="flex items-center bg-[#F8F9FC] border border-[#E5E7EB] rounded-xl p-1">
                    {roles.map((role) => (
                        <button
                            key={role}
                            onClick={() => {
                                setActiveRole(role);
                                setCurrentPage(1);
                            }}
                            className={`px-4 py-1.5 text-sm rounded-lg transition-all ${activeRole === role
                                ? 'bg-[#6D28D9] text-white font-medium'
                                : 'text-[#6B7280] hover:bg-white'
                                }`}
                        >
                            {role}
                        </button>
                    ))}
                </div>

                {/* Search + Status Filter */}
                <div className="flex items-center gap-3">
                    {/* Search */}
                    <div className="relative w-72">
                        <input
                            type="text"
                            placeholder="Tìm theo tên, email..."
                            value={searchTerm}
                            onChange={(e) => {
                                setSearchTerm(e.target.value);
                                setCurrentPage(1);
                            }}
                            className="w-full pl-10 pr-4 py-2 border border-[#E5E7EB] rounded-xl text-sm focus:outline-none focus:border-[#6D28D9]"
                        />
                        <Search className="absolute left-3.5 top-2.5 w-4 h-4 text-[#9CA3AF]" />
                    </div>

                    {/* Status Filter */}
                    {/* Status Filter - Đã cải thiện ChevronDown */}
                    <div className="relative">
                        <select
                            aria-label="Lọc trạng thái"
                            value={statusFilter}
                            onChange={(e) => {
                                setStatusFilter(e.target.value);
                                setCurrentPage(1);
                            }}
                            className="appearance-none pl-4 pr-10 py-2 border border-[#E5E7EB] rounded-xl text-sm focus:outline-none focus:border-[#6D28D9] bg-white cursor-pointer min-w-[130px]"
                        >
                            {statuses.map((status) => (
                                <option key={status} value={status}>{status}</option>
                            ))}
                        </select>

                        {/* Custom ChevronDown icon - đã dịch sang phải */}
                        <ChevronDown className="absolute right-3.5 top-3 w-4 h-4 text-[#6B7280] pointer-events-none" />
                    </div>
                </div>
            </div>

            {/* Table */}
            <table className="w-full text-sm">
                <thead className="bg-[#F8F9FC]">
                    <tr>
                        <th className="text-left px-6 py-4 font-medium text-[#6B7280]">Người dùng</th>
                        <th className="text-left px-6 py-4 font-medium text-[#6B7280]">Vai trò</th>
                        <th className="text-left px-6 py-4 font-medium text-[#6B7280]">Ngày tham gia</th>
                        <th className="text-left px-6 py-4 font-medium text-[#6B7280]">Trạng thái</th>
                        <th className="text-left px-6 py-4 font-medium text-[#6B7280]">Đơn hàng (Đặt/Nhận)</th>
                        <th className="text-center px-6 py-4 font-medium text-[#6B7280]">Hành động</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-[#F3F4F6]">
                    {paginatedUsers.length > 0 ? (
                        paginatedUsers.map((user) => (
                            <tr key={user.id} className="hover:bg-[#F9FAFB]">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <img src={user.avatar} alt={user.name} className="w-9 h-9 rounded-full object-cover" />
                                        <div>
                                            <div className="font-medium text-[#111827]">{user.name}</div>
                                            <div className="text-xs text-[#6B7280]">{user.email}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-[#374151]">{user.role}</td>
                                <td className="px-6 py-4 text-[#374151]">{user.joinDate}</td>
                                <td className="px-6 py-4">
                                    <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${user.status === 'Hoạt động'
                                        ? 'bg-[#D1FAE5] text-[#059669]'
                                        : 'bg-[#FEE2E2] text-[#DC2626]'
                                        }`}>
                                        {user.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-[#374151]">{user.orders}</td>
                                <td className="px-6 py-4 text-center">
                                    <button className="text-[#6D28D9] hover:underline text-sm font-medium">
                                        Xem chi tiết
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={6} className="px-6 py-8 text-center text-[#6B7280]">
                                Không tìm thấy người dùng nào.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>

            {/* Pagination - Đã sửa điều kiện hiển thị */}
            {totalPages > 0 && (
                <div className="flex items-center justify-between px-6 py-4 border-t text-sm text-[#6B7280]">
                    <div>
                        Hiển thị {(currentPage - 1) * itemsPerPage + 1}-
                        {Math.min(currentPage * itemsPerPage, filteredUsers.length)} trên {filteredUsers.length}
                    </div>
                    <div className="flex items-center gap-1">
                        <button
                            onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                            disabled={currentPage === 1}
                            className="px-3 py-1 rounded hover:bg-[#F3F4F6] disabled:opacity-50"
                        >
                            &lt;
                        </button>
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <button
                                key={page}
                                onClick={() => handlePageChange(page)}
                                className={`px-3 py-1 rounded ${currentPage === page ? 'bg-[#6D28D9] text-white' : 'hover:bg-[#F3F4F6]'}`}
                            >
                                {page}
                            </button>
                        ))}
                        <button
                            onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                            disabled={currentPage === totalPages}
                            className="px-3 py-1 rounded hover:bg-[#F3F4F6] disabled:opacity-50"
                        >
                            &gt;
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}