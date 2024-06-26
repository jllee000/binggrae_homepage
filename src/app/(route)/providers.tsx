'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { useState } from 'react';
import { RecoilRoot } from 'recoil';

const nest = (children: React.ReactNode, component: React.ReactElement) => React.cloneElement(component, {}, children);

export type MultiProviderProps = React.PropsWithChildren<{
  providers: React.ReactElement[];
}>;

const MultiProvider: React.FC<MultiProviderProps> = ({ children, providers }) => (
  <React.Fragment>{providers.reduceRight(nest, children)}</React.Fragment>
);

function Providers({ children }: React.PropsWithChildren) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // staleTime: 60 * 1000,
          },
        },
      })
  );

  return (
    <RecoilRoot>
      <MultiProvider providers={[<QueryClientProvider key={'provider'} client={queryClient} />]}>
        {children}
      </MultiProvider>
    </RecoilRoot>
  );
}

export default Providers;
