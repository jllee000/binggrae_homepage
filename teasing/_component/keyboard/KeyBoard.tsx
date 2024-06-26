'use client';
import classNames from 'classnames/bind';
import styles from './KeyBoard.module.scss';
const cx = classNames.bind(styles);
//
import { keyboardKeyToEnglishText } from '@/utils/hangul_tool';

const keyArraySpecial = ['ㅃ', 'ㅉ', 'ㄸ', 'ㄲ', 'ㅆ', 'ㅒ', 'ㅖ', '완료'];
const keyArrayOne = ['ㅂ', 'ㅈ', 'ㄷ', 'ㄱ', 'ㅅ', 'ㅛ', 'ㅕ', 'ㅑ', 'ㅐ', 'ㅔ'];
const keyArrayTwo = ['ㅁ', 'ㄴ', 'ㅇ', 'ㄹ', 'ㅎ', 'ㅗ', 'ㅓ', 'ㅏ', 'ㅣ'];
const keyArrayThree = ['ㅋ', 'ㅌ', 'ㅊ', 'ㅍ', 'ㅠ', 'ㅜ', 'ㅡ', ';'];

interface KeyBoardProps {
  handleInput: (pressedKey: string) => void;
}

interface KeyProps extends KeyBoardProps {
  keyWord: string;
}

const Key = ({ handleInput, keyWord }: KeyProps) => {
  return (
    <div
      className={cx({
        submit: keyWord === '완료',
        erase: keyWord === ';',
        key: !(keyWord === '완료' || keyWord === ';'),
      })}
      onClick={() => handleInput(keyboardKeyToEnglishText(keyWord))}
    >
      {keyWord === ';' ? '지우기' : keyWord}
    </div>
  );
};

const KeyBoard = ({ handleInput }: KeyBoardProps) => {
  return (
    <div className={cx('container')}>
      <div className={cx('special')}>
        {keyArraySpecial.map((keyWord, _index) => {
          return <Key key={_index} handleInput={handleInput} keyWord={keyWord} />;
        })}
      </div>
      <div className={cx('top')}>
        {keyArrayOne.map((keyWord, _index) => {
          return <Key key={_index} handleInput={handleInput} keyWord={keyWord} />;
        })}
      </div>
      <div className={cx('middle')}>
        {keyArrayTwo.map((keyWord, _index) => {
          return <Key key={_index} handleInput={handleInput} keyWord={keyWord} />;
        })}
      </div>
      <div className={cx('bottom')}>
        {keyArrayThree.map((keyWord, _index) => {
          return <Key key={_index} handleInput={handleInput} keyWord={keyWord} />;
        })}
      </div>
    </div>
  );
};

export default KeyBoard;
