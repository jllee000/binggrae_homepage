import { worldContentStepAtom } from '@/recoil/atoms';
import { CDN_ASSETS_URL } from '@/utils/variables';
import classNames from 'classnames/bind';
import { useRouter } from 'next/navigation';
import { useMemo } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styles from './Button.module.scss';
const cx = classNames.bind(styles);

interface ButtonProps {
  text: string;
  onClickEvent?: () => void;
}

export function NextButton({ text, onClickEvent }: ButtonProps) {
  const worldContentStep = useRecoilValue(worldContentStepAtom);
  const setWorldStep = useSetRecoilState(worldContentStepAtom);
  const router = useRouter();
  const imgFileURL = useMemo(() => {
    switch (text) {
      case '똑똑!':
        return `${CDN_ASSETS_URL}/story/button_0.png`;
      case '비밀학기가 뭔가요?':
        return `${CDN_ASSETS_URL}/story/button_1.png`;
      case '나의 낭만...?':
        return `${CDN_ASSETS_URL}/story/button_4.png`;
      case '대화 이어가기':
        return `${CDN_ASSETS_URL}/story/button_6_1.png`;
      case '알겠어요!':
        return `${CDN_ASSETS_URL}/story/button_8.png`;
      case '대화 종료하기':
        return `${CDN_ASSETS_URL}/story/button_9_1.png`;
      default:
        break;
    }
  }, [text]);
  return (
    <div
      className={cx('next-button')}
      onClick={() => {
        onClickEvent && onClickEvent();

        if (worldContentStep === 9) {
          router.push('/home');
        } else {
          setWorldStep(worldContentStep + 1);
        }
      }}
    >
      <img src={imgFileURL} alt="button-image" />
    </div>
  );
}

interface FindTotemButtonProps {
  onClickEvent: () => void;
}
export function FindTotemButton({ onClickEvent }: FindTotemButtonProps) {
  const router = useRouter();
  return (
    <div
      className={cx('find-totem-button')}
      onClick={() => {
        onClickEvent();
        router.push('/totem');
      }}
    >
      <img src={`${CDN_ASSETS_URL}/story/button_9_2.png`} alt="button-image" />
    </div>
  );
}
