'use client';
import classNames from 'classnames/bind';
import styles from './header.module.scss';
const cx = classNames.bind(styles);
//
import { useRouter } from 'next/navigation';

const Header = () => {
  const router = useRouter();
  return (
    <div className={cx('header')}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => {
          router.push('/teasing');
        }}
      >
        <g id="back">
          <g id="arrow_back_ios">
            <mask id="mask0_1503_1072" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40">
              <rect id="Bounding box" width="40" height="40" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_1503_1072)">
              <path
                id="arrow_back_ios_2"
                d="M4.69871 20L17.5575 32.8592C17.8033 33.1047 17.9247 33.3985 17.9216 33.7404C17.9183 34.0824 17.7937 34.3761 17.5479 34.6217C17.3023 34.8675 17.0086 34.9904 16.6666 34.9904C16.3247 34.9904 16.0309 34.8675 15.7854 34.6217L3.04788 21.8942C2.77871 21.625 2.58218 21.3249 2.45829 20.9938C2.33441 20.6624 2.27246 20.3311 2.27246 20C2.27246 19.6689 2.33441 19.3376 2.45829 19.0063C2.58218 18.6751 2.77871 18.375 3.04788 18.1058L15.7854 5.36876C16.0309 5.12293 16.3264 5.00168 16.6716 5.00501C17.0166 5.00807 17.3119 5.13251 17.5575 5.37834C17.8033 5.6239 17.9262 5.91765 17.9262 6.25959C17.9262 6.60154 17.8033 6.89529 17.5575 7.14084L4.69871 20Z"
                fill="white"
              />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default Header;
