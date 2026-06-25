'use client';
import { PieChart, Pie, Cell, ResponsiveContainer, } from 'recharts';
import { EllipsisVertical  } from 'lucide-react';
const data = [
    { name: 'Hoàn thành', value: 75, color: '#6D28D9', colorClass: 'bg-[#6D28D9]' },
    { name: 'Đang diễn ra', value: 15, color: '#10B981', colorClass: 'bg-[#10B981]' },
    { name: 'Có tranh chấp', value: 5, color: '#EF4444', colorClass: 'bg-[#EF4444]' },
    { name: 'Đã hủy', value: 5, color: '#E5E7EB', colorClass: 'bg-[#E5E7EB]' },
];

export default function TransactionStatusChart() {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#F0ECF7] h-full">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-[#111827]">Trạng thái giao dịch</h3>
                <button
                    className="text-[#9CA3AF] hover:text-[#6B7280]"
                    aria-label="More options"
                    title="More options"
                >
                    <EllipsisVertical className='w-5 h-5'/>
                </button>
            </div>

            {/* Donut Chart */}
            <div className="flex justify-center mb-6">
                <div className="relative w-[200px] h-[200px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                innerRadius={70}
                                outerRadius={95}
                                dataKey="value"
                                startAngle={90}
                                endAngle={-270}
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>

                    {/* Center Text */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <div className="text-3xl font-bold text-[#6D28D9]">3,842</div>
                        <div className="text-sm text-[#6B7280]">Tổng giao dịch</div>
                    </div>
                </div>
            </div>

            {/* Legend */}
            <div className="space-y-3">
                {data.map((item, index) => (
                    <div key={index} className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                            <div className={`w-3 h-3 rounded-full ${item.colorClass}`} />
                            <span className="text-[#374151]">{item.name}</span>
                        </div>
                        <span className="font-medium text-[#111827]">{item.value}%</span>
                    </div>
                ))}
            </div>
        </div>
    );
}