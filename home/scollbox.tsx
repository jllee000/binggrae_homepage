'use client';

import classNames from 'classnames/bind';
import styles from './home.module.scss';
const cx = classNames.bind(styles);
//
import React, { useState, useEffect } from 'react';

const ScrollBox = () => {
  const [scrollShown, setScrollShown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const scrollDownHeight = document.body.scrollHeight / 7; // Adjust this value as needed

      if (scrolled >= scrollDownHeight && !scrollShown) {
        setScrollShown(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollShown]);

  return (
    <div className={`${cx('scroll-box', { 'scroll-none': scrollShown })}`}>
      <img src="https://cdn.banggooso.com/assets/bing/home/images/down.png" className={cx('img-width')} alt="image" />
    </div>
  );
};

export default ScrollBox;
