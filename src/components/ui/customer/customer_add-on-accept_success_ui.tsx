'use client';

import { useParams, useRouter } from 'next/navigation';
import { CheckCircle2, ArrowLeft, CreditCard, LockKeyhole } from 'lucide-react';

export default function CustomerAddOnAcceptSuccessUI() {
    const params = useParams();
    const router = useRouter();
    const slug = params.slug as string;

    return (
        <div className="min-h-screen bg-[#F2F3FF] flex items-center justify-center p-6">
            <div className="w-full max-w-md bg-white rounded-3xl p-8 shadow-sm">

                {/* Success Icon */}
                <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-[#7CF994] rounded-full flex items-center justify-center">
                        <CheckCircle2 className="w-9 h-9 text-[#007230]" />
                    </div>
                </div>

                {/* Title & Subtitle */}
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold mb-2">Bạn đã chấp nhận add-on</h1>
                    <p className="text-[#6B7280] text-sm">
                        Cảm ơn bạn đã xác nhận. Vui lòng thanh toán khoản phí bổ sung <br />
                        để chúng tôi tiến hành dịch vụ.
                    </p>
                </div>

                {/* Chi tiết thanh toán */}
                <div className="mb-6">
                    <h3 className="font-semibold mb-4">Chi tiết thanh toán</h3>

                    <div className="space-y-3">
                        {/* Item 1 */}
                        <div className="flex justify-between items-center bg-[#F2F3FF] px-4 py-3 rounded-2xl">
                            <div>
                                <p className="font-medium">Phân bón kích rễ cao cấp</p>
                                <p className="text-xs text-[#6B7280]">Cho đơn hàng {slug}</p>
                            </div>
                            <span className="font-medium">350,000 ₫</span>
                        </div>

                        {/* Item 2 */}
                        <div className="flex justify-between items-center bg-[#F2F3FF] px-4 py-3 rounded-2xl">
                            <div>
                                <p className="font-medium">Phí dịch vụ chuyên gia</p>
                                <p className="text-xs text-[#6B7280]">Kiểm tra và bón lót</p>
                            </div>
                            <span className="font-medium">150,000 ₫</span>
                        </div>
                    </div>

                    {/* Tổng cộng */}
                    <div className="flex justify-between items-center mt-4 pt-4 border-t">
                        <span className="font-semibold">Tổng cộng</span>
                        <span className="font-bold text-xl text-[#6D28D9]">500,000 ₫</span>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-3">
                    <button
                        onClick={() => router.push(`/history-care/in-progress/${slug}/add-on-proposal`)}
                        className="flex items-center justify-center gap-2 border border-[#16A34A] text-[#16A34A] font-medium py-3 rounded-2xl hover:bg-[#F0FDF4] transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" /> Quay lại đơn
                    </button>

                    <button
                        onClick={() => alert('Chức năng thanh toán VNPay đang phát triển')}
                        className="flex items-center justify-center gap-2 bg-[#6D28D9] hover:bg-[#5B21B6] text-white font-semibold py-3 rounded-2xl transition-colors"
                    >
                        <CreditCard className="w-4 h-4" /> Thanh toán add-on
                    </button>
                </div>

                {/* Footer */}
                <p className="text-center text-xs text-[#6B7280] mt-6 flex items-center justify-center gap-1">
                    <span>
                        <LockKeyhole className='w-3 h-3' />
                    </span> Thanh toán an toàn qua cổng VNPay
                </p>
            </div>
        </div>
    );
}