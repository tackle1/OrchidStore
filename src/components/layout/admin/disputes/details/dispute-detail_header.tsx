'use client';

interface DisputeDetailHeaderProps {
    disputeId: string;           // VD: DISP-88291
    bookingId: string;           // VD: BK-4421
    priority: 'High' | 'Medium' | 'Low';
    status: string;              // VD: "In progress", "Resolved", "Pending"
    customerName: string;
    providerName: string;
}

export default function DisputeDetailHeader({
    disputeId,
    bookingId,
    priority,
    status,
    customerName,
    providerName,
}: DisputeDetailHeaderProps) {

    const priorityColors = {
        High: 'bg-red-100 text-red-600',
        Medium: 'bg-yellow-100 text-yellow-600',
        Low: 'bg-gray-100 text-gray-600',
    };

    return (
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            {/* Header */}
            <div className="flex items-start justify-between">
                <div>
                    <h1 className="text-2xl font-semibold text-gray-900">Chi tiết tranh chấp</h1>
                    <p className="mt-1 text-sm text-gray-500">
                        ID: <span className="font-medium text-gray-700">{disputeId}</span> • Booking: <span className="font-medium text-gray-700">{bookingId}</span>
                    </p>
                </div>

                {/* Badges */}
                <div className="flex items-center gap-2">
                    {/* Priority Badge */}
                    <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${priorityColors[priority]}`}>
                        ! {priority}
                    </span>

                    {/* Status Badge */}
                    <span className="inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-700">
                        {status}
                    </span>
                </div>
            </div>

            <div className="my-4 h-px bg-gray-200" />

            {/* Customer & Provider Info */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* Khách hàng */}
                <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-gray-500">Khách hàng</p>
                    <p className="mt-1 text-base font-semibold text-gray-900">{customerName}</p>
                </div>

                {/* Nhà cung cấp */}
                <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-gray-500">Nhà cung cấp (Nhà vườn)</p>
                    <p className="mt-1 text-base font-semibold text-gray-900">{providerName}</p>
                </div>
            </div>
        </div>
    );
}