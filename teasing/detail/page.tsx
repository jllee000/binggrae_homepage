'use client';

import { isCorrectAtom } from '@/recoil/atoms';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import Header from '../_component/header/Header';
import CorrectAnswer from './correctAnswer/CorrectAnswer';
import WrongAnswer from './wrongAnswer/WrongAnswer';

const TeasingDetail = () => {
  const router = useRouter();
  const [isClientSide, setIsClientSide] = useState(false);

  const isCorrect = useRecoilValue(isCorrectAtom);

  useEffect(() => {
    if (isCorrect === null) {
      router.replace('/');
    }
    setIsClientSide(true);
  }, [router, isCorrect]);

  if (!isClientSide) {
    return <></>;
  }

  return (
    <>
      <Header />
      {isCorrect ? <CorrectAnswer /> : <WrongAnswer />}
    </>
  );
};

export default TeasingDetail;
