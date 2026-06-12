'use client';

export default function CreditCardForm() {
    return (
        <div className="border border-[#E5E7EB] rounded-2xl p-6 bg-white">
            <h4 className="font-semibold mb-4">Thông tin thẻ tín dụng</h4>
            <div className="space-y-4">
                <div>
                    <label className="text-sm text-[#6B7280] block mb-1">Số thẻ</label>
                    <input
                        type="text"
                        placeholder="4242 4242 4242 4242"
                        className="w-full border border-[#E5E7EB] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#6D28D9]"
                    />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="text-sm text-[#6B7280] block mb-1">Ngày hết hạn</label>
                        <input
                            type="text"
                            placeholder="MM/YY"
                            className="w-full border border-[#E5E7EB] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#6D28D9]"
                        />
                    </div>
                    <div>
                        <label className="text-sm text-[#6B7280] block mb-1">CVV</label>
                        <input
                            type="text"
                            placeholder="123"
                            className="w-full border border-[#E5E7EB] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#6D28D9]"
                        />
                    </div>
                </div>
                <div>
                    <label className="text-sm text-[#6B7280] block mb-1">Tên chủ thẻ</label>
                    <input
                        type="text"
                        placeholder="NGUYEN VAN A"
                        className="w-full border border-[#E5E7EB] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#6D28D9]"
                    />
                </div>
            </div>
            <p className="text-xs text-[#6B7280] mt-4">
                Thông tin thẻ của bạn được bảo mật theo chuẩn PCI DSS.
            </p>
        </div>
    );
}