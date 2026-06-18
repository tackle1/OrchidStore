'use client';

import { useParams } from 'next/navigation';
import CustomerDisputeForm from '../../../../../components/form/dispute_form';

export default function CustomerDisputesPage() {
    const params = useParams();
    const slug = params.slug as string;   // Lấy slug động từ URL

    return (
        <div className="min-h-screen bg-[#F8F9FC] p-6">
            <CustomerDisputeForm slug={slug} />
        </div>
    );
}