import classNames from 'classnames/bind';
import styles from './main.module.scss';
const cx = classNames.bind(styles);
//
import React from 'react';

export default function TotemLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={cx('wrap')}>
      <div className={cx('side-bg')}></div>
      {children}
    </main>
  );
}
