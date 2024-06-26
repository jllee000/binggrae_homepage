import className from 'classnames/bind';
import styles from './popup.module.scss';
const cx = className.bind(styles);
//
import { getCDNImageURL } from '@/utils/functions';
import { useEffect } from 'react';

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
    <g filter="url(#filter0_d_1128_18870)">
      <mask
        id="mask0_1128_18870"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="33"
        height="32"
      >
        <rect x="0.496094" width="32" height="32" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_1128_18870)">
        <path
          d="M13.9037 16.0007L8.4934 10.57C8.30896 10.3853 8.21118 10.1567 8.20007 9.884C8.18896 9.61133 8.28674 9.37156 8.4934 9.16467C8.68674 8.97156 8.92096 8.875 9.19607 8.875C9.47118 8.875 9.7054 8.97156 9.89874 9.16467L15.8911 15.157C16.0157 15.2819 16.1037 15.4136 16.1551 15.552C16.2064 15.6904 16.2321 15.84 16.2321 16.0007C16.2321 16.1613 16.2064 16.3109 16.1551 16.4493C16.1037 16.5878 16.0157 16.7194 15.8911 16.8443L9.89874 22.8367C9.71407 23.0211 9.4854 23.1189 9.21274 23.13C8.94007 23.1411 8.70029 23.0433 8.4934 22.8367C8.30029 22.6433 8.20374 22.4091 8.20374 22.134C8.20374 21.8589 8.30029 21.6247 8.4934 21.4313L13.9037 16.0007ZM22.3704 16.0007L16.9601 10.57C16.7756 10.3853 16.6778 10.1567 16.6667 9.884C16.6556 9.61133 16.7534 9.37156 16.9601 9.16467C17.1534 8.97156 17.3876 8.875 17.6627 8.875C17.9378 8.875 18.1721 8.97156 18.3654 9.16467L24.3574 15.157C24.4823 15.2819 24.5704 15.4136 24.6217 15.552C24.6731 15.6904 24.6987 15.84 24.6987 16.0007C24.6987 16.1613 24.6731 16.3109 24.6217 16.4493C24.5704 16.5878 24.4823 16.7194 24.3574 16.8443L18.3654 22.8367C18.1807 23.0211 17.9521 23.1189 17.6794 23.13C17.4067 23.1411 17.167 23.0433 16.9601 22.8367C16.767 22.6433 16.6704 22.4091 16.6704 22.134C16.6704 21.8589 16.767 21.6247 16.9601 21.4313L22.3704 16.0007Z"
          fill="white"
        />
      </g>
    </g>
    <defs>
      <filter
        id="filter0_d_1128_18870"
        x="2.19922"
        y="2.875"
        width="28.5"
        height="26.2559"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset />
        <feGaussianBlur stdDeviation="3" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.709804 0 0 0 0 0.996078 0 0 0 0 1 0 0 0 1 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1128_18870" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1128_18870" result="shape" />
      </filter>
    </defs>
  </svg>
);

function Popup({
  variant,
  handlePopupClick,
}: {
  variant: 'success' | 'fail' | 'hidden' | 'none';
  handlePopupClick: () => void;
}) {
  useEffect(() => {
    const subMainEl = document.getElementById('sub-main');
    if (subMainEl) {
      if (variant !== 'none' && variant === 'hidden') {
        subMainEl.addEventListener('click', handlePopupClick);
      } else {
        subMainEl.removeEventListener('click', handlePopupClick);
      }
    }

    return () => {
      if (subMainEl) {
        subMainEl.removeEventListener('click', handlePopupClick);
      }
    };
  }, []);

  return (
    <div className={cx('popup')}>
      <div className={cx('popup-background')}></div>
      <div
        className={cx('img-wrap', {
          hidden: variant === 'hidden',
        })}
      >
        <img src={getCDNImageURL(`sub/popup/${variant}.png`)} alt="close" />
        {variant !== 'hidden' && (
          <button onClick={handlePopupClick}>
            <p>결과 보러가기</p>
            <ArrowIcon />
          </button>
        )}
      </div>
    </div>
  );
}

export default Popup;
