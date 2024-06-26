'use client';

import classNames from 'classnames/bind';
import styles from './footer.module.scss';
const cx = classNames.bind(styles);
//
import { CDN_ASSETS_URL } from '@/utils/variables';

function Footer() {
  const goPrivacy = () => {
    window.open('/privacy', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={cx('wrap')}>
      <div className={cx('img-wrap')}></div>
      <img src={`${CDN_ASSETS_URL}/footer/binggrae_logo.png`} alt="binggrae_logo" />

      <p>COPYRIGHT ⓒBinggrae, all rights reserved.</p>

      <p>
        사업자등록번호 132-81-00631 | <span onClick={goPrivacy}>개인정보 처리방침</span>
      </p>
    </div>
  );
}

export default Footer;
