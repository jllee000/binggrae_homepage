'use client';
import classNames from 'classnames/bind';
import styles from './answer.module.scss';
const cx = classNames.bind(styles);
//
import { ActiveButton } from '@/app/(route)/teasing/_component/button/Button';
import TextWithStarIcon from '@/components/textWithStarIcon';
import useGtag from '@/hooks/useGtag';
import { isCorrectAtom } from '@/recoil/atoms';
import { checkAnswerAPI } from '@/utils/api/fetch';
import {
  MAX_LETTERS,
  appendHangul,
  deleteOneJamo,
  isHangulConsonant,
  isHangulSyllable,
  keyboardKeyToJamoText,
} from '@/utils/hangul_tool';
import { API_RESPONSE_CODE, CDN_ASSETS_URL } from '@/utils/variables';
import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import KeyBoard from '../keyboard/KeyBoard';
import Modal from '../modal/Modal';

let g_currentGuess = [];
let g_nextLetter = 0;

const Answer = () => {
  const { handleEventGtag } = useGtag();
  const queryClient = useQueryClient();
  const router = useRouter();
  const letterContainer = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const setIsCorrect = useSetRecoilState(isCorrectAtom);
  const [isKeyBoardOpen, setIsKeyBoardOpen] = useState(false);

  const validateAnswer = async () => {
    // 전역 상태 초기화
    setIsCorrect(false);
    const guessString = g_currentGuess.join('');
    if (guessString.length < 5 || guessString === '') {
      handleEventGtag('빙그레_티징_인트로_대답하기_누락', '티징', '인트로', '대답하기', { answer_text: guessString });
      setIsOpen(true);
    } else {
      // 쿼리 캐시 삭제
      handleResetCache();
      // 정답 초기화
      g_currentGuess = [];
      g_nextLetter = 0;
      const { code } = await checkAnswerAPI(guessString);
      if (code === API_RESPONSE_CODE.CORRECT) {
        setIsCorrect(true);
        handleEventGtag('빙그레_티징_인트로_대답하기_정답', '티징', '인트로', '대답하기', { answer_text: guessString });
        router.push('/teasing/detail');
      } else if (code === API_RESPONSE_CODE.INCORRECT) {
        handleEventGtag('빙그레_티징_인트로_대답하기_오답', '티징', '인트로', '대답하기', { answer_text: guessString });
        router.push('/teasing/detail');
      } else {
        handleEventGtag('빙그레_티징_인트로_대답하기_누락', '티징', '인트로', '대답하기', { answer_text: guessString });
        window.alert('Error:' + code);
      }
    }
  };

  const insertLetter = (pressedKey) => {
    if (g_currentGuess.length > 0) {
      const box = letterContainer.current.children[g_nextLetter - 1];

      const previous = g_currentGuess.pop();
      const appended = appendHangul(previous, pressedKey);
      if (appended.length > 1 && g_nextLetter === MAX_LETTERS) {
        g_currentGuess.push(previous);
        return;
      }

      g_currentGuess.push(appended[0]);
      box.textContent = appended[0];

      if (appended.length <= 1) {
        return;
      }

      pressedKey = appended[1];
    }

    if (!isHangulConsonant(pressedKey) && !isHangulSyllable(pressedKey)) {
      return;
    }

    if (g_nextLetter === MAX_LETTERS) {
      return;
    }

    pressedKey = pressedKey.toLowerCase();

    const box = letterContainer.current.children[g_nextLetter];
    box.textContent = pressedKey;
    box.classList.add('filled-box');
    g_currentGuess.push(pressedKey);
    g_nextLetter += 1;
  };

  const deleteLetter = () => {
    const box = letterContainer.current.children[g_nextLetter - 1];
    const previous = g_currentGuess.pop();
    const changed = deleteOneJamo(previous);
    if (changed === '') {
      box.classList.remove('filled-box');
      g_nextLetter -= 1;
    } else {
      g_currentGuess.push(changed);
    }

    box.textContent = changed;
  };

  const handleKeyUp = (e) => {
    const pressedKey = String(e.key);

    if (e.getModifierState('CapsLock')) {
      window.alert('암호를 입력하기 전에 <Caps Lock>을 꺼주세요.');
    } else {
      handleInputText(pressedKey);
    }
  };

  const handleInputText = (pressedKey) => {
    if (pressedKey === '완료') {
      setIsKeyBoardOpen(false);
      return;
    }

    pressedKey = keyboardKeyToJamoText(pressedKey);

    if (pressedKey === 'Backspace') {
      if (g_nextLetter !== 0) {
        deleteLetter();
      }
      return;
    }

    if (pressedKey === '⏎' || pressedKey === 'Enter') {
      validateAnswer();
      return;
    }

    switch (pressedKey) {
      case '2':
        pressedKey = 'ㅃ';
        break;
      case '3':
        pressedKey = 'ㅉ';
        break;
      case '4':
        pressedKey = 'ㄸ';
        break;
      case '5':
        pressedKey = 'ㄲ';
        break;
      case '6':
        pressedKey = 'ㅆ';
        break;
      case '8':
        pressedKey = 'ㅒ';
        break;
      case '9':
        pressedKey = 'ㅖ';
        break;
    }

    const found = pressedKey.match(/[ㄱ-ㅎㅏ-ㅗㅛㅜㅠㅡㅣ]/gi);
    if (found && found.length == 1) {
      insertLetter(pressedKey);
    }
  };

  const handleResetCache = () => {
    queryClient.removeQueries({ queryKey: ['analytics'] });
  };

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keyup', handleKeyUp);
    };
  });

  return (
    <>
      <div
        className={cx('content')}
        onClick={() => {
          setIsKeyBoardOpen((prev) => !prev);
        }}
      >
        <div className={cx('inner-content')}>
          <div className={cx('secret-key')}>
            <TextWithStarIcon fill="#ffb9d6" size={8}>
              암호
            </TextWithStarIcon>
          </div>
          <div className={cx('message')}>
            <img src={`${CDN_ASSETS_URL}/teasing/quotes.png`} alt="message" className={cx('left')} />
            6월 26일엔 눈이 온대요.
            <img src={`${CDN_ASSETS_URL}/teasing/quotes.png`} alt="message" className={cx('right')} />
          </div>
          <div className={cx('answer_container')}>
            <div className={cx('letter-container')} ref={letterContainer}>
              {Array(4)
                .fill(null)
                .map((_, index) => (
                  <div key={index} className={cx('letter-box')}>
                    <div className={cx({ 'blink-animation': g_currentGuess.length === index })}></div>
                  </div>
                ))}
              <div className={cx('letter-box', 'space')}>
                <div className={cx({ 'blink-animation': g_currentGuess.length === 4 })}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ActiveButton text="대답하기" isChecked={true} onClick={validateAnswer} />
      <p className={cx('please-try')}>
        답을 틀린 자에게는 힌트를 제공해줄테니
        <br />
        <span>용기를 가지고 암호를 적어보시오!</span>
      </p>
      {isOpen && <Modal onClose={setIsOpen} />}
      {isKeyBoardOpen && <KeyBoard handleInput={handleInputText} />}
    </>
  );
};

export default Answer;
