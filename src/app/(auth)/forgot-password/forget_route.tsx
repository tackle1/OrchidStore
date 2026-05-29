'use client';

import Link from 'next/link';

interface ForgetPasswordLinkProps {
    className?: string;
    children?: React.ReactNode;
}

export default function ForgetPasswordLink({ className, children = "Quên mật khẩu?" }: ForgetPasswordLinkProps) {
    return (
        <Link
            href="/forgot-password"
            className={className || "text-[#6D28D9] hover:underline font-semibold"}
        >
            {children}
        </Link>
    );
}