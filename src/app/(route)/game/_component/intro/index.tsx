'use client';

import className from 'classnames/bind';
import styles from './intro.module.scss';
const cx = className.bind(styles);
//
import useGtag from '@/hooks/useGtag';
import {
  introAndStoryAudioAtom,
  introStepAtom,
  isSoundAtom,
  playAudioAtom,
  subContentStepAtom,
  subParticipantInfoAtom,
} from '@/recoil/atoms';
import { getCDNImageURL } from '@/utils/functions';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import Input from './input';
import Story from './story';
import Totems from './totem';

function IntroStep1() {
  const { handleEventGtag } = useGtag();
  const setIntroStep = useSetRecoilState(introStepAtom);
  const router = useRouter();

  const isSound = useRecoilValue(isSoundAtom);
  const [introAndStoryAudio, setIntroAndStoryAudio] = useRecoilState(introAndStoryAudioAtom);

  const selectTotemBtnHandler = () => {
    handleEventGtag('빙그레_서브_인트로_내토템선택하기', '서브', '인트로', '내토템선택하기');

    setIntroStep(1);
  };
  return (
    <div>
      <Story />
      <div className={cx('fixed-bottom-wrapper')}>
        <img
          src={getCDNImageURL('sub/button/intro_select.png')}
          alt="choose-totem-button"
          onClick={selectTotemBtnHandler}
          className={cx('sub-btn')}
        />
        <img
          src={getCDNImageURL('sub/button/intro_find.png')}
          alt="find-totem-button"
          onClick={() => {
            if (isSound && introAndStoryAudio) {
              introAndStoryAudio.pause();
            }

            handleEventGtag('빙그레_서브_인트로_토템먼저찾으러가기', '서브', '인트로', '토템먼저찾으러가기');
            router.push('/totem');
          }}
          className={cx('sub-btn')}
        />
      </div>
    </div>
  );
}

function IntroStep2() {
  return <Totems />;
}

function IntroStep3() {
  const [introStep, setIntroStep] = useRecoilState(introStepAtom);
  const handleScreenClick = () => {
    setIntroStep(3);
  };

  useEffect(() => {
    const subMainEl = document.getElementById('sub-main');
    if (subMainEl) {
      if (introStep === 2) {
        subMainEl.addEventListener('click', handleScreenClick);
      } else {
        subMainEl.removeEventListener('click', handleScreenClick);
      }
    }

    return () => {
      if (subMainEl) {
        subMainEl.removeEventListener('click', handleScreenClick);
      }
    };
  }, []);

  return <Story />;
}

function IntroStep4() {
  const { handleEventGtag } = useGtag();

  const setSubContentStep = useSetRecoilState(subContentStepAtom);
  const setPlayAudio = useSetRecoilState(playAudioAtom);

  const introAndStoryAudio = useRecoilValue(introAndStoryAudioAtom);
  const isSound = useRecoilValue(isSoundAtom);

  const [subParticipantInfo, setSubParticipantInfo] = useRecoilState(subParticipantInfoAtom);

  const participantNameInputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 10) {
      return;
    }
    setSubParticipantInfo((prev) => ({ ...prev, name: e.target.value }));
  };

  const startPlayBtnHandler = () => {
    if (subParticipantInfo.name.trim().length === 0) {
      return;
    }

    if (introAndStoryAudio) {
      introAndStoryAudio.pause();
    }

    if (isSound) {
      const playSound = new Audio(getCDNImageURL('/sub/sound/play.mp3'));

      playSound.play();

      setPlayAudio(playSound);
    }

    handleEventGtag('빙그레_서브_인트로_플레이시작하기', '서브', '인트로', '플레이시작하기');

    setSubContentStep('play');
  };

  return (
    <div>
      <Story />
      <div className={cx('fixed-bottom-wrapper')}>
        <Input
          placeholder="이름을 입력해주세요"
          name="participant-name"
          value={subParticipantInfo.name}
          onChange={participantNameInputOnChange}
        />
        <img
          src={getCDNImageURL('sub/button/intro_start.png')}
          alt="start-button"
          className={cx('sub-btn', { disabled: subParticipantInfo.name.trim().length === 0 })}
          onClick={startPlayBtnHandler}
        />
      </div>
    </div>
  );
}

function Intro() {
  const introStep = useRecoilValue(introStepAtom);

  const renderByStep = () => {
    switch (introStep) {
      case 0:
        return <IntroStep1 />;
      case 1:
        return <IntroStep2 />;
      case 2:
        return <IntroStep3 />;
      case 3:
        return <IntroStep4 />;
      default:
        return <IntroStep1 />;
    }
  };

  return renderByStep();
}

export default Intro;
