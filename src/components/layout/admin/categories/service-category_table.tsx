'use client';

import React from 'react';
import { Edit2, Trash2 } from 'lucide-react';
import { ServiceCategory } from '../../../../types/service-category';

interface ServiceCategoryTableProps {
    categories: ServiceCategory[];
    onEdit: (category: ServiceCategory) => void;
    onDelete: (category: ServiceCategory) => void;
}

export default function ServiceCategoryTable({
    categories,
    onEdit,
    onDelete
}: ServiceCategoryTableProps) {
    return (
        <div className="bg-white rounded-2xl shadow-sm border border-[#ECE8F5] overflow-hidden">
            <table className="w-full">
                <thead className="bg-[#F9FAFB]">
                    <tr>
                        <th className="text-left px-6 py-4 text-sm font-semibold text-[#374151]">TÊN DANH MỤC</th>
                        <th className="text-center px-4 py-4 text-sm font-semibold text-[#374151]">SỐ LƯỢNG DỊCH VỤ</th>
                        <th className="text-center px-4 py-4 text-sm font-semibold text-[#374151]">TRẠNG THÁI</th>
                        <th className="text-center px-4 py-4 text-sm font-semibold text-[#374151]">NGÀY TẠO</th>
                        <th className="text-center px-4 py-4 text-sm font-semibold text-[#374151]">THỨ TỰ</th>
                        <th className="text-center px-6 py-4 text-sm font-semibold text-[#374151]">THAO TÁC</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-[#F3F4F6]">
                    {categories.length === 0 ? (
                        <tr>
                            <td colSpan={6} className="px-6 py-8 text-center text-[#6B7280]">
                                Không có danh mục nào.
                            </td>
                        </tr>
                    ) : (
                        categories.map((category) => (
                            <tr key={category.id} className="hover:bg-[#F9FAFB] transition-colors">
                                {/* Tên danh mục + Icon */}
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-9 h-9 rounded-full bg-[#6D28D9] flex items-center justify-center flex-shrink-0">
                                            {category.icon}
                                        </div>
                                        <span className="font-medium text-[#111827]">{category.name}</span>
                                    </div>
                                </td>

                                <td className="px-4 py-4 text-center text-[#374151] font-medium">
                                    {category.serviceCount}
                                </td>

                                <td className="px-4 py-4 text-center">
                                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${category.status === 'Hiển thị'
                                        ? 'bg-[#D1FAE5] text-[#065F46]'
                                        : 'bg-[#F3F4F6] text-[#6B7280]'
                                        }`}>
                                        {category.status}
                                    </span>
                                </td>

                                <td className="px-4 py-4 text-center text-[#6B7280] text-sm">
                                    {category.createdAt}
                                </td>

                                <td className="px-4 py-4 text-center text-[#374151] font-medium">
                                    {category.order}
                                </td>

                                <td className="px-6 py-4">
                                    <div className="flex items-center justify-center gap-2">
                                        <button
                                            onClick={() => onEdit(category)}
                                            className="p-2 text-[#6B7280] hover:text-[#6D28D9] hover:bg-[#F3E8FF] rounded-lg transition-colors"
                                            title="Chỉnh sửa"
                                        >
                                            <Edit2 className="w-4 h-4" />
                                        </button>
                                        <button
                                            onClick={() => onDelete(category)}
                                            className="p-2 text-[#6B7280] hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                            title="Xóa"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}