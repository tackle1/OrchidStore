'use client';

import { useSearchParams } from 'next/navigation';
import { Calendar } from 'lucide-react';
import { getServicePackageBySlug } from '../../../data/servicePackages';

import BookingHeader from '../../common/header/customer-booking_header';
import BookingStepper from '../../common/stepper/booking_stepper';
import BookingFooter from '../../common/footer/booking-footer';

import ServicePackageSelected from '../../../components/layout/customer/booking/booking-confirm/service-package_selected';
import PlantStatusInfo from '../../../components/layout/customer/booking/booking-confirm/plant-status_info';
import ProviderInfo from '../../../components/layout/customer/booking/booking-confirm/provider_info';
import PickupSchedule from '../../../components/layout/customer/booking/booking-confirm/pickup_schedule';
import PaymentSummary from '../../../components/layout/customer/booking/booking-confirm/payment-summary';

export default function CustomerBookingConfirmUI() {
    const searchParams = useSearchParams();
    const packageSlug = searchParams.get('package') || '';
    const service = packageSlug ? getServicePackageBySlug(packageSlug) : null;

    if (!service) {
        return <div className="p-8 text-center text-red-500">Không tìm thấy gói dịch vụ</div>;
    }

    // Dữ liệu từ các bước trước
    const selectedDate = '15/06/2026';
    const selectedTime = '14:00 - 16:00';
    const orderId = 'LCH-8821';
    const deliveryMethod = 'Bàn giao tận nơi';
    const plantName = 'Lan Phi Điệp Đột Biến';
    const plantCondition = 'Đốm nấm lá';

    const priceNumber = parseInt(service.price.replace(/[^\d]/g, '')) || 0;
    const shippingFee = 50000;
    const receiveFee = 50000;
    const platformFee = Math.round(priceNumber * 0.05);
    const total = priceNumber + shippingFee + receiveFee + platformFee;

    return (
        <div className="min-h-screen bg-[#F8F9FC]">
            <BookingHeader />

            <div className="max-w-6xl mx-auto px-6 py-8">
                <BookingStepper currentStep={6} />

                <div className="mb-6">
                    <h1 className="text-2xl font-bold">Xác nhận đơn hàng</h1>
                    <p className="text-[#6B7280] mt-1">
                        Kiểm tra lại thông tin và tiến hành thanh toán hoàn tất đặt dịch vụ.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                    {/* LEFT CONTENT */}
                    <div className="lg:col-span-7 space-y-6">

                        {/* Thông tin dịch vụ & Lan */}
                        <div className="bg-white rounded-3xl border border-[#E5E7EB] p-6">
                            <h3 className="font-semibold text-lg mb-5">Thông tin dịch vụ & Lan</h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <ServicePackageSelected
                                    title={service.title}
                                    description={service.description}
                                    duration={service.duration}
                                />

                                <PlantStatusInfo
                                    plantName={plantName}
                                    orderId={orderId}
                                    plantCondition={plantCondition}
                                />
                            </div>
                        </div>

                        {/* Lịch hẹn & Đối tác */}
                        <div className="bg-white rounded-3xl border border-[#E5E7EB] p-6">
                            <div className="flex items-center gap-3 mb-5">
                                <Calendar className="w-6 h-6 text-[#6D28D9]" />
                                <h3 className="font-semibold text-lg">Lịch hẹn & Đối tác</h3>
                            </div>

                            <div className="h-px bg-[#E5E7EB] my-4" />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <ProviderInfo
                                    provider={service.provider}
                                    avatar={service.avatar}
                                    location={service.location}
                                />

                                <PickupSchedule
                                    selectedDate={selectedDate}
                                    selectedTime={selectedTime}
                                    deliveryMethod={deliveryMethod}
                                />
                            </div>
                        </div>
                    </div>

                    {/* RIGHT - Chi tiết thanh toán */}
                    <div className="lg:col-span-5">
                        <PaymentSummary
                            serviceTitle={service.title}
                            servicePrice={service.price}
                            shippingFee={shippingFee}
                            receiveFee={receiveFee}
                            platformFee={platformFee}
                            total={total}
                            packageSlug={packageSlug}
                        />
                    </div>
                </div>

                {/* Checkbox */}
                <div className="mt-6 flex items-start gap-3 text-sm max-w-3xl">
                    <label
                        htmlFor="terms-agreement"
                        className="flex items-start gap-3 p-4 bg-[#F8F9FC] border border-[#E5E7EB] rounded-2xl cursor-pointer hover:bg-[#F3E8FF] transition-colors"
                    >
                        <input
                            id="terms-agreement"
                            type="checkbox"
                            className="mt-1 accent-[#6D28D9] w-4 h-4"
                            defaultChecked
                        />
                        <span className="text-sm text-[#374151] leading-relaxed">
                            Tôi đã đọc và đồng ý với{' '}
                            <span className="text-[#6D28D9] underline font-medium">Điều khoản dịch vụ</span> và{' '}
                            <span className="text-[#6D28D9] underline font-medium">Chính sách bảo hành</span> của LanCare Hub.
                            Tôi xác nhận thông tin tình trạng cây là chính xác.
                        </span>
                    </label>
                </div>

                <BookingFooter
                    backHref={`/customer-service-packages/booking/review?package=${packageSlug}`}
                    nextHref={`/customer-service-packages/booking/payment?package=${packageSlug}`}
                />
            </div>
        </div>
    );
}