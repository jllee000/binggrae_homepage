'use client';

import classNames from 'classnames/bind';
import styles from './home.module.scss';
const cx = classNames.bind(styles);
//
import Footer from '@/components/common/footer';
import ShareButtons from '@/components/shareButtons';
import useGtag from '@/hooks/useGtag';
import { introAndStoryAudioAtom, isSoundAtom } from '@/recoil/atoms';
import { SHARE_INFO } from '@/utils/consts';
import { getCDNImageURL } from '@/utils/functions';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import HomeHeader from './_component/header/HomeHeader';
import Intro from './intro';
import ScrollBox from './scollbox';

const Home = () => {
  const { handleEventGtag } = useGtag();
  const [alertShown, setAlertShown] = useState(false);
  const [homeAreaOverflow, setHomeAreaOverflow] = useState(false);

  const introAndStoryAudio = useRecoilValue(introAndStoryAudioAtom);
  const [isSound, setIsSound] = useRecoilState(isSoundAtom);
  const setAudio = useSetRecoilState(introAndStoryAudioAtom);

  const router = useRouter();

  const goDownScroll = () => {
    window.scrollTo({
      top: document.body.scrollHeight / 3,
      behavior: 'smooth', // 부드러운 스크롤 효과를 위해
    });
    setAlertShown(true);
  };

  useEffect(() => {
    if (isSound && introAndStoryAudio) {
      introAndStoryAudio.pause();
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled: number = window.pageYOffset;

      const parallaxElements = document.querySelectorAll(`.${styles['home-bg']}`);
      const halfwayPoint = document.body.scrollHeight / 5;

      parallaxElements.forEach((element) => {
        const speed = parseFloat(element.getAttribute('data-speed') || '0');
        const translateY = Math.min(scrolled * speed, 1500);
        (element as HTMLElement).style.transform = `translateY(${translateY}px)`;
      });

      if (scrolled >= halfwayPoint && !alertShown) {
        setAlertShown(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [alertShown]);

  const handleIntroClick = () => {
    setTimeout(() => {
      setHomeAreaOverflow(true);
    }, 1500);
  };

  const goHiddenPage = () => {
    const introAndStorySound = new Audio(getCDNImageURL('/sub/sound/introAndStory.mp3'));

    introAndStorySound.play();

    setIsSound(true);
    setAudio(introAndStorySound);

    handleEventGtag('빙그레_홈페이지_메인_서브랜딩', '홈페이지', '메인', '서브랜딩');
    router.push('/game');
  };

  return (
    <div className={cx('home-area', { 'overflow-scroll': homeAreaOverflow })}>
      <div className={cx('home-door-area')} onClick={goDownScroll}></div>
      <div className={cx('home-secret-area')}>
        <img
          src="https://cdn.banggooso.com/assets/bing/home/images/light.png"
          className={cx('secret-img')}
          alt="image"
        />
      </div>
      <div className={cx('home-title', { 'home-title-ani': homeAreaOverflow })}>
        <img
          src="https://cdn.banggooso.com/assets/bing/home/images/title.png"
          className={cx('img-width')}
          alt="image"
        />
      </div>
      <div className={cx('side-bg')}></div>
      <HomeHeader />
      <Intro onClick={handleIntroClick} />
      <ScrollBox />
      <div className={cx('home-castle-area')}>
        <div className={`${cx('home-bg1', 'home-bg')}`} data-speed="0.1">
          <img src="https://cdn.banggooso.com/assets/bing/home/bg/bg1.png" className={cx('img-width')} alt="image" />
        </div>
        <div className={`${cx('home-bg2', 'home-bg')}`} data-speed="0.3">
          <img src="https://cdn.banggooso.com/assets/bing/home/bg/bg2.png" className={cx('img-width')} alt="image" />
        </div>
        <div className={`${cx('home-bg3', 'home-bg')}`} data-speed="0.5">
          <img src="https://cdn.banggooso.com/assets/bing/home/bg/bg3.png" className={cx('img-width')} alt="image" />
        </div>
        <div className={`${cx('home-bg4', 'home-bg4')}`}>
          <img src="https://cdn.banggooso.com/assets/bing/home/bg/bg4.png" className={cx('img-width')} alt="image" />
        </div>

        <div className={`${styles['hidden-area']}`} onClick={goHiddenPage} />
      </div>
      <div className={cx('home-message-area')}>
        <div className="letter">
          <img
            src="https://cdn.banggooso.com/assets/bing/home/images/letter.png"
            className={cx('img-width')}
            alt="image"
          />
          <div className={cx('letter-txt', { 'show-letter': alertShown })}>
            <img
              src="https://cdn.banggooso.com/assets/bing/home/images/letter-txt.png"
              className={cx('img-width')}
              alt="image"
            />
          </div>
          <div className={`${cx('key-img')} `}>
            <img
              src="https://cdn.banggooso.com/assets/bing/home/images/key.png"
              className={cx('img-width')}
              alt="image"
            />
          </div>
        </div>
        <div className={cx('home-landing-area')}>
          <div className={cx('avatar-img')}>
            <img
              src="https://cdn.banggooso.com/assets/bing/home/images/avatar.png"
              className={cx('img-width')}
              alt="image"
            />
          </div>
          <Link
            className={cx('button-img')}
            href={'/totem'}
            onClick={() => {
              handleEventGtag('빙그레_홈페이지_메인_나만의토템찾기', '홈페이지', '메인', '나만의토템찾기');
            }}
          >
            <img
              src="https://cdn.banggooso.com/assets/bing/home/images/button.png"
              className={cx('img-width')}
              alt="image"
            />
          </Link>
        </div>
      </div>
      <div className={cx('home-bottom-area')}>
        <div className={cx('home-share-txt')}>
          <img
            src="https://cdn.banggooso.com/assets/bing/home/images/text.png"
            className={cx('img-width')}
            alt="image"
          />
        </div>
        <ShareButtons
          shape={'square'}
          borderColor={'#fff'}
          backgroundStyle={`linear-gradient(135deg, rgba(255, 255, 255, 0.04) 5.89%, rgba(255, 0, 92, 0.20) 108.51%)`}
          title={SHARE_INFO['home'].title as string}
          text={`ㅡㅡㅡ빙그레 비밀학기 입학통지서ㅡㅡㅡ\n
빙그레 비밀학기 입학을 축하하오.
필요한 모든 것은 이미 준비되어 있으니 가벼운 마음으로 출석해도 되오.
강의가 곧 시작하니 어서 모여주시오!
P.S. 반짝이는 곳에 유령이 출몰한다고 들었으니 주의하시오.`}
          gtagOption={{ page: '홈페이지', detail: '메인' }}
        />
        <Link
          className={cx('banner-div')}
          href={'/story'}
          onClick={() => {
            handleEventGtag('빙그레_홈페이지_메인_세계관랜딩', '홈페이지', '메인', '세계관랜딩');
          }}
        >
          <img
            src="https://cdn.banggooso.com/assets/bing/home/images/banner.png"
            className={cx('img-width')}
            alt="image"
          />
        </Link>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
