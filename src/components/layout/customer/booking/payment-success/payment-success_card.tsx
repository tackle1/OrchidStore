'use client';

import { useRouter } from 'next/navigation';
import { CheckCircle, Home } from 'lucide-react';

export default function PaymentSuccessCard() {
    const router = useRouter();

    return (

        <div className="bg-white rounded-3xl shadow-xl p-10 max-w-md w-full text-center">

            {/* Orchid Image with Checkmark */}
            <div className="flex justify-center mb-6 relative">
                <div className="w-40 h-40 rounded-full overflow-hidden border-8 border-white shadow-lg">
                    <img
                        src="/assets/images/orchid-success.png"
                        alt="Orchid Payment Success"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Green Checkmark Badge */}
                <div className="absolute bottom-2 right-25 bg-white rounded-full p-1 shadow-md">
                    <div className="w-9 h-9 bg-[#006E2D] rounded-full flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-white" strokeWidth={3} />
                    </div>
                </div>
            </div>

            {/* Title */}
            <h1 className="text-2xl font-bold text-[#1F2937] mb-3">
                Thanh toán thành công
            </h1>

            {/* Order ID */}
            <div className="inline-block bg-[#F3E8FF] text-[#6D28D9] text-sm font-medium px-4 py-1.5 rounded-full mb-4">
                Mã đơn hàng: #LCH-8892
            </div>

            {/* Description */}
            <p className="text-[#6B7280] text-sm leading-relaxed mb-8">
                Đơn của bạn đang chờ provider check-in. Chúng tôi sẽ thông báo cho bạn ngay khi có cập nhật mới về tiến trình chăm sóc.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                    onClick={() => router.push('/history-care')}
                    className="flex-1 bg-[#6D28D9] hover:bg-[#5B21B6] text-white font-semibold py-3 rounded-2xl transition-colors"
                >
                    Xem đơn của tôi
                </button>

                <button
                    onClick={() => router.push('/home-marketplace')}
                    className="flex-1 border border-[#E5E7EB] hover:bg-[#F8F9FC] text-[#374151] font-semibold py-3 rounded-2xl transition-colors flex items-center justify-center gap-2"
                >
                    <span>
                        <Home className="w-4 h-4" />
                    </span> Về trang chủ
                </button>
            </div>
        </div>
    );
}