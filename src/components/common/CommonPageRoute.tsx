'use client';

import useGtag from '@/hooks/useGtag';
import { GA_TRACKING_ID } from '@/utils/variables';
import { usePathname } from 'next/navigation';
import { PropsWithChildren, useEffect } from 'react';

function CommonPageRoute({ children }: PropsWithChildren) {
  const pathname = usePathname();
  const { handleCustomGtag } = useGtag('config');

  useEffect(() => {
    handleCustomGtag(GA_TRACKING_ID, { page_path: pathname });
  }, [pathname]);

  return <>{children}</>;
}

export default CommonPageRoute;
