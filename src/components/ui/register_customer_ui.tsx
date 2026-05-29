'use client';

import Image from 'next/image';
import CustomerRegisterForm from '../form/register_customer_form';

export default function CustomerRegisterUI() {
    return (
        <div className="w-full min-h-screen bg-[#F4F2FA] overflow-hidden">

            <div className="grid lg:grid-cols-[52%_48%] min-h-screen">

                {/* LEFT IMAGE */}
                <div className="relative hidden lg:block min-h-screen">

                    <Image
                        src="/assets/images/register-customer-bg.png"
                        alt="Orchid"
                        fill
                        priority
                        quality={75}
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                    />
                </div>

                {/* RIGHT SIDE */}
                <div className="bg-[#F4F2FA] flex justify-center overflow-y-auto">

                    <div className="w-full max-w-[520px] pt-10 pb-14 px-10">
                        <CustomerRegisterForm />
                    </div>
                </div>
            </div>
        </div>
    );
}