import CreateAddonUI from '../../../../../components/ui/provider/create-add-on_ui';

export default async function ProposeAddonPage({ params }: { params: { id: string } }) {
  return <CreateAddonUI params={Promise.resolve(params)} />;
}