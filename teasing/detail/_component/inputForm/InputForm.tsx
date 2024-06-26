'use client';
import classNames from 'classnames/bind';
import styles from './InputForm.module.scss';
const cx = classNames.bind(styles);
//
import useGtag from '@/hooks/useGtag';
import { isCorrectAtom } from '@/recoil/atoms';
import { applyNotificationAPI } from '@/utils/api/fetch';
import { API_RESPONSE_CODE, CDN_ASSETS_URL } from '@/utils/variables';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { ActiveButton } from '../../../_component/button/Button';

interface Props {
  setModalText: React.Dispatch<React.SetStateAction<string>>;
  setOpenModal: React.Dispatch<React.SetStateAction<string>>; // TODO: isOpen인데 왜 string 타입??
}
const InputForm = ({ setModalText, setOpenModal }: Props) => {
  const currentISO = new Date().toISOString();
  const EVENT_EXPIRE_DATE_ISO = '2024-06-25T15:00:00Z';

  const { handleEventGtag } = useGtag();
  const isCorrect = useRecoilValue(isCorrectAtom);
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const applyNotification = async () => {
    if (!isChecked) {
      setModalText('개인정보 수집 및 이용 동의가 필요합니다.');
      setOpenModal('basic');
    } else if (username === '') {
      setModalText('이름을 입력해 주세요.');
      setOpenModal('basic');
    } else if (phoneNumber === '' || phoneNumber.length < 11) {
      setModalText('전화번호를 입력해 주세요.');
      setOpenModal('basic');
    } else {
      const { code } = await applyNotificationAPI(username, phoneNumber);

      if (code === API_RESPONSE_CODE.SUCCESS) {
        setOpenModal('success');
      } else if (code === API_RESPONSE_CODE.DUPLICATED) {
        setModalText('동일한 전화번호로 2회 이상 신청 시,\n알림은 1회만 발송됩니다.');
        setOpenModal('basic');
      } else {
        window.alert('Error. 오류가 반복되면 관리자에게 문의하세요.');
      }
    }
  };

  return (
    <div className={cx('apply-container')}>
      <div className={cx('name')}>
        <img src={`${CDN_ASSETS_URL}/teasing/input_shape.png`} alt="input-shape" className={cx('left')} />
        <input
          type="text"
          placeholder="이름을 입력하시오."
          value={username}
          onChange={(e) => {
            if (currentISO < EVENT_EXPIRE_DATE_ISO) {
              setUsername(e.target.value);
            } else {
              window.alert('알림신청 기간이 종료되었습니다.');
            }
          }}
          maxLength={10}
        />
        <img src={`${CDN_ASSETS_URL}/teasing/input_shape.png`} alt="input-shape" className={cx('right')} />
      </div>
      <div className={cx('phone-number')}>
        <img src={`${CDN_ASSETS_URL}/teasing/input_shape.png`} alt="input-shape" className={cx('left')} />
        <input
          type="text"
          placeholder="연락처를 입력하시오.(-제외)"
          maxLength={11}
          value={phoneNumber}
          onChange={(e) => {
            if (currentISO < EVENT_EXPIRE_DATE_ISO) {
              e.target.value = e.target.value.replace(/[^0-9]/g, '');
              setPhoneNumber(e.target.value);
            } else {
              window.alert('알림신청 기간이 종료되었습니다.');
            }
          }}
        />
        <img src={`${CDN_ASSETS_URL}/teasing/input_shape.png`} alt="input-shape" className={cx('right')} />
      </div>
      <div className={cx('info')}>
        <div className={cx('info-checkbox')} onClick={() => setIsChecked(!isChecked)}>
          <div className={cx('check-box', { checked: isChecked })}>
            <img src={CDN_ASSETS_URL + '/teasing/checked_check_box.png'} alt="checked" />
          </div>
          개인정보 수집 및 이용 (필수)
        </div>
        <div className={cx('detail')} onClick={() => setOpenModal('private')}>
          자세히 보기
        </div>
      </div>
      <ActiveButton
        text="알림 신청하기"
        isChecked={isChecked}
        onClick={() => {
          if (currentISO < EVENT_EXPIRE_DATE_ISO) {
            const _text = isCorrect ? '정답' : '오답';
            handleEventGtag(`빙그레_티징_${_text}_알림신청하기`, '티징', _text, '알림신청하기');
            applyNotification();
          } else {
            window.alert('알림신청 기간이 종료되었습니다.');
          }
        }}
      />
      <div className={cx('apply-message')}>
        <img src={`${CDN_ASSETS_URL}/teasing/star_3.png`} alt="star" className={cx('starThree')} />
        알림 신청 이벤트 자동 응모 완료!
        <img src={`${CDN_ASSETS_URL}/teasing/star_3.png`} alt="star" className={cx('starThree')} />
      </div>
    </div>
  );
};

export default InputForm;
