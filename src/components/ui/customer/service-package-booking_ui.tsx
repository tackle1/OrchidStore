'use client';

import { useSearchParams } from 'next/navigation';
import { getServicePackageBySlug } from '../../../data/servicePackages';

// Import các component đã tách
import BookingHeader from '../../common/header/customer-booking_header';
import BookingStepper from '../../common/stepper/booking_stepper';
import SelectedServiceCard from '../../layout/customer/booking/service-booking/selected-service_card';
import PlantInfoForm from '../../layout/customer/booking/service-booking/plant-info_form';
import ContactAddressForm from '../../layout/customer/booking/service-booking/contact-address_form';
import ServiceProviderCard from '../../layout/customer/booking/service-booking/service-provider_card';
import OrderSummary from '../../layout/customer/booking/service-booking/order-summary';
import BookingFooter from '../../common/footer/booking-footer';

export default function ServicePackageBookingUI() {
    const searchParams = useSearchParams();
    const packageSlug = searchParams.get('package') || '';
    const service = packageSlug ? getServicePackageBySlug(packageSlug) : null;

    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-red-500">Không tìm thấy gói dịch vụ.</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#F8F9FC]">
            <BookingHeader />

            <div className="max-w-6xl mx-auto px-6 py-8">
                <BookingStepper currentStep={2} />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* LEFT CONTENT */}
                    <div className="lg:col-span-7 space-y-6">
                        <SelectedServiceCard service={service} />
                        <PlantInfoForm />
                        <ContactAddressForm />
                        <ServiceProviderCard service={service} />
                    </div>

                    {/* RIGHT SIDEBAR */}
                    <div className="lg:col-span-5">
                        <OrderSummary service={service} packageSlug={packageSlug} />
                    </div>
                </div>

                <BookingFooter
                    backHref={`/customer-service-packages/service-discovery/${packageSlug}/details`}
                    nextHref={`/customer-service-packages/booking/photos?package=${packageSlug}`}
                />
            </div>
        </div>
    );
}