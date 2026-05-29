'use client';

import React, { useState } from 'react';
import { Mail } from 'lucide-react';

export default function ForgotPasswordForm() {
    const [emailOrPhone, setEmailOrPhone] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Gửi hướng dẫn đến:', emailOrPhone);
        // TODO: Gọi API quên mật khẩu tại đây
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-5">

            {/* Email hoặc số điện thoại */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Email hoặc số điện thoại
                </label>
                <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                        <Mail size={18} />
                    </div>
                    <input
                        type="text"
                        value={emailOrPhone}
                        onChange={(e) => setEmailOrPhone(e.target.value)}
                        placeholder="VD: user@lancare.vn"
                        className="w-full h-[48px] border border-gray-300 rounded-xl pl-11 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                        required
                    />
                </div>
            </div>

            {/* Nút Gửi hướng dẫn */}
            <button
                type="submit"
                className="w-full h-[48px] bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl flex items-center justify-center gap-2 transition mt-2"
            >
                Gửi hướng dẫn →
            </button>
        </form>
    );
}