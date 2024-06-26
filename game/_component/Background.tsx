'use client';

import classNames from 'classnames/bind';
import styles from './background.module.scss';
const cx = classNames.bind(styles);
//
import { subContentStepAtom } from '@/recoil/atoms';
import { getCDNImageURL } from '@/utils/functions';
import { useRecoilValue } from 'recoil';

export default function BackgroundImage() {
  const subContentStep = useRecoilValue(subContentStepAtom);

  return (
    <img
      alt={`${subContentStep}-background`}
      src={getCDNImageURL(`/sub/bg/${subContentStep}.png`)}
      className={cx('bg')}
    />
  );
}
