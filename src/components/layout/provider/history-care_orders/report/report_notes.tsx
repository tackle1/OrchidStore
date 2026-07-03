import React from 'react';

export default function ReportNotes() {
    return (
        <div className="mb-8">
            <h3 className="font-bold text-[#1F2937] text-[16px] mb-3">Ghi chú của chuyên gia</h3>
            <textarea 
                className="w-full border border-[#D1D5DB] rounded-[10px] p-4 text-[14px] text-[#1F2937] placeholder:text-[#9CA3AF] min-h-[120px] outline-none focus:border-[#6D28D9] focus:ring-1 focus:ring-[#6D28D9] resize-y"
                placeholder="Nhập nhận xét chi tiết về tình trạng phát triển, độ ẩm giá thể, màu sắc lá..."
            ></textarea>
        </div>
    );
}
