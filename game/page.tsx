'use client';

import { subContentStepAtom } from '@/recoil/atoms';
import { useRecoilValue } from 'recoil';
import BackgroundImage from './_component/Background';
import Intro from './_component/intro';
import Play from './_component/play';

function SubMainPage() {
  const subContentStep = useRecoilValue(subContentStepAtom);

  return (
    <>
      <BackgroundImage />
      {subContentStep === 'intro' ? <Intro /> : <Play />}
    </>
  );
}

export default SubMainPage;
