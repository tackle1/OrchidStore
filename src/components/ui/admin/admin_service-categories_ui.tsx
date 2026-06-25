'use client';

import { useState } from 'react';

import {
    Plus, Leaf, Bandage, Sprout,
    ArrowUpDown, BriefcaseBusiness
} from 'lucide-react';
import AdminNavbar from '../../common/navbar/admin_navbar';
import AdminSidebar from '../../common/sidebar/admin_sidebar';
import ServiceCategoryTable from '../../layout/admin/categories/service-category_table';
import Pagination from '../../layout/admin/categories/pagination';
import { ServiceCategory } from '../../../types/service-category';

// Dữ liệu mẫu
const allCategories: ServiceCategory[] = [{
    id: 1,
    name: "Chăm sóc định kỳ",
    icon: <Leaf className="w-4 h-4 text-white" />,
    serviceCount: 124,
    status: "Hiển thị",
    createdAt: "10/10/2023",
    order: 1,
},
{
    id: 2,
    name: "Cứu cây yếu",
    icon: <Bandage className="w-4 h-4 text-white" />,
    serviceCount: 58,
    status: "Hiển thị",
    createdAt: "12/10/2023",
    order: 2,
},
{
    id: 3,
    name: "Thay chậu",
    icon: <ArrowUpDown className="w-4 h-4 text-white" />,
    serviceCount: 89,
    status: "Hiển thị",
    createdAt: "15/10/2023",
    order: 3,
},
{
    id: 4,
    name: "Xử lý rễ",
    icon: <Sprout className="w-4 h-4 text-white" />,
    serviceCount: 34,
    status: "Ẩn",
    createdAt: "20/10/2023",
    order: 4,
},
{
    id: 5,
    name: "Chăm sóc công tác",
    icon: <BriefcaseBusiness className="w-4 h-4 text-white" />,
    serviceCount: 76,
    status: "Hiển thị",
    createdAt: "25/10/2023",
    order: 5,
},
]; // giữ nguyên dữ liệu cũ

export default function ServiceCategoriesTableUI() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    // Tính toán phân trang
    const totalPages = Math.ceil(allCategories.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentCategories = allCategories.slice(startIndex, startIndex + itemsPerPage);

    const handleEdit = (category: ServiceCategory) => {
        console.log('Edit category:', category);
        // TODO: Mở modal chỉnh sửa
        alert(`Chỉnh sửa: ${category.name}`);
    };

    const handleDelete = (category: ServiceCategory) => {
        if (confirm(`Bạn có chắc muốn xóa danh mục "${category.name}"?`)) {
            console.log('Delete category:', category);
            // TODO: Gọi API xóa
        }
    };

    const handleAddNew = () => {
        // TODO: Mở modal thêm mới
        alert('Mở form thêm danh mục mới');
    };

    return (
        <div className="flex min-h-screen bg-[#F8F9FC]">
            <AdminSidebar />

            <div className="flex-1 flex flex-col">
                <AdminNavbar />

                <div className="p-6 max-w-7xl mx-auto w-full">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h1 className="text-2xl font-bold text-[#111827]">Danh mục dịch vụ</h1>
                            <p className="text-[#6B7280] mt-1 text-sm">
                                Quản lý các loại hình dịch vụ chăm sóc lan trên hệ thống.
                            </p>
                        </div>

                        <button
                            onClick={handleAddNew}
                            className="flex items-center gap-2 bg-[#6D28D9] hover:bg-[#5B21B6] text-white px-5 py-2.5 rounded-xl text-sm font-medium transition-colors shadow-sm"
                        >
                            <Plus className="w-4 h-4" />
                            Thêm danh mục
                        </button>
                    </div>

                    {/* Table */}
                    <ServiceCategoryTable
                        categories={currentCategories}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                    />

                    {/* Pagination */}
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={setCurrentPage}
                    />
                </div>
            </div>
        </div>
    );
}