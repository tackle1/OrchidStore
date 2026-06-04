'use client';

import { User, Briefcase, Info } from 'lucide-react';

export default function ProviderBasicInfoStep() {
    return (
        <div className="px-10 py-8">

            {/* ALERT */}
            <div className="bg-[#F5EEFF] border-l-[4px] border-[#6D28D9] rounded-[10px] px-5 py-4 flex gap-3 mb-9">
                <Info className="w-5 h-5 text-[#6D28D9] flex-shrink-0 mt-[1px]" />

                <p className="text-[13px] leading-[22px] text-[#5B5567]">
                    <span className="font-semibold">
                        Lưu ý:
                    </span>{' '}
                    Hồ sơ Provider sẽ được Admin xét duyệt trước khi activation.
                    Quá trình này có thể mất từ 1–3 ngày làm việc để đảm bảo chất lượng dịch vụ.
                </p>
            </div>

            {/* SECTION TITLE */}
            <div className="flex items-center gap-2 mb-7">
                <User className="w-4 h-4 text-[#6D28D9]" />

                <h2 className="text-[20px] font-bold text-[#111827]">
                    Thông tin cơ bản
                </h2>
            </div>

            {/* FORM */}
            <div className="grid grid-cols-2 gap-6">

                <div>
                    <label
                        htmlFor="providerType"
                        className=" block text-[13px] font-medium text-[#4B5563] mb-2"
                    >
                        Loại hình hoạt động
                    </label>

                    <select
                        id="providerType"
                        className="custom-select w-full h-[52px] border border-[#D8D1E6] rounded-[12px] px-4 pr-10 text-[14px] outline-none"
                    >
                        <option>Cá nhân</option>
                        <option>Nhà vườn</option>
                        <option>Doanh nghiệp</option>
                    </select>
                </div>

                <div>
                    <label className="block text-[13px] font-medium text-[#4B5563] mb-2">
                        Tên Provider / Tên vườn
                    </label>

                    <input
                        type="text"
                        placeholder="Nhập tên hiển thị"
                        className="w-full h-[52px] border border-[#D8D1E6] rounded-[12px] px-4 text-[14px] outline-none"
                    />
                </div>

                <div>
                    <label className="block text-[13px] font-medium text-[#4B5563] mb-2">
                        Người đại diện
                    </label>

                    <input
                        type="text"
                        placeholder="Họ và tên đầy đủ"
                        className="w-full h-[52px] border border-[#D8D1E6] rounded-[12px] px-4 text-[14px] outline-none"
                    />
                </div>

                <div>
                    <label className="block text-[13px] font-medium text-[#4B5563] mb-2">
                        Số điện thoại liên hệ
                    </label>

                    <input
                        type="text"
                        placeholder="09xx xxx xxx"
                        className="w-full h-[52px] border border-[#D8D1E6] rounded-[12px] px-4 text-[14px] outline-none"
                    />
                </div>
            </div>

            {/* ADDRESS */}
            <div className="mt-6">
                <label className="block text-[13px] font-medium text-[#4B5563] mb-2">
                    Địa chỉ chi tiết
                </label>

                <textarea
                    placeholder="Số nhà, đường, phường/xã, quận/huyện, tỉnh/thành phố"
                    className="w-full h-[120px] border border-[#D8D1E6] rounded-[12px] p-4 text-[14px] resize-none outline-none"
                />
            </div>

            {/* NEXT STEP PREVIEW */}
            <div className="mt-10 pt-8 border-t border-[#F0EDF7]">
                <div className="flex items-center gap-2 opacity-40">
                    <Briefcase className="w-5 h-5" />

                    <h3 className="text-[18px] font-semibold">
                        Hồ sơ dịch vụ
                    </h3>
                </div>

                <p className="mt-3 text-[13px] text-[#9CA3AF]">
                    Vui lòng hoàn thành bước 1 để tiếp tục đến hồ sơ dịch vụ
                    (kinh nghiệm, loại lan chuyên môn, upload portfolio).
                </p>
            </div>
        </div>
    );
}