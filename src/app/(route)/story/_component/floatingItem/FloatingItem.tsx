import classNames from 'classnames/bind';
import styles from './FloatingItem.module.scss';
const cx = classNames.bind(styles);

function FloatingItem() {
  return (
    <div className={cx('container')}>
      <img src={process.env.NEXT_PUBLIC_CDN_IMAGES + '/story/history_item_1.png'} alt="item" className={cx('item1')} />
      <img src={process.env.NEXT_PUBLIC_CDN_IMAGES + '/story/history_item_2.png'} alt="item" className={cx('item2')} />
      <img src={process.env.NEXT_PUBLIC_CDN_IMAGES + '/story/history_item_3.png'} alt="item" className={cx('item3')} />
      <img src={process.env.NEXT_PUBLIC_CDN_IMAGES + '/story/history_item_4.png'} alt="item" className={cx('item4')} />
    </div>
  );
}

export default FloatingItem;
