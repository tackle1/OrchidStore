'use client';

import React from 'react';
import ProviderNavbar from '../../common/navbar/provider_navbar';
import ProviderSidebar from '../../common/sidebar/provider_sidebar';

import SettingsHeader from '../../layout/provider/settings/settings_header';
import SettingsBasicInfo from '../../layout/provider/settings/settings_basic-info';
import SettingsDocuments from '../../layout/provider/settings/settings_documents';
import SettingsServiceArea from '../../layout/provider/settings/settings_service-area';
import SettingsActions from '../../layout/provider/settings/settings_actions';

export default function SettingsUI() {
    return (
        <div className="flex min-h-screen bg-[#F8F9FA] font-sans">
            <ProviderSidebar />

            <div className="flex-1 flex flex-col">
                <ProviderNavbar />

                <div className="p-6 md:p-8 w-full max-w-6xl mx-auto flex-1 flex flex-col">

                    <SettingsHeader />

                    <div className="flex flex-col lg:flex-row gap-6 items-start">
                        
                        {/* Left Column */}
                        <div className="flex-1 flex flex-col gap-6 w-full">
                            <SettingsBasicInfo />
                            <SettingsDocuments />
                        </div>

                        {/* Right Column */}
                        <div className="w-full lg:w-[340px] flex-shrink-0 flex flex-col gap-6">
                            <SettingsServiceArea />
                            <SettingsActions />
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}
