"use client";

import React, { use } from 'react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import ServiceInfoSection from '../layout/provider/add-on/service-info_section';
import ImageUploadSection from '../layout/provider/add-on/image-upload_section';
import SummarySection from '../layout/provider/add-on/summary_section';

export default function ProposeAddonForm({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const searchParams = useSearchParams();
    const packageName = searchParams.get('packageName');
    const backUrl = `/service-packages/${id}`;
    const router = useRouter();

    const handleCancel = () => {
        router.replace('/service-packages'); // Mặc định chuyển trang
    };

    return (
        <div className="min-h-screen bg-[#F8F9FA] p-4 md:p-8 text-slate-800 font-sans">
            {/* Header */}
            <div className="max-w-6xl mx-auto flex items-center gap-3 mb-6">
                <Link href={backUrl} className="p-2 hover:bg-gray-200 rounded-full transition-colors">
                    <ArrowLeft className="w-6 h-6 text-slate-700" />
                </Link>
                <h1 className="text-2xl font-bold text-slate-800">
                    Đề xuất add-on <span className="text-gray-500 font-medium text-lg ml-2">(Gói: {packageName || `#${id}`})</span>
                </h1>
            </div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Left Column */}
                <div className="lg:col-span-2 space-y-6">
                    <ServiceInfoSection />
                    <ImageUploadSection />
                </div>

                {/* Right Column */}
                <div className="lg:col-span-1">
                    <SummarySection handleCancel={handleCancel} />
                </div>

            </div>
        </div>
    );
}
