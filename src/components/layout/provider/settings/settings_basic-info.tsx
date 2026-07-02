import React from 'react';

export default function SettingsBasicInfo() {
    return (
        <div className="bg-white rounded-[20px] p-6 shadow-sm border border-[#E5E7EB]">
            <h2 className="text-[16px] font-bold text-[#1F2937] mb-5">Thông tin cơ bản</h2>

            <div className="space-y-4">
                <div>
                    <label htmlFor="gardenName" className="block text-[13px] font-semibold text-[#374151] mb-1.5">Tên nhà vườn</label>
                    <input
                        id="gardenName"
                        type="text"
                        title="Tên nhà vườn"
                        placeholder="Nhập tên nhà vườn"
                        defaultValue="Hoa Lan Sài Gòn"
                        className="w-full h-11 px-4 rounded-xl border border-[#D1D5DB] bg-[#FAFAFA] focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all text-[14px] text-[#1F2937]"
                    />
                </div>

                <div>
                    <label htmlFor="bio" className="block text-[13px] font-semibold text-[#374151] mb-1.5">Giới thiệu (Bio)</label>
                    <textarea
                        id="bio"
                        title="Giới thiệu"
                        rows={4}
                        placeholder="Nhập giới thiệu về nhà vườn của bạn"
                        defaultValue="Chuyên cung cấp và chăm sóc các loại lan rừng đột biến cao cấp. Đội ngũ kỹ sư nông nghiệp với hơn 10 năm kinh nghiệm."
                        className="w-full p-4 rounded-xl border border-[#D1D5DB] bg-[#FAFAFA] focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all text-[14px] text-[#1F2937] resize-none"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="contactPhone" className="block text-[13px] font-semibold text-[#374151] mb-1.5">Số điện thoại liên hệ</label>
                        <input
                            id="contactPhone"
                            type="text"
                            title="Số điện thoại liên hệ"
                            placeholder="Nhập số điện thoại liên hệ"
                            defaultValue="090 123 4567"
                            className="w-full h-11 px-4 rounded-xl border border-[#D1D5DB] bg-[#FAFAFA] focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all text-[14px] text-[#1F2937]"
                        />
                    </div>
                    <div>
                        <label htmlFor="contactEmail" className="block text-[13px] font-semibold text-[#374151] mb-1.5">Email</label>
                        <input
                            id="contactEmail"
                            type="email"
                            title="Địa chỉ email liên hệ"
                            placeholder="Nhập email liên hệ"
                            defaultValue="contact@hoalansaigon.vn"
                            className="w-full h-11 px-4 rounded-xl border border-[#D1D5DB] bg-[#FAFAFA] focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all text-[14px] text-[#1F2937]"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
