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

    const providerRoutes = [
        '/management-homepage',
    ];

    useEffect(() => {
        if (!isAuthenticated) {
            router.replace('/login');
            return;
        }

        if (user?.role !== 'PROVIDER') {
            router.replace('/');
            return;
        }

        const isAllowedRoute = providerRoutes.some((route) =>
            pathname.startsWith(route)
        );

        if (!isAllowedRoute) {
            router.replace('/management-homepage');
        }
    }, [user, isAuthenticated, pathname, router]);

    if (!isAuthenticated || user?.role !== 'PROVIDER') {
        return null;
    }

    return <>{children}</>;
}