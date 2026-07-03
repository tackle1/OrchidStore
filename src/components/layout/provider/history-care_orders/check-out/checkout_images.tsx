import React from 'react';
import Image from 'next/image';
import { Camera, Upload, ImagePlus } from 'lucide-react';

export default function CheckoutImages() {
    return (
        <div className="bg-white rounded-[20px] p-6 shadow-sm border border-[#E5E7EB]">
            <div className="flex justify-between items-center mb-5">
                <div className="flex items-center gap-2">
                    <Camera className="w-5 h-5 text-[#6D28D9]" />
                    <h2 className="text-[18px] font-bold text-[#1F2937]">Hình ảnh bàn giao</h2>
                </div>
                <button className="flex items-center gap-1.5 text-[#6D28D9] font-bold text-[14px] hover:underline">
                    <Upload className="w-4 h-4" />
                    Tải ảnh lên
                </button>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="col-span-2 row-span-2 aspect-square rounded-[16px] overflow-hidden bg-gray-100">
                    <Image src="/assets/images/delivery-1.png" width={400} height={400} className="w-full h-full object-cover" alt="Main" />
                </div>
                <div className="col-span-1 aspect-square rounded-[16px] overflow-hidden bg-gray-100">
                    <Image src="/assets/images/delivery-2.png" width={200} height={200} className="w-full h-full object-cover" alt="Sub 1" />
                </div>
                <div className="col-span-1 aspect-square rounded-[16px] overflow-hidden bg-gray-100">
                    <Image src="/assets/images/delivery-3.png" width={200} height={200} className="w-full h-full object-cover" alt="Sub 2" />
                </div>
            </div>

            <div className="w-[140px] aspect-square rounded-[16px] border border-dashed border-[#C4B5FD] bg-white flex flex-col items-center justify-center cursor-pointer hover:bg-[#F5F3FF] transition-colors text-[#6B7280]">
                <ImagePlus className="w-6 h-6 mb-2" />
                <span className="text-[13px] font-medium">Thêm ảnh</span>
            </div>
        </div>
    );
}
