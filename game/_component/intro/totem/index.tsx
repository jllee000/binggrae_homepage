import classNames from 'classnames/bind';
import { TOTEMS } from '../../../_const';
import styles from './totem.module.scss';
const cx = classNames.bind(styles);
//
import TextWithStarIcon from '@/components/textWithStarIcon';
import { introStepAtom, subParticipantInfoAtom } from '@/recoil/atoms';
import { getCDNImageURL, korPostPositions } from '@/utils/functions';
import renderTextWithLineBreaks from '@/utils/renderTextWithLineBreaks';
import { useSetRecoilState } from 'recoil';

interface TotemBoxProps {
  name: string;
  imgSrc: string;
  desc: string;
}

function TotemBox({ name, imgSrc, desc }: TotemBoxProps) {
  const setStep = useSetRecoilState(introStepAtom);
  const setSubParticipantInfo = useSetRecoilState(subParticipantInfoAtom);

  const handleSelectTotem = () => {
    setSubParticipantInfo((prev) => ({ ...prev, totem: name }));
    setStep(2);
  };

  return (
    <div className={cx('totem-box')} onClick={handleSelectTotem}>
      <TextWithStarIcon fill={'#57EBFF'}>
        <h5 className={cx('totem-name')}>{name}</h5>
      </TextWithStarIcon>
      <img src={imgSrc} alt={name} />
      <p className={cx('totem-desc')}>{renderTextWithLineBreaks(desc)}</p>
    </div>
  );
}

function Totems() {
  return (
    <div className={cx('totems')}>
      <h3 className={cx('title')}>토템을 선택해주세요</h3>
      <div className={cx('grid')}>
        {TOTEMS.map((totem) => {
          const totemImgSrc = `/sub/totems/${totem.name}.png`;
          const desc = `${totem.topic}${korPostPositions(totem.topic).eulleul} 지키는\n [${totem.name}] 클럽`;
          return <TotemBox key={totem.name} name={totem.name} imgSrc={getCDNImageURL(totemImgSrc)} desc={desc} />;
        })}
      </div>
    </div>
  );
}

export default Totems;
