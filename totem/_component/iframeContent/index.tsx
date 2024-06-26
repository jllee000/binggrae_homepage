'use client';

import classNames from 'classnames/bind';
import styles from './iframeContent.module.scss';
const cx = classNames.bind(styles);
//
import { API_URL } from '@/utils/variables';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

function IframeContent() {
  const searchParams = useSearchParams();
  const resultScore = searchParams.get('result_score') || '';
  const resultCode = searchParams.get('result_code') || '';

  const apiParams: Record<string, string> = {
    proc: 'get-embed-code',
    gid: '219',
  };
  if (resultScore) {
    apiParams.result_score = resultScore;
  }
  if (resultCode) {
    apiParams.result_code = resultCode;
  }

  useEffect(() => {
    window.addEventListener('message', (event) => {
      if (event.data.type === 'share') {
        if (navigator.share) {
          navigator
            .share(event.data.payload)
            .then(() => console.log('Successful share'))
            .catch((error) => console.log('Error sharing:', error));
        } else {
          console.log('Web Share API not supported in this browser.');
        }
      }
    });
  }, []);

  return (
    <div className={cx('wrap')}>
      <iframe src={`${API_URL}?${new URLSearchParams(apiParams).toString()}`} width="100%" height="100%"></iframe>
    </div>
  );
}

export default IframeContent;
