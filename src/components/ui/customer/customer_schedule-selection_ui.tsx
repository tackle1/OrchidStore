'use client';

import { useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { getServicePackageBySlug } from '../../../data/servicePackages';

import BookingHeader from '../../common/header/customer-booking_header';
import BookingStepper from '../../common/stepper/booking_stepper';
import BookingFooter from '../../common/footer/booking-footer';

import CareScheduleCard from '../../layout/customer/booking/schedule-selection/care-schedule_card';
import CareNotesCard from '../../layout/customer/booking/schedule-selection/care-notes_card';
import ScheduleOrderSummary from '../../layout/customer/booking/schedule-selection/schedule-order_summary';

export default function CustomerScheduleSelectionUI() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const packageSlug = searchParams.get('package') || '';
    const service = packageSlug ? getServicePackageBySlug(packageSlug) : null;

    const [selectedDate, setSelectedDate] = useState('');
    const [note, setNote] = useState('');

    // Format ngày
    const formatDate = (dateString: string): string => {
        if (!dateString) return 'Chọn ngày';
        const date = new Date(dateString);
        return date.toLocaleDateString('vi-VN', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        });
    };

    // Tính ngày kết thúc
    const calculateEndDate = (startDate: string, duration: string): string => {
        if (!startDate) return 'Chọn ngày bắt đầu';
        const date = new Date(startDate);
        const durationMatch = duration.match(/(\d+)\s*(Tháng|tháng|Month|month)/i);
        if (!durationMatch) return 'Không xác định';

        const monthsToAdd = parseInt(durationMatch[1], 10);
        date.setMonth(date.getMonth() + monthsToAdd);
        return formatDate(date.toISOString().split('T')[0]);
    };

    if (!service) {
        return <div className="p-8 text-center text-red-500">Không tìm thấy gói dịch vụ</div>;
    }

    // Tính tổng tiền
    const priceNumber = parseInt(service.price.replace(/[^\d]/g, '')) || 0;
    const shippingFee = 50000;
    const platformFee = Math.round(priceNumber * 0.05);
    const total = priceNumber + shippingFee + platformFee;

    return (
        <div className="min-h-screen bg-[#F8F9FC]">
            <BookingHeader />
            <div className="max-w-6xl mx-auto px-6 py-8">
                <BookingStepper currentStep={4} />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* LEFT CONTENT */}
                    <div className="lg:col-span-7 space-y-6">
                        <div>
                            <h2 className="text-2xl font-bold">Chọn thời gian chăm sóc</h2>
                            <p className="text-[#6B7280] mt-1">
                                Vui lòng chọn ngày bắt đầu để nhà vườn chăm sóc theo gói.
                            </p>
                        </div>

                        {/* Component 1: Thời gian chăm sóc */}
                        <CareScheduleCard
                            duration={service.duration}
                            selectedDate={selectedDate}
                            onDateChange={setSelectedDate}
                            calculateEndDate={calculateEndDate}
                            formatDate={formatDate}
                        />

                        {/* Component 2: Yêu cầu đặc biệt */}
                        <CareNotesCard
                            reportFrequency={service.reportFrequency}
                            note={note}
                            onNoteChange={setNote}
                        />
                    </div>

                    {/* RIGHT SIDEBAR */}
                    <div className="lg:col-span-5">
                        <ScheduleOrderSummary
                            service={service}
                            packageSlug={packageSlug}
                            selectedDate={selectedDate}
                            formatDate={formatDate}
                            calculateEndDate={calculateEndDate}
                            platformFee={platformFee}
                            total={total}
                        />
                    </div>
                </div>

                <BookingFooter
                    backHref={`/customer-service-packages/booking/photos?package=${packageSlug}`}
                    nextHref={`/customer-service-packages/booking/review?package=${packageSlug}`}
                />
            </div>
        </div>
    );
}