'use client';
import { User2 } from 'lucide-react';
export default function ContactAddressForm() {
    return (
        <div className="bg-white rounded-3xl border border-[#E5E7EB] p-6">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
                <span>
                    <User2 className='w-4 h-4 text-[#6D28D9]' />
                </span> Thông tin liên hệ & Địa chỉ
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium mb-1">Họ tên *</label>
                    <input type="text" placeholder="Nguyễn Văn A" className="w-full border border-[#E5E7EB] rounded-xl px-4 py-2.5" />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Số điện thoại *</label>
                    <input type="tel" placeholder="0912 345 678" className="w-full border border-[#E5E7EB] rounded-xl px-4 py-2.5" />
                </div>
            </div>

            <div className="mt-4">
                <label className="block text-sm font-medium mb-1">Địa chỉ nhận/trả cây *</label>
                <input type="text" placeholder="Số nhà, tên đường, phường/xã..." className="w-full border border-[#E5E7EB] rounded-xl px-4 py-2.5" />
            </div>
        </div>
    );
}