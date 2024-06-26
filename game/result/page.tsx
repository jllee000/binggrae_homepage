'use client';

import classNames from 'classnames/bind';
import styles from './result.module.scss';
const cx = classNames.bind(styles);
//
import Loading from '@/components/loading';
import useGetSubResult from '@/hooks/game/useGetSubResult';
import { introStepAtom, subContentStepAtom } from '@/recoil/atoms';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import FailPage from './_component/failPage';
import SuccessPage from './_component/successPage';

function SubResult() {
  const queries = useGetSubResult();

  const setIntroStep = useSetRecoilState(introStepAtom);
  const setSubStep = useSetRecoilState(subContentStepAtom);

  useEffect(() => {
    window.addEventListener('popstate', function () {
      setIntroStep(0);
      setSubStep('intro');
    });
  }, []);

  const [participation, analytics] = queries;
  const { data: myParticipationRecord, isFetching } = participation;
  const { data: subContentAnalytics } = analytics;

  const isLoading = queries.some((query) => query.isLoading);
  const isError = queries.some((query) => query.isError);

  if (isLoading || isFetching) {
    return <Loading />;
  }

  if (isError || !myParticipationRecord || !subContentAnalytics) {
    return <></>;
  }

  return (
    <div className={cx('wrap')}>
      {myParticipationRecord.data.json_data.isSuccess ? (
        <SuccessPage
          myParticipationRecord={myParticipationRecord.data.json_data}
          analytics={subContentAnalytics.data}
          playDate={myParticipationRecord.data.regdate}
        />
      ) : (
        <FailPage totem={myParticipationRecord.data.json_data.totem} analytics={subContentAnalytics.data} />
      )}
    </div>
  );
}

export default SubResult;
