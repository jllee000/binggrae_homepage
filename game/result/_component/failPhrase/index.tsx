'use client';
import classNames from 'classnames/bind';
import styles from './failPhrase.module.scss';
const cx = classNames.bind(styles);
//
import useGtag from '@/hooks/useGtag';
import { introAndStoryAudioAtom, introStepAtom, isSoundAtom, subContentStepAtom } from '@/recoil/atoms';
import { getCDNImageURL } from '@/utils/functions';
import { useRouter } from 'next/navigation';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

interface Props {
  totem: string;
}

function FailPhrase({ totem }: Props) {
  const { handleEventGtag } = useGtag();
  const router = useRouter();

  const setSubContentStepAtom = useSetRecoilState(subContentStepAtom);
  const setIntroStepAtom = useSetRecoilState(introStepAtom);

  const isSound = useRecoilValue(isSoundAtom);
  const [introAndStoryAudio, setIntroAndStoryAudio] = useRecoilState(introAndStoryAudioAtom);

  return (
    <div className={cx('wrap')}>
      <div className={cx('fail-title-box')}>
        <img src={getCDNImageURL('/sub/result/title_left_icon.svg')} alt="title_icon" />
        <p className={cx('title')}>다시 도전해보세요!</p>
        <img src={getCDNImageURL('/sub/result/title_right_icon.svg')} alt="title_icon" />
      </div>

      <div className={cx('fail-description-box')}>
        <p>손이 느린 자여...</p>
        <p>
          <span>{totem} 클럽</span>의<br />
          명예를 지키기 위해선
        </p>
        <p>
          더 민첩하게
          <br />
          유령을 처치하는 게 좋겠네!
        </p>
      </div>

      <button
        className={cx('retry-button')}
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

          handleEventGtag('빙그레_서브_결과_실패_재도전하기', '서브', '결과_실패', '재도전하기');
          router.push('/game');
        }}
      >
        <img src={getCDNImageURL('/sub/result/try.png')} alt="try_button" />
      </button>
    </div>
  );
}

export default FailPhrase;
