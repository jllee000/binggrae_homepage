import CommonPageRoute from '@/components/common/CommonPageRoute';
import { SHARE_INFO } from '@/utils/consts';
import { getCDNImageURL } from '@/utils/functions';
import { GA_TRACKING_ID } from '@/utils/variables';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import '../styles/customToast.css';
import '../styles/globals.scss';
import Providers from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: SHARE_INFO['default'].title,
  description: SHARE_INFO['default'].description,
  openGraph: {
    title: SHARE_INFO['default'].title,
    description: SHARE_INFO['default'].description,
    images: SHARE_INFO['default'].images,
  },
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="apple-touch-icon" sizes="57x57" href={getCDNImageURL('/favicon/apple-icon-57x57.png')} />
        <link rel="apple-touch-icon" sizes="60x60" href={getCDNImageURL('/favicon/apple-icon-60x60.png')} />
        <link rel="apple-touch-icon" sizes="72x72" href={getCDNImageURL('/favicon/apple-icon-72x72.png')} />
        <link rel="apple-touch-icon" sizes="76x76" href={getCDNImageURL('/favicon/apple-icon-76x76.png')} />
        <link rel="apple-touch-icon" sizes="114x114" href={getCDNImageURL('/favicon/apple-icon-114x114.png')} />
        <link rel="apple-touch-icon" sizes="120x120" href={getCDNImageURL('/favicon/apple-icon-120x120.png')} />
        <link rel="apple-touch-icon" sizes="144x144" href={getCDNImageURL('/favicon/apple-icon-144x144.png')} />
        <link rel="apple-touch-icon" sizes="152x152" href={getCDNImageURL('/favicon/apple-icon-152x152.png')} />
        <link rel="apple-touch-icon" sizes="180x180" href={getCDNImageURL('/favicon/apple-icon-180x180.png')} />
        <link rel="icon" type="image/png" sizes="192x192" href={getCDNImageURL('/favicon/android-icon-192x192.png')} />
        <link rel="icon" type="image/png" sizes="32x32" href={getCDNImageURL('/favicon/favicon-32x32.png')} />
        <link rel="icon" type="image/png" sizes="96x96" href={getCDNImageURL('/favicon/favicon-96x96.png')} />
        <link rel="icon" type="image/png" sizes="16x16" href={getCDNImageURL('/favicon/favicon-16x16.png')} />
        <link rel="/manifest" href={getCDNImageURL('/favicon/manifest.json')} />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" type="image/x-icon" href={getCDNImageURL('/favicon/favicon.ico')} />
        <link rel="shortcut icon" href={getCDNImageURL('/favicon/favicon.ico')} />
        <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        <meta name="naver-site-verification" content="73642b2d63f20dd687fd509d401f9e86e2551f48" />
      </head>
      <body className={inter.className}>
        <Providers>
          <CommonPageRoute>
            <div className="common-layout">
              <ToastContainer
                theme={'dark'}
                hideProgressBar
                closeButton={false}
                autoClose={800}
                position={'bottom-center'}
              />
              <div className="app-main">{children}</div>
            </div>
          </CommonPageRoute>
        </Providers>
      </body>
    </html>
  );
}
