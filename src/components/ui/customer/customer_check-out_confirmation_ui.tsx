'use client';

import { useParams } from 'next/navigation';
import CheckoutNavbar from '../../layout/customer/history-care/check-out/check-out_navbar';
import ImportantNote from '../../layout/customer/history-care/check-out/important_note';
import StatusComparison from '../../layout/customer/history-care/check-out/status-comparison';
import Checklist from '../../layout/customer/history-care/check-out/check-list';
import NurseryNote from '../../layout/customer/history-care/check-out/nursery_note';
import ActionButtons from '../../layout/customer/history-care/check-out/action_buttons';

export default function CustomerCheckoutConfirmationUI() {
    const params = useParams();
    const slug = params.slug as string;

    return (
        <div className="min-h-screen bg-[#F8F9FC]">
            <CheckoutNavbar orderId={slug} />

            <div className="p-6">
                <div className="max-w-5xl mx-auto mb-6">
                    <h1 className="text-4xl font-bold text-[#111827]">Xác nhận check-out</h1>
                    <p className="text-[#6B7280] mt-1">
                        Vui lòng kiểm tra tình trạng lan và xác nhận hoàn tất quá trình chăm sóc. Nếu có vấn đề, bạn có thể mở tranh chấp.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto space-y-6">
                    <ImportantNote />

                    <StatusComparison
                        checkInImage="/assets/images/order-orchid-check-in.png"
                        checkOutImage="/assets/images/order-orchid-check-out.png"
                        checkInTime="10/10/2023 09:30"
                        checkOutTime="10/11/2023 15:45"
                    />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <Checklist />
                        <NurseryNote />
                    </div>

                    <ActionButtons />
                </div>
            </div>
        </div>
    );
}