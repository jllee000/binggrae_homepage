'use client';
import classNames from 'classnames/bind';
import styles from './button.module.scss';
const cx = classNames.bind(styles);
//
import { CDN_ASSETS_URL } from '@/utils/variables';
import { useRouter } from 'next/navigation';
import { useMemo } from 'react';

interface ButtonProps {
  text: string;
  isChecked?: boolean;
  onClick?: () => void;
}
// TODEL: ActiveButton으로 대체
export const LargeButton = ({ text, isChecked, onClick = () => {} }: ButtonProps) => {
  return (
    <button className={cx('btn', 'lg', { active: isChecked })} onClick={() => onClick()}>
      {text}
    </button>
  );
};

export const MiddleButton = ({ text, onClick = () => {} }: ButtonProps) => {
  return (
    <button className={cx('btn', 'md')} onClick={() => onClick()}>
      {text}
    </button>
  );
};

export const RestartButton = ({ text }: ButtonProps) => {
  const router = useRouter();
  return (
    <button className={cx('btn', 'restart')} onClick={() => router.push('/teasing')}>
      {text}
    </button>
  );
};

export const ActiveButton = ({
  text,
  isChecked,
  onClick = () => {},
}: {
  text: string;
  isChecked: boolean;
  onClick: () => void;
}) => {
  const imgFileURL = useMemo(() => {
    switch (text) {
      case '대답하기':
        return `${CDN_ASSETS_URL}/teasing/active-buttons/answer.png`;
      case '알림 신청하기':
        return `${CDN_ASSETS_URL}/teasing/active-buttons/${isChecked ? 'noti_request.png' : 'noti_request_inactive.png'}`;
      case '비밀 메시지 복사하기':
        return `${CDN_ASSETS_URL}/teasing/active-buttons/copy_secret_message_m.png`;
      case '암호 복사하기':
        return `${CDN_ASSETS_URL}/teasing/active-buttons/copy_password_m.png`;
      case '이벤트 참여하기':
        return `${CDN_ASSETS_URL}/teasing/active-buttons/join_event.png`;
      default:
        break;
    }
  }, [text, isChecked]);

  return (
    <div className={cx('active-btn', { active: isChecked })} onClick={onClick}>
      <img src={imgFileURL} alt={text} />
    </div>
  );
  // return (
  //   <svg
  //     width="100%"
  //     height="100%"
  //     viewBox="0 0 472 102"
  //     xmlns="http://www.w3.org/2000/svg"
  //     preserveAspectRatio="none"
  //     className={cx('active-btn', { active: isChecked })}
  //     onClick={onClick}
  //   >
  //     <g filter="url(#filter0_d_1067_1583)">
  //       <path
  //         d="M453.666 57.5078L432.915 82.5101C431.076 84.7271 428.385 86 425.56 86H46.4403C43.6153 86 40.9239 84.7271 39.0851 82.5101L18.3345 57.5078C15.2218 53.7633 15.2218 48.2367 18.3345 44.4922L39.0851 19.4899C40.9239 17.2729 43.6153 16 46.4403 16H425.56C428.385 16 431.076 17.2729 432.915 19.4899L453.666 44.4922C456.778 48.2367 456.778 53.7633 453.666 57.5078Z"
  //         fill={isChecked ? '#ffe8f3' : '#C47A96'}
  //       />
  //     </g>
  //     <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle">
  //       {text}
  //     </text>
  //   </svg>
  // );
};
