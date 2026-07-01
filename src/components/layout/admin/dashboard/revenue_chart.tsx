'use client';

import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
} from 'recharts'

const data = [
    { week: 'Tuần 1', revenue: 120, booking: 100 },
    { week: 'Tuần 2', revenue: 150, booking: 130 },
    { week: 'Tuần 3', revenue: 80, booking: 60 },
    { week: 'Tuần 4', revenue: 250, booking: 220 },
    { week: 'Tuần 5', revenue: 125, booking: 180 },
    { week: 'Tuần 6', revenue: 325, booking: 290 },
];

// Custom Tooltip
interface CustomTooltipProps {
    active?: boolean;
    payload?: Array<{ payload: { revenue: number; booking: number } }>;
    label?: string;
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
    if (active && payload && payload.length > 0) {
        const currentData = payload[0].payload; // Lấy dữ liệu của điểm đang hover

        return (
            <div className="bg-white border border-[#E5E0F2] rounded-xl px-4 py-3 shadow-md text-sm">
                <p className="font-semibold text-[#1F2937] mb-1">{label}</p>
                <p className="text-[#6D28D9]">
                    Doanh thu : <span className="font-medium">{currentData.revenue}Tr</span>
                </p>
                <p className="text-[#A78BFA]">
                    Booking : <span className="font-medium">{currentData.booking}</span>
                </p>
            </div>
        );
    }
    return null;
};

export default function RevenueChart() {
    return (
        <div className="bg-white rounded-[20px] border border-[#E5E0F2] p-6 w-full h-[340px]">

            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-[26px] font-semibold text-[#1F2937]">
                    Biểu đồ doanh thu
                </h2>
                <div className="flex items-center gap-5 text-[13px]">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#6D28D9]" />
                        <span className="text-[#4B5563]">Doanh thu (VND)</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#CFC7E5]" />
                        <span className="text-[#4B5563]">Booking (Lượt)</span>
                    </div>
                </div>
            </div>

            {/* Chart */}
            <ResponsiveContainer width="100%" height="82%">
                <AreaChart data={data}>
                    <defs>
                        <linearGradient id="revenueFill" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#6D28D9" stopOpacity={0.2} />
                            <stop offset="100%" stopColor="#6D28D9" stopOpacity={0.05} />
                        </linearGradient>
                    </defs>

                    <XAxis
                        dataKey="week"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#6B7280', fontSize: 12 }}
                    />

                    <YAxis
                        domain={[0, 500]}
                        ticks={[0, 100, 200, 300, 400, 500]}
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#9CA3AF', fontSize: 12 }}
                        tickFormatter={(value: number) => (value === 0 ? '0' : `${value}Tr`)}
                        padding={{ bottom: 15 }}
                    />

                    {/* Dùng Custom Tooltip */}
                    <Tooltip content={<CustomTooltip />} />

                    {/* Chỉ vẽ đường Doanh thu */}
                    <Area
                        type="monotone"
                        dataKey="revenue"
                        stroke="#6D28D9"
                        strokeWidth={4}
                        fill="url(#revenueFill)"
                        dot={false}
                        activeDot={{
                            r: 6,
                            fill: '#FFFFFF',
                            stroke: '#6D28D9',
                            strokeWidth: 3,
                        }}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}