'use client';

import classNames from 'classnames/bind';
import styles from './shareButtons.module.scss';
const cx = classNames.bind(styles);
//
import useGtag from '@/hooks/useGtag';
import { getCDNImageURL } from '@/utils/functions';
import { CSSProperties, useEffect, useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { toast } from 'react-toastify';

type Props = {
  shape: 'oval' | 'square';
  gtagOption: { page: string; detail: string };
  borderColor: string;
  backgroundStyle: CSSProperties['background'];
  title: string;
  text: string;
  url?: string;
  files?: File[];
  callback?: () => void;
};

function ShareButtons(props: Props) {
  const { handleEventGtag } = useGtag();
  const [fullURL, setFullURL] = useState('');
  const [isShowShare, setIsShowShare] = useState(false);
  const [customStyle, setCustomStyle] = useState<CSSProperties>({});

  useEffect(() => {
    if (props.url) {
      setFullURL(window.location.origin + props.url);
    } else {
      setFullURL(window.location.href);
    }
    setIsShowShare(!!window.navigator?.share);
  }, [props.url]);

  useEffect(() => {
    setCustomStyle((prev) => {
      const btnStyle = { ...prev };
      if (props.backgroundStyle) {
        btnStyle['background'] = props.backgroundStyle;
      }
      if (props.borderColor) {
        btnStyle['borderColor'] = props.borderColor;
      }
      return btnStyle;
    });
  }, [props.backgroundStyle, props.borderColor]);

  if (!fullURL) {
    return <></>;
  }

  return (
    <div className={cx('container', props.shape)}>
      <CopyLinkButton
        customStyle={customStyle}
        url={fullURL}
        onClick={() => {
          props.callback && props.callback();

          handleEventGtag(
            `빙그레_${props.gtagOption.page}_${props.gtagOption.detail}_링크복사하기`,
            props.gtagOption.page,
            props.gtagOption.detail,
            '링크복사하기'
          );
        }}
      />
      {isShowShare && (
        <NaviShareButton
          customStyle={customStyle}
          url={fullURL}
          title={props.title}
          text={props.text}
          callback={props.callback}
          onClick={() => {
            handleEventGtag(
              `빙그레_${props.gtagOption.page}_${props.gtagOption.detail}_공유하기`,
              props.gtagOption.page,
              props.gtagOption.detail,
              '공유하기'
            );
          }}
        />
      )}
    </div>
  );
}

interface CopyLinkButtonProps {
  customStyle: CSSProperties;
  url: string;
  onClick: () => void;
}
function CopyLinkButton({ customStyle, url, onClick }: CopyLinkButtonProps) {
  return (
    <CopyToClipboard
      text={url || window.location.href}
      onCopy={() =>
        toast('링크가 복사되었습니다.', {
          toastId: 'link-copy',
          className: 'toast-default',
          autoClose: 2000,
        })
      }
    >
      <button className={cx('share-btn')} style={customStyle} onClick={onClick}>
        <img src={getCDNImageURL(`/sub/result/copy.svg`)} alt="link" />
        {/* <img src={getCDNImageURL(`/teasing/link_icon.png`)} alt="link" /> */}
        <p>링크 복사</p>
      </button>
    </CopyToClipboard>
  );
}

interface NaviShareButtonProps {
  customStyle: CSSProperties;
  title: string;
  text: string;
  url: string;
  files?: File[];
  callback?: () => void;
  onClick: () => void;
}
function NaviShareButton({ customStyle, title, text, url, files, callback, onClick }: NaviShareButtonProps) {
  return (
    <button
      className={cx('share-btn')}
      onClick={() => {
        onClick();
        window.navigator
          .share({
            title: title,
            text: text + '\n' + url,
            // url: url,
            files: files,
          })
          .then(() => {
            callback && callback();
          });
      }}
      style={customStyle}
    >
      <img src={getCDNImageURL(`/sub/result/download.svg`)} alt="share" />
      {/* <img src={getCDNImageURL(`/teasing/share_icon.png`)} alt="share" /> */}
      <p>공유하기</p>
    </button>
  );
}

export default ShareButtons;
