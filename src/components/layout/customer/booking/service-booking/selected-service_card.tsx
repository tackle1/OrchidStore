'use client';

import { Flower2 } from 'lucide-react';
import { ServicePackage } from '../../../../../data/servicePackages';

interface SelectedServiceCardProps {
    service: ServicePackage;
}

export default function SelectedServiceCard({ service }: SelectedServiceCardProps) {
    return (
        <div className="bg-white rounded-3xl border border-[#E5E7EB] p-5">
            <div className="flex items-center gap-2 mb-4">
                <span className="text-[#6D28D9]"><Flower2 className="w-4 h-4" /></span>
                <span className="font-semibold text-[#1F2937]">Gói dịch vụ đã chọn</span>
            </div>

            <div className="bg-[#F8F9FC] rounded-2xl p-4 flex gap-4">
                <div className="w-16 h-16 flex-shrink-0 rounded-xl overflow-hidden border border-[#E5E7EB]">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                </div>

                <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                        <div>
                            <p className="font-semibold text-[#1F2937]">{service.title}</p>
                            <p className="text-sm text-[#6B7280] mt-1 line-clamp-2">{service.description}</p>
                        </div>
                        <div className="text-right flex-shrink-0 ml-4">
                            <p className="font-bold text-[#6D28D9] text-lg">{service.price}</p>
                        </div>
                    </div>

                    <div className="mt-2">
                        <span className="inline-block px-3 py-0.5 text-xs bg-[#D1FAE5] text-[#065F46] rounded-full font-medium">
                            Bảo hành 15 ngày
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}