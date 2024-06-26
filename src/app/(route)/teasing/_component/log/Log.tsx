'use client';
import classNames from 'classnames/bind';
import styles from './Log.module.scss';
const cx = classNames.bind(styles);
//
import TextWithStarIcon from '@/components/textWithStarIcon';
import { fetchAnalyticsAPI } from '@/utils/api/fetch';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

const Log = () => {
  const { data, isError, error, isLoading } = useQuery({
    queryKey: ['analytics'],
    queryFn: () => fetchAnalyticsAPI(),
  });
  const [failedUserNumber, setFailedUserNumber] = useState(0);
  const [successUserNumber, setSuccessUserNumber] = useState(0);

  useEffect(() => {
    if (!isLoading && data) {
      const enterSuccessData = data.data.filter(({ key }) => key === 'enter_teasing_success')[0];
      const enterFailureData = data.data.filter(({ key }) => key === 'enter_teasing_failure')[0];

      setSuccessUserNumber(enterSuccessData ? parseInt(enterSuccessData.count) : 0);
      setFailedUserNumber(enterFailureData ? parseInt(enterFailureData.count) : 0);
    }
    // fetchRegisteredInfoAPI()
    //   .then((res) => console.log(res))
    //   .catch((err) => console.error(err));
  }, [data]);

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className={cx('container')}>
      <div className={cx('enter')}>
        <div className={cx('enter-text')}>
          <TextWithStarIcon fill="#e2cdd5" size={8}>
            도전한 사람
          </TextWithStarIcon>
          <span>{(successUserNumber + failedUserNumber).toLocaleString()}명</span>
        </div>
      </div>
      <div className={cx('fail')}>
        <div className={cx('fail-text')}>
          <TextWithStarIcon fill="#e2cdd5" size={8}>
            입장한 사람
          </TextWithStarIcon>
          <span>{successUserNumber.toLocaleString()}명</span>
        </div>
      </div>
    </div>
  );
};

export default Log;
