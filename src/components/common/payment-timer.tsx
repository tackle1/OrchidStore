'use client';

import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

interface PaymentTimerProps {
    initialMinutes?: number;
}

export default function PaymentTimer({ initialMinutes = 15 }: PaymentTimerProps) {
    const [timeLeft, setTimeLeft] = useState(initialMinutes * 60); // tính bằng giây

    useEffect(() => {
        if (timeLeft <= 0) return;

        const interval = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [timeLeft]);

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    return (
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#DAE2FD] rounded-sm text-sm font-medium text-[#6D28D9]">
            <Clock className="w-4 h-4" />
            <span>{formattedTime}</span>
        </div>
    );
}