'use client';

import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useAuthStore } from '../../stores/useAuthStore';

export default function CustomerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const router = useRouter();
    const pathname = usePathname();

    const { user, isAuthenticated } = useAuthStore();

    const customerRoutes = [
        '/home-marketplace',
    ];

    useEffect(() => {
        if (!isAuthenticated) {
            router.replace('/login');
            return;
        }

        if (user?.role !== 'CUSTOMER') {
            router.replace('/');
            return;
        }

        const isAllowedRoute = customerRoutes.some((route) =>
            pathname.startsWith(route)
        );

        if (!isAllowedRoute) {
            router.replace('/home-marketplace');
        }
    }, [user, isAuthenticated, pathname, router]);

    if (!isAuthenticated || user?.role !== 'CUSTOMER') {
        return null;
    }

    return <>{children}</>;
}