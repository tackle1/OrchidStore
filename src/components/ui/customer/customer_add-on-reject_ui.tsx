'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { X, ArrowLeft } from 'lucide-react';

export default function CustomerAddOnRejectUI() {
    const params = useParams();
    const router = useRouter();
    const slug = params.slug as string;

    const [reason, setReason] = useState('');

    const handleSubmitReason = () => {
        if (reason.trim()) {
            // TODO: Gửi lý do lên server nếu cần
            console.log('Lý do từ chối:', reason);
        }
        // Sau khi gửi, quay lại trang đơn
        router.push(`/history-care/in-progress/${slug}`);
    };

    const handleGoBackWithoutReason = () => {
        router.push(`/history-care/in-progress/${slug}/add-on-proposal`);
    };

    return (
        <div className="min-h-screen bg-[#F2F3FF] flex items-center justify-center p-6">
            <div className="w-full max-w-md bg-white rounded-3xl p-8 shadow-sm">

                {/* Icon */}
                <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-[#FEE2E2] rounded-full flex items-center justify-center">
                        <X className="w-9 h-9 text-[#DC2626]" />
                    </div>
                </div>

                {/* Title & Subtitle */}
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold mb-2">Bạn đã từ chối add-on</h1>
                    <p className="text-[#6B7280] text-sm">
                        Dịch vụ bổ sung này sẽ không được thực hiện vào gói chăm sóc hiện tại của bạn.
                    </p>
                </div>

                {/* Lý do từ chối */}
                <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                        <label className="font-medium text-sm">Lý do từ chối</label>
                        <span className="text-xs text-[#9CA3AF]">(Tùy chọn)</span>
                    </div>
                    <textarea
                        value={reason}
                        onChange={(e) => setReason(e.target.value)}
                        placeholder="Chia sẻ lý do để chúng tôi cải thiện dịch vụ..."
                        className="w-full h-24 bg-[#F2F3FF] px-4 py-3 text-sm border border-[#E5E7EB] rounded-2xl resize-none focus:outline-none focus:ring-1 focus:ring-[#6D28D9]"
                    />
                </div>

                {/* Buttons */}
                <div className="space-y-3">
                    {/* Nút Submit lý do */}
                    <button
                        onClick={handleSubmitReason}
                        className="w-full flex items-center justify-center gap-2 bg-[#6D28D9] hover:bg-[#5B21B6] text-white font-semibold py-3 rounded-2xl transition-colors"
                    >
                        Gửi lý do
                    </button>

                    {/* Nút Quay lại không gửi lý do */}
                    <button
                        onClick={handleGoBackWithoutReason}
                        className="w-full flex items-center justify-center gap-2 border border-[#E5E7EB] text-[#6B7280] font-medium py-3 rounded-2xl hover:bg-[#F9FAFB] transition-colors"
                    >
                        <ArrowLeft className='w-5 h-5' />
                        Quay lại đơn (không gửi lý do)
                    </button>
                </div>
            </div>
        </div>
    );
}