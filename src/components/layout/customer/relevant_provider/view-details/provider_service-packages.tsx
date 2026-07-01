'use client';

import { Shield, Crown, Star, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface ServicePackage {
    id: string;
    title: string;
    description: string;
    price: string;
    isPopular?: boolean;
    icon?: 'shield' | 'crown' | 'star';
}

interface ProviderServicePackagesProps {
    services: ServicePackage[];
    providerSlug: string;
}

export default function ProviderServicePackages({ services, providerSlug }: ProviderServicePackagesProps) {
    const getIcon = (iconType?: string) => {
        switch (iconType) {
            case 'shield': return <Shield className="w-5 h-5 text-[#6D28D9]" />;
            case 'crown': return <Crown className="w-5 h-5 text-[#6D28D9]" />;
            case 'star': return <Star className="w-5 h-5 text-[#6D28D9]" />;
            default: return <Shield className="w-5 h-5 text-[#6D28D9]" />;
        }
    };

    return (
        <div className="bg-white rounded-3xl border border-[#E5E7EB] p-6 sticky top-6">
            <h3 className="text-lg font-semibold text-[#1F2937] mb-5">Các Gói Dịch Vụ</h3>

            <div className="space-y-4">
                {services.map((service) => (
                    <Link
                        key={service.id}
                        href={`/customer/providers/${providerSlug}/services/${service.id}`}
                        className="block border border-[#E5E7EB] rounded-2xl p-4 hover:border-[#6D28D9] transition-all group"
                    >
                        <div className="flex items-start gap-3">
                            {/* Icon */}
                            <div className="w-9 h-9 rounded-xl bg-[#F3E8FF] flex items-center justify-center flex-shrink-0 mt-0.5">
                                {getIcon(service.icon)}
                            </div>

                            {/* Nội dung */}
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                    <h4 className="font-semibold text-[#1F2937] group-hover:text-[#6D28D9] transition-colors text-[15px]">
                                        {service.title}
                                    </h4>
                                    {service.isPopular && (
                                        <span className="px-2.5 py-0.5 text-[10px] bg-[#D1FAE5] text-[#065F46] rounded-full font-medium">
                                            Phổ biến
                                        </span>
                                    )}
                                </div>

                                <p className="text-xs text-[#6B7280] line-clamp-2 mb-2">
                                    {service.description}
                                </p>

                                <p className="text-sm">
                                    <span className="text-[#6B7280]">Chi từ </span>
                                    <span className="font-semibold text-[#1F2937]">{service.price}</span>
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Xem tất cả */}
            <Link
                href={`/providers/${providerSlug}/services`}
                className="mt-5 block text-center text-sm font-medium text-[#6D28D9] hover:underline"
            >
                Xem tất cả gói dịch vụ
                <ArrowRight className="w-4 h-4 inline ml-1" />
            </Link>
        </div>
    );
}