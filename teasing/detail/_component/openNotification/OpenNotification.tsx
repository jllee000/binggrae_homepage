'use client';
import classNames from 'classnames/bind';
import styles from './OpenNotification.module.scss';
const cx = classNames.bind(styles);
//
import TextWithStarIcon from '@/components/textWithStarIcon';
import { CDN_ASSETS_URL } from '@/utils/variables';
import { useState } from 'react';
import InputForm from '../inputForm/InputForm';
import { BasicModal, PrivateInfoModal, SuccessModal } from '../modal/Modal';

const OpenNotification = () => {
  const [openModal, setOpenModal] = useState('');
  const [modalText, setModalText] = useState('');

  return (
    <>
      <div className={cx('notification')}>
        <div className={cx('title')}>
          <TextWithStarIcon fill="#ffb9d6" size={12}>
            오픈 알림 신청
          </TextWithStarIcon>
        </div>
        <p className={cx('message')}>
          비밀학기가 열리는 <span>6월 26일 오후 5시</span>,<br />
          이름과 연락처를 적어두면
          <br />
          늦지 않게 올 수 있도록 전갈을 보내주겠소.
        </p>
        <InputForm setModalText={setModalText} setOpenModal={setOpenModal} />
      </div>
      <div className={cx('event_1')}>
        <div className={cx('top')}>
          <img src={`${CDN_ASSETS_URL}/teasing/milk.png`} alt="milk" className={cx('milk')} />
          <div className={cx('event_content')}>
            <div className={cx('title')}>알림 신청 이벤트</div>
            <p>
              바나나맛우유 기프티콘
              <br />
              <span className={cx('lottery')}>추첨</span>
              <span className={cx('amount')}>200명</span>
            </p>
          </div>
        </div>
        <div className={cx('line')}></div>
        <div className={cx('bottom')}>
          <p>
            신청 기간 : 2024. 06. 17(월) - 2024. 06. 25(화)
            <br />
            당첨자 발표 : 2024. 07. 08 (월)
            <br />
            당첨 안내는 당첨자에 한해 개별 문자로 발송됩니다.
          </p>
        </div>
      </div>
      {openModal === 'basic' && <BasicModal text={modalText} onClose={setOpenModal} />}
      {openModal === 'private' && <PrivateInfoModal onClose={setOpenModal} />}
      {openModal === 'success' && <SuccessModal onClose={setOpenModal} />}
    </>
  );
};

export default OpenNotification;
