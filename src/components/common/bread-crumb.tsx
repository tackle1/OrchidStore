'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbProps {
    items: {
        label: string;
        href?: string;
    }[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
    return (
        <nav className="flex items-center gap-2 text-sm text-[#6B7280] mb-6">
            {items.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                    {item.href ? (
                        <Link
                            href={item.href}
                            className="hover:text-[#6D28D9] transition-colors"
                        >
                            {item.label}
                        </Link>
                    ) : (
                        <span className="text-[#1F2937] font-medium">{item.label}</span>
                    )}

                    {index < items.length - 1 && (
                        <ChevronRight className="w-4 h-4 text-[#9CA3AF]" />
                    )}
                </div>
            ))}
        </nav>
    );
}