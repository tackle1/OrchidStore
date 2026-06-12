'use client';

interface AtmTransferContentProps {
    orderId: string;
}

export default function AtmTransferContent({ orderId }: AtmTransferContentProps) {
    return (
        <div className="border border-[#E5E7EB] rounded-2xl p-6 bg-white">
            <h4 className="font-semibold mb-4">Thông tin chuyển khoản ngân hàng</h4>
            <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                    <span className="text-[#6B7280]">Ngân hàng:</span>
                    <span className="font-medium">Vietcombank</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-[#6B7280]">Số tài khoản:</span>
                    <span className="font-medium">0123456789</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-[#6B7280]">Chủ tài khoản:</span>
                    <span className="font-medium">CÔNG TY TNHH LANCARE HUB</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-[#6B7280]">Nội dung chuyển khoản:</span>
                    <span className="font-medium text-[#6D28D9]">{orderId}</span>
                </div>
            </div>
            <p className="text-xs text-[#6B7280] mt-4">
                Vui lòng chuyển khoản đúng nội dung để hệ thống tự động xác nhận.
            </p>
        </div>
    );
}