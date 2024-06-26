import classNames from 'classnames/bind';
import styles from './noticeModal.module.scss';
const cx = classNames.bind(styles);
//
import React from 'react';

interface Props {
  text: string;
  onClick: () => void;
}

function NoticeModal({ text, onClick }: Props) {
  return (
    <div className={cx('wrap')}>
      <div className={cx('container')}>
        <img src={`${process.env.NEXT_PUBLIC_CDN_IMAGES}/sub/notice_logo.svg`} alt="notice" />

        <p className={cx('title')}>{text}</p>

        <button className={cx('ok')} onClick={onClick}>
          <p>확인</p>
        </button>
      </div>
    </div>
  );
}

export default NoticeModal;
