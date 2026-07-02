import React from 'react';
import Image from 'next/image';
import { AlertCircle, Quote, CheckCircle2, AlertTriangle, History } from 'lucide-react';

export default function DisputeClaim() {
    return (
        <div className="flex-1">
            <div className="bg-white rounded-[20px] p-6 shadow-sm border border-[#E5E7EB] h-full">
                <div className="flex items-center gap-2 mb-6">
                    <div className="w-6 h-6 rounded-md bg-[#FEE2E2] flex items-center justify-center">
                        <AlertCircle className="w-4 h-4 text-[#DC2626]" />
                    </div>
                    <h2 className="text-[16px] font-bold text-[#1F2937]">Nội dung khiếu nại từ khách hàng</h2>
                </div>

                <div className="bg-[#F8F9FC] rounded-xl p-5 border border-[#E9D5FF] relative mb-6">
                    <Quote className="absolute top-4 right-4 w-12 h-12 text-[#E5E7EB] opacity-50" />
                    <p className="text-[14px] text-[#4B5563] italic leading-relaxed relative z-10 font-medium">
                        "Sau khi nhận lại chậu Phi Điệp từ đợt chăm sóc 3 tháng, tôi phát hiện 2 mầm gốc có dấu hiệu úng nước và lá bị vàng mép. Tôi đã tuân thủ đúng hướng dẫn tưới nhưng tình trạng ngày càng tệ. Tôi cho rằng phía nhà vườn đã sử dụng sai loại phân bón hoặc tưới quá ẩm trong tuần cuối trước khi giao."
                    </p>
                </div>

                <h3 className="text-[14px] font-bold text-[#1F2937] mb-3">Bằng chứng liên quan (Dòng thời gian)</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                        <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 mb-2 border border-[#E5E7EB]">
                            <Image src="/assets/images/evidence-1.png" alt="Evidence 1" width={300} height={200} className="w-full h-full object-cover" />
                        </div>
                        <div className="text-[13px] text-[#4B5563] mb-1">Lúc nhận chăm sóc (12/08)</div>
                        <div className="inline-flex items-center gap-1 text-[10px] font-bold text-[#059669] bg-[#D1FAE5] px-2 py-0.5 rounded-full">
                            <CheckCircle2 className="w-3 h-3" /> Báo cáo của bạn
                        </div>
                    </div>
                    <div>
                        <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 mb-2 border border-[#E5E7EB]">
                            <Image src="/assets/images/evidence-2.png" alt="Evidence 2" width={300} height={200} className="w-full h-full object-cover" />
                        </div>
                        <div className="text-[13px] text-[#4B5563] mb-1">Ảnh KH cung cấp (15/11)</div>
                        <div className="inline-flex items-center gap-1 text-[10px] font-bold text-[#DC2626] bg-[#FEE2E2] px-2 py-0.5 rounded-full">
                            <AlertTriangle className="w-3 h-3" /> KH đính kèm
                        </div>
                    </div>
                    <div>
                        <div className="aspect-[3/3] rounded-xl border-2 border-dashed border-[#D1D5DB] flex flex-col items-center justify-center cursor-pointer hover:bg-[#F3E8FF] hover:border-[#6D28D9] transition-colors group mb-2 h-[calc(100%-24px)] mt-0">
                            <History className="w-6 h-6 text-[#9CA3AF] group-hover:text-[#6D28D9] mb-2 transition-colors" />
                            <span className="text-[13px] font-bold text-[#6D28D9]">Xem toàn bộ log</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
