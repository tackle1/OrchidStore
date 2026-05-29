'use client';

import { useState } from 'react';
import {
    User,
    Briefcase,
    ShieldCheck,
    Send,
    Info,
} from 'lucide-react';

export default function ProviderRegisterForm() {
    const [currentStep, setCurrentStep] = useState(1);

    const nextStep = () => {
        if (currentStep < 4) {
            setCurrentStep((prev) => prev + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep((prev) => prev - 1);
        }
    };

    return (
        <div className="min-h-screen bg-[#F5F3FA] py-10 px-6">
            <div className="max-w-[980px] mx-auto">

                {/* HEADER */}
                <div className="text-center">
                    <h1 className="text-[48px] leading-[54px] font-extrabold tracking-[-1px] text-[#6D28D9]">
                        Trở thành Provider
                    </h1>

                    <p className="mt-3 text-[15px] leading-[26px] text-[#6B7280] max-w-[720px] mx-auto">
                        Tham gia mạng lưới chuyên gia chăm sóc lan cao cấp. Chia sẻ kiến thức,
                        dịch vụ và phát triển thương hiệu cùng LanCare Hub.
                    </p>
                </div>

                {/* CARD */}
                <div className="mt-10 bg-white border border-[#ECE8F5] rounded-[22px] overflow-hidden shadow-sm">

                    {/* STEPPER */}
                    <div className="h-[74px] border-b border-[#ECE8F5] bg-[#FBFAFE] px-10 flex items-center">

                        <div className="flex items-center w-full">

                            {/* STEP 1 */}
                            <div className="flex items-center gap-3">
                                <div className="w-7 h-7 rounded-full bg-[#6D28D9] text-white text-[13px] font-semibold flex items-center justify-center">
                                    1
                                </div>

                                <span className="text-[13px] font-semibold text-[#6D28D9] whitespace-nowrap">
                                    Thông tin cơ bản
                                </span>
                            </div>

                            <div className="flex-1 h-[1px] bg-[#E6E0F0] mx-6" />

                            {/* STEP 2 */}
                            <div className="flex items-center gap-3">
                                <div className="w-7 h-7 rounded-full border border-[#D8D1E6] text-[#9CA3AF] text-[13px] flex items-center justify-center">
                                    2
                                </div>

                                <span className="text-[13px] text-[#9CA3AF] whitespace-nowrap">
                                    Hồ sơ dịch vụ
                                </span>
                            </div>

                            <div className="flex-1 h-[1px] bg-[#E6E0F0] mx-6" />

                            {/* STEP 3 */}
                            <div className="flex items-center gap-3">
                                <div className="w-7 h-7 rounded-full border border-[#D8D1E6] text-[#9CA3AF] text-[13px] flex items-center justify-center">
                                    3
                                </div>

                                <span className="text-[13px] text-[#9CA3AF] whitespace-nowrap">
                                    Xác minh
                                </span>
                            </div>

                            <div className="flex-1 h-[1px] bg-[#E6E0F0] mx-6" />

                            {/* STEP 4 */}
                            <div className="flex items-center gap-3">
                                <div className="w-7 h-7 rounded-full border border-[#D8D1E6] text-[#9CA3AF] text-[13px] flex items-center justify-center">
                                    4
                                </div>

                                <span className="text-[13px] text-[#9CA3AF] whitespace-nowrap">
                                    Gửi xét duyệt
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* BODY */}
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

                            {/* TYPE */}
                            <div>
                                <label htmlFor="providerType" className="block text-[13px] font-medium text-[#4B5563] mb-2">
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

                            {/* PROVIDER NAME */}
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

                            {/* CONTACT */}
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

                            {/* PHONE */}
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

                        {/* NEXT SECTION PREVIEW */}
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

                    {/* FOOTER */}
                    <div className="h-[88px] border-t border-[#ECE8F5] px-10 flex items-center justify-end gap-4 bg-white">

                        <button className="text-[14px] font-semibold text-[#16A34A]">
                            Lưu nháp
                        </button>

                        <button
                            onClick={nextStep}
                            className="h-[46px] px-7 rounded-full bg-[#6D28D9] hover:bg-[#5B21B6] text-white text-[14px] font-semibold"
                        >
                            Tiếp tục →
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}