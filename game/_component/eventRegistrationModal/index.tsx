import classNames from 'classnames/bind';
import styles from './eventRegistrationModal.module.scss';
const cx = classNames.bind(styles);
//
import { ModalType } from '@/constants/modal';
import { modalTypeAtom } from '@/recoil/atoms';
import { postRegisterEventAPI } from '@/utils/api/event';
import { formatPhoneNumber, getCDNImageURL, isValidPhoneNumber } from '@/utils/functions';
import { API_RESPONSE_CODE } from '@/utils/variables';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';

interface Props {
  onClose: () => void;
}

type RegisterEventData = Parameters<typeof postRegisterEventAPI>[0];
type RegisterEventResponse = Awaited<ReturnType<typeof postRegisterEventAPI>>;

function EventRegistrationModal({ onClose }: Props) {
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [isAgree, setIsAgree] = useState<boolean>(false);
  const [isToggle, setIsToggle] = useState<boolean>(false);

  const setModalType = useSetRecoilState(modalTypeAtom);

  const { mutate } = useMutation<RegisterEventResponse, Error, RegisterEventData>({
    mutationFn: (eventData) => postRegisterEventAPI(eventData),
    onSuccess: (data) => {
      if (data.code === API_RESPONSE_CODE.SUCCESS) {
        alert('신청이 완료되었습니다.');
        onClose();
      } else if (data.code === API_RESPONSE_CODE.DUPLICATED) {
        setModalType(ModalType.eventDuplicated);
      } else {
        alert('실패하였습니다.');
      }
    },
  });

  const handlePhoneChange = (event) => {
    const formattedPhone = formatPhoneNumber(event.target.value);
    setPhone(formattedPhone);
  };

  const submitEvent = () => {
    const param = {
      name: name,
      mobile: phone,
    };

    if (!isAgree) {
      alert('개인정보 수집 및 이용에 동의해주세요.');
    } else if (name.trim() === '' || phone.trim() === '') {
      alert('이름과 전화번호를 모두 입력해 주세요.');
    } else if (!isValidPhoneNumber(phone)) {
      alert('유효한 전화번호 형식이 아닙니다. 다시 입력해 주세요.');
    } else {
      mutate(param);
    }
  };

  return (
    <div className={cx('wrap')}>
      <div className={cx('container')}>
        <button className={cx('cancel')} onClick={onClose}>
          <img src={getCDNImageURL('/sub/icon_cancel.svg')} alt="cancel" />
        </button>
        <p className={cx('title')}>
          이벤트 응모를 위해
          <br />
          이름과 휴대폰 번호를 입력하시오.
        </p>

        <div className={cx('input-box')}>
          <input type="text" placeholder="이름" onChange={(e) => setName(e.target.value)} maxLength={10} />
          <input type="text" placeholder="전화번호 (-제외)" value={phone} onChange={handlePhoneChange} />
        </div>

        <div className={cx('data-privacy-consent-wrap')}>
          <div className={cx('left')}>
            <button onClick={() => setIsToggle((_prev) => !_prev)}>
              <p>개인정보 수집 및 이용(필수)</p>
              <img src={getCDNImageURL(`/sub/arrow_${isToggle ? 'down' : 'right'}.svg`)} alt="toggle" />
            </button>
          </div>

          <div className={cx('right')}>
            <label className={cx('custom-checkbox')}>
              <input type="checkbox" id="consentCheckbox" onChange={() => setIsAgree((_prev) => !_prev)} />
              <span className={cx('checkmark')}></span>
              <span className={cx('agree')}>동의</span>
            </label>
          </div>
        </div>

        {isToggle && (
          <div className={cx('privacy-content')}>
            <p>1. 개인정보 수집 및 이용 안내</p>
            캠페인 관련 안내 문자 및 이벤트 경품 발송을 위해 참여자의 개인정보를 수집하고 있습니다. 참여자의 사전 동의
            없이는 개인 정보를 함부로 공개하지 않으며, 당사가 수집한 정보는 하기 목적 이외의 용도로는 사용되지 않습니다.
            <ul>
              <li>개인 정보의 수집 및 이용 목적 : 캠페인 관련 안내 문자 및 이벤트 경품 발송</li>
              <li>수집 항목 : 이름, 휴대폰번호</li>
              <li>보유 기간 : 이벤트 종료 후 3개월 동안 보존 후 파기</li>
            </ul>
            <p>2. 개인정보 취급 위탁 안내</p>
            <ul>
              <li> 캠페인 관련 안내 문자 및 이벤트 경품 발송을 위해 아래와 같이 개인 정보를 위탁하고 있습니다.</li>
            </ul>
            ① 위탁 업체: (주)더에스엠씨그룹, (주)소프트스피어
            <br />② 위탁 업무 내용: 캠페인 관련 안내 문자 및 이벤트 경품 발송을 위한 개인 정보(참여자 이름,
            휴대전화번호) 수집 및 이용
            <br />※ 참여자의 이름, 연락처 등 경품 발송을 위한 개인 정보 제공에 동의를 거부할 수 있으며, 이 경우 이벤트
            참여가 제한됩니다.
          </div>
        )}

        <button className={cx('submit')} onClick={submitEvent}>
          <p>신청 완료하기</p>
        </button>

        <div className={cx('notification')}>
          <p>[이벤트 응모 안내사항]</p>

          <ul className={cx('noti-list')}>
            <li>이벤트 응모는 1인당 1일 1회까지만 가능합니다.</li>
            <li>휴대폰 번호는 대한민국 번호로만 응모가 가능합니다.</li>
            <li>당첨 안내는 당첨자에 한해 개별 문자로 발송됩니다.</li>
            <li>
              이름과 휴대폰 번호는 당첨자 선정을 위해서만 수집되고, 수집된 개인정보는 당첨자 선정 완료 시 폐기됩니다.
            </li>
            <li>
              정보를 잘못 입력하거나 타인의 정보를 임의로 입력하여 문제가 발생하는 경우, 이에 대한 책임은 응모자
              본인에게 있습니다. 본인 명의의 핸드폰 번호를 정확히 입력해 주세요.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default EventRegistrationModal;
