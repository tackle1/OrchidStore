'use client';

import { ArrowLeft, RefreshCw, Shield } from 'lucide-react';
import ForgotPasswordForm from '../../components/form/forgot_password_form';
import Link from 'next/link';

export default function ForgotPasswordUI() {
    return (
        <div className="relative min-h-screen flex items-center justify-center bg-[#F8F9FC] px-4 overflow-hidden">

            {/* ==================== BACKGROUND DECORATION ==================== */}
            {/* Vòng tròn tím nhạt góc trên bên phải */}
            <div className="absolute top-[-100px] right-[-80px] w-[350px] h-[350px] bg-purple-200 rounded-full blur-[120px] opacity-40" />

            {/* Vòng tròn xanh nhạt góc dưới bên trái */}
            <div className="absolute bottom-[-120px] left-[-100px] w-[320px] h-[320px] bg-green-200 rounded-full blur-[110px] opacity-40" />

            {/* ==================== MAIN CONTENT ==================== */}
            <div className="relative z-10 w-full max-w-[400px]">

                {/* Card */}
                <div className="bg-white rounded-3xl shadow-xl p-8">

                    {/* Icon */}
                    <div className="flex justify-center mb-6">
                        <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center">
                            <RefreshCw className="w-7 h-7 text-purple-600" />
                        </div>
                    </div>

                    {/* Title & Description */}
                    <div className="text-center mb-8">
                        <h1 className="text-2xl font-bold text-gray-900">Quên mật khẩu</h1>
                        <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                            Nhập email hoặc số điện thoại đã đăng ký.<br />
                            Chúng tôi sẽ gửi hướng dẫn đặt lại mật khẩu cho bạn.
                        </p>
                    </div>

                    {/* Form */}
                    <ForgotPasswordForm />

                    {/* Quay lại đăng nhập */}
                    <div className="mt-6 text-center">
                        <Link
                            href="/login"
                            className="inline-flex items-center gap-2 text-sm text-green-600 hover:text-green-700 font-medium"
                        >
                            <ArrowLeft size={16} />
                            Quay lại đăng nhập
                        </Link>
                    </div>
                </div>

                {/* Footer */}
                <div className="text-center mt-6 text-xs text-gray-500 flex items-center justify-center gap-2">
                    <div className="flex items-center gap-1">
                        <Shield className="w-3.5 h-3.5 text-green-600" />
                        <span>Bảo mật 100%</span>
                    </div>
                    <span>•</span>
                    <span>Hỗ trợ 24/7</span>
                </div>
            </div>
        </div>
    );
}