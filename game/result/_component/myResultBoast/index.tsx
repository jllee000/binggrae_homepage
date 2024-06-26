import classNames from 'classnames/bind';
import styles from './myResultBoast.module.scss';
const cx = classNames.bind(styles);
//
import ShareButtons from '@/components/shareButtons';
import usePostSubShare from '@/hooks/game/usePostSubShare';
import { SHARE_INFO } from '@/utils/consts';
import { getCDNImageURL, getNumberWithCommas } from '@/utils/functions';

interface Props {
  shareCount: number;
  gtagOption: { page: string; detail: string };
}

function MyResultBoast({ shareCount, gtagOption }: Props) {
  const { mutate } = usePostSubShare();

  return (
    <div className={cx('wrap')}>
      <div className={cx('title-box')}>
        <p>내 결과 자랑하기</p>
        <img src={getCDNImageURL(`/sub/result/share.svg`)} alt="" />
        <span>{getNumberWithCommas(shareCount)}</span>
      </div>

      <ShareButtons
        shape={'square'}
        borderColor={'#fff'}
        backgroundStyle={`linear-gradient(135deg, rgba(255, 255, 255, 0.04) 5.89%, rgba(255, 0, 92, 0.2) 108.51%)`}
        title={SHARE_INFO['game'].title as string}
        text={SHARE_INFO['game'].description as string}
        callback={mutate}
        gtagOption={gtagOption}
      />
    </div>
  );
}

export default MyResultBoast;
