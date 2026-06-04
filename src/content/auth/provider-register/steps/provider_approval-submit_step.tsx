'use client';

import {
    Send,
    User,
    Briefcase,
    ShieldCheck,
    CheckCircle2,
} from 'lucide-react';

export default function ProviderSubmitStep() {
    return (
        <div className="px-10 py-8">

            {/* TITLE */}
            <div className="flex items-center gap-2 mb-8">
                <Send className="w-5 h-5 text-[#6D28D9]" />

                <h2 className="text-[20px] font-bold text-[#111827]">
                    Gửi xét duyệt hồ sơ
                </h2>
            </div>

            {/* SUCCESS INFO */}
            <div className="mb-8 rounded-[16px] border border-[#D1FAE5] bg-[#ECFDF5] px-5 py-4">

                <div className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#16A34A] mt-[2px]" />

                    <div>
                        <h3 className="text-[14px] font-semibold text-[#166534]">
                            Hồ sơ đã hoàn tất
                        </h3>

                        <p className="mt-1 text-[13px] leading-[22px] text-[#166534]">
                            Vui lòng kiểm tra lại toàn bộ thông tin trước khi
                            gửi cho Admin xét duyệt.
                        </p>
                    </div>
                </div>
            </div>

            {/* BASIC INFO */}
            <div className="border border-[#ECE8F5] rounded-[18px] mb-6">

                <div className="h-[56px] px-6 border-b border-[#ECE8F5] flex items-center gap-2 bg-[#FBFAFE]">

                    <User className="w-4 h-4 text-[#6D28D9]" />

                    <h3 className="font-semibold text-[#111827]">
                        Thông tin cơ bản
                    </h3>
                </div>

                <div className="p-6">

                    <div className="grid grid-cols-2 gap-y-5">

                        <div>
                            <p className="text-[12px] text-[#9CA3AF]">
                                Loại hình
                            </p>

                            <p className="text-[14px] font-medium">
                                Nhà vườn
                            </p>
                        </div>

                        <div>
                            <p className="text-[12px] text-[#9CA3AF]">
                                Tên Provider
                            </p>

                            <p className="text-[14px] font-medium">
                                Orchid Garden
                            </p>
                        </div>

                        <div>
                            <p className="text-[12px] text-[#9CA3AF]">
                                Người đại diện
                            </p>

                            <p className="text-[14px] font-medium">
                                Nguyễn Văn A
                            </p>
                        </div>

                        <div>
                            <p className="text-[12px] text-[#9CA3AF]">
                                Số điện thoại
                            </p>

                            <p className="text-[14px] font-medium">
                                0901234567
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* SERVICE PROFILE */}
            <div className="border border-[#ECE8F5] rounded-[18px] mb-6">

                <div className="h-[56px] px-6 border-b border-[#ECE8F5] flex items-center gap-2 bg-[#FBFAFE]">

                    <Briefcase className="w-4 h-4 text-[#6D28D9]" />

                    <h3 className="font-semibold text-[#111827]">
                        Hồ sơ dịch vụ
                    </h3>
                </div>

                <div className="p-6 space-y-4">

                    <div>
                        <p className="text-[12px] text-[#9CA3AF]">
                            Kinh nghiệm
                        </p>

                        <p className="text-[14px] font-medium">
                            5 năm
                        </p>
                    </div>

                    <div>
                        <p className="text-[12px] text-[#9CA3AF]">
                            Chuyên môn
                        </p>

                        <p className="text-[14px] font-medium">
                            Hồ Điệp, Dendro, Cattleya
                        </p>
                    </div>

                    <div>
                        <p className="text-[12px] text-[#9CA3AF]">
                            Khu vực phục vụ
                        </p>

                        <p className="text-[14px] font-medium">
                            TP.HCM, Bình Dương
                        </p>
                    </div>

                    <div>
                        <p className="text-[12px] text-[#9CA3AF]">
                            Portfolio
                        </p>

                        <p className="text-[14px] font-medium text-[#16A34A]">
                            12 ảnh đã tải lên
                        </p>
                    </div>
                </div>
            </div>

            {/* VERIFICATION */}
            <div className="border border-[#ECE8F5] rounded-[18px]">

                <div className="h-[56px] px-6 border-b border-[#ECE8F5] flex items-center gap-2 bg-[#FBFAFE]">

                    <ShieldCheck className="w-4 h-4 text-[#6D28D9]" />

                    <h3 className="font-semibold text-[#111827]">
                        Xác minh hồ sơ
                    </h3>
                </div>

                <div className="p-6 space-y-4">

                    <div className="flex items-center justify-between">

                        <span className="text-[14px]">
                            CCCD / CMND
                        </span>

                        <span className="text-[#16A34A] font-medium text-[13px]">
                            Đã tải lên
                        </span>
                    </div>

                    <div className="flex items-center justify-between">

                        <span className="text-[14px]">
                            Ảnh xác thực
                        </span>

                        <span className="text-[#16A34A] font-medium text-[13px]">
                            Đã tải lên
                        </span>
                    </div>

                    <div className="flex items-center justify-between">

                        <span className="text-[14px]">
                            Giấy phép kinh doanh
                        </span>

                        <span className="text-[#16A34A] font-medium text-[13px]">
                            Đã tải lên
                        </span>
                    </div>

                    <div className="flex items-center justify-between">

                        <span className="text-[14px]">
                            Tài khoản ngân hàng
                        </span>

                        <span className="text-[#16A34A] font-medium text-[13px]">
                            Đã xác nhận
                        </span>
                    </div>
                </div>
            </div>

            {/* TERMS */}
            <div className="mt-8 rounded-[14px] border border-[#ECE8F5] p-5">

                <label className="flex items-start gap-3">

                    <input
                        type="checkbox"
                        className="mt-1"
                    />

                    <span className="text-[13px] leading-[22px] text-[#4B5563]">
                        Tôi xác nhận toàn bộ thông tin cung cấp là chính xác và
                        đồng ý với Điều khoản Provider của LanCare Hub.
                    </span>

                </label>
            </div>

            {/* FINAL NOTICE */}
            <div className="mt-8 rounded-[14px] border border-[#F3E8FF] bg-[#FAF5FF] px-5 py-4">

                <p className="text-[13px] leading-[22px] text-[#6B21A8]">
                    Sau khi gửi hồ sơ, Admin sẽ tiến hành xét duyệt trong vòng
                    1–3 ngày làm việc. Bạn sẽ nhận được thông báo khi hồ sơ được
                    phê duyệt hoặc yêu cầu bổ sung thông tin.
                </p>

            </div>
        </div>
    );
}