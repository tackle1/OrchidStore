'use client';

import { Camera } from 'lucide-react';

export default function EvidencePhotosCard() {
    return (
        <div className="bg-white border border-[#E5E7EB] rounded-3xl p-6">

            <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 bg-[#F3E8FF] rounded-2xl flex items-center justify-center">
                    <Camera className="w-5 h-5 text-[#6D28D9]" />
                </div>
                <h3 className="font-semibold text-lg text-[#630ED4]">Ảnh bằng chứng hiện trạng</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Ảnh 1 */}
                <div className="group relative">
                    <div className="overflow-hidden rounded-2xl border border-[#E5E7EB]">
                        <img
                            src="/assets/images/evidence-root.jpg"
                            alt="Gốc rễ bị nhiễm nấm trắng"
                            className="w-full h-64 object-cover transition-transform group-hover:scale-[1.02]"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-3 rounded-b-2xl">
                            <p className="text-white text-sm font-medium drop-shadow">Gốc rễ bị nhiễm nấm trắng</p>
                        </div>
                    </div>
                </div>

                {/* Ảnh 2 */}
                <div className="group relative">
                    <div className="overflow-hidden rounded-2xl border border-[#E5E7EB]">
                        <img
                            src="/assets/images/evidence-pot.jpg"
                            alt="Giá thể cũ giữ nước mầm bệnh"
                            className="w-full h-64 object-cover transition-transform group-hover:scale-[1.02]"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-3 rounded-b-2xl">
                            <p className="text-white text-sm font-medium drop-shadow">Giá thể cũ giữ nước mầm bệnh</p>
                        </div>
                    </div>
                </div>
            </div>

            <p className="text-center text-xs text-[#6B7280] mt-5">
                Nhấn vào ảnh để xem kích thước đầy đủ
            </p>
        </div>
    );
}