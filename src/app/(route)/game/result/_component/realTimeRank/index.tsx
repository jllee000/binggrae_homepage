import classNames from 'classnames/bind';
import styles from './realTimeRank.module.scss';
const cx = classNames.bind(styles);
//
import { getCDNImageURL, getNumberWithCommas } from '@/utils/functions';
import { SubContentAnalytics } from '../../_type';

interface Props {
  totem: string;
  isSuccess: boolean;
  analytics: SubContentAnalytics;
}

function RealTimeRank({ totem, isSuccess, analytics }: Props) {
  const totemsRanked = Object.keys(analytics)
    .map((totem) => ({ totem, ...analytics[totem] }))
    .sort((a, b) => {
      if (b.score !== a.score) {
        return b.score - a.score;
      } else {
        return b.success - a.success;
      }
    });

  const top3Totems = totemsRanked.slice(0, 3);
  const restTotems = totemsRanked.slice(3);
  const myTotemRank = totemsRanked.findIndex((totemByRank) => totemByRank.totem === totem);

  return (
    <div className={cx('wrap')}>
      <div className={cx('title-wrap')}>
        <img src={getCDNImageURL('/sub/result/star_type4.svg')} alt="title_icon" />
        <p className={cx('title')}>실시간 순위</p>
        <img src={getCDNImageURL('/sub/result/star_type4.svg')} alt="title_icon" />
      </div>

      <p className={cx('user-rank')}>
        <span>{totem} 클럽</span>은 현재 {myTotemRank + 1}위예요!
      </p>

      <div className={cx('chart-wrap')}>
        <div className={cx('rank', 'second')}>
          <div className={cx('totem-box')}>
            {top3Totems[1] && (
              <>
                <p className={cx('totem-name')}>{top3Totems[1].totem}</p>
                <img src={getCDNImageURL(`/sub/totems/${top3Totems[1].totem}.png`)} alt="totem" />
              </>
            )}
          </div>

          <div className={cx('score-box')}>
            <p className={cx('rank-number')}>2</p>
            <p className={cx('score')}>{getNumberWithCommas(top3Totems[1]?.score)}점</p>
          </div>
        </div>
        <div className={cx('rank', 'first')}>
          <div className={cx('totem-box')}>
            <p className={cx('totem-name')}>{top3Totems[0].totem}</p>
            <img src={getCDNImageURL(`/sub/totems/${top3Totems[0].totem}.png`)} alt="totem" />
          </div>

          <div className={cx('score-box')}>
            <p className={cx('rank-number')}>1</p>
            <p className={cx('score')}>{getNumberWithCommas(top3Totems[0].score)}점</p>
          </div>
        </div>
        <div className={cx('rank', 'third')}>
          <div className={cx('totem-box')}>
            {top3Totems[2] && (
              <>
                <p className={cx('totem-name')}>{top3Totems[2].totem}</p>
                <img src={getCDNImageURL(`/sub/totems/${top3Totems[2].totem}.png`)} alt="totem" />
              </>
            )}
          </div>

          <div className={cx('score-box')}>
            <p className={cx('rank-number')}>3</p>
            <p className={cx('score')}>{getNumberWithCommas(top3Totems[2]?.score)}점</p>
          </div>
        </div>
      </div>

      {isSuccess && (
        <>
          <div className={cx('table')}>
            <div className={cx('title')}>
              <p>순위</p>
              <p>토템</p>
              <p>처치한 유령 수</p>
              <p>점수</p>
            </div>

            <div className={cx('rank-data-wrap')}>
              {restTotems.map(({ score, success, totem: totemName }, index) => (
                <div className={cx('rank-data')} key={index}>
                  <p>{`${index + 4}위`}</p>
                  <p>{totemName}</p>
                  <p>{getNumberWithCommas(success)}</p>
                  <p>{getNumberWithCommas(score)}점</p>
                </div>
              ))}
            </div>
          </div>

          <div className={cx('gradient')} />
        </>
      )}
    </div>
  );
}

export default RealTimeRank;
