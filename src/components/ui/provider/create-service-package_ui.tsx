'use client';

import ProviderNavbar from '../../common/navbar/provider_navbar';
import ProviderSidebar from '../../common/sidebar/provider_sidebar';
import CreateServicePackageForm from '../../form/create_service-packages_form';

export default function CreateServicePackagesUI() {

    return (
        <div className="flex min-h-screen bg-[#F8F9FC]">
            {/* Sidebar */}
            <ProviderSidebar />

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                <ProviderNavbar />
                <CreateServicePackageForm />
            </div>
        </div>
    );
}
