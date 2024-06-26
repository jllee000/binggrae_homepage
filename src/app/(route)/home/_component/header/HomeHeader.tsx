'use client';

import classNames from 'classnames/bind';
import styles from '../../home.module.scss';
import headerStyles from './header.module.scss';
const cx = classNames.bind(styles);
const cxHeader = classNames.bind(headerStyles);
//
import { CDN_ASSETS_URL } from '@/utils/variables';
import { useEffect, useState } from 'react';

const HomeHeader = () => {
  const [headerShown, setHeaderShown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const headerDownHeight = document.body.scrollHeight / 9;

      if (scrolled >= headerDownHeight && !headerShown) {
        setHeaderShown(true);
      } else if (scrolled < headerDownHeight) {
        setHeaderShown(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [headerShown]);

  return (
    <div className={cxHeader('header-area', { 'header-ani': headerShown, 'header-hide': !headerShown })}>
      <div className={cxHeader('header-pos-rel')}>
        <div className={cxHeader('header-logo')}>
          <img className={cx('img-width')} src={`${CDN_ASSETS_URL}/header/logo.png`} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
