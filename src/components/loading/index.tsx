import classNames from 'classnames/bind';
import styles from './loading.module.scss';
const cx = classNames.bind(styles);

function Loading({ text = '로딩중입니다' }: { text?: string }) {
  return (
    <div className={cx('spinner-box')}>
      <div className={cx('pulse-container')}>
        <div className={cx('pulse-bubble', 'pulse-bubble-1')}></div>
        <div className={cx('pulse-bubble', 'pulse-bubble-2')}></div>
        <div className={cx('pulse-bubble', 'pulse-bubble-3')}></div>
      </div>
      <p className={cx('text')}>{text}</p>
    </div>
  );
}

export default Loading;
