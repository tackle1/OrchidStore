'use client';

import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';

const data = [
    { week: 'Tuần 1', revenue: 150000000, fee: 80000000 },
    { week: 'Tuần 2', revenue: 580000000, fee: 120000000 },
    { week: 'Tuần 3', revenue: 380000000, fee: 95000000 },
    { week: 'Tuần 4', revenue: 950000000, fee: 210000000 },
];

export default function RevenueChart() {
    const formatYAxis = (value: number) => {
        if (value >= 1000000000) return `${value / 1000000000}B`;
        if (value >= 1000000) return `${value / 1000000}M`;
        return value.toString();
    };

    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#F0ECF7]">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-[#111827]">Biểu đồ doanh thu</h3>

                {/* Legend */}
                <div className="flex items-center gap-5 text-sm">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#6D28D9]"></div>
                        <span className="text-[#374151]">Doanh thu tổng</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#A78BFA]"></div>
                        <span className="text-[#374151]">Phí nền tảng</span>
                    </div>
                </div>
            </div>

            {/* Chart */}
            <div className="h-[320px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data} margin={{ top: 10, right: 20, left: 10, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#6D28D9" stopOpacity={0.25} />
                                <stop offset="95%" stopColor="#6D28D9" stopOpacity={0.05} />
                            </linearGradient>
                        </defs>

                        <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" />

                        <XAxis
                            dataKey="week"
                            tick={{ fill: '#6B7280', fontSize: 12 }}
                            axisLine={{ stroke: '#E5E7EB' }}
                        />

                        <YAxis
                            tickFormatter={formatYAxis}
                            tick={{ fill: '#6B7280', fontSize: 12 }}
                            axisLine={{ stroke: '#E5E7EB' }}
                            domain={[0, 1500000000]}
                        />

                        <Tooltip
                            formatter={(value) => {
                                if (value === undefined) return '';
                                const numericValue = typeof value === 'number' ? value : Number(value);
                                return new Intl.NumberFormat('vi-VN').format(numericValue) + ' ₫';
                            }}
                        />

                        {/* === ĐÃ ĐỔI type="linear" để đường NHỌN HƠN === */}
                        <Area
                            type="linear"
                            dataKey="revenue"
                            stroke="#6D28D9"
                            strokeWidth={3}
                            fill="url(#colorRevenue)"
                            fillOpacity={1}
                        />

                        <Area
                            type="linear"
                            dataKey="fee"
                            stroke="#A78BFA"
                            strokeWidth={3}
                            fill="#C4B5FD"
                            fillOpacity={0.3}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}