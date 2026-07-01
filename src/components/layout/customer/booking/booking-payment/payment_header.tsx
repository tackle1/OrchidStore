'use client';

import PaymentTimer from '../../../../common/payment-timer';

export default function PaymentHeader() {
    return (
        <div className="flex items-center justify-between mb-6">
            <div>
                <h2 className="font-semibold text-xl">Cổng thanh toán VNPAY</h2>
                <p className="text-sm text-[#6B7280] mt-1">
                    Quét mã QR qua ứng dụng ngân hàng hoặc ví điện tử
                </p>
            </div>
            <PaymentTimer initialMinutes={15} />
        </div>
    );
}