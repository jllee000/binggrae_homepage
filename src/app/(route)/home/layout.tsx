import { SHARE_INFO } from '@/utils/consts';
import { Metadata } from 'next/types';

export const metadata: Metadata = {
  title: SHARE_INFO['home'].title,
  description: SHARE_INFO['home'].description,
  openGraph: {
    title: SHARE_INFO['home'].title,
    description: SHARE_INFO['home'].description,
    images: SHARE_INFO['home'].images,
  },
};

export default function HomeLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
