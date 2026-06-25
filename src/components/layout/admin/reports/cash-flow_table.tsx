'use client';

interface CashFlowRow {
    month: string;
    totalRevenue: string;
    platformFee: string;
    refund: string;
    netToProvider: string;
    status: string;
}

const cashFlowData: CashFlowRow[] = [
    {
        month: 'Tháng 10, 2023',
        totalRevenue: '450,000,000',
        platformFee: '67,500,000',
        refund: '1,200,000',
        netToProvider: '381,300,000',
        status: 'Đã đối soát',
    },
    {
        month: 'Tháng 9, 2023',
        totalRevenue: '410,000,000',
        platformFee: '61,500,000',
        refund: '850,000',
        netToProvider: '347,650,000',
        status: 'Đã đối soát',
    },
    {
        month: 'Tháng 8, 2023',
        totalRevenue: '385,000,000',
        platformFee: '57,750,000',
        refund: '2,100,000',
        netToProvider: '325,150,000',
        status: 'Đã đối soát',
    },
];

export default function CashFlowTable() {
    return (
        <div className="bg-white rounded-2xl shadow-sm border border-[#F0ECF7] overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#F3F4F6]">
                <h3 className="text-lg font-semibold text-[#111827]">Chi tiết dòng tiền</h3>

                <div className="flex items-center gap-2">
                    <button className="px-4 py-2 text-sm font-medium border border-[#E5E7EB] rounded-xl hover:bg-[#F9FAFB]">
                        Lọc
                    </button>
                    <button className="px-4 py-2 text-sm font-medium border border-[#E5E7EB] rounded-xl hover:bg-[#F9FAFB]">
                        Xuất CSV
                    </button>
                </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="w-full text-sm">
                    <thead className="bg-[#F8F9FC]">
                        <tr>
                            <th className="text-left px-6 py-3 font-medium text-[#6B7280]">THÁNG</th>
                            <th className="text-right px-6 py-3 font-medium text-[#6B7280]">TỔNG THU (VND)</th>
                            <th className="text-right px-6 py-3 font-medium text-[#6B7280]">PHÍ NỀN TẢNG (15%)</th>
                            <th className="text-right px-6 py-3 font-medium text-[#6B7280]">HOÀN TIỀN</th>
                            <th className="text-right px-6 py-3 font-medium text-[#6B7280]">THỰC CHI CHO NCC</th>
                            <th className="text-center px-6 py-3 font-medium text-[#6B7280]">TRẠNG THÁI</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-[#F3F4F6]">
                        {cashFlowData.map((row, index) => (
                            <tr key={index} className="hover:bg-[#F9FAFB]">
                                <td className="px-6 py-4 font-medium text-[#111827]">{row.month}</td>
                                <td className="px-6 py-4 text-right text-[#111827]">{row.totalRevenue}</td>
                                <td className="px-6 py-4 text-right text-[#6D28D9] font-medium">{row.platformFee}</td>
                                <td className="px-6 py-4 text-right text-[#EF4444] font-medium">{row.refund}</td>
                                <td className="px-6 py-4 text-right text-[#111827]">{row.netToProvider}</td>
                                <td className="px-6 py-4 text-center">
                                    <span className="inline-block px-3 py-1 text-xs font-medium bg-[#D1FAE5] text-[#059669] rounded-full">
                                        {row.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                    {/* Total Row */}
                    <tfoot>
                        <tr className="bg-[#F8F9FC] font-semibold border-t border-[#E5E7EB]">
                            <td className="px-6 py-4 text-[#111827]">Tổng cộng (Quý)</td>
                            <td className="px-6 py-4 text-right text-[#111827]">1,245,000,000</td>
                            <td className="px-6 py-4 text-right text-[#6D28D9]">186,750,000</td>
                            <td className="px-6 py-4 text-right text-[#EF4444]">4,150,000</td>
                            <td className="px-6 py-4 text-right text-[#111827]">1,054,100,000</td>
                            <td className="px-6 py-4"></td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
}