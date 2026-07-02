import React from 'react';
import { Info } from 'lucide-react';

interface SummarySectionProps {
    handleCancel: () => void;
}

export default function SummarySection({ handleCancel }: SummarySectionProps) {
    return (
        <div className="bg-[#FCFCFD] rounded-2xl p-6 shadow-sm border border-gray-100 h-full flex flex-col">

            {/* Note Box */}
            <div className="bg-white rounded-xl p-5 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] border border-gray-50 mb-8">
                <div className="flex items-center gap-2 mb-2">
                    <Info className="w-5 h-5 text-[#008A00]" />
                    <h3 className="font-bold text-slate-800">Lưu ý thanh toán</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed ml-7">
                    Phí sẽ được thanh toán bởi khách hàng sau khi duyệt. Đề xuất của bạn sẽ được gửi trực tiếp đến chủ sở hữu lan để xem xét.
                </p>
            </div>

            {/* Summary details */}
            <div className="space-y-4 mb-6 flex-grow">
                <div className="flex justify-between items-center text-slate-600">
                    <span>Dịch vụ</span>
                    <span className="font-semibold text-slate-800">Theo đề xuất</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                    <span className="text-slate-600">Tổng ước tính</span>
                    <span className="font-bold text-[#6E26D9] text-xl">0 đ</span>
                </div>
            </div>

            {/* Actions */}
            <div className="mt-auto space-y-3">
                <button className="w-full bg-[#6E26D9] hover:bg-[#5A1CB5] text-white font-semibold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-md">
                    Gửi đề xuất
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-90">
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                    </svg>
                </button>
                <button
                    onClick={handleCancel}
                    className="w-full text-[#008A00] hover:bg-green-50 font-semibold py-3.5 rounded-xl transition-colors">
                    Hủy bỏ
                </button>
            </div>

        </div>
    );
}
