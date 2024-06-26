import { introStepAtom, subParticipantInfoAtom } from '@/recoil/atoms';
import { useRecoilValue } from 'recoil';

import className from 'classnames/bind';
import styles from './story.module.scss';
import { getCDNImageURL } from '@/utils/functions';
const cx = className.bind(styles);

function SubStory0() {
  return (
    <p className={cx('intro-text')}>
      앗, 거기 자네!
      <br />
      <br />
      이곳은 함부로 들어오면
      <br /> 안 되는 위험한 곳이네.
      <br />
      <br />
      그대를 지켜줄
      <br /> 토템은 가지고 있는 건가?
    </p>
  );
}

function SubStory1() {
  const totemName = useRecoilValue(subParticipantInfoAtom).totem;
  return (
    <p className={cx('intro-text')}>
      자네,
      <br />
      <span>{`클럽 ${totemName}`}</span>에
      <br />
      새로 들어왔다는 그 친구였구먼!
      <br />
      <br />
      이곳엔 비밀학기 수강생들의
      <br /> 낭만을 갉아먹는 유령들이 있네.
      <br />
      <img src={getCDNImageURL('/sub/button/page-next.svg')} alt="다음" className={cx('next')} />
    </p>
  );
}

function SubStory2() {
  const totemName = useRecoilValue(subParticipantInfoAtom).totem;
  return (
    <p className={cx('intro-text')}>
      자네가 가진 토템의 힘으로
      <br />
      유령과 맞서 싸워 주겠나?
      <br />
      <br />
      <span>{`클럽 ${totemName}`}</span>의
      <br />
      명예 일원이 될 수 있을 것이라네!
    </p>
  );
}

function Story() {
  const introStep = useRecoilValue(introStepAtom);

  const renderStoryByStep = () => {
    switch (introStep) {
      case 0:
        return <SubStory0 />;
      case 1:
        return <></>;
      case 2:
        return <SubStory1 />;
      case 3:
        return <SubStory2 />;
      default:
        return <SubStory0 />;
    }
  };

  return renderStoryByStep();
}

export default Story;
