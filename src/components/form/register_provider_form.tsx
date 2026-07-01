'use client';

import { useState } from 'react';

import ProviderStepper from '../../content/auth/provider-register/components/provider_stepper';
import ProviderFooterActions from '../../content/auth/provider-register/components/provider_footer-actions';
import ProviderBasicInfoStep from '../../content/auth/provider-register/steps/provider_basic-info_step';
import ProviderServiceProfileStep from '../../content/auth/provider-register/steps/provider_service-profile_step';
import ProviderVerificationStep from '../../content/auth/provider-register/steps/provider_verification_step';
import ProviderSubmitStep from '../../content/auth/provider-register/steps/provider_approval-submit_step';

export default function ProviderRegisterForm() {
    const [currentStep, setCurrentStep] = useState(1);

    const nextStep = () => {
        if (currentStep < 4) {
            setCurrentStep((prev) => prev + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep((prev) => prev - 1);
        }
    };

    const renderStepContent = () => {
        switch (currentStep) {
            case 1:
                return <ProviderBasicInfoStep />;

            case 2:
                return <ProviderServiceProfileStep />;

            case 3:
                return <ProviderVerificationStep />;

            case 4:
                return <ProviderSubmitStep />;

            default:
                return <ProviderBasicInfoStep />;
        }
    };

    return (
        <div className="min-h-screen bg-[#F5F3FA] py-10 px-6">
            <div className="max-w-[980px] mx-auto">

                {/* HEADER */}
                <div className="text-center">
                    <h1 className="text-[48px] leading-[54px] font-extrabold tracking-[-1px] text-[#6D28D9]">
                        Trở thành Provider
                    </h1>

                    <p className="mt-3 text-[15px] leading-[26px] text-[#6B7280] max-w-[720px] mx-auto">
                        Tham gia mạng lưới chuyên gia chăm sóc lan cao cấp.
                        Chia sẻ kiến thức, dịch vụ và phát triển thương hiệu
                        cùng LanCare Hub.
                    </p>
                </div>

                {/* CARD */}
                <div className="mt-10 bg-white border border-[#ECE8F5] rounded-[22px] overflow-hidden shadow-sm">

                    {/* STEPPER */}
                    <ProviderStepper currentStep={currentStep} />

                    {/* STEP CONTENT */}
                    <div className="px-10 py-8">
                        {renderStepContent()}
                    </div>

                    {/* FOOTER */}
                    <ProviderFooterActions
                        currentStep={currentStep}
                        onNext={nextStep}
                        onPrevious={prevStep}
                    />
                </div>
            </div>
        </div>
    );
}