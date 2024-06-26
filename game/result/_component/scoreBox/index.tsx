import classNames from 'classnames/bind';
import styles from './scoreBox.module.scss';
const cx = classNames.bind(styles);
//
import { getCDNImageURL, getNumericalUnit } from '@/utils/functions';
import { SubContentAnalytics } from '../../_type';

interface Props {
  score: number;
  totem: string;
  analytics: SubContentAnalytics;
}

function ScoreBox({ score: myScore, totem: myTotem, analytics }: Props) {
  const totemScore = analytics[myTotem]?.score || myScore;
  const totemsRanked = Object.keys(analytics)
    .map((totem) => ({ totem, ...analytics[totem] }))
    .sort((a, b) => b.score - a.score);
  const myTotemRank = totemsRanked.findIndex((totemByRank) => totemByRank.totem === myTotem);

  return (
    <div className={cx('wrap')}>
      <div className={cx('container')}>
        <img src={getCDNImageURL('/sub/result/star_type4.svg')} alt="star" />
        <img src={getCDNImageURL('/sub/result/star_type4.svg')} alt="star" />
        <img src={getCDNImageURL('/sub/result/star_type4.svg')} alt="star" />
        <img src={getCDNImageURL('/sub/result/star_type4.svg')} alt="star" />

        <div className={cx('score-box-wrap')}>
          <div className={cx('score-box')}>
            <div className={cx('my-score')}>
              <p>나의 점수</p>
              <p>{myScore}</p>
            </div>
            <div className={cx('total-club-score')}>
              <p>클럽 누적 점수</p>
              <p>{getNumericalUnit(totemScore)}</p>
            </div>
          </div>

          <p className={cx('club-info')}>내가 소속된 클럽의 순위는 현재 {myTotemRank + 1}위예요!</p>
        </div>
      </div>
    </div>
  );
}

export default ScoreBox;
