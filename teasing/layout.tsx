import classNames from 'classnames/bind';
import styles from './teasing.module.scss';
const cx = classNames.bind(styles);
//
import Footer from '@/components/common/footer';
import { SHARE_INFO } from '@/utils/consts';
import { Metadata } from 'next/types';
import React from 'react';

export const metadata: Metadata = {
  title: SHARE_INFO['default'].title,
  description: SHARE_INFO['default'].description,
  openGraph: {
    title: SHARE_INFO['default'].title,
    description: SHARE_INFO['default'].description,
    images: SHARE_INFO['default'].images,
  },
};

export default function TeasingLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className={cx('main')}>
      <div className={cx('side-bg')}></div>
      <div className={cx('container')}>{children}</div>
      <Footer />
    </main>
  );
}
