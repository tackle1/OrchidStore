'use client';

import ProviderNavbar from '../../common/navbar/provider_navbar';
import ProviderSidebar from '../../common/sidebar/provider_sidebar';
import ProposeAddonForm from '../../form/create_add-on_form';
import { Suspense } from 'react';

export default function CreateServicePackagesUI({ params }: { params: Promise<{ id: string }> }) {

    return (
        <div className="flex min-h-screen bg-[#F8F9FC]">
            {/* Sidebar */}
            <ProviderSidebar />

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                <ProviderNavbar />
                <Suspense fallback={<div className="p-6 text-center text-gray-500">Đang tải dữ liệu...</div>}>
                    <ProposeAddonForm params={params} />
                </Suspense>
            </div>
        </div>
    );
}
