import classNames from 'classnames/bind';
import styles from './failPage.module.scss';
const cx = classNames.bind(styles);
//
import useGetSubShare from '@/hooks/game/useGetSubShare';
import { SubContentAnalytics } from '../../_type';
import FailEventBox from '../failEventBox';
import FailPhrase from '../failPhrase';
import MyResultBoast from '../myResultBoast';
import RealTimeRank from '../realTimeRank';

interface Props {
  totem: string;
  analytics: SubContentAnalytics;
}

function FailPage({ totem, analytics }: Props) {
  const [shareCount] = useGetSubShare();

  const { data } = shareCount;

  return (
    <div className={cx('wrap')}>
      <FailPhrase totem={totem} />

      <FailEventBox />

      <RealTimeRank totem={totem} isSuccess={false} analytics={analytics} />

      <MyResultBoast shareCount={data?.data || 0} gtagOption={{ page: '서브', detail: '결과_실패' }} />
    </div>
  );
}

export default FailPage;
