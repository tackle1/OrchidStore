'use client';

import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useAuthStore } from '../../stores/useAuthStore';

export default function ProviderLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const router = useRouter();
    const pathname = usePathname();

    const { user, isAuthenticated } = useAuthStore();

    // Danh sách các route được phép (bao gồm cả route con)
    const providerRoutes = [
        '/management-homepage',
        '/service-packages',           // Bao gồm cả /service-packages/create
        '/history-care_orders',
        '/profile',
        '/settings',
    ];

    useEffect(() => {
        // Chưa đăng nhập → về login
        if (!isAuthenticated) {
            router.replace('/login');
            return;
        }

        // Không phải PROVIDER → về trang chủ
        if (user?.role !== 'PROVIDER') {
            router.replace('/');
            return;
        }

        // Kiểm tra route có được phép không (hỗ trợ route con)
        const isAllowedRoute = providerRoutes.some((route) =>
            pathname === route || pathname.startsWith(route + '/')
        );

        // Nếu không được phép → chuyển về /management-homepage
        if (!isAllowedRoute) {
            router.replace('/management-homepage');
        }
    }, [user, isAuthenticated, pathname, router]);

    // Chưa xác thực xong thì không render gì
    if (!isAuthenticated || user?.role !== 'PROVIDER') {
        return null;
    }

    return <>{children}</>;
}