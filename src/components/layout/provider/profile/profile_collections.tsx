import React from 'react';
import Image from 'next/image';

export default function ProfileCollections() {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#E5E7EB]">
            <div className="flex justify-between items-center mb-5">
                <h3 className="font-bold text-[#1F2937] text-[16px]">Bộ sưu tập & Dự án</h3>
                <button className="text-[13px] font-bold text-[#6D28D9] hover:underline">Xem tất cả</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="aspect-square rounded-xl overflow-hidden bg-gray-100 border border-gray-100">
                    <Image
                        src="/assets/images/project-1.png"
                        alt="Dự án 1"
                        width={400}
                        height={400}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                </div>
                <div className="aspect-square rounded-xl overflow-hidden bg-gray-100 border border-gray-100">
                    <Image
                        src="/assets/images/project-2.png"
                        alt="Dự án 2"
                        width={400}
                        height={400}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                </div>
                <div className="aspect-square rounded-xl overflow-hidden bg-gray-100 border border-gray-100">
                    <Image
                        src="/assets/images/project-3.png"
                        alt="Dự án 3"
                        width={400}
                        height={400}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                </div>
            </div>
        </div>
    );
}
