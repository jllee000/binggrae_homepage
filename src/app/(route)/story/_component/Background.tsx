import { worldContentStepAtom } from '@/recoil/atoms';
import { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { getCDNImageURL } from '@/utils/functions';

interface BackgroundProps {
  children: React.ReactNode;
  hasButton: boolean;
}

function Background({ children, hasButton }: BackgroundProps) {
  const worldContentStep = useRecoilValue(worldContentStepAtom);
  const setWorldStep = useSetRecoilState(worldContentStepAtom);

  useEffect(() => {
    function preloading(imageArray: string[]) {
      imageArray.forEach((url: string) => {
        const image = new Image();
        image.src = url;
      });
    }

    preloading([
      getCDNImageURL('story/background_0.png'),
      getCDNImageURL('story/background_1.png'),
      getCDNImageURL('story/background_2.png'),
      getCDNImageURL('story/background_3.png'),
      getCDNImageURL('story/background_4.png'),
      getCDNImageURL('story/background_5.png'),
      getCDNImageURL('story/background_6.png'),
      getCDNImageURL('story/background_7.png'),
      getCDNImageURL('story/background_8.png'),
      getCDNImageURL('story/background_9.png'),
    ]);
  }, []);

  return (
    <>
      {!hasButton ? (
        <div
          onClick={() => setWorldStep(worldContentStep + 1)}
          style={{
            width: '100%',
            height: '100%',
            background: `url(${process.env.NEXT_PUBLIC_CDN_IMAGES}/story/background_${worldContentStep}.png)`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundColor: '#120307',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {children}
        </div>
      ) : (
        <div
          style={{
            width: '100%',
            height: '100%',
            background: `url(${process.env.NEXT_PUBLIC_CDN_IMAGES}/story/background_${worldContentStep}.png)`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundColor: '#120307',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {children}
        </div>
      )}
    </>
  );
}

export default Background;
