'use client';

export default function RecentTransactions() {
    const transactions = [
        {
            id: '#TX-9982',
            initials: 'MH',
            customer: 'Mai Hương',
            amount: '1.250.000đ',
            status: 'Thành công',
            color: 'green',
        },
        {
            id: '#TX-9981',
            initials: 'TQ',
            customer: 'Trần Quân',
            amount: '850.000đ',
            status: 'Đang xử lý',
            color: 'gray',
        },
        {
            id: '#TX-9980',
            initials: 'LA',
            customer: 'Lê An',
            amount: '3.400.000đ',
            status: 'Thất bại',
            color: 'red',
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
                px-6
                py-5
                min-h-[430px]
            "
        >
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-[34px] font-bold text-[#1F2937]">
                    Giao dịch gần đây
                </h2>

                <button
                    type="button"
                    className="
                        text-[#6D28D9]
                        text-[20px]
                        font-semibold
                        hover:opacity-80
                    "
                >
                    Xem tất cả
                </button>
            </div>

            {/* Table Header */}
            <div
                className="
                    grid
                    grid-cols-[1.1fr_2.3fr_1.6fr_1.6fr]
                    text-[#6B7280]
                    text-[18px]
                    pb-4
                    border-b
                    border-[#F1F1F4]
                "
            >
                <div>Mã GD</div>
                <div>Khách hàng</div>
                <div>Số tiền</div>
                <div>Trạng thái</div>
            </div>

            {/* Rows */}
            <div>
                {transactions.map((item) => (
                    <div
                        key={item.id}
                        className="
                            grid
                            grid-cols-[1.1fr_2.3fr_1.6fr_1.6fr]
                            items-center
                            py-6
                            border-b
                            border-[#F4F4F6]
                        "
                    >
                        {/* ID */}
                        <div className="text-[18px] text-[#4B5563]">
                            {item.id}
                        </div>

                        {/* Customer */}
                        <div className="flex items-center gap-3">
                            <div
                                className="
                                    w-10
                                    h-10
                                    rounded-full
                                    bg-[#F3F4F6]
                                    flex
                                    items-center
                                    justify-center
                                    text-[14px]
                                    text-[#6B7280]
                                "
                            >
                                {item.initials}
                            </div>

                            <span className="text-[24px] text-[#1F2937]">
                                {item.customer}
                            </span>
                        </div>

                        {/* Amount */}
                        <div
                            className="
                                text-[24px]
                                font-semibold
                                text-[#1F2937]
                            "
                        >
                            {item.amount}
                        </div>

                        {/* Status */}
                        <div>
                            {item.color === 'green' && (
                                <span
                                    className="
                                        inline-flex
                                        items-center
                                        gap-2
                                        px-3
                                        py-1.5
                                        rounded-full
                                        bg-[#E8F8EC]
                                        text-[#16A34A]
                                        text-[16px]
                                        font-semibold
                                    "
                                >
                                    <span className="w-2 h-2 rounded-full bg-[#16A34A]" />
                                    Thành công
                                </span>
                            )}

                            {item.color === 'gray' && (
                                <span
                                    className="
                                        inline-flex
                                        items-center
                                        gap-2
                                        px-3
                                        py-1.5
                                        rounded-full
                                        bg-[#F3F4F6]
                                        text-[#6B7280]
                                        text-[16px]
                                        font-semibold
                                    "
                                >
                                    <span className="w-2 h-2 rounded-full bg-[#9CA3AF]" />
                                    Đang xử lý
                                </span>
                            )}

                            {item.color === 'red' && (
                                <span
                                    className="
                                        inline-flex
                                        items-center
                                        gap-2
                                        px-3
                                        py-1.5
                                        rounded-full
                                        bg-[#FDECEC]
                                        text-[#DC2626]
                                        text-[16px]
                                        font-semibold
                                    "
                                >
                                    <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                                    Thất bại
                                </span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}