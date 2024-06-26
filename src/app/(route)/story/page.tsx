import WorldStory from './_component/step';
import classNames from 'classnames/bind';
import styles from './story.module.scss';
const cx = classNames.bind(styles);

function WorldMainPage() {
  return (
    <>
      <div className={cx('wrap')}>
        <div className={cx('side-bg')}></div>
        <WorldStory />
      </div>
    </>
  );
}

export default WorldMainPage;
