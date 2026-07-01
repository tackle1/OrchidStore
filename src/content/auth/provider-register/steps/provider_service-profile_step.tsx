'use client';

import {
    Briefcase,
    UploadCloud,
    MapPin,
    Award,
} from 'lucide-react';

export default function ProviderServiceProfileStep() {
    return (
        <div className="px-10 py-8">

            {/* TITLE */}
            <div className="flex items-center gap-2 mb-8">
                <Briefcase className="w-5 h-5 text-[#6D28D9]" />

                <h2 className="text-[20px] font-bold text-[#111827]">
                    Hồ sơ dịch vụ
                </h2>
            </div>

            {/* EXPERIENCE */}
            <div className="grid grid-cols-2 gap-6">

                <div>
                    <label className="block mb-2 text-[13px] font-medium text-[#4B5563]">
                        Số năm kinh nghiệm
                    </label>

                    <input
                        type="number"
                        placeholder="Ví dụ: 5"
                        className="w-full h-[52px] border border-[#D8D1E6] rounded-[12px] px-4 text-[14px]"
                    />
                </div>

                <div>
                    <label className="block mb-2 text-[13px] font-medium text-[#4B5563]">
                        Khu vực phục vụ
                    </label>

                    <input
                        type="text"
                        placeholder="TP.HCM, Bình Dương..."
                        className="w-full h-[52px] border border-[#D8D1E6] rounded-[12px] px-4 text-[14px]"
                    />
                </div>
            </div>

            {/* SPECIALIZATION */}
            <div className="mt-6">

                <label className="block mb-3 text-[13px] font-medium text-[#4B5563]">
                    Chuyên môn chăm sóc
                </label>

                <div className="grid grid-cols-2 gap-3">

                    <label className="flex items-center gap-3 border border-[#E5E7EB] rounded-xl p-4 cursor-pointer">
                        <input type="checkbox" />
                        Lan Hồ Điệp
                    </label>

                    <label className="flex items-center gap-3 border border-[#E5E7EB] rounded-xl p-4 cursor-pointer">
                        <input type="checkbox" />
                        Lan Dendro
                    </label>

                    <label className="flex items-center gap-3 border border-[#E5E7EB] rounded-xl p-4 cursor-pointer">
                        <input type="checkbox" />
                        Lan Cattleya
                    </label>

                    <label className="flex items-center gap-3 border border-[#E5E7EB] rounded-xl p-4 cursor-pointer">
                        <input type="checkbox" />
                        Lan Rừng
                    </label>
                </div>
            </div>

            {/* SERVICES */}
            <div className="mt-8">

                <label className="block mb-3 text-[13px] font-medium text-[#4B5563]">
                    Dịch vụ cung cấp
                </label>

                <div className="space-y-3">

                    <label className="flex items-center gap-3 border border-[#E5E7EB] rounded-xl p-4">
                        <input type="checkbox" />
                        Chăm sóc tại nhà vườn
                    </label>

                    <label className="flex items-center gap-3 border border-[#E5E7EB] rounded-xl p-4">
                        <input type="checkbox" />
                        Chăm sóc tận nơi
                    </label>

                    <label className="flex items-center gap-3 border border-[#E5E7EB] rounded-xl p-4">
                        <input type="checkbox" />
                        Điều trị bệnh cho lan
                    </label>

                    <label className="flex items-center gap-3 border border-[#E5E7EB] rounded-xl p-4">
                        <input type="checkbox" />
                        Tư vấn kỹ thuật
                    </label>

                </div>
            </div>

            {/* DESCRIPTION */}
            <div className="mt-8">

                <label className="block mb-2 text-[13px] font-medium text-[#4B5563]">
                    Giới thiệu bản thân
                </label>

                <textarea
                    rows={6}
                    placeholder="Mô tả kinh nghiệm, quy trình chăm sóc, điểm nổi bật..."
                    className="w-full border border-[#D8D1E6] rounded-[12px] p-4 text-[14px] resize-none"
                />
            </div>

            {/* CERTIFICATE */}
            <div className="mt-8">

                <div className="flex items-center gap-2 mb-3">
                    <Award className="w-4 h-4 text-[#6D28D9]" />

                    <h3 className="font-semibold text-[#111827]">
                        Chứng chỉ / Giấy phép
                    </h3>
                </div>

                <textarea
                    rows={3}
                    placeholder="Liệt kê chứng chỉ chuyên môn nếu có..."
                    className="w-full border border-[#D8D1E6] rounded-[12px] p-4 text-[14px] resize-none"
                />
            </div>

            {/* PORTFOLIO */}
            <div className="mt-8">

                <div className="flex items-center gap-2 mb-3">
                    <UploadCloud className="w-4 h-4 text-[#6D28D9]" />

                    <h3 className="font-semibold text-[#111827]">
                        Portfolio & Hình ảnh
                    </h3>
                </div>

                <div className="border-2 border-dashed border-[#D8D1E6] rounded-[16px] h-[220px] flex flex-col items-center justify-center">

                    <UploadCloud className="w-10 h-10 text-[#9CA3AF]" />

                    <p className="mt-3 text-[14px] font-medium text-[#374151]">
                        Tải hình ảnh vườn lan hoặc công việc đã thực hiện
                    </p>

                    <p className="mt-1 text-[12px] text-[#9CA3AF]">
                        PNG, JPG tối đa 10MB
                    </p>
                </div>
            </div>

            {/* NEXT STEP PREVIEW */}
            <div className="mt-10 pt-8 border-t border-[#F0EDF7]">

                <div className="flex items-center gap-2 opacity-50">
                    <Award className="w-5 h-5" />

                    <h3 className="text-[18px] font-semibold">
                        Xác minh hồ sơ
                    </h3>
                </div>

                <p className="mt-3 text-[13px] text-[#9CA3AF]">
                    Bước tiếp theo yêu cầu upload CCCD, giấy phép kinh doanh
                    hoặc các giấy tờ xác thực Provider.
                </p>
            </div>
        </div>
    );
}