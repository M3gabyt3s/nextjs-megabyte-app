import { Metadata } from 'next';
import PageHeader from '@/app/shared/page-header';

// SEO metadata
export const metadata: Metadata = {
  title: 'New Page | Isomorphic Furyroad',
};

const pageHeader = {
  title: 'NewPage',
  breadcrumb: [
    {
      href: '/',
      name: 'Home',
    },
    {
      name: 'NewPage',
    },
  ],
};

export default function BytePage() {
  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb} />

      <div>
        Byte Page Content !
      </div>
    </>
  );
}