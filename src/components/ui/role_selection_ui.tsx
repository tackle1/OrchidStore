'use client';

import { User, StoreIcon, Settings } from 'lucide-react';
import Image from 'next/image';
import './role-selection.css';

import LoginLink from '../../app/(auth)/login/login_route';
type RoleSelectionProps = {
    onCustomerClick?: () => void;
    onProviderClick?: () => void;
};

export default function RoleSelectionUI({
    onCustomerClick,
    onProviderClick,
}: RoleSelectionProps) {
    return (
        <div className="min-h-screen flex items-center justify-center px-6 py-10 bg-[#F3F4FB]">
            <div className="w-full max-w-[1200px] bg-white overflow-hidden border border-[#D9D9D9]">

                <div className="grid md:grid-cols-[500px_1fr]">

                    {/* LEFT IMAGE */}
                    <div className="relative h-[760px] hidden md:block">
                        <Image
                            src="/assets/images/hero-orchid.jpg"
                            alt="LanCare Hub"
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="bg-[#FAFAFA] px-[44px] py-[34px] flex justify-center">
                        <div className="w-full max-w-[610px]">

                            <h1 className="text-[28px] leading-[34px] font-extrabold text-[#111827] tracking-[-0.4px]">
                                Bạn muốn sử dụng LanCare<br />Hub với vai trò nào?
                            </h1>

                            <p className="mt-4 text-[13px] text-[#6B7280] leading-[20px]">
                                Vui lòng chọn vai trò phù hợp để chúng tôi cá nhân hóa trải nghiệm của bạn.
                            </p>

                            {/* ROLE CARDS - Sử dụng class từ CSS */}
                            <div className="role-container">

                                {/* CUSTOMER */}
                                <div className="role-card">
                                    <div className="w-10 h-10 rounded-[10px] flex items-center justify-center mb-5 bg-[#F5F3FF]">
                                        <User className="w-5 h-5 text-[#7C3AED]" />
                                    </div>
                                    <h3 className="text-[16px] font-semibold text-[#111827] mb-3">Khách hàng</h3>
                                    <p className="text-[13px] leading-[22px] text-[#4B5563] flex-1">
                                        Tìm và đặt dịch vụ chăm sóc hoa lan từ nhà vườn hoặc chuyên gia được xác minh.
                                    </p>
                                    <button
                                        type="button"
                                        onClick={onCustomerClick}
                                        className="mt-6 h-[46px] rounded-[8px] text-white text-[13px] font-semibold transition bg-[#7C3AED] w-full"
                                    >
                                        Đăng ký Customer →
                                    </button>
                                </div>

                                {/* PROVIDER */}
                                <div className="role-card">
                                    <div className="w-10 h-10 rounded-[10px] flex items-center justify-center mb-5 bg-[#E8F8EE]">
                                        <StoreIcon className="w-5 h-5 text-[#10B981]" />
                                    </div>
                                    <h3 className="text-[16px] font-semibold text-[#111827] mb-3">Nhà vườn / Chuyên gia</h3>
                                    <p className="text-[13px] leading-[22px] text-[#4B5563] flex-1">
                                        Tạo gói dịch vụ, nhận đơn chăm sóc, gửi báo cáo và quản lý khách hàng.
                                    </p>
                                    <button
                                        type="button"
                                        onClick={onProviderClick}
                                        className="mt-6 h-[46px] rounded-[8px] border border-[#10B981] text-[#10B981] text-[13px] font-semibold transition w-full"
                                    >
                                        Đăng ký Provider →
                                    </button>
                                </div>
                            </div>

                            {/* ADMIN CARD */}
                            <div className="admin-card role-card bg-[#F3F4FB]">
                                <div className="flex items-center gap-4 min-w-0">
                                    <div className="w-11 h-11 rounded-full bg-[#E9ECF5] flex items-center justify-center flex-shrink-0">
                                        <Settings className="w-5 h-5 text-[#4B5563]" />
                                    </div>
                                    <div>
                                        <h3 className="text-[16px] font-semibold text-[#111827]">Quản trị viên</h3>
                                        <p className="text-[12px] text-[#6B7280] leading-[18px] mt-1">
                                            Dành cho tài khoản quản trị được cấp quyền bởi hệ thống.
                                        </p>
                                    </div>
                                    <a href="#" className="text-[13px] font-semibold text-[#4F46E5] underline underline-offset-2 whitespace-nowrap">
                                        Liên hệ quản trị hệ thống
                                    </a>
                                </div>

                            </div>

                            {/* LOGIN */}
                            <div className="text-center mt-8 text-[13px] text-[#6B7280]">
                                Đã có tài khoản?{' '}
                                <LoginLink
                                    className="text-[#4F46E5] font-semibold hover:underline"
                                >
                                    Đăng nhập
                                </LoginLink>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}