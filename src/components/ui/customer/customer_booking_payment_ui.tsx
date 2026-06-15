'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { getServicePackageBySlug } from '../../../data/servicePackages';

import BookingHeader from '../../common/header/customer-booking_header';
import BookingStepper from '../../common/stepper/booking_stepper';

import PaymentHeader from '../../../components/layout/customer/booking/booking-payment/payment_header';
import OrderInfoCard from '../../../components/layout/customer/booking/booking-payment/order-info_card';
import PaymentMethodSelector from '../../../components/layout/customer/booking/booking-payment/payment-method_selector';
import VNPayQRContent from '../../../components/layout/customer/booking/booking-payment/vnpay-qr_content';
import AtmTransferContent from '../../../components/layout/customer/booking/booking-payment/atm-transfer_content';
import CreditCardForm from '../../../components/layout/customer/booking/booking-payment/credit-card_form';
import PaymentSummary from '../../../components/layout/customer/booking/booking-payment/payment_summary';
type PaymentMethod = 'vnpay' | 'atm' | 'international';

export default function CustomerBookingPaymentUI() {
    const searchParams = useSearchParams();
    const packageSlug = searchParams.get('package') || '';
    const service = packageSlug ? getServicePackageBySlug(packageSlug) : null;

    if (!service) {
        return <div className="p-8 text-center text-red-500">Không tìm thấy gói dịch vụ</div>;
    }

    const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>('vnpay');

    const priceNumber = parseInt(service.price.replace(/[^\d]/g, '')) || 0;
    const orderId = 'LCH-8492';
    const originalAmount = priceNumber;
    const shippingFee = 50000;
    const receiveFee = 50000;
    const platformFee = Math.round(priceNumber * 0.05);
    const discount = Math.round(priceNumber * 0.1);
    const amount = originalAmount + shippingFee + platformFee + receiveFee - discount;

    return (
        <div className="min-h-screen bg-[#F8F9FC]">
            <BookingHeader />

            <div className="max-w-6xl mx-auto px-6 py-8">
                <BookingStepper currentStep={7} />

                <div className="mb-6">
                    <h1 className="text-2xl font-bold">Thanh toán</h1>
                    <p className="text-[#6B7280] mt-1">
                        Hoàn tất thanh toán để xác nhận đặt dịch vụ chăm sóc lan.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                    {/* LEFT CONTENT */}
                    <div className="lg:col-span-7">
                        <div className="bg-white rounded-3xl border border-t-[#005A9E] border-t-4 border-t-[#2563EB] p-6 shadow-sm">

                            <PaymentHeader />

                            <OrderInfoCard orderId={orderId} amount={amount} />

                            <PaymentMethodSelector
                                selectedMethod={selectedMethod}
                                onSelect={setSelectedMethod}
                            />

                            {/* Dynamic Payment Content */}
                            {selectedMethod === 'vnpay' && <VNPayQRContent />}
                            {selectedMethod === 'atm' && <AtmTransferContent orderId={orderId} />}
                            {selectedMethod === 'international' && <CreditCardForm />}
                        </div>
                    </div>

                    {/* RIGHT - Payment Summary */}
                    <div className="lg:col-span-5">
                        <PaymentSummary
                            serviceTitle={service.title}
                            serviceDuration={service.duration}
                            serviceImage={service.image}
                            originalAmount={originalAmount}
                            shippingFee={shippingFee}
                            platformFee={platformFee}
                            receiveFee={receiveFee}
                            discount={discount}
                            total={amount}
                            packageSlug={packageSlug}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}