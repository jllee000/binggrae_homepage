'use client';

import React, { PropsWithChildren } from 'react';
import classNames from 'classnames/bind';
import styles from './textWithStarIcon.module.scss';
const cx = classNames.bind(styles);

interface StarIconProps {
  fill: string; // The fill color of the star icon in hexadecimal format.
  size?: number;
}

const StarIcon = ({ fill, size }: StarIconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 12 12" fill="none">
    <path
      d="M0.475114 6.59276C3.58824 7.27149 4.72851 8.41176 5.40724 11.5249C5.54299 12.1584 6.45701 12.1584 6.59276 11.5249C7.27149 8.41176 8.41177 7.27149 11.5249 6.59276C12.1584 6.45701 12.1584 5.54299 11.5249 5.40724C8.41177 4.72851 7.27149 3.58824 6.59276 0.475113C6.45701 -0.158371 5.54299 -0.158372 5.40724 0.475113C4.72851 3.58824 3.58824 4.72851 0.475114 5.40724C-0.15837 5.54299 -0.15837 6.45701 0.475114 6.59276Z"
      fill={fill}
    />
  </svg>
);

function TextWithStarIcon({ fill, size = 12, children }: PropsWithChildren<StarIconProps>) {
  const wrappedChildren = React.Children.count(children) === 1 ? children : <div>{children}</div>;
  return (
    <div className={cx('text-wrap')}>
      <StarIcon fill={fill} size={size} />
      {wrappedChildren}
      <StarIcon fill={fill} size={size} />
    </div>
  );
}

export default TextWithStarIcon;
