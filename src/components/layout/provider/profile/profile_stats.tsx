import React from 'react';
import { Award, Users, Leaf, Star } from 'lucide-react';

export default function ProfileStats() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-[#E5E7EB] text-center flex flex-col items-center justify-center">
                <div className="mb-2">
                    <Award className="w-6 h-6 text-[#6D28D9]" />
                </div>
                <div className="text-[26px] font-bold text-[#111827] leading-none mb-1.5">15+</div>
                <div className="text-[12px] text-[#6B7280]">Năm kinh nghiệm</div>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-[#E5E7EB] text-center flex flex-col items-center justify-center">
                <div className="mb-2">
                    <Users className="w-6 h-6 text-[#059669]" />
                </div>
                <div className="text-[26px] font-bold text-[#111827] leading-none mb-1.5">320</div>
                <div className="text-[12px] text-[#6B7280]">Khách hàng</div>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-[#E5E7EB] text-center flex flex-col items-center justify-center">
                <div className="mb-2">
                    <Leaf className="w-6 h-6 text-[#6D28D9]" />
                </div>
                <div className="text-[26px] font-bold text-[#111827] leading-none mb-1.5">1.2k</div>
                <div className="text-[12px] text-[#6B7280]">Cây đã chăm sóc</div>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-[#E5E7EB] text-center flex flex-col items-center justify-center">
                <div className="mb-2">
                    <Star className="w-6 h-6 text-[#6D28D9]" />
                </div>
                <div className="text-[26px] font-bold text-[#111827] leading-none mb-1.5">4.9</div>
                <div className="text-[12px] text-[#6B7280]">Đánh giá (128)</div>
            </div>
        </div>
    );
}
