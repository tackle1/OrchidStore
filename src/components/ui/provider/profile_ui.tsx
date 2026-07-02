'use client';

import React from 'react';
import ProviderNavbar from '../../common/navbar/provider_navbar';
import ProviderSidebar from '../../common/sidebar/provider_sidebar';

import ProfileAvatarInfo from '../../layout/provider/profile/profile_avatar-info';
import ProfileVerification from '../../layout/provider/profile/profile_verification';
import ProfileContact from '../../layout/provider/profile/profile_contact';
import ProfileStats from '../../layout/provider/profile/profile_stats';
import ProfileCollections from '../../layout/provider/profile/profile_collections';
import ProfileReviews from '../../layout/provider/profile/profile_reviews';

export default function ProviderProfileUI() {
    return (
        <div className="flex min-h-screen bg-[#F8F9FC] font-sans">
            <ProviderSidebar />
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <ProviderNavbar />

                {/* Main Content */}
                <div className="p-6 md:p-8 max-w-6xl mx-auto flex flex-col md:flex-row gap-6">

                    {/* Left Column (Approx 1/3) */}
                    <div className="w-full md:w-[320px] flex-shrink-0 flex flex-col gap-6">
                        <ProfileAvatarInfo />
                        <ProfileVerification />
                        <ProfileContact />
                    </div>

                    {/* Right Column (Approx 2/3) */}
                    <div className="flex-1 flex flex-col gap-6">
                        <ProfileStats />
                        <ProfileCollections />
                        <ProfileReviews />
                    </div>

                </div>
            </div>
        </div>
    );
}
