'use client';

import {
    Mail,
    Lock,
    EyeOff,
    Phone,
    User,
    Leaf,
} from 'lucide-react';
import Link from 'next/link';
import LoginLink from '../../app/(auth)/login/login_route';
export default function CustomerRegisterForm() {
    return (
        <div className="min-h-screen bg-[#F4F2FA] flex items-center justify-center px-6 py-10">
            <div className="w-full max-w-[430px]">

                {/* LOGO */}
                <div className="mb-7">
                    <div className="w-9 h-9 rounded-xl bg-[#6D28D9] flex items-center justify-center shadow-sm">
                        <Leaf className="w-4 h-4 text-white fill-white" />
                    </div>

                    <h1 className="mt-3 text-[20px] font-bold text-[#5B21B6]">
                        LanCare Hub
                    </h1>
                </div>

                {/* CARD */}
                <div className="bg-white rounded-[22px] shadow-[0_8px_30px_rgba(0,0,0,0.06)] px-6 py-7 border border-[#ECE8F5]">

                    {/* HEADER */}
                    <div>
                        <h2 className="text-[32px] leading-[38px] font-extrabold tracking-[-1px] text-[#111827]">
                            Đăng ký Customer
                        </h2>

                        <p className="mt-2 text-[14px] leading-[22px] text-[#6B7280]">
                            Tạo tài khoản để trải nghiệm dịch vụ chăm sóc hoa lan cao cấp.
                        </p>
                    </div>

                    {/* FORM */}
                    <div className="mt-8 space-y-5">

                        {/* NAME */}
                        <div>
                            <label htmlFor="fullName" className="block text-[13px] font-medium text-[#4B5563] mb-2">
                                Họ và tên
                            </label>

                            <div className="h-[50px] border border-[#D9D3E5] rounded-[12px] px-4 flex items-center gap-3 bg-white">
                                <User className="w-[18px] h-[18px] text-[#8D88A1]" />

                                <input
                                    id="fullName"
                                    type="text"
                                    placeholder="Nhập họ và tên của bạn"
                                    title="Họ và tên"
                                    className="flex-1 bg-transparent outline-none text-[14px] placeholder:text-[#B6AFC7]"
                                />
                            </div>
                        </div>

                        {/* EMAIL */}
                        <div>
                            <label htmlFor="email" className="block text-[13px] font-medium text-[#4B5563] mb-2">
                                Email
                            </label>

                            <div className="h-[50px] border border-[#D9D3E5] rounded-[12px] px-4 flex items-center gap-3 bg-white">
                                <Mail className="w-[18px] h-[18px] text-[#8D88A1]" />

                                <input
                                    id="email"
                                    type="email"
                                    placeholder="ví dụ: ten@email.com"
                                    title="Email"
                                    className="flex-1 bg-transparent outline-none text-[14px] placeholder:text-[#B6AFC7]"
                                />
                            </div>
                        </div>

                        {/* PHONE */}
                        <div>
                            <label htmlFor="phone" className="block text-[13px] font-medium text-[#4B5563] mb-2">
                                Số điện thoại
                            </label>

                            <div className="h-[50px] border border-[#D9D3E5] rounded-[12px] px-4 flex items-center gap-3 bg-white">
                                <Phone className="w-[18px] h-[18px] text-[#8D88A1]" />

                                <input
                                    id="phone"
                                    type="text"
                                    placeholder="Nhập số điện thoại"
                                    title="Số điện thoại"
                                    className="flex-1 bg-transparent outline-none text-[14px] placeholder:text-[#B6AFC7]"
                                />
                            </div>
                        </div>

                        {/* PASSWORD */}
                        <div>
                            <label htmlFor="password" className="block text-[13px] font-medium text-[#4B5563] mb-2">
                                Mật khẩu
                            </label>

                            <div className="h-[50px] border border-[#D9D3E5] rounded-[12px] px-4 flex items-center gap-3 bg-white">
                                <Lock className="w-[18px] h-[18px] text-[#8D88A1]" />

                                <input
                                    id="password"
                                    type="password"
                                    placeholder="Tạo mật khẩu an toàn"
                                    title="Mật khẩu"
                                    className="flex-1 bg-transparent outline-none text-[14px] placeholder:text-[#B6AFC7]"
                                />

                                <EyeOff className="w-[18px] h-[18px] text-[#8D88A1] cursor-pointer" />
                            </div>
                        </div>

                        {/* CONFIRM PASSWORD */}
                        <div>
                            <label htmlFor="confirmPassword" className="block text-[13px] font-medium text-[#4B5563] mb-2">
                                Xác nhận mật khẩu
                            </label>

                            <div className="h-[50px] border border-[#D9D3E5] rounded-[12px] px-4 flex items-center gap-3 bg-white">
                                <Lock className="w-[18px] h-[18px] text-[#8D88A1]" />

                                <input
                                    id="confirmPassword"
                                    type="password"
                                    placeholder="Nhập lại mật khẩu"
                                    title="Xác nhận mật khẩu"
                                    className="flex-1 bg-transparent outline-none text-[14px] placeholder:text-[#B6AFC7]"
                                />

                                <EyeOff className="w-[18px] h-[18px] text-[#8D88A1] cursor-pointer" />
                            </div>
                        </div>

                        {/* CHECKBOX */}
                        <div className="flex items-start gap-3 pt-1">
                            <input
                                id="terms"
                                type="checkbox"
                                className="mt-[2px] w-[16px] h-[16px] rounded border-[#CFC7DE]"
                                title="Tôi đồng ý với Điều khoản dịch vụ và Chính sách bảo mật"
                                aria-label="Đồng ý điều khoản"
                            />

                            <label htmlFor="terms" className="text-[12.5px] leading-[20px] text-[#6B7280] cursor-pointer">
                                Tôi đồng ý với{' '}
                                <span className="text-[#6D28D9] font-medium cursor-pointer">
                                    Điều khoản dịch vụ
                                </span>{' '}
                                và{' '}
                                <span className="text-[#6D28D9] font-medium cursor-pointer">
                                    Chính sách bảo mật
                                </span>
                            </label>
                        </div>

                        {/* BUTTON */}
                        <button className="mt-1 w-full h-[54px] rounded-full bg-[#6D28D9] hover:bg-[#5B21B6] text-white text-[15px] font-semibold transition-all shadow-[0_8px_24px_rgba(109,40,217,0.28)]">
                            Tạo tài khoản →
                        </button>

                        {/* SUCCESS NOTE */}
                        <div className="bg-[#EAF9EE] border border-[#D1F1DA] rounded-[12px] px-4 py-3 flex items-center gap-2">
                            <div className="w-5 h-5 rounded-full bg-[#16A34A] flex items-center justify-center flex-shrink-0">
                                <span className="text-white text-[11px]">✓</span>
                            </div>

                            <p className="text-[12.5px] text-[#15803D] leading-[18px]">
                                Bạn có thể bắt đầu tìm dịch vụ ngay sau khi đăng ký
                            </p>
                        </div>
                    </div>

                    {/* FOOTER */}
                    <div className="mt-8 pt-6 border-t border-[#ECE8F5] text-center">
                        <p className="text-[14px] text-[#6B7280]">
                            Đã có tài khoản?{' '}
                            <LoginLink className="text-[#6D28D9] font-semibold cursor-pointer hover:underline">
                                Đăng nhập
                            </LoginLink>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}