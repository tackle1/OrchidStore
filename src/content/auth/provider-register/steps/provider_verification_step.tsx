'use client';

import {
    ShieldCheck,
    UploadCloud,
    CreditCard,
    Landmark,
    BadgeCheck,
} from 'lucide-react';

export default function ProviderVerificationStep() {
    return (
        <div className="px-10 py-8">

            {/* TITLE */}
            <div className="flex items-center gap-2 mb-8">
                <ShieldCheck className="w-5 h-5 text-[#6D28D9]" />

                <h2 className="text-[20px] font-bold text-[#111827]">
                    Xác minh hồ sơ
                </h2>
            </div>

            {/* NOTICE */}
            <div className="mb-8 rounded-[14px] border border-[#E9D5FF] bg-[#FAF5FF] px-5 py-4">

                <p className="text-[13px] leading-[22px] text-[#6B21A8]">
                    Tất cả giấy tờ sẽ được sử dụng cho mục đích xác minh
                    Provider. Hồ sơ chỉ được kích hoạt sau khi Admin xét duyệt.
                </p>
            </div>

            {/* CCCD */}
            <div className="mb-8">

                <div className="flex items-center gap-2 mb-3">
                    <CreditCard className="w-4 h-4 text-[#6D28D9]" />

                    <h3 className="font-semibold text-[#111827]">
                        CCCD / CMND
                    </h3>
                </div>

                <div className="grid grid-cols-2 gap-5">

                    {/* Front */}
                    <div className="border-2 border-dashed border-[#D8D1E6] rounded-[16px] h-[180px] flex flex-col justify-center items-center">

                        <UploadCloud className="w-8 h-8 text-[#9CA3AF]" />

                        <p className="mt-3 text-[13px] font-medium">
                            Upload mặt trước CCCD
                        </p>

                        <p className="text-[12px] text-[#9CA3AF]">
                            JPG / PNG
                        </p>
                    </div>

                    {/* Back */}
                    <div className="border-2 border-dashed border-[#D8D1E6] rounded-[16px] h-[180px] flex flex-col justify-center items-center">

                        <UploadCloud className="w-8 h-8 text-[#9CA3AF]" />

                        <p className="mt-3 text-[13px] font-medium">
                            Upload mặt sau CCCD
                        </p>

                        <p className="text-[12px] text-[#9CA3AF]">
                            JPG / PNG
                        </p>
                    </div>
                </div>
            </div>

            {/* SELFIE */}
            <div className="mb-8">

                <div className="flex items-center gap-2 mb-3">
                    <BadgeCheck className="w-4 h-4 text-[#6D28D9]" />

                    <h3 className="font-semibold text-[#111827]">
                        Ảnh xác thực cá nhân
                    </h3>
                </div>

                <div className="border-2 border-dashed border-[#D8D1E6] rounded-[16px] h-[220px] flex flex-col items-center justify-center">

                    <UploadCloud className="w-10 h-10 text-[#9CA3AF]" />

                    <p className="mt-3 text-[14px] font-medium">
                        Upload ảnh chân dung
                    </p>

                    <p className="text-[12px] text-[#9CA3AF]">
                        Ảnh rõ mặt, không đeo khẩu trang
                    </p>
                </div>
            </div>

            {/* BUSINESS LICENSE */}
            <div className="mb-8">

                <div className="flex items-center gap-2 mb-3">
                    <ShieldCheck className="w-4 h-4 text-[#6D28D9]" />

                    <h3 className="font-semibold text-[#111827]">
                        Giấy phép kinh doanh (nếu có)
                    </h3>
                </div>

                <div className="border-2 border-dashed border-[#D8D1E6] rounded-[16px] h-[180px] flex flex-col justify-center items-center">

                    <UploadCloud className="w-8 h-8 text-[#9CA3AF]" />

                    <p className="mt-3 text-[13px] font-medium">
                        Upload giấy phép kinh doanh
                    </p>

                    <p className="text-[12px] text-[#9CA3AF]">
                        PDF / JPG / PNG
                    </p>
                </div>
            </div>

            {/* BANK ACCOUNT */}
            <div>

                <div className="flex items-center gap-2 mb-4">
                    <Landmark className="w-4 h-4 text-[#6D28D9]" />

                    <h3 className="font-semibold text-[#111827]">
                        Tài khoản nhận thanh toán
                    </h3>
                </div>

                <div className="grid grid-cols-2 gap-6">

                    <div>
                        <label className="block mb-2 text-[13px] font-medium text-[#4B5563]">
                            Tên ngân hàng
                        </label>

                        <input
                            type="text"
                            placeholder="Vietcombank"
                            className="w-full h-[52px] border border-[#D8D1E6] rounded-[12px] px-4"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 text-[13px] font-medium text-[#4B5563]">
                            Số tài khoản
                        </label>

                        <input
                            type="text"
                            placeholder="Nhập số tài khoản"
                            className="w-full h-[52px] border border-[#D8D1E6] rounded-[12px] px-4"
                        />
                    </div>

                    <div className="col-span-2">
                        <label className="block mb-2 text-[13px] font-medium text-[#4B5563]">
                            Chủ tài khoản
                        </label>

                        <input
                            type="text"
                            placeholder="Nguyễn Văn A"
                            className="w-full h-[52px] border border-[#D8D1E6] rounded-[12px] px-4"
                        />
                    </div>
                </div>
            </div>

            {/* NEXT STEP PREVIEW */}
            <div className="mt-10 pt-8 border-t border-[#F0EDF7]">

                <div className="flex items-center gap-2 opacity-50">
                    <ShieldCheck className="w-5 h-5" />

                    <h3 className="text-[18px] font-semibold">
                        Gửi xét duyệt
                    </h3>
                </div>

                <p className="mt-3 text-[13px] text-[#9CA3AF]">
                    Bước cuối cùng sẽ hiển thị toàn bộ hồ sơ để bạn
                    kiểm tra trước khi gửi cho Admin xét duyệt.
                </p>
            </div>
        </div>
    );
}