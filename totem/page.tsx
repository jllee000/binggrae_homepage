import { getResultDataAPI, getResultScoreAPI } from '@/utils/api/fetch';
import { SHARE_INFO } from '@/utils/consts';
import { redirect } from 'next/navigation';
import { Metadata } from 'next/types';
import { Suspense } from 'react';
import IframeContent from './_component/iframeContent';

interface Props {
  searchParams: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const resultParams = {
    score: searchParams.result_score || '',
    code: searchParams.result_code || '',
  };

  const introMetadata: Metadata = {
    title: SHARE_INFO['totem'].title,
    description: SHARE_INFO['totem'].description,
    openGraph: {
      title: SHARE_INFO['totem'].title,
      description: SHARE_INFO['totem'].description,
      images: SHARE_INFO['totem'].images,
    },
  };

  try {
    if (resultParams.code) {
      const res = await getResultScoreAPI(resultParams.code as string);
      console.log('getResultScoreAPI', res.data);

      resultParams.score = res.data ? res.data.score : '';
    }

    let resultData = null;
    if (resultParams.score) {
      const res = await getResultDataAPI(resultParams.score as string);
      console.log('getResultDataAPI', res.data);

      if (res.data) {
        resultData = res.data;
      } else {
        // 전달받은 code나 score의 결과값 정보가 없음
        redirect('/totem');
      }
    } else if (!resultParams.code) {
      // code도 score도 전달받지 않음
      return introMetadata;
    } else {
      // 전달받은 code가 유효하지 않음
      redirect('/totem');
    }

    return {
      title: `나의 토템은 ${resultData.result}`,
      description: `나만의 토템 테스트 | 빙그레 비밀학기`,
      openGraph: {
        title: `나의 토템은 ${resultData.result}`,
        description: `나만의 토템 테스트 | 빙그레 비밀학기`,
        images: [{ url: resultData.result_share_img_pc, width: 1000, height: 526 }],
      },
    };
  } catch (error) {
    console.log(error);

    return introMetadata;
  }
}

function Main() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <IframeContent />
    </Suspense>
  );
}

export default Main;
