import classNames from 'classnames/bind';
import styles from './successPage.module.scss';
const cx = classNames.bind(styles);
//
import useGetSubShare from '@/hooks/game/useGetSubShare';
import useGtag from '@/hooks/useGtag';
import { introAndStoryAudioAtom, introStepAtom, isSoundAtom, subContentStepAtom } from '@/recoil/atoms';
import { getCDNImageURL } from '@/utils/functions';
import { useRouter } from 'next/navigation';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { MyParticipationRecord, SubContentAnalytics } from '../../_type';
import Certification from '../certification';
import MyResultBoast from '../myResultBoast';
import RealTimeRank from '../realTimeRank';
import ScoreBox from '../scoreBox';
import SuccessEventBox from '../successEventBox';

interface Props {
  myParticipationRecord: MyParticipationRecord;
  analytics: SubContentAnalytics;
  playDate: string;
}

function SuccessPage({ myParticipationRecord, analytics, playDate }: Props) {
  const { handleEventGtag } = useGtag();
  const router = useRouter();

  const [shareCount] = useGetSubShare();

  const setSubContentStepAtom = useSetRecoilState(subContentStepAtom);
  const setIntroStepAtom = useSetRecoilState(introStepAtom);

  const isSound = useRecoilValue(isSoundAtom);
  const [introAndStoryAudio, setIntroAndStoryAudio] = useRecoilState(introAndStoryAudioAtom);

  const { data } = shareCount;

  return (
    <div className={cx('wrap')}>
      <Certification
        totem={myParticipationRecord.totem}
        nickname={myParticipationRecord.nickname}
        ghostType={myParticipationRecord.ghost}
        playTime={myParticipationRecord.playTime}
        playDate={playDate}
      />

      <ScoreBox score={myParticipationRecord.score} totem={myParticipationRecord.totem} analytics={analytics} />

      <MyResultBoast
        shareCount={data?.data || 0}
        gtagOption={{
          page: '서브',
          detail: myParticipationRecord.ghost === 'hidden' ? '결과_히든성공' : '결과_일반성공',
        }}
      />

      <SuccessEventBox totem={myParticipationRecord.totem} ghostType={myParticipationRecord.ghost} />

      <div className={cx('real-time-rank-wrap')}>
        <RealTimeRank
          totem={myParticipationRecord.totem}
          isSuccess={myParticipationRecord.isSuccess}
          analytics={analytics}
        />
      </div>

      <div className={cx('participate-again-wrap')}>
        <button
          onClick={() => {
            if (isSound) {
              if (introAndStoryAudio) {
                introAndStoryAudio.play();
              } else {
                const introAndStorySound = new Audio(getCDNImageURL('/sub/sound/introAndStory.mp3'));

                introAndStorySound.play();

                setIntroAndStoryAudio(introAndStorySound);
              }
            }

            setSubContentStepAtom('intro');
            setIntroStepAtom(0);

            handleEventGtag('빙그레_서브_결과_성공_한번더참여하기', '서브', '결과_성공', '한번더참여하기');
            router.push('/game');
          }}
        >
          <img src={getCDNImageURL('/sub/result/participate_again.png')} alt="participate_again_button" />
        </button>
      </div>
    </div>
  );
}

export default SuccessPage;
