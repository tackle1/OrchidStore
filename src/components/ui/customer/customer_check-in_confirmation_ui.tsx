'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';

import CheckInHeader from '../../../components/layout/customer/history-care/check-in/check-in_header';
import CountdownWarningBanner from '../../../components/layout/customer/history-care/check-in/count-down-warning_banner';
import HighRiskWarning from '../../../components/layout/customer/history-care/check-in/high-risk_warning';
import PhotoComparison from '../../../components/layout/customer/history-care/check-in/photo-comparison';
import ExpertEvaluation from '../../../components/layout/customer/history-care/check-in/expert-evaluation';
import ProviderNote from '../../../components/layout/customer/history-care/check-in/provider_note';
import CheckInActionButtons from '../../../components/layout/customer/history-care/check-in/check-in-action_buttons';

export default function CustomerCheckInConfirmationUI() {
    const params = useParams();
    const slug = params.slug as string;

    // === COUNTDOWN TIMER ===
    const [timeLeft, setTimeLeft] = useState(48 * 60 * 60);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (seconds: number) => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    };

    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-7xl mx-auto px-6 py-8">

                <CheckInHeader />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* LEFT CONTENT */}
                    <div className="lg:col-span-7 space-y-6">
                        <CountdownWarningBanner timeLeft={timeLeft} formatTime={formatTime} />
                        <HighRiskWarning />
                        <PhotoComparison />
                    </div>

                    {/* RIGHT SIDEBAR */}
                    <div className="lg:col-span-5">
                        <div className="bg-white border border-[#E5E7EB] rounded-3xl p-6 sticky top-6">
                            <ExpertEvaluation />
                            <ProviderNote />
                            <CheckInActionButtons />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}