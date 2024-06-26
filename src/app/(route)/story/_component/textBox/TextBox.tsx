import classNames from 'classnames/bind';
import styles from './TextBox.module.scss';
const cx = classNames.bind(styles);

interface TextBoxProps {
  children: React.ReactNode;
  hasButton: boolean;
}

export function TwoLineTextBox({ children, hasButton }: TextBoxProps) {
  return (
    <div className={cx('two-line')}>
      {!hasButton ? (
        <>
          <img src={process.env.NEXT_PUBLIC_CDN_IMAGES + '/story/arrow.png'} alt="arrow" />
          {children}
        </>
      ) : (
        <>{children}</>
      )}
    </div>
  );
}

export function ThreeLineTextBox({ children, hasButton }: TextBoxProps) {
  return (
    <div className={cx('three-line')}>
      {!hasButton ? (
        <>
          <img src={process.env.NEXT_PUBLIC_CDN_IMAGES + '/story/arrow.png'} alt="arrow" />
          {children}
        </>
      ) : (
        <>{children}</>
      )}
    </div>
  );
}
