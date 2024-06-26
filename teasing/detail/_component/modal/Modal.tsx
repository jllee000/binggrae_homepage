import classNames from 'classnames/bind';
import styles from './Modal.module.scss';
const cx = classNames.bind(styles);
//
import TextWithStarIcon from '@/components/textWithStarIcon';
import { CDN_ASSETS_URL } from '@/utils/variables';

interface ModalProps {
  text?: string;
  onClose: (_arg?: string) => void;
}

export const BasicModal = (props: ModalProps) => {
  return (
    <div className={cx('dim')}>
      <div className={cx('modal')}>
        <img src={`${CDN_ASSETS_URL}/teasing/warning-icon.png`} alt="icon" />
        <p className={cx('text')}>{props.text}</p>
        <div className={cx('btn')} onClick={() => props.onClose('')}>
          확인
        </div>
      </div>
    </div>
  );
};

export const PrivateInfoModal = (props: ModalProps) => {
  return (
    <div className={cx('dim')}>
      <div className={cx('modal')}>
        <div className={cx('text_content')}>
          <p className={cx('title')}>개인정보 수집 및 이용 동의(필수)</p>
          <p className={cx('content')}>
            <span>1. 개인정보 수집 및 이용 안내</span>
            <br />
            캠페인 관련 안내 문자 및 이벤트 경품 발송을 위해 참여자의 개인정보를 수집하고 있습니다. 참여자의 사전 동의
            없이는 개인 정보를 함부로 공개하지 않으며, 당사가 수집한 정보는 하기 목적 이외의 용도로는 사용되지 않습니다.
            <br />- 개인 정보의 수집 및 이용 목적 : 캠페인 관련 안내 문자 및 이벤트 경품 발송
            <br />- 수집 항목 : 이름, 휴대폰번호
            <br />- 보유 기간 : 이벤트 종료 후 3개월 동안 보존 후 파기
            <br />
            <br />
            <span>2. 개인정보 취급 위탁 안내</span>
            <br />
            캠페인 관련 안내 문자 및 이벤트 경품 발송을 위해 아래와 같이 개인 정보를 위탁하고 있습니다.
            <br />
            <br />① 위탁 업체: (주)더에스엠씨그룹, (주)소프트스피어
            <br />
            <br />② 위탁 업무 내용: 캠페인 관련 안내 문자 및 이벤트 경품 발송을 위한 개인 정보(참여자 이름,
            휴대전화번호) 수집 및 이용 ※ 참여자의 이름, 연락처 등 경품 발송을 위한 개인 정보 제공에 동의를 거부할 수
            있으며, 이 경우 이벤트 참여가 제한됩니다.
          </p>
        </div>
        <div className={cx('btn')} onClick={() => props.onClose('')}>
          확인
        </div>
      </div>
    </div>
  );
};

export const SuccessModal = (props: ModalProps) => {
  return (
    <div className={cx('dim')}>
      <div className={cx('modal')}>
        <img src={`${CDN_ASSETS_URL}/teasing/success_character.png`} alt="character" className={cx('character')} />
        <div className={cx('content')}>
          <div className={cx('text')}>
            <h2>
              빙그레 비밀학기
              <br />
              알림 신청이 완료되었소.
            </h2>
            <TextWithStarIcon fill="#dcaec3" size={12}>
              6월 26일에 다시 만나길 바라오!
            </TextWithStarIcon>
          </div>
        </div>
        <div className={cx('btn')} onClick={() => props.onClose('')}>
          확인
        </div>
      </div>
    </div>
  );
};
