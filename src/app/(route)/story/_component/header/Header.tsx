import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { worldContentStepAtom } from '@/recoil/atoms';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useRouter } from 'next/navigation';
const cx = classNames.bind(styles);

function Header() {
  const worldContentStep = useRecoilValue(worldContentStepAtom);
  const setWorldStep = useSetRecoilState(worldContentStepAtom);
  const router = useRouter();
  return (
    <div className={cx('header-container')}>
      <img
        src={process.env.NEXT_PUBLIC_CDN_IMAGES + '/story/arrow_back.png'}
        alt="arrow-back"
        className={cx('arrow-back')}
        onClick={() => {
          if (worldContentStep === 0) {
            router.push('/home');
          } else {
            setWorldStep(worldContentStep - 1);
          }
        }}
      />
      <img src={process.env.NEXT_PUBLIC_CDN_IMAGES + '/story/logo.png'} alt="logo" className={cx('logo')} />
      <img
        src={process.env.NEXT_PUBLIC_CDN_IMAGES + '/story/home.png'}
        alt="home"
        className={cx('home')}
        onClick={() => router.push('/home')}
      />
    </div>
  );
}

export default Header;
