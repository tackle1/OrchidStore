'use client';

import React, { useState } from 'react';
import { EyeOff, Eye, Flower2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import ForgetPasswordLink from '../../app/(auth)/forgot-password/forget_route';
import { useLogin } from '../../hooks/useLogin';

export default function LoginForm() {
    const { handleLogin } = useLogin();

    const [formData, setFormData] = useState({
        emailOrPhone: '',
        password: '',
        rememberMe: false,
    });

    // Thêm state để toggle mật khẩu
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await handleLogin(
                formData.emailOrPhone,
                formData.password
            );
        } catch (error) {
            if (error instanceof Error) {
                alert(error.message);
            }
        }
    };

    return (
        <div className="min-h-screen bg-[#F6F4FB] flex items-center justify-center px-6">
            <div className="w-full max-w-[430px] bg-white rounded-[28px] border border-[#ECE8F5] shadow-[0_10px_40px_rgba(17,24,39,0.05)] px-7 pt-8 pb-7">

                {/* LOGO */}
                <div className="flex items-center justify-center gap-2 mb-9">
                    <Flower2 className="w-[24px] h-[24px] text-[#6D28D9] fill-[#6D28D9]" />

                    <h1 className="text-[17px] font-bold tracking-[-0.3px] text-[#6D28D9]">
                        LanCare Hub
                    </h1>
                </div>

                {/* HEADER */}
                <div>
                    <h2 className="text-[32px] leading-[20px] tracking-[-1.5px] font-extrabold text-[#111827]">
                        Đăng nhập
                    </h2>

                    <p className="mt-2 text-[14px] leading-[22px] text-[#6B7280]">
                        Chào mừng bạn trở lại với khu vườn của mình.
                    </p>
                </div>

                {/* FORM */}
                <form onSubmit={onSubmit} className="mt-8">

                    {/* EMAIL */}
                    <div>
                        <label className="block text-[13px] font-medium text-[#4B5563] mb-2">
                            Email hoặc số điện thoại
                        </label>

                        <input
                            type="text"
                            name="emailOrPhone"
                            value={formData.emailOrPhone}
                            onChange={handleChange}
                            placeholder="Nhập email hoặc số điện thoại"
                            className="w-full h-[50px] border border-[#D9D3E5] rounded-[12px] px-4 text-[14px] text-[#111827] placeholder:text-[#B6AFC7] outline-none bg-white"
                        />
                    </div>

                    {/* PASSWORD */}
                    <div className="mt-5">
                        <label className="block text-[13px] font-medium text-[#4B5563] mb-2">
                            Mật khẩu
                        </label>

                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Nhập mật khẩu của bạn"
                                className="w-full h-[50px] border border-[#D9D3E5] rounded-[12px] px-4 pr-12 text-[14px] text-[#111827] placeholder:text-[#B6AFC7] outline-none bg-white"
                            />

                            {/* Nút Toggle Password */}
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                title={showPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
                                aria-label="Toggle password visibility"
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8D88A1] hover:text-[#6B7280] transition-colors"
                            >
                                {showPassword ? (
                                    <Eye className="w-[18px] h-[18px]" />
                                ) : (
                                    <EyeOff className="w-[18px] h-[18px]" />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* OPTIONS */}
                    <div className="mt-5 flex items-center justify-between">

                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                name="rememberMe"
                                checked={formData.rememberMe}
                                onChange={handleChange}
                                className="w-[15px] h-[15px] rounded border-[#D6D0E3]"
                            />

                            <span className="text-[13px] text-[#6B7280]">
                                Ghi nhớ đăng nhập
                            </span>
                        </label>

                        <ForgetPasswordLink className="text-[13px] font-semibold text-[#6D28D9] hover:underline" />
                    </div>

                    {/* LOGIN BUTTON */}
                    <button
                        type="submit"
                        className="mt-6 w-full h-[50px] rounded-[12px] bg-[#6D28D9] hover:bg-[#5B21B6] text-white text-[15px] font-semibold shadow-[0_10px_24px_rgba(109,40,217,0.28)] transition-all"
                    >
                        Đăng nhập
                    </button>

                    {/* DIVIDER */}
                    <div className="mt-7 flex items-center gap-3">
                        <div className="flex-1 h-px bg-[#E8E3F0]" />

                        <span className="text-[12px] text-[#9CA3AF]">
                            hoặc
                        </span>

                        <div className="flex-1 h-px bg-[#E8E3F0]" />
                    </div>

                    {/* GOOGLE */}
                    <button
                        type="button"
                        className="mt-6 w-full h-[50px] border border-[#D9D3E5] rounded-[12px] bg-white hover:bg-[#FAFAFC] flex items-center justify-center gap-3 transition-all"
                    >
                        <Image
                            src="/assets/icons/google-logo.png"
                            alt="Google"
                            width={38}
                            height={38}
                        />

                        <span className="text-[14px] font-semibold text-[#374151]">
                            Đăng nhập bằng Google
                        </span>
                    </button>
                </form>

                {/* FOOTER */}
                <div className="mt-8 text-center">
                    <p className="text-[14px] text-[#6B7280]">
                        Chưa có tài khoản?{' '}
                        <Link
                            href="/register/customer"
                            className="text-[#6D28D9] font-semibold hover:underline"
                        >
                            Đăng ký
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}