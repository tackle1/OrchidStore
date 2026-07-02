import type { ComponentType } from 'react';
import ServicePackageDetailUI from '../../../../components/ui/provider/service-package-detail_ui';

const ServicePackageDetailUIWithProps = ServicePackageDetailUI as ComponentType<{ id: string }>;

export default function ServicePackageDetailPage({ params }: { params: { id: string } }) {
    return <ServicePackageDetailUIWithProps id={params.id} />;
}