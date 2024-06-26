import classNames from 'classnames/bind';
import styles from './wrong-answer.module.scss';
const cx = classNames.bind(styles);
//
import { CDN_ASSETS_URL } from '@/utils/variables';
import { RestartButton } from '../../_component/button/Button';
import OpenNotification from '../_component/openNotification/OpenNotification';

const WrongAnswer = () => {
  return (
    <>
      <div className={cx('title')}>
        <img src={`${CDN_ASSETS_URL}/teasing/title.png`} alt="title" className={cx('title-image')} />
      </div>
      <div className={cx('message-container')}>
        <div className={cx('message')}>
          <div className={cx('inner-content')}>
            <p>
              자네.. 낭만이 없군.
              <br />
              이 퀴즈를 풀어낸다면
              <br />
              비밀학기 수강생으로 받아들여주겠소.
              <br />
              몇 번 틀리더라도 못 본 척할 테니...
              <br />
              자신있게 도전해보시오!
            </p>
            <div className={cx('hint')}>
              <img src={`${CDN_ASSETS_URL}/teasing/hint_text.png`} alt="hint" />
            </div>
          </div>
        </div>
      </div>
      <div className={cx('line')}></div>
      <OpenNotification />
      <div className={cx('line')}></div>
      <div className={cx('restart-container')}>
        <img src={`${CDN_ASSETS_URL}/teasing/character.png`} alt="character" />
        <div className={cx('restart')}>
          <img src={`${CDN_ASSETS_URL}/teasing/star_group.png`} alt="star" />
          <p>다시 도전해 보시겠소?</p>
          <RestartButton text="재도전 하기" />
        </div>
      </div>
    </>
  );
};

export default WrongAnswer;
