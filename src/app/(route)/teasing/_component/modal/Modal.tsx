import classNames from 'classnames/bind';
import styles from './Modal.module.scss';
const cx = classNames.bind(styles);
//
import { CDN_ASSETS_URL } from '@/utils/variables';

const Modal = ({ onClose }) => {
  return (
    <div className={cx('dim')}>
      <div className={cx('modal')}>
        <img src={`${CDN_ASSETS_URL}/teasing/warning-icon.png`} alt="icon" />
        <p>암호의 답을 입력해주세요!</p>
        <div className={cx('btn')} onClick={() => onClose(false)}>
          확인
        </div>
      </div>
    </div>
  );
};

export default Modal;
