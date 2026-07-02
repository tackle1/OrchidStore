import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function ProfileContact() {
    return (
        <div className="bg-white rounded-2xl shadow-sm p-6 border border-[#E5E7EB]">
            <h3 className="font-bold text-[#1F2937] text-[15px] mb-4">Thông tin liên hệ</h3>
            <div className="space-y-4">
                <div className="flex gap-3 text-sm text-[#4B5563] items-start">
                    <MapPin className="w-4 h-4 text-[#9CA3AF] flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">123 Đường Hoa Lan, Phường 2, TP. Đà Lạt</span>
                </div>
                <div className="flex gap-3 text-sm text-[#4B5563] items-center">
                    <Phone className="w-4 h-4 text-[#9CA3AF] flex-shrink-0" />
                    <span>0909 123 456</span>
                </div>
                <div className="flex gap-3 text-sm text-[#4B5563] items-center">
                    <Mail className="w-4 h-4 text-[#9CA3AF] flex-shrink-0" />
                    <span>contact@hoanggiaorchids.vn</span>
                </div>
            </div>
        </div>
    );
}
