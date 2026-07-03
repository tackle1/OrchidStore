import React from 'react';
import { Image as ImageIcon } from 'lucide-react';

export default function ReportMedia() {
    return (
        <div className="mb-8">
            <h3 className="font-bold text-[#1F2937] text-[16px] mb-3">Hình ảnh & Video hiện trạng</h3>
            <div className="border border-dashed border-[#C4B5FD] bg-[#F5F3FF] rounded-xl py-10 px-6 flex flex-col items-center justify-center transition-colors hover:bg-[#EDE9FE] cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-[#E0E7FF] flex items-center justify-center mb-3">
                    <ImageIcon className="w-6 h-6 text-[#6D28D9]" />
                </div>
                <div className="text-[14px] font-medium text-[#1F2937] mb-1">
                    Kéo thả file vào đây hoặc <span className="text-[#6D28D9]">Tải lên</span>
                </div>
                <div className="text-[13px] text-[#6B7280]">
                    Hỗ trợ JPG, PNG, MP4 (Tối đa 50MB)
                </div>
            </div>
        </div>
    );
}
