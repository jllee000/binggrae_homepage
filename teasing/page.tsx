'use client';
import classNames from 'classnames/bind';
import styles from './teasing.module.scss';
const cx = classNames.bind(styles);
//
import ShareButtons from '@/components/shareButtons';
import { SHARE_INFO } from '@/utils/consts';
import { CDN_ASSETS_URL } from '@/utils/variables';
import Answer from './_component/answer/Answer';
import Log from './_component/log/Log';

const Teasing = () => {
  return (
    <>
      <div className={cx('title')}>
        <img src={`${CDN_ASSETS_URL}/teasing/title.png`} alt="title" className={cx('title-image')} />
      </div>
      <Answer />
      <Log />
      <div className={cx('share-area')}>
        <ShareButtons
          shape="oval"
          backgroundStyle={`linear-gradient(180deg, rgba(255, 255, 255, 0) 53.43%, rgba(255, 255, 255, 0.15) 100%),
        rgba(255, 255, 255, 0.06)`}
          borderColor={`#ffb9d6`}
          url="/teasing"
          title={SHARE_INFO['default'].title as string}
          text={SHARE_INFO['default'].description as string}
          gtagOption={{ page: '티징', detail: '인트로' }}
        />
      </div>
    </>
  );
};

export default Teasing;
