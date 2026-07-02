import React from 'react';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

export default function ProfileAvatarInfo() {
    return (
        <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col items-center text-center border border-[#E5E7EB]">
            <div className="relative mb-4">
                <Image
                    src="/assets/images/avatar-profile.png"
                    alt="Vườn Lan Hoàng Gia"
                    width={120}
                    height={120}
                    className="w-[120px] h-[120px] rounded-full object-cover border-[3px] border-purple-200"
                />
                <div className="absolute bottom-1 right-1 w-6 h-6 bg-[#10B981] rounded-full border-2 border-white flex items-center justify-center">
                    <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                </div>
            </div>
            <h2 className="text-[18px] font-bold text-[#1F2937] mb-1">Vườn Lan Hoàng Gia</h2>
            <p className="text-[13px] text-[#6B7280] mb-6 px-2 leading-relaxed">Chuyên gia chăm sóc & phục hồi lan đột biến</p>
            <div className="w-full flex gap-3">
                <button className="flex-1 bg-[#6D28D9] text-white py-2 rounded-xl text-sm font-semibold hover:bg-[#5B21B6] transition-colors shadow-sm">Liên hệ</button>
                <button className="flex-1 bg-white text-[#374151] py-2 rounded-xl text-sm font-semibold border border-[#D1D5DB] hover:bg-gray-50 transition-colors shadow-sm">Cập nhật hồ sơ</button>
            </div>
        </div>
    );
}
