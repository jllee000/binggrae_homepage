'use client';

import classNames from 'classnames/bind';
import styles from './play.module.scss';
const cx = classNames.bind(styles);

import TextWithStarIcon from '@/components/textWithStarIcon';
import useSubmitSubContent from '@/hooks/game/useSubmitSubContent';
import { isSoundAtom, playAudioAtom, subContentStepAtom, subParticipantInfoAtom } from '@/recoil/atoms';
import { getCDNImageURL, weightedRandomChoice } from '@/utils/functions';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { GHOSTS } from '../../_const';
import Popup from './popup';
import { CircularProgress, ProgressBar } from './progress';

const getScore = (ghostName: (typeof GHOSTS)[number]['name']) => (ghostName === 'hidden' ? 1000 : 50);

function Play() {
  const subContentInfo = useRecoilValue(subParticipantInfoAtom);
  const isSound = useRecoilValue(isSoundAtom);

  const [playSound, setPlaySound] = useRecoilState(playAudioAtom);

  const setSubContentStep = useSetRecoilState(subContentStepAtom);

  const [tapCount, setTapCount] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [popupStatus, setPopupStatus] = useState<'fail' | 'success' | 'hidden' | 'none'>('none');

  const [ghost, setGhost] = useState(GHOSTS[0]);

  const { mutateAsync: submitSubContent } = useSubmitSubContent();
  const intervalRef = useRef(null);

  const tapRef = useRef(null);

  const tapSoundSrc = getCDNImageURL('/sub/sound/tap.mp3');
  const soundPool = [];

  useEffect(() => {
    const tapElement = tapRef.current;

    const handleTouchStart = (event) => {
      if (event.touches.length > 1) {
        event.preventDefault();
      }
    };

    const handleTouchEnd = (event) => {
      handleTap();
      event.preventDefault();
    };

    if (tapElement) {
      tapElement.addEventListener('touchstart', handleTouchStart, { passive: false });
      tapElement.addEventListener('touchend', handleTouchEnd, { passive: false });
    }

    return () => {
      if (tapElement) {
        tapElement.removeEventListener('touchstart', handleTouchStart);
        tapElement.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, [tapRef, isSound]);

  useEffect(() => {
    const ghostProbabilities = GHOSTS.map((ghost) => ghost.probability);
    const ghostIndex = weightedRandomChoice(ghostProbabilities);

    setGhost(GHOSTS[ghostIndex]);
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, [seconds]);

  useEffect(() => {
    // 히든 유령 팝업 노출 시에 타이머를 멈춤
    if (popupStatus === 'hidden') {
      clearInterval(intervalRef.current);
    }
    // 시간 초과 시 타이머 멈춤
    if (seconds >= ghost.duration) {
      clearInterval(intervalRef.current);
    }
    // 유령을 물리치지 못한 경우 (시간 초과 또는 탭 횟수 부족)
    if (seconds > ghost.duration) {
      setPopupStatus('fail');
    } else if (seconds === ghost.duration) {
      if (tapCount < ghost.tapCount) {
        setPopupStatus('fail');
      }
    }
    // 유령을 물리친 경우 (시간 세이프 및 탭 횟수 달성)
    if (tapCount >= ghost.tapCount && seconds <= ghost.duration) {
      setPopupStatus('success');
      clearInterval(intervalRef.current);
    }
  }, [seconds, tapCount, ghost.duration, ghost.tapCount, popupStatus]);

  useEffect(() => {
    if (ghost.name === 'hidden') {
      setPopupStatus('hidden');
    }
  }, [ghost.name]);

  const timeProgress = useMemo(() => {
    if (seconds >= ghost.duration) {
      return 0;
    }
    return ((ghost.duration - seconds) / ghost.duration) * 100;
  }, [seconds, ghost.duration]);

  const handleTap = () => {
    if (tapCount >= ghost.tapCount) {
      return;
    }

    if (isSound) {
      let tapSound;

      // 풀에 오디오 객체가 있으면 재사용, 없으면 새로 생성
      if (soundPool.length > 0) {
        tapSound = soundPool.pop();
      } else {
        tapSound = new Audio(tapSoundSrc);
        // 사운드가 재생되고 나서 풀에 다시 넣기
        tapSound.addEventListener('ended', () => {
          soundPool.push(tapSound);
        });
      }

      tapSound.play();
    }

    setTapCount((prev) => prev + 1);
  };

  const handlePopupClick = () => {
    if (ghost.name === 'hidden') {
      intervalRef.current = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }

    if (popupStatus === 'success' || popupStatus === 'fail') {
      setSubContentStep('result');

      if (isSound && playSound) {
        playSound.pause();

        setPlaySound(null);
      }

      submitSubContent({
        nickname: subContentInfo.name,
        score: popupStatus === 'success' ? getScore(ghost.name) : 0,
        ghost: ghost.name,
        totem: subContentInfo.totem,
        clickCount: tapCount,
        isSuccess: popupStatus === 'success',
        playTime: `00:${String(seconds).padStart(2, '0')}`,
      });
    } else {
      setPopupStatus('none');
    }
  };

  const countProgress = useMemo(() => {
    return (tapCount / ghost.tapCount) * 100;
  }, [tapCount, ghost.tapCount]);

  const padZero = (num) => {
    return num.toString().padStart(2, '0');
  };

  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${padZero(minutes)}:${padZero(seconds)}`;
  };

  return (
    <>
      <div className={cx('play')}>
        {popupStatus !== 'none' && <Popup variant={popupStatus} handlePopupClick={handlePopupClick} />}
        <div className={cx('time-progress-wrap')}>
          <img src={getCDNImageURL('/sub/clock.svg')} alt="clock-timer" className={cx('clock-timer')} />
          <span className={cx('timer')}>{formatTime(ghost.duration - seconds)}</span>
          <ProgressBar progress={timeProgress} />
        </div>
        <div className={cx('area', 'top')}>
          {ghost.duration - seconds > 0 && ghost.duration - seconds <= (ghost.name === 'hidden' ? 10 : 5) && (
            <div className={cx('time-remaining')}>
              <p className={cx('time-count')}>{ghost.duration - seconds}</p>
              <p className={cx('time-phrase')}>시간이 얼마 남지 않았어요!</p>
            </div>
          )}

          <CircularProgress progress={countProgress} level={ghost.lv} />
          <img src={getCDNImageURL(`sub/monster/${ghost.name}.png`)} alt={ghost.name} />
        </div>
        <div className={cx('area', 'bottom')}>
          <div className={cx('totem-border')} ref={tapRef} onClick={handleTap}>
            <img
              src={getCDNImageURL(`sub/totems/tap/${subContentInfo.totem}.png`)}
              alt="totem"
              className={cx('totem-image')}
            />
          </div>
          <p className={cx('tap')}>탭하기!</p>
          <TextWithStarIcon fill="#fff" size={13}>
            <p className={cx('instruction')}>탭하여 유령을 물리쳐 주세요!</p>
          </TextWithStarIcon>
        </div>
      </div>
      <div className={cx('gradient')}></div>
    </>
  );
}

export default Play;
