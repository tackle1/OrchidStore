'use client';

interface CostItem {
    label: string;
    amount: string;
}

interface CostBreakdownTableProps {
    items?: CostItem[];
    total?: string;
}

export default function CostBreakdownTable({
    items = [
        { label: 'Gói dịch vụ', amount: '4.500.000đ' },
        { label: 'Phí ship', amount: '350.000đ' },
        { label: 'Add-on', amount: '250.000đ' },
        { label: 'Phí nền tảng', amount: '255.000đ' },
    ],
    total = '5.355.000đ',
}: CostBreakdownTableProps) {
    return (
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">Bảng chi phí</h3>

            <div className="my-4 h-px bg-gray-200" />

            <div className="space-y-3 text-sm">
                {items.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                        <span className="text-gray-600">{item.label}</span>
                        <span className="font-medium text-gray-900">{item.amount}</span>
                    </div>
                ))}
            </div>

            {/* Total */}
            <div className="mt-4 flex items-center justify-between border-t border-gray-200 pt-4">
                <span className="font-semibold text-gray-900">Tổng</span>
                <span className="text-lg font-semibold text-purple-600">{total}</span>
            </div>
        </div>
    );
}