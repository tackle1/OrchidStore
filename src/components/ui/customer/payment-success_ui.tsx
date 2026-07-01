import CustomerSidebar from '../../common/sidebar/customer_sidebar';
import CustomerNavbar from '../../common/navbar/customer_navbar';
import PaymentSuccessCard from '../../layout/customer/booking/payment-success/payment-success_card';

export default function PaymentSuccessUI() {
    return (
        <div className="flex min-h-screen bg-[#F2F3FF] w-full overflow-hidden">
            {/* Sidebar */}
            <CustomerSidebar />

            {/* Main Content */}
            <div className="flex-1 flex flex-col bg-[#F2F3FF]">
                <CustomerNavbar />

                <div className="flex-1 flex items-center justify-center p-4">
                    <PaymentSuccessCard />
                </div>
            </div>
        </div>
    );
}