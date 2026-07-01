'use client';

import Link from 'next/link';
import { ReactNode } from 'react';

interface LoginLinkProps {
    className?: string;
    children?: ReactNode;
}

export default function LoginLink({
    className = 'text-[#6D28D9] hover:underline font-semibold',
    children = 'Đăng nhập',
}: LoginLinkProps) {
    return (
        <Link href="/login" className={className}>
            {children}
        </Link>
    );
}