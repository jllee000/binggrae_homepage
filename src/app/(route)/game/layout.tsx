import classNames from 'classnames/bind';
import styles from './layout.module.scss';
const cx = classNames.bind(styles);
//
import { SHARE_INFO } from '@/utils/consts';
import { Metadata } from 'next/types';
import { Suspense } from 'react';
import Header from './_component/header';

export const metadata: Metadata = {
  title: SHARE_INFO['game'].title,
  description: SHARE_INFO['game'].description,
  openGraph: {
    title: SHARE_INFO['game'].title,
    description: SHARE_INFO['game'].description,
    images: SHARE_INFO['game'].images,
  },
};

function SubLayout({ children }: React.PropsWithChildren) {
  return (
    <Suspense>
      <div className={cx('side-bg')} />
      <Header />
      <main id={'sub-main'} className={cx('sub-content')}>
        {children}
      </main>
    </Suspense>
  );
}

export default SubLayout;
