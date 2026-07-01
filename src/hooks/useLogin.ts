'use client';

import { useRouter } from 'next/navigation';
import { useAuthStore } from '../stores/useAuthStore';

export const useLogin = () => {
    const router = useRouter();
    const login = useAuthStore((state) => state.login);

    const mockAccounts = [
        {
            id: '1',
            name: 'Customer Demo',
            email: 'ngodoandat123@gmail.com',
            password: 'Dat@857241',
            role: 'CUSTOMER' as const,
            redirectPath: '/home-marketplace',
        },
        {
            id: '2',
            name: 'Provider Demo',
            email: 'provider@lancare.com.vn',
            password: 'Provider@123456',
            role: 'PROVIDER' as const,
            redirectPath: '/management-homepage',
        },
        {
            id: '3',
            name: 'Admin Demo',
            email: 'admin@lancare.com.vn',
            password: 'Admin@123456',
            role: 'ADMIN' as const,
            redirectPath: '/dashboard',
        },
    ];

    const handleLogin = async (
        email: string,
        password: string
    ) => {
        const account = mockAccounts.find(
            (user) =>
                user.email === email &&
                user.password === password
        );

        if (!account) {
            throw new Error('Email hoặc mật khẩu không đúng');
        }

        login({
            id: account.id,
            name: account.name,
            email: account.email,
            role: account.role,
        });

        router.push(account.redirectPath);
    };

    return {
        handleLogin,
    };
};