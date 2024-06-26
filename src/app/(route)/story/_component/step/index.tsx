'use client';

import classNames from 'classnames/bind';
import styles from './step.module.scss';
const cx = classNames.bind(styles);
//
import useGtag from '@/hooks/useGtag';
import { worldContentStepAtom } from '@/recoil/atoms';
import { useRecoilValue } from 'recoil';
import Background from '../Background';
import { FindTotemButton, NextButton } from '../button/Button';
import FloatingItem from '../floatingItem/FloatingItem';
import Header from '../header/Header';
import { ThreeLineTextBox, TwoLineTextBox } from '../textBox/TextBox';

function Story0() {
  return (
    <div className={cx('story')}>
      <Header />
      <Background hasButton={true}>
        <div className={cx('button-container')}>
          <NextButton text="똑똑!" />
        </div>
      </Background>
    </div>
  );
}

function Story1() {
  return (
    <div className={cx('story')}>
      <Header />
      <Background hasButton={true}>
        <TwoLineTextBox hasButton={true}>
          오! 반가운 얼굴이군!
          <br />
          빙그레 비밀학기에 온 것을 환영하오.
        </TwoLineTextBox>
        <div className={cx('button-container')}>
          <NextButton text="비밀학기가 뭔가요?" />
        </div>
      </Background>
    </div>
  );
}

function Story2() {
  return (
    <div className={cx('story')}>
      <Header />
      <Background hasButton={false}>
        <ThreeLineTextBox hasButton={false}>
          현실 세계에는 우리에게
          <br />
          진정으로 필요한 것을
          <br />
          알려주는 수업은 없는 듯 하오.
        </ThreeLineTextBox>
      </Background>
    </div>
  );
}

function Story3() {
  return (
    <div className={cx('story')}>
      <Header />
      <Background hasButton={false}>
        <ThreeLineTextBox hasButton={false}>
          바로... 낭만! 꼭 필요하지만
          <br />
          저 마음 깊은 곳에 묻어두거나,
          <br />
          잃어버린 이들이 많지...
        </ThreeLineTextBox>
      </Background>
    </div>
  );
}

function Story4() {
  return (
    <div className={cx('story')}>
      <Header />
      <Background hasButton={true}>
        <ThreeLineTextBox hasButton={true}>
          하여 짐은 지친 그대들의
          <br />
          낭만을 되찾아 주기 위해
          <br />
          비밀학기를 만들게 되었소.
        </ThreeLineTextBox>
        <div className={cx('button-container')}>
          <NextButton text="나의 낭만...?" />
        </div>
      </Background>
    </div>
  );
}

function Story5() {
  return (
    <div className={cx('story')}>
      <Header />
      <Background hasButton={false}>
        <ThreeLineTextBox hasButton={false}>
          그대의 낭만이 무엇인지 궁금한가?
          <br />
          그건 실습을 통해
          <br />
          토템을 찾으면 알 수 있을 것이오!
        </ThreeLineTextBox>
        <FloatingItem />
      </Background>
    </div>
  );
}

function Story6() {
  const { handleEventGtag } = useGtag();

  return (
    <div className={cx('story')}>
      <Header />
      <Background hasButton={true}>
        <TwoLineTextBox hasButton={true}>
          만약 토템을 찾았다면
          <br />
          반드시 잘 간직하고 있어야 하오!
        </TwoLineTextBox>
        <div className={cx('button-container')}>
          <NextButton
            text="대화 이어가기"
            onClickEvent={() => {
              handleEventGtag('빙그레_세계관_스토리_대화이어가기', '세계관', '스토리', '대화이어가기');
            }}
          />
          <FindTotemButton
            onClickEvent={() => {
              handleEventGtag('빙그레_세계관_스토리_토템찾으러가기1', '세계관', '스토리', '토템찾으러가기1');
            }}
          />
        </div>
      </Background>
    </div>
  );
}

function Story7() {
  return (
    <div className={cx('story')}>
      <Header />
      <Background hasButton={false}>
        <TwoLineTextBox hasButton={false}>
          아, 그리고 요즘
          <br />
          정체불명의 유령이 돌아다니던데..
        </TwoLineTextBox>
      </Background>
    </div>
  );
}

function Story8() {
  return (
    <div className={cx('story')}>
      <Header />
      <Background hasButton={true}>
        <ThreeLineTextBox hasButton={true}>
          그 유령들.. 우리 정원 열매들을
          <br />
          한 입 베어 물고 도망간다더군.
          <br />
          그대도 마주치치 않게 조심하길 바라오!
        </ThreeLineTextBox>
        <div className={cx('button-container')}>
          <NextButton text="알겠어요!" />
        </div>
      </Background>
    </div>
  );
}

function Story9() {
  const { handleEventGtag } = useGtag();

  return (
    <div className={cx('story')}>
      <Header />
      <Background hasButton={true}>
        <ThreeLineTextBox hasButton={true}>
          꼭 토템을 얻어 비밀학기를
          <br />
          잘 수료하길 바라겠소!
          <br />
          그럼 행운을 빌겠네. 하하하!
        </ThreeLineTextBox>
        <div className={cx('button-container')}>
          <NextButton
            text="대화 종료하기"
            onClickEvent={() => {
              handleEventGtag('빙그레_세계관_스토리_대화종료하기', '세계관', '스토리', '대화종료하기');
            }}
          />
          <FindTotemButton
            onClickEvent={() => {
              handleEventGtag('빙그레_세계관_스토리_토템찾으러가기2', '세계관', '스토리', '토템찾으러가기2');
            }}
          />
        </div>
      </Background>
    </div>
  );
}

function WorldStory() {
  const worldContentStep = useRecoilValue(worldContentStepAtom);

  const renderStoryByStep = () => {
    switch (worldContentStep) {
      case 0:
        return <Story0 />;
      case 1:
        return <Story1 />;
      case 2:
        return <Story2 />;
      case 3:
        return <Story3 />;
      case 4:
        return <Story4 />;
      case 5:
        return <Story5 />;
      case 6:
        return <Story6 />;
      case 7:
        return <Story7 />;
      case 8:
        return <Story8 />;
      case 9:
        return <Story9 />;
      default:
        return <Story0 />;
    }
  };

  return renderStoryByStep();
}

export default WorldStory;
