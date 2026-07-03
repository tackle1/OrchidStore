'use client';

import React from 'react';
import ProviderNavbar from '../../common/navbar/provider_navbar';
import ProviderSidebar from '../../common/sidebar/provider_sidebar';

import MyOrchidsHeader from '../../layout/provider/my-orchids/my-orchids_header';
import MyOrchidsFilter from '../../layout/provider/my-orchids/my-orchids_filter';
import MyOrchidsGrid from '../../layout/provider/my-orchids/my-orchids_grid';

export default function MyOrchidsUI() {
    return (
        <div className="flex min-h-screen bg-[#F8F9FC] font-sans">
            <ProviderSidebar />

            <div className="flex-1 flex flex-col">
                <ProviderNavbar />

                <div className="p-6 md:p-8 w-full max-w-[1400px] mx-auto flex-1 flex flex-col">
                    
                    <MyOrchidsHeader />
                    <MyOrchidsFilter />
                    <MyOrchidsGrid />

                </div>
            </div>
        </div>
    );
}
