'use client';

import { useState } from 'react';
import { CheckSquare } from 'lucide-react';

export default function AdminChecklistSection() {
    // State để theo dõi các checkbox (4 item)
    const [checkedItems, setCheckedItems] = useState<boolean[]>([false, false, false, false]);

    // Tính số lượng đã check
    const checkedCount = checkedItems.filter(Boolean).length;
    const totalItems = 4;
    const progressWidthClass = [
        'w-0',
        'w-1/4',
        'w-1/2',
        'w-3/4',
        'w-full',
    ][checkedCount];

    // Hàm xử lý khi click checkbox
    const handleCheckboxChange = (index: number) => {
        const newCheckedItems = [...checkedItems];
        newCheckedItems[index] = !newCheckedItems[index];
        setCheckedItems(newCheckedItems);
    };

    const checklistItems = [
        { title: "Xác minh Căn cước công dân", desc: "Khớp thông tin người đại diện" },
        { title: "Kiểm tra Giấy phép kinh doanh", desc: "Còn hiệu lực, đúng ngành nghề" },
        { title: "Đánh giá Portfolio", desc: "Hình ảnh thực tế, rõ nét" },
        { title: "Background check", desc: "Không có lịch sử xấu trên MXH" },
    ];

    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#E5E7EB]">
            {/* Header */}
            <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-xl bg-[#F3E8FF] flex items-center justify-center flex-shrink-0">
                    <CheckSquare className="w-4.5 h-4.5 text-[#7C3AED]" />
                </div>
                <h3 className="font-semibold text-[#111827] text-lg">Admin Checklist</h3>
            </div>

            {/* Danh sách Checklist */}
            <div className="space-y-5">
                {checklistItems.map((item, index) => (
                    <label 
                        key={index} 
                        className="flex items-start gap-3 cursor-pointer group"
                    >
                        <input
                            type="checkbox"
                            checked={checkedItems[index]}
                            onChange={() => handleCheckboxChange(index)}
                            className="w-5 h-5 mt-0.5 accent-[#7C3AED] rounded border-[#D1D5DB] cursor-pointer"
                        />
                        <div className="flex-1">
                            <p className="font-medium text-[#111827] group-hover:text-[#7C3AED] transition">
                                {item.title}
                            </p>
                            <p className="text-sm text-[#6B7280] mt-0.5">{item.desc}</p>
                        </div>
                    </label>
                ))}
            </div>

            {/* Progress Bar - Động */}
            <div className="mt-6 pt-4 border-t border-[#F3F4F6]">
                <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-[#6B7280]">Tiến độ kiểm tra</span>
                    <span className="font-semibold text-[#111827]">
                        {checkedCount}/{totalItems}
                    </span>
                </div>
                
                <div className="w-full bg-[#F3F4F6] rounded-full h-2.5 overflow-hidden">
                    <div 
                        className={`${progressWidthClass} bg-[#7C3AED] h-2.5 rounded-full transition-all duration-300 ease-out`}
                    />
                </div>
            </div>
        </div>
    );
}