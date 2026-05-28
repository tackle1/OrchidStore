import ProviderRegisterNavbar from '@/src/components/layout/register_provider_navbar';
import ProviderRegisterUI from '../../../../components/form/register_provider_form';
import ProviderRegisterFooter from "../../../../components/layout/footer";
export default function ProviderRegisterPage() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            {/* Navbar */}
            <ProviderRegisterNavbar />
            {/* Main Content */}
            <ProviderRegisterUI />
            {/* Footer */}
            <ProviderRegisterFooter />
        </div>
    );
}