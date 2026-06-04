'use client';

export default function LatestDisputes() {
    const disputes = [
        {
            id: '#BK-441',
            title: 'Dịch vụ không búng mô tả',
            level: 'CAO',
            type: 'high',
        },
        {
            id: '#BK-420',
            title: 'Chậm tiến độ chăm sóc',
            level: 'TRUNG BÌNH',
            type: 'medium',
        },
    ];

    return (
        <div
            className="
                w-full
                bg-white
                rounded-[20px]
                border
                border-[#ECE8F5]
                p-6
            "
        >
            {/* Header */}
            <h2
                className="
                    text-[18px]
                    font-bold
                    text-[#1F2937]
                    mb-5
                "
            >
                Tranh chấp mới nhất
            </h2>

            {/* List */}
            <div className="space-y-3">
                {disputes.map((item) => (
                    <div
                        key={item.id}
                        className={`
                            relative
                            rounded-[14px]
                            border
                            px-4
                            py-4
                            min-h-[66px]
                            ${item.type === 'high'
                                ? 'bg-[#FFF8F8] border-[#FBE7E7]'
                                : 'bg-[#F6F7FC] border-[#F1F2F7]'
                            }
                        `}
                    >
                        {/* Badge */}
                        <div
                            className={`
                                absolute
                                top-10
                                right-4
                                rounded-[4px]
                                px-2
                                py-[2px]
                                text-[10px]
                                font-bold
                                leading-none
                                ${item.type === 'high'
                                    ? 'bg-[#C62828] text-white'
                                    : 'bg-[#E5E7EB] text-[#374151]'
                                }
                            `}
                        >
                            {item.level}
                        </div>

                        {/* Booking ID */}
                        <p
                            className="
                                text-[11px]
                                text-[#9CA3AF]
                                mb-2
                                font-medium
                            "
                        >
                            Đơn #{item.id}
                        </p>

                        {/* Title */}
                        <p
                            className="
                                text-[15px]
                                leading-[20px]
                                font-semibold
                                text-[#1F2937]
                                pr-16
                            "
                        >
                            {item.title}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}