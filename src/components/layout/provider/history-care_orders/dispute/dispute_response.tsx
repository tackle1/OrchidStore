import React from 'react';
import { CornerDownRight, UploadCloud, Image as ImageIcon, X, Send } from 'lucide-react';

export default function DisputeResponse() {
    return (
        <div className="bg-white rounded-[20px] shadow-sm border border-[#E5E7EB] overflow-hidden">
            <div className="bg-[#F8F9FC] border-b border-[#E5E7EB] px-6 py-4 flex items-center gap-2">
                <div className="w-6 h-6 flex items-center justify-center">
                    <CornerDownRight className="w-5 h-5 text-[#6D28D9]" />
                </div>
                <h2 className="text-[16px] font-bold text-[#1F2937]">Phản hồi của Nhà vườn</h2>
            </div>

            <div className="p-6">
                <div className="mb-6">
                    <label className="block mb-1">
                        <span className="text-[14px] font-bold text-[#1F2937]">Giải trình chi tiết</span>
                        <span className="text-[#DC2626] ml-1">*</span>
                    </label>
                    <p className="text-[13px] text-[#6B7280] mb-3">
                        Trình bày rõ ràng quá trình chăm sóc, môi trường lưu trữ và các lý do chuyên môn giải thích tình trạng cây. Giữ thái độ chuyên nghiệp, khách quan.
                    </p>
                    <textarea 
                        rows={5}
                        placeholder="Nhập nội dung giải trình chuyên môn của bạn tại đây..."
                        className="w-full p-4 rounded-xl border border-[#D1D5DB] bg-[#FAFAFA] focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all text-[14px] text-[#1F2937] resize-none placeholder-gray-400"
                    />
                </div>

                <div>
                    <label className="block text-[14px] font-bold text-[#1F2937] mb-3">
                        Tài liệu/Bằng chứng bổ sung
                    </label>
                    <div className="border-2 border-dashed border-[#D1D5DB] rounded-xl p-8 flex flex-col items-center justify-center text-center bg-[#FAFAFA] hover:bg-gray-50 transition-colors cursor-pointer mb-4">
                        <div className="w-12 h-12 bg-[#F3E8FF] rounded-full flex items-center justify-center mb-3">
                            <UploadCloud className="w-6 h-6 text-[#6D28D9]" />
                        </div>
                        <div className="text-[14px] text-[#4B5563] mb-1 font-medium">
                            Kéo thả tệp vào đây hoặc <span className="text-[#6D28D9] font-bold">Tải lên</span>
                        </div>
                        <div className="text-[12px] text-[#9CA3AF]">
                            Hỗ trợ JPG, PNG, PDF (Tối đa 10MB/tệp)
                        </div>
                    </div>

                    <div className="flex items-center justify-between px-4 py-3 rounded-xl border border-[#D1D5DB] bg-white w-full max-w-sm">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded bg-[#F3E8FF] flex items-center justify-center">
                                <ImageIcon className="w-4 h-4 text-[#6D28D9]" />
                            </div>
                            <div>
                                <div className="text-[13px] text-[#1F2937] font-bold">nhat_ky_tuoi_nuoc.jpg</div>
                                <div className="text-[11px] text-[#6B7280]">1.2 MB</div>
                            </div>
                        </div>
                        <button type="button" title="Xóa" aria-label="Xóa" className="text-[#9CA3AF] hover:text-[#EF4444] transition-colors">
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="bg-[#F9FAFB] border-t border-[#E5E7EB] px-6 py-4 flex justify-end gap-3">
                <button className="px-6 py-2.5 bg-white text-[#059669] border border-[#10B981] rounded-lg font-bold text-[14px] hover:bg-[#ECFDF5] transition-colors shadow-sm">
                    Lưu nháp
                </button>
                <button className="px-6 py-2.5 bg-[#DC2626] text-white rounded-lg font-bold text-[14px] flex items-center gap-2 hover:bg-[#B91C1C] transition-colors shadow-sm">
                    <Send className="w-4 h-4" />
                    Gửi phản hồi
                </button>
            </div>
        </div>
    );
}
