'use client';

import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useAuthStore } from '../../stores/useAuthStore';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const router = useRouter();
    const pathname = usePathname();

    const { user, isAuthenticated } = useAuthStore();

    const adminRoutes = [
        '/dashboard',
        '/provider-approval',
        '/categories',
        '/transactions'
    ];

    useEffect(() => {
        if (!isAuthenticated) {
            router.replace('/login');
            return;
        }

        if (user?.role !== 'ADMIN') {
            router.replace('/');
            return;
        }

        const isAllowedRoute = adminRoutes.some((route) =>
            pathname === route || pathname.startsWith(route + '/')
        );

        if (!isAllowedRoute) {
            router.replace('/dashboard');
        }
    }, [user, isAuthenticated, pathname, router]);

    if (!isAuthenticated || user?.role !== 'ADMIN') {
        return null;
    }

    return <>{children}</>;
}