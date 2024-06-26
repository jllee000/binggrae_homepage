'use client';

import classNames from 'classnames/bind';
import styles from './header.module.scss';
const cx = classNames.bind(styles);
//
import { introAndStoryAudioAtom, introStepAtom, isSoundAtom, playAudioAtom, subContentStepAtom } from '@/recoil/atoms';
import { getCDNImageURL } from '@/utils/functions';
import { usePathname, useRouter } from 'next/navigation';
import { useCallback, useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

const Header = () => {
  const router = useRouter();
  const pathName = usePathname();
  const isResult = pathName === '/game/result';
  const [subStep, setSubStep] = useRecoilState(subContentStepAtom);
  const [introStep, setIntroStep] = useRecoilState(introStepAtom);
  const subContentStep = useRecoilValue(subContentStepAtom);

  const [introAndStoryAudio, setIntroAndStoryAudio] = useRecoilState(introAndStoryAudioAtom);
  const [playAudio, setPlayAudio] = useRecoilState(playAudioAtom);

  const [isSound, setIsSound] = useRecoilState(isSoundAtom);

  const handleVisibilityChange = () => {
    if (!isSound || subContentStep === 'result') return;

    const audioMap = {
      intro: introAndStoryAudio,
      play: playAudio,
    };

    const audio = audioMap[subContentStep];

    if (audio) {
      document.hidden ? audio.pause() : audio.play();
    }
  };

  useEffect(() => {
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [introAndStoryAudio, playAudio, subContentStep, isSound]);

  const handleIntroAndStorySound = () => {
    const introAndStorySound = new Audio(getCDNImageURL('/sub/sound/introAndStory.mp3'));

    introAndStorySound.play();

    setIntroAndStoryAudio(introAndStorySound);
  };

  const handlePlaySound = () => {
    const playSound = new Audio(getCDNImageURL('/sub/sound/play.mp3'));

    playSound.play();

    setPlayAudio(playSound);
  };

  const soundClick = useCallback(() => {
    if (isResult) {
      return setIsSound((_prev) => !_prev);
    }

    if (isSound) {
      if (subContentStep === 'intro' && introAndStoryAudio) {
        introAndStoryAudio.pause();
      }

      if (subContentStep === 'play' && playAudio) {
        playAudio.pause();
      }
    } else {
      if (subContentStep === 'intro') {
        if (introAndStoryAudio) {
          introAndStoryAudio.play();
        } else {
          handleIntroAndStorySound();
        }
      }

      if (subContentStep === 'play') {
        if (playAudio) {
          playAudio.play();
        } else {
          handlePlaySound();
        }
      }
    }

    setIsSound((_prev) => !_prev);
  }, [introStep, isSound, subContentStep, isResult]);

  const handleGoBack = () => {
    try {
      // 결과페이지에서 뒤로가기 버튼 클릭 시 인트로로 이동
      if (isResult) {
        if (isSound) {
          if (introAndStoryAudio) {
            introAndStoryAudio.play();
          } else {
            handleIntroAndStorySound();
          }
        }

        setIntroStep(0);
        setSubStep('intro');
        return router.replace('/game');
      }

      // 인트로 핸들링
      if (subStep === 'intro') {
        // 인트로 스텝이 0일 때 메인으로 이동
        if (introStep === 0) {
          router.push('/home');
        } else if (introStep > 0) {
          // 인트로 스텝이 0보다 클 때 이전 스텝으로 이동
          setIntroStep((prev) => prev - 1);
        } else {
          // 그 외의 경우 logic X
          return;
        }
      } else if (subStep === 'play') {
        // 플레이 스텝일 때 인트로 마지막 스텝으로 이동
        if (isSound) {
          if (playAudio) {
            playAudio.pause();
          }

          if (introAndStoryAudio) {
            introAndStoryAudio.play();
          } else {
            handleIntroAndStorySound();
          }
        }

        setSubStep('intro');
        setIntroStep(3);
      } else {
        return;
      }
    } catch (error) {
      router.refresh();
    }
  };

  const handleGoHome = () => {
    if (playAudio) {
      playAudio.pause();
      setPlayAudio(null);
    }

    if (introAndStoryAudio) {
      introAndStoryAudio.pause();
      setIntroAndStoryAudio(null);
    }

    setSubStep('intro');
    setIntroStep(0);
    router.push('/home');
  };

  return (
    <header className={cx('header')}>
      <img
        className={cx('arrow-back')}
        role={'button'}
        src={getCDNImageURL('/sub/header/arrow-back.svg')}
        alt="back"
        onClick={handleGoBack}
        style={{ cursor: 'pointer' }}
      />
      <img className={cx('logo')} src={getCDNImageURL('/sub/header/logo.svg')} alt="logo" />
      <div className={cx('right-area')}>
        <button onClick={soundClick}>
          <img src={getCDNImageURL(`/sub/header/sound_${isSound ? 'on' : 'off'}.png`)} alt="sound" />
        </button>
        <button onClick={handleGoHome}>
          <img src={getCDNImageURL('/sub/header/home.svg')} alt="home" />
        </button>
      </div>
    </header>
  );
};

export default Header;
