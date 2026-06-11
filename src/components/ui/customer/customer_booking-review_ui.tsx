'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { getServicePackageBySlug } from '../../../data/servicePackages';

import BookingHeader from '../../common/header/customer-booking_header';
import BookingStepper from '../../common/stepper/booking_stepper';
import BookingFooter from '../../common/footer/booking-footer';

import DeliveryTimeSelection from '../../layout/customer/booking/booking-review/delivery-time-selection';
import DeliveryMethodCard from '../../layout/customer/booking/booking-review/delivery-method_card';
import ReviewOrderSummary from '../../layout/customer/booking/booking-review/review-order_summary';

export default function BookingReviewUI() {
    const searchParams = useSearchParams();
    const packageSlug = searchParams.get('package') || '';
    const service = packageSlug ? getServicePackageBySlug(packageSlug) : null;

    const [selectedDate, setSelectedDate] = useState<Date>(new Date(2026, 5, 11));
    const [selectedTime, setSelectedTime] = useState('10:00 - 12:00');
    const [deliveryMethod, setDeliveryMethod] = useState<'nursery' | 'self'>('nursery');

    const timeSlots = ['08:00 - 10:00', '10:00 - 12:00', '14:00 - 16:00', '16:00 - 18:00'];

    if (!service) {
        return <div className="p-8 text-center text-red-500">Không tìm thấy gói dịch vụ</div>;
    }

    const formatDate = (date: Date) => {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    const priceNumber = parseInt(service.price.replace(/[^\d]/g, '')) || 0;
    const shippingFee = 50000;
    const platformFee = Math.round(priceNumber * 0.05);
    const total = priceNumber + shippingFee + platformFee;

    return (
        <div className="min-h-screen bg-[#F8F9FC]">
            <BookingHeader />
            <div className="max-w-6xl mx-auto px-6 py-8">
                <BookingStepper currentStep={5} />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* LEFT CONTENT */}
                    <div className="lg:col-span-7 space-y-6">
                        <DeliveryTimeSelection
                            selectedDate={selectedDate}
                            selectedTime={selectedTime}
                            onDateChange={setSelectedDate}
                            onTimeChange={setSelectedTime}
                            timeSlots={timeSlots}
                            formatDate={formatDate}
                        />

                        <DeliveryMethodCard
                            deliveryMethod={deliveryMethod}
                            onDeliveryMethodChange={setDeliveryMethod}
                        />
                    </div>

                    {/* RIGHT SIDEBAR */}
                    <div className="lg:col-span-5">
                        <ReviewOrderSummary
                            service={service}
                            packageSlug={packageSlug}
                            selectedTime={selectedTime}
                            total={total}
                            platformFee={platformFee}
                        />
                    </div>
                </div>

                <BookingFooter
                    backHref={`/customer-service-packages/booking/schedule?package=${packageSlug}`}
                    nextHref={`/customer-service-packages/booking/payment?package=${packageSlug}`}
                />
            </div>
        </div>
    );
}