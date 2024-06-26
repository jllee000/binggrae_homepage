import classNames from 'classnames/bind';
import styles from './certification.module.scss';
const cx = classNames.bind(styles);
//
import React, { useEffect, useMemo, useRef } from 'react';
import { formatDate, getCDNImageURL, korPostPositions } from '@/utils/functions';
import { TOTEMS } from '../../../_const';
import { GhostType } from '../../_type';
import useCaptureElementAsImage from '@/hooks/useCaptureElementAsImage';

interface Props {
  totem: string;
  nickname: string;
  ghostType: GhostType;
  playTime: string;
  playDate: string;
}

// *** 캔버스 이미지 생성 시 CORS 오류로 인해 로컬 이미지로 저장
function Certification({ totem, nickname, ghostType, playTime, playDate }: Props) {
  const certificateRef = useRef(null);

  const clubByTotem = useMemo(() => {
    return TOTEMS.filter((item) => totem === item.name)[0].club;
  }, [totem]);

  const topicByTotem = useMemo(() => {
    return TOTEMS.filter((item) => totem === item.name)[0].topic;
  }, [totem]);

  const imageSrc = useCaptureElementAsImage(certificateRef);

  const titleByGhostType = useMemo(() => {
    let title = '';

    if (ghostType === 'task') {
      title = '끝없는 과제에 지쳐\n낭만을 잃은 유령';
    } else if (ghostType === 'grade') {
      title = '성적표를 보고 그만..\n낭만을 잃은 유령';
    } else if (ghostType === 'love') {
      title = '사랑에 실패해 낭만을 잃은 유령';
    } else {
      title = '화려한 겉모습 속..\n진짜 낭만이 부족해 텅 빈 유령';
    }

    return title;
  }, [ghostType]);

  return (
    <div className={cx('wrap')}>
      <div className={cx('success-title-box')}>
        <img src={getCDNImageURL('/sub/result/title_left_icon.svg')} alt="title_icon" />
        <p className={cx('title')}>축하합니다!</p>
        <img src={getCDNImageURL('/sub/result/title_right_icon.svg')} alt="title_icon" />
      </div>

      <div className={cx('certificate-wrap')}>
        <div className={cx('certificate')} ref={certificateRef}>
          <div className={cx('header')}>
            <img className={cx('star_icon')} src={'/download/star_type1.svg'} alt="star_icon" />
            <img className={cx('totem')} src={`/download/${totem}.png`} alt="totem" />
            <img className={cx('star_icon')} src={'/download/star_type1.svg'} alt="star_icon" />
          </div>
          <p className={cx('name')}>클럽 {totem}</p>
          <p className={cx('club')}>{clubByTotem}</p>
          <div className={cx('content')}>
            <div className={cx('content-box')}>
              <div className={cx('subject')}>
                <img src={'/download/star_type2.svg'} alt="star_icon" />
                <p>클럽 상징</p>
              </div>
              <p className={cx('answer')}>{topicByTotem}</p>
            </div>

            <div className={cx('content-box')}>
              <div className={cx('subject')}>
                <img src={'/download/star_type2.svg'} alt="star_icon" />
                <p>활동명</p>
              </div>
              <p className={cx('answer')}>{nickname}</p>
            </div>

            <div className={cx('content-box')}>
              <div className={cx('subject')}>
                <img src={'/download/star_type2.svg'} alt="star_icon" />
                <p>소요시간</p>
              </div>
              <p className={cx('answer')}>{playTime}</p>
            </div>
          </div>
          <div className={cx('ghost-type-wrap')}>
            <div className={cx('ghost-type-box')}>
              <p className={cx('defeat-ghost')}>물리친 유령</p>
              <p className={cx('ghost-description')}>{titleByGhostType}</p>
            </div>
            <div className={cx('ghost-black')}>
              <img src={`/download/${ghostType}_black.png`} alt="ghost_black" />
            </div>
          </div>
          <p className={cx('bottom-phrase')}>
            유령과 맞서 {topicByTotem}
            {korPostPositions(topicByTotem).eulleul} 지켜냈기에
            <br />
            클럽 「{totem}」의 일원으로 인정함.
          </p>
          <p className={cx('date')}>{formatDate(new Date(playDate))}</p>

          <img className={cx('logo')} src={'/download/certificate_logo.png'} alt="ghost_black" />
        </div>

        {imageSrc && <img src={imageSrc} className={cx('certificate-image')} alt="certificate" />}
      </div>

      <p className={cx('download')}>▲ 이미지 꾹 눌러서 저장하기 ▲</p>
    </div>
  );
}

export default Certification;
