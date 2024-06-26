import classNames from 'classnames/bind';
import styles from './successEventBox.module.scss';
const cx = classNames.bind(styles);
//
import { ModalType } from '@/constants/modal';
import { modalTypeAtom } from '@/recoil/atoms';
import { getCDNImageURL, korPostPositions } from '@/utils/functions';
import { useMemo } from 'react';
import { useRecoilState } from 'recoil';
import EventRegistrationModal from '../../../_component/eventRegistrationModal';
import NoticeModal from '../../../_component/noticeModal';
import { GHOSTS, TOTEMS } from '../../../_const';
import { GhostType } from '../../_type';
import useGtag from '@/hooks/useGtag';

interface Props {
  totem: string;
  ghostType: GhostType;
}

function SuccessEventBox({ totem, ghostType }: Props) {
  const { handleEventGtag } = useGtag();
  const [modalType, setModalType] = useRecoilState(modalTypeAtom);

  const ghostIdentityByGhostType = useMemo(() => {
    return GHOSTS.filter((item) => ghostType === item.name)[0].title;
  }, [totem, ghostType]);

  const ghostDescriptionByGhostType = useMemo(() => {
    if (ghostType === 'hidden') {
      return GHOSTS[3].description;
    } else {
      return GHOSTS.filter((item) => ghostType === item.name)[0][totem];
    }
  }, [totem, ghostType]);

  const topicByTotem = useMemo(() => {
    return TOTEMS.filter((item) => totem === item.name)[0].topic;
  }, [totem]);

  return (
    <div className={cx('wrap')}>
      <img className={cx('star')} src={getCDNImageURL('/sub/result/star_type3.svg')} alt="star" />

      <p className={cx('event-phrase-1')}>
        자네가 물리친 유령의 정체는
        <br />
        {ghostIdentityByGhostType}
      </p>

      <p className={cx('event-phrase-2')}>
        그대의 토템, {totem}
        {korPostPositions(totem).eega} 가진 {topicByTotem} 덕분에
        <br />
        {ghostDescriptionByGhostType}
      </p>

      <p className={cx('event-phrase-3')}>
        고마운 마음을 담아 선물을 준비했으니
        <br />
        얼른 확인하러 가시오!
      </p>

      <img className={cx('arrow')} src={getCDNImageURL('/sub/result/event_arrow.svg')} alt="star" />

      <div className={cx('event-content')}>
        <img src={getCDNImageURL('/sub/result/event_top.png')} alt="event_top" />

        <p className={cx('event-help-text')}>매일 참여할 수록 당첨 확률이 올라갑니다.</p>

        <div className={cx('daily_entry_wrap')}>
          <button
            onClick={() => {
              handleEventGtag('빙그레_서브_결과_성공_이벤트응모하기', '서브', '결과_성공', '이벤트응모하기');
              setModalType(ModalType.eventForm);
            }}
          >
            <img src={getCDNImageURL('/sub/result/daily_entry.png')} alt="try_button" />
          </button>
        </div>

        <img src={getCDNImageURL('/sub/result/event_bottom.png')} alt="event_bottom" />
      </div>

      {modalType === ModalType.eventForm && <EventRegistrationModal onClose={() => setModalType(ModalType.close)} />}
      {modalType === ModalType.eventDuplicated && (
        <NoticeModal
          text={'금일 이벤트에 이미 응모하였소.\n많이 참여할수록 당첨 확률이 올라가니\n다음 날 다시 참여해주길 바라네.'}
          onClick={() => setModalType(ModalType.close)}
        />
      )}
    </div>
  );
}

export default SuccessEventBox;
