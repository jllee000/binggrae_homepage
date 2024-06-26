import renderTextWithLineBreaks from '@/utils/renderTextWithLineBreaks';
import className from 'classnames/bind';
import styles from './progress.module.scss';
const cx = className.bind(styles);

export function ProgressBar({ progress }: { progress: number }) {
  return (
    <div className={cx('gauge-wrap')}>
      <div className={cx('gauge-container')} />
      <div className={cx('gauge')}>
        <div
          className={cx('gauge-inner')}
          style={{
            width: `${progress - 2}%`,
          }}
        />
        <div
          className={cx('gauge-bar')}
          style={{
            width: `${progress}%`,
          }}
        />
      </div>
    </div>
  );
}

interface CircularProgressBarProps {
  progress: number;
  level: string;
}

export const CircularProgress = ({ progress, level }: CircularProgressBarProps) => {
  const radius = 30;
  const circumference = 2 * Math.PI * radius;

  const normalizedProgress = Math.min(Math.max(progress, 0), 100);
  const strokeDashoffset = circumference - (normalizedProgress / 100) * circumference;

  return (
    <div className={cx('container')}>
      <svg width="86" height="86" viewBox="0 0 86 86" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="13" y="13" width="60" height="60" rx="30" stroke="black" strokeOpacity="0.3" strokeWidth="6" />
        <g filter="url(#filter0_d_1744_1604)">
          <circle
            cx="43"
            cy="43"
            r={radius}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className={cx('progress')}
            stroke="url(#paint0_linear_1744_1604)"
            strokeWidth="6"
            shapeRendering="crispEdges"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_1744_1604"
            x="0"
            y="0"
            width="86"
            height="86"
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
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.709804 0 0 0 0 0.996078 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1744_1604" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1744_1604" result="shape" />
          </filter>
          <linearGradient id="paint0_linear_1744_1604" x1="70" y1="16" x2="16" y2="70" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFAFC0" />
            <stop offset="1" stopColor="#FF0C40" />
          </linearGradient>
        </defs>
      </svg>
      <p className={cx('progress-content')}>{renderTextWithLineBreaks(level)}</p>
    </div>
  );
};
