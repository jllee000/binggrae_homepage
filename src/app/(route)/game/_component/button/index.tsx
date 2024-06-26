'use client';

import classNames from 'classnames/bind';
import styles from './button.module.scss';
import { getCDNImageURL } from '@/utils/functions';
const cx = classNames.bind(styles);

interface SubButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant: 'primary' | 'secondary';
  isArrow?: boolean;
}

function SubButton({ variant, text, isArrow = false, ...props }: SubButtonProps) {
  return (
    <button {...props} className={cx('sub-btn', variant)}>
      <p>{text}</p>
      {isArrow && (
        <img src={getCDNImageURL('sub/arrow_button.svg')} alt="arrow-button" className={cx('button-arrow')} />
      )}
    </button>
  );
}

export default SubButton;
