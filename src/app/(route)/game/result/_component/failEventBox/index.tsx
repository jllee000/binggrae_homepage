import classNames from 'classnames/bind';
import styles from './failEventBox.module.scss';
const cx = classNames.bind(styles);
//
import React from 'react';
import { getCDNImageURL } from '@/utils/functions';

function FailEventBox() {
  return (
    <div className={cx('wrap')}>
      <img src={getCDNImageURL('/sub/result/fail_event_box.png')} alt="event" />
    </div>
  );
}

export default FailEventBox;
