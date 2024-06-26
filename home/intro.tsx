'use client';

import classNames from 'classnames/bind';
import styles from './home.module.scss';
const cx = classNames.bind(styles);
//
import React, { useState, useEffect } from 'react';

const Intro = ({ onClick }) => {
  const [isLayerClicked, setIsLayerClicked] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isIntroLayerClicked, setIsIntroLayerClicked] = useState(false);
  const [imageSrc, setImageSrc] = useState('https://cdn.banggooso.com/assets/bing/home/images/light1.png');

  useEffect(() => {
    const interval = setInterval(() => {
      setImageSrc((prev) =>
        prev === 'https://cdn.banggooso.com/assets/bing/home/images/light2.png'
          ? 'https://cdn.banggooso.com/assets/bing/home/images/light1.png'
          : 'https://cdn.banggooso.com/assets/bing/home/images/light2.png'
      );
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const handleClick = () => {
    setIsLayerClicked(true);
    setTimeout(() => {
      setIsClicked(true);
      setTimeout(() => {
        setIsIntroLayerClicked(true);
      }, 3200);
    }, 200);
  };

  return (
    <div onClick={onClick}>
      <div
        className={cx('intro-item-area')}
        onClick={handleClick}
        style={{ display: isIntroLayerClicked ? 'none' : 'block' }}
      >
        <div className={`${styles['intro-layer']} ${isLayerClicked ? styles['hide'] : ''}`}>
          <div className={styles['intro-layer-light']}>
            <img
              className={cx('img-width', 'light1')}
              src="https://cdn.banggooso.com/assets/bing/home/images/light2.png"
              alt="image"
            />
            <img
              className={cx('img-width', 'light2')}
              src="https://cdn.banggooso.com/assets/bing/home/images/light1.png"
              alt="image"
            />
          </div>
          <div className={cx('intro-layer-txt')}>
            그대가 오길 <br />
            기다렸소!
            <div className={cx('click-txt')}>Click</div>
          </div>
        </div>
        <div className={cx('intro-item-pos')}>
          <img
            className={cx('intro-item', 'intro-item-br1', { 'move-br1': isClicked })}
            src="https://cdn.banggooso.com/assets/bing/home/bottom-right.png"
            alt="image"
          />
          <img
            className={cx('intro-item', 'intro-item-br2', { 'move-br2': isClicked })}
            src="https://cdn.banggooso.com/assets/bing/home/bottom-right2.png"
            alt="image"
          />
          <img
            className={cx('intro-item', 'intro-item-bl2', { 'move-bl2': isClicked })}
            src="https://cdn.banggooso.com/assets/bing/home/bottom-left2.png"
            alt="image"
          />
          <img
            className={cx('intro-item', 'intro-item-bl1', { 'move-bl1': isClicked })}
            src="https://cdn.banggooso.com/assets/bing/home/bottom-left.png"
            alt="image"
          />
          <img
            className={cx('intro-item', 'intro-item-r2', { 'move-r2': isClicked })}
            src="https://cdn.banggooso.com/assets/bing/home/right2.png"
            alt="image"
          />
          <img
            className={cx('intro-item', 'intro-item-r1', { 'move-r1': isClicked })}
            src="https://cdn.banggooso.com/assets/bing/home/right.png"
            alt="image"
          />
          <img
            className={cx('intro-item', 'intro-item-l2', { 'move-l2': isClicked })}
            src="https://cdn.banggooso.com/assets/bing/home/left2.png"
            alt="image"
          />
          <img
            className={cx('intro-item', 'intro-item-l1', { 'move-l1': isClicked })}
            src="https://cdn.banggooso.com/assets/bing/home/left.png"
            alt="image"
          />
          <img
            className={cx('intro-item', 'intro-item-t2', { 'move-t2': isClicked })}
            src="https://cdn.banggooso.com/assets/bing/home/top2.png"
            alt="image"
          />
          <img
            className={cx('intro-item', 'intro-item-t1', { 'move-t1': isClicked })}
            src="https://cdn.banggooso.com/assets/bing/home/top.png"
            alt="image"
          />
          <img
            className={cx('intro-item', 'intro-item-tr', { 'move-tr': isClicked })}
            src="https://cdn.banggooso.com/assets/bing/home/top-right.png"
            alt="image"
          />
          <img
            className={cx('intro-item', 'intro-item-tl', { 'move-tl': isClicked })}
            src="https://cdn.banggooso.com/assets/bing/home/top-left.png"
            alt="image"
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
