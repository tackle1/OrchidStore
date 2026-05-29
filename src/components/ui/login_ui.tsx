'use client';

import Image from 'next/image';
import LoginForm from '../form/login_form';

export default function LoginUI() {
    return (
        <div className="w-full min-h-screen bg-[#F5F3FA] flex overflow-hidden">

            {/* LEFT IMAGE - Chiếm 50% + Dài ra */}
            <div className="relative hidden lg:block w-1/2 min-h-screen overflow-hidden">

                <Image
                    src="/assets/images/login-bg.jpg"
                    alt="LanCare Hub"
                    fill
                    priority
                    quality={75}
                    sizes="50vw"
                    className="
                        object-cover 
                        object-[50%_80%]    
                    "
                />
            </div>

            {/* RIGHT SIDE - Form (50%) */}
            <div className="w-full lg:w-1/2 h-screen bg-[#F5F3FA] flex items-center justify-center px-8 lg:px-16">
                <div className="w-full max-w-[420px]">
                    <LoginForm />
                </div>
            </div>
        </div>
    );
}