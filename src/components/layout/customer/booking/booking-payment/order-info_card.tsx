'use client';

interface OrderInfoCardProps {
    orderId: string;
    amount: number;
}

export default function OrderInfoCard({ orderId, amount }: OrderInfoCardProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-[#F3E8FF] rounded-2xl p-5">
                <p className="text-sm text-[#6B7280] text-center">MÃ ĐƠN HÀNG</p>
                <p className="font-semibold text-lg mt-1 text-center tracking-wide">{orderId}</p>
            </div>
            <div className="bg-[#F3E8FF] rounded-2xl p-5 text-right">
                <p className="text-sm text-[#6B7280] text-center">SỐ TIỀN THANH TOÁN</p>
                <p className="font-bold text-3xl text-[#6D28D9] mt-1 text-center">
                    {amount.toLocaleString('vi-VN')}đ
                </p>
            </div>
        </div>
    );
}