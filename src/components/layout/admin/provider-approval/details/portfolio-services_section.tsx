'use client';

import { Image as ImageIcon, Leaf } from 'lucide-react';

interface PortfolioServicesSectionProps {
    services: string[];
}

export default function PortfolioServicesSection({ services }: PortfolioServicesSectionProps) {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#E5E7EB]">
            <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-xl bg-[#F3E8FF] flex items-center justify-center flex-shrink-0">
                    <ImageIcon className="w-4.5 h-4.5 text-[#7C3AED]" />
                </div>
                <h3 className="font-semibold text-[#111827] text-lg">Portfolio & Dịch vụ</h3>
            </div>

            {/* Hình ảnh */}
            <div className="mb-6">
                <p className="text-sm text-[#6B7280] mb-3">Hình ảnh cơ sở / Vườn ươm</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="rounded-2xl overflow-hidden border border-[#E5E7EB]">
                        <img src="/assets/images/portfolio-1.jpg" alt="Vườn lan" className="w-full h-28 object-cover" />
                    </div>
                    <div className="rounded-2xl overflow-hidden border border-[#E5E7EB]">
                        <img src="/assets/images/portfolio-2.jpg" alt="Lan hồ điệp" className="w-full h-28 object-cover" />
                    </div>
                    <div className="bg-[#E2E7FF] rounded-2xl flex items-center justify-center border border-[#E0D4FF]">
                        <div className="text-center">
                            <span className="text-[#7C3AED] text-xl font-semibold">+4 ảnh</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Dịch vụ */}
            <div>
                <p className="text-sm text-[#6B7280] mb-3">Gói dịch vụ cung cấp</p>
                <div className="space-y-3">
                    {services.map((service, index) => (
                        <div key={index} className="flex items-start gap-3 bg-[#F8FAFC] border border-[#E5E7EB] rounded-2xl p-4">
                            <div className="w-9 h-9 bg-[#DCFCE7] rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                                <Leaf className="w-5 h-5 text-[#16A34A]" />
                            </div>
                            <div>
                                <p className="font-semibold text-[#111827]">{service}</p>
                                <p className="text-sm text-[#6B7280] mt-0.5">
                                    {index === 0 ? "Giao hàng toàn quốc, bảo hành 7 ngày." : "Định kỳ bón phân, phòng bệnh hàng tháng."}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}