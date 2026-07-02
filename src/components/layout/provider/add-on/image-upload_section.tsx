import React from 'react';
import { Camera } from 'lucide-react';

export default function ImageUploadSection() {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-5">
                <h2 className="text-lg font-bold text-slate-800">Hình ảnh hiện trạng</h2>
                <span className="text-sm text-gray-500">Tối đa 5 ảnh</span>
            </div>

            <div className="border-2 border-dashed border-gray-300 rounded-xl p-10 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-gray-50 transition-colors">
                <div className="bg-[#F0E6FF] p-3 rounded-full mb-3">
                    <Camera className="w-6 h-6 text-[#6E26D9]" />
                </div>
                <p className="text-[#6E26D9] font-semibold mb-1">Tải ảnh lên</p>
                <p className="text-sm text-gray-500 max-w-xs">
                    Kéo thả hoặc nhấn để chọn ảnh chứng minh tình trạng lan cần xử lý
                </p>
            </div>
        </div>
    );
}
