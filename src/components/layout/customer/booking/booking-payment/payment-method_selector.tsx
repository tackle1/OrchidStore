'use client';

import { QrCode, CreditCard, Globe } from 'lucide-react';

type PaymentMethod = 'vnpay' | 'atm' | 'international';

interface PaymentMethodSelectorProps {
    selectedMethod: PaymentMethod;
    onSelect: (method: PaymentMethod) => void;
}

export default function PaymentMethodSelector({ selectedMethod, onSelect }: PaymentMethodSelectorProps) {
    return (
        <div className="mb-8">
            <p className="font-medium mb-4">Chọn phương thức thanh toán</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* VNPAY QR */}
                <div
                    onClick={() => onSelect('vnpay')}
                    className={`border-2 rounded-2xl p-4 cursor-pointer relative transition-all ${selectedMethod === 'vnpay'
                            ? 'border-[#6D28D9] bg-[#F3E8FF]'
                            : 'border-[#E5E7EB] bg-white hover:border-[#6D28D9]'
                        }`}
                >
                    <div className="flex flex-col items-center text-center">
                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-3 border border-[#E5E7EB]">
                            <QrCode className="w-7 h-7 text-[#6D28D9]" />
                        </div>
                        <p className="font-semibold text-sm">Ứng dụng Ngân hàng</p>
                        <p className="text-xs text-[#6B7280]">(VNPAY-QR)</p>
                    </div>
                    {selectedMethod === 'vnpay' && (
                        <div className="absolute bottom-1 left-1/2 -translate-x-1/2">
                            <div className="w-3 h-3 bg-[#6D28D9] rounded-full"></div>
                        </div>
                    )}
                </div>

                {/* ATM Card */}
                <div
                    onClick={() => onSelect('atm')}
                    className={`border-2 rounded-2xl p-4 cursor-pointer relative transition-all ${selectedMethod === 'atm'
                            ? 'border-[#6D28D9] bg-[#F3E8FF]'
                            : 'border-[#E5E7EB] bg-white hover:border-[#6D28D9]'
                        }`}
                >
                    <div className="flex flex-col items-center text-center">
                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-3 border border-[#E5E7EB]">
                            <CreditCard className="w-7 h-7 text-[#6D28D9]" />
                        </div>
                        <p className="font-semibold text-sm">Thẻ ATM / Tài khoản</p>
                        <p className="text-xs text-[#6B7280]">Nội địa</p>
                    </div>
                    {selectedMethod === 'atm' && (
                        <div className="absolute bottom-1 left-1/2 -translate-x-1/2">
                            <div className="w-3 h-3 bg-[#6D28D9] rounded-full"></div>
                        </div>
                    )}
                </div>

                {/* International Card */}
                <div
                    onClick={() => onSelect('international')}
                    className={`border-2 rounded-2xl p-4 cursor-pointer relative transition-all ${selectedMethod === 'international'
                            ? 'border-[#6D28D9] bg-[#F3E8FF]'
                            : 'border-[#E5E7EB] bg-white hover:border-[#6D28D9]'
                        }`}
                >
                    <div className="flex flex-col items-center text-center">
                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-3 border border-[#E5E7EB]">
                            <Globe className="w-7 h-7 text-[#6D28D9]" />
                        </div>
                        <p className="font-semibold text-sm">Thẻ thanh toán</p>
                        <p className="text-xs text-[#6B7280]">Quốc tế</p>
                    </div>
                    {selectedMethod === 'international' && (
                        <div className="absolute bottom-1 left-1/2 -translate-x-1/2">
                            <div className="w-3 h-3 bg-[#6D28D9] rounded-full"></div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}