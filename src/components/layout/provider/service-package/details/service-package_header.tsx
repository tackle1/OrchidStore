import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Plus } from 'lucide-react';

interface ServicePackageHeaderProps {
    id: string;
    packageName: string;
}

export default function ServicePackageHeader({ id, packageName }: ServicePackageHeaderProps) {
    return (
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-3">
                <Link href="/service-packages" className="p-2 hover:bg-gray-200 rounded-full transition-colors">
                    <ArrowLeft className="w-6 h-6 text-slate-700" />
                </Link>
                <h1 className="text-2xl font-bold text-slate-800">
                    Chi tiết gói dịch vụ <span className="text-gray-500 font-medium text-lg ml-2">(#{id})</span>
                </h1>
            </div>
            <div className="flex items-center gap-3">
                <Link
                    href={`/service-packages/${id}/add-on?packageName=${encodeURIComponent(packageName)}`}
                    className="px-6 py-2.5 bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-semibold rounded-xl transition-colors flex items-center gap-2"
                >
                    <Plus className="w-5 h-5" />
                    Thêm Add-on
                </Link>
            </div>
        </div>
    );
}
