import CreateServicePackagesUI from '../../../../../components/ui/provider/create-add-on_ui';

export default async function ProposeAddonPage({ params }: { params: { id: string } }) {
  return <CreateServicePackagesUI params={Promise.resolve(params)} />;
}