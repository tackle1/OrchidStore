'use client';

import { Star } from 'lucide-react';
import { ServicePackage } from '../../../../../data/servicePackages';

interface ServiceProviderCardProps {
    service: ServicePackage;
}

export default function ServiceProviderCard({ service }: ServiceProviderCardProps) {
    return (
        <div className="bg-white rounded-3xl border border-[#E5E7EB] p-5">
            <h3 className="font-semibold mb-4">Đơn vị cung cấp dịch vụ</h3>

            <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-[#E5E7EB] flex-shrink-0">
                    <img src={service.avatar} alt={service.provider} className="w-full h-full object-cover" />
                </div>

                <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="font-semibold text-[#1F2937]">{service.provider}</p>
                            <div className="flex items-center gap-1.5 mt-0.5">
                                <div className="flex items-center gap-1">
                                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                    <span className="font-semibold text-sm">{service.rating}</span>
                                </div>
                                <span className="text-xs text-[#6B7280]">({service.reviewCount} đánh giá)</span>
                            </div>
                        </div>

                        <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-[#D1FAE5] text-[#065F46] rounded-full">
                            Đối tác uy tín
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}