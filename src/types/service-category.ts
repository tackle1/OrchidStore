import { ReactNode } from 'react';

export interface ServiceCategory {
    id: number;
    name: string;
    icon: ReactNode;           // Icon component từ lucide-react
    serviceCount: number;
    status: 'Hiển thị' | 'Ẩn';
    createdAt: string;         // Có thể đổi thành Date nếu cần
    order: number;
}