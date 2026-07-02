import React from 'react';
import { UploadCloud, FileText, X, Image as ImageIcon } from 'lucide-react';
import Image from 'next/image';

export default function SettingsDocuments() {
    return (
        <div className="bg-white rounded-[20px] p-6 shadow-sm border border-[#E5E7EB]">
            <h2 className="text-[16px] font-bold text-[#1F2937] mb-5">Tài liệu & Hình ảnh</h2>

            <div className="space-y-6">
                <div>
                    <label className="block text-[13px] font-semibold text-[#374151] mb-2">Giấy phép kinh doanh / Chứng chỉ</label>

                    {/* Dropzone */}
                    <div className="border-2 border-dashed border-[#D1D5DB] rounded-xl p-8 flex flex-col items-center justify-center text-center bg-[#FAFAFA] hover:bg-gray-50 transition-colors cursor-pointer mb-3">
                        <UploadCloud className="w-8 h-8 text-[#6B7280] mb-3" />
                        <div className="text-[14px] text-[#4B5563] mb-1">
                            Kéo thả file vào đây hoặc <span className="text-[#6D28D9] font-semibold">chọn file</span>
                        </div>
                        <div className="text-[12px] text-[#9CA3AF]">
                            Hỗ trợ JPG, PNG, PDF (Tối đa 5MB)
                        </div>
                    </div>

                    {/* File Item */}
                    <div className="flex items-center justify-between px-4 py-3 rounded-xl border border-[#E5E7EB] bg-[#FAFAFA]">
                        <div className="flex items-center gap-3">
                            <FileText className="w-5 h-5 text-[#10B981]" />
                            <span className="text-[13px] text-[#374151] font-medium">giay-phep-kinh-doanh-2023.pdf</span>
                        </div>
                        <button type="button" title="Xóa tài liệu" aria-label="Xóa tài liệu" className="text-[#EF4444] hover:bg-red-50 p-1.5 rounded-full transition-colors">
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                <div>
                    <label className="block text-[13px] font-semibold text-[#374151] mb-3">Hình ảnh Portfolio (Vườn lan)</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="aspect-square rounded-xl overflow-hidden bg-gray-100 border border-[#E5E7EB]">
                            <Image className="w-full h-full object-cover" src="/assets/images/portfolio-1.png" alt="Portfolio 1" width={300} height={300} />
                        </div>
                        <div className="aspect-square rounded-xl overflow-hidden bg-gray-100 border border-[#E5E7EB]">
                            <Image className="w-full h-full object-cover" src="/assets/images/portfolio-2.png" alt="Portfolio 2" width={300} height={300} />
                        </div>
                        <button aria-label="Thêm hình ảnh" title="Thêm hình ảnh" className="aspect-square rounded-xl border-2 border-dashed border-[#D1D5DB] flex flex-col items-center justify-center text-[#9CA3AF] hover:bg-gray-50 hover:text-[#6B7280] transition-colors">
                            <ImageIcon className="w-6 h-6 mb-2" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
