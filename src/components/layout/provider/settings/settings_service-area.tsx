import React from 'react';
import { Target } from 'lucide-react';

export default function SettingsServiceArea() {
    return (
        <div className="bg-white rounded-[20px] p-6 shadow-sm border border-[#E5E7EB]">
            <h2 className="text-[16px] font-bold text-[#1F2937] mb-5">Khu vực dịch vụ</h2>

            <div className="space-y-4">
                <div>
                    <label className="block text-[13px] font-semibold text-[#374151] mb-1.5">Bán kính phục vụ (km)</label>
                    <input
                        type="text" title="Số điện thoại liên hệ"
                        placeholder="Nhập số điện thoại" defaultValue="25"
                        className="w-full h-11 px-4 rounded-xl border border-[#D1D5DB] bg-[#FAFAFA] focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all text-[14px] text-[#1F2937]"
                    />
                </div>

                <div>
                    <label htmlFor="gardenAddress" className="block text-[13px] font-semibold text-[#374151] mb-1.5">Địa chỉ vườn</label>
                    <textarea
                        id="gardenAddress"
                        title="Địa chỉ vườn"
                        placeholder="Nhập địa chỉ vườn"
                        rows={3}
                        defaultValue="123 Đường Hoa Lan, Phường Thảo Điền, Quận 2, TP.HCM"
                        className="w-full p-4 rounded-xl border border-[#D1D5DB] bg-[#FAFAFA] focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all text-[14px] text-[#1F2937] resize-none"
                    />
                </div>

                {/* Map Preview */}
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-[#D1D5DB] bg-[#E5E7EB] mt-2 group">
                    {/* Mock map image */}
                    <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=600&h=450" alt="Map Preview" className="w-full h-full object-cover opacity-80" />

                    <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                        <button className="bg-white text-[#6D28D9] font-bold text-[13px] px-5 py-2.5 rounded-full shadow-lg flex items-center gap-2 hover:scale-105 transition-transform">
                            <Target className="w-4 h-4" />
                            Cập nhật vị trí
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
