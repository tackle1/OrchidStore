'use client';

import { useRouter } from 'next/navigation';
import RoleSelectionUI from '../../../components/ui/role_selection_ui';

export default function RoleRegistration() {
    const router = useRouter();

    const handleCustomerClick = () => {
        router.push('/register/customer');
    };

    const handleProviderClick = () => {
        router.push('/register/provider');
    };

    return (
        <RoleSelectionUI
            onCustomerClick={handleCustomerClick}
            onProviderClick={handleProviderClick}
        />
    );
}