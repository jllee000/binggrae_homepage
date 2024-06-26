'use client';
import classNames from 'classnames/bind';
import styles from './correct-answer.module.scss';
const cx = classNames.bind(styles);
//
import { ActiveButton } from '@/app/(route)/teasing/_component/button/Button';
import ShareButtons from '@/components/shareButtons';
import TextWithStarIcon from '@/components/textWithStarIcon';
import useGtag from '@/hooks/useGtag';
import { SHARE_INFO } from '@/utils/consts';
import { CDN_ASSETS_URL } from '@/utils/variables';
import CopyToClipboard from 'react-copy-to-clipboard';
import { toast } from 'react-toastify';
import OpenNotification from '../_component/openNotification/OpenNotification';

const CorrectAnswer = () => {
  const currentISO = new Date().toISOString();
  const EVENT_EXPIRE_DATE_ISO = '2024-06-25T15:00:00Z';

  const { handleEventGtag } = useGtag();

  return (
    <>
      <div className={cx('title')}>
        <img src={`${CDN_ASSETS_URL}/teasing/title.png`} alt="title" className={cx('title-image')} />
      </div>
      <div className={cx('sub-title')}>
        <TextWithStarIcon fill="#ffb9d6" size={12}>
          비밀학기 수강생이 된 것을 환영하오!
        </TextWithStarIcon>
      </div>
      <div className={cx('assignment-wrap')}>
        <div className={cx('assignment')}>
          <div className={cx('inner-content')}>
            <div className={cx('assignment-title')}>
              <TextWithStarIcon fill="#ffb9d6" size={8}>
                과제 1
              </TextWithStarIcon>
            </div>
            <p>
              우리만이 알고 있는 암호
              <br />
              <span>&quot;6월 26일엔 눈이 온대요.&quot;</span>를<br />
              상태메시지 / 스토리 / 포스팅 등<br />
              원하는 곳에 자유롭게 올리시오.
            </p>
            <CopyToClipboard
              text={'6월 26일엔 눈이 온대요.'}
              onCopy={() =>
                toast('암호가 복사되었습니다.', {
                  toastId: 'pass-copy',
                  className: 'toast-default',
                })
              }
            >
              <ActiveButton
                text={'암호 복사하기'}
                isChecked={true}
                onClick={() => {
                  handleEventGtag('빙그레_티징_정답_암호복사하기', '티징', '정답', '암호 복사하기');
                }}
              />
            </CopyToClipboard>
          </div>
        </div>

        <div className={cx('wires')}>
          <img src={`${CDN_ASSETS_URL}/teasing/wire.png`} alt="wire" />
          <img src={`${CDN_ASSETS_URL}/teasing/wire.png`} alt="wire" />
        </div>

        <div className={cx('assignment')}>
          <div className={cx('inner-content')}>
            <div className={cx('assignment-title')}>
              <TextWithStarIcon fill="#ffb9d6" size={8}>
                과제 2
              </TextWithStarIcon>
            </div>
            <p>
              비밀학기 수강생이 본다면
              <br />
              올바른 암호 &lsquo;맛있겠다 냠&rsquo;을 회신할 것이고,
              <br />
              <span>
                틀린 자에게는 비밀 메시지를 보내
                <br />
                비밀학기 수강생으로 만드시오.
              </span>
            </p>
            <CopyToClipboard
              text={`낭만이 없는 당신, 비밀학기에 강제 소환되었습니다.
즉시 bit.ly/secretofbing 링크에 접속하여 암호의 답을 알아낸 뒤,
친구들이 볼 수 있는 공간에
"6월 26일엔 눈이 온대요."를 올리세요.
비밀학기 수강생이라면 올바른 답을 회신할 것입니다.
*암호의 정답은 아무에게도 말하지 마세요.`}
              onCopy={() =>
                toast('비밀 메시지가 복사되었습니다.', {
                  toastId: 'secret-msg-copy',
                  className: 'toast-default',
                  autoClose: 2000,
                })
              }
            >
              <ActiveButton
                text={'비밀 메시지 복사하기'}
                isChecked={true}
                onClick={() => {
                  handleEventGtag('빙그레_티징_정답_비밀메시지복사하기', '티징', '정답', '비밀메시지복사하기');
                }}
              />
            </CopyToClipboard>
          </div>
        </div>
      </div>

      <OpenNotification />

      <div className={cx('event_2')}>
        <div className={cx('top')}>
          <div className={cx('title')}>
            <TextWithStarIcon fill="#ffb9d6" size={12}>
              SNS 공유 이벤트
            </TextWithStarIcon>
          </div>
          <p className={cx('message')}>
            우리의 암호를 세상에 퍼뜨려 준 자에게
            <br />
            선물을 드리겠소!
          </p>
          <div className={cx('price')}>
            <img src={`${CDN_ASSETS_URL}/teasing/price.png`} alt="price" />
            <p className={cx('message')}>지금 여행을 떠나 보시오!</p>
            <p>항공권 기프트카드 20만원 (2명)</p>
          </div>
          <div className={cx('steps')}>
            <div className={cx('step_1')}>
              <div className={cx('title')}>STEP 1</div>
              <div className={cx('copy-container')}>
                6월 26일엔 눈이 온대요.
                <CopyToClipboard
                  text={`6월 26일엔 눈이 온대요.`}
                  onCopy={() =>
                    toast('암호가 복사되었습니다.', {
                      toastId: 'secret-msg-copy',
                      className: 'toast-default',
                      autoClose: 2000,
                    })
                  }
                >
                  <div className={cx('copy')}>
                    <img
                      src={`${CDN_ASSETS_URL}/teasing/content_copy.png`}
                      alt="copy-icon"
                      className={cx('copy_icon')}
                    />
                    복사
                  </div>
                </CopyToClipboard>
              </div>
              <p>
                위 문장을 상태메시지/스토리/포스팅 등<br />
                본인의 SNS에 자유롭게 올리기
              </p>
            </div>
            <img src={`${CDN_ASSETS_URL}/teasing/down_arrow.png`} alt="down-arrow" />
            <div className={cx('step_2')}>
              <div className={cx('title')}>STEP 2</div>
              <p>SNS에 올린 화면을 이미지로 캡쳐하기</p>
            </div>
            <img src={`${CDN_ASSETS_URL}/teasing/down_arrow.png`} alt="down-arrow" />
            <div className={cx('step_3')}>
              <div className={cx('title')}>STEP 3</div>
              <p>
                캡쳐한 인증샷 이미지를 아래 구글폼을 통해
                <br />
                이름/연락처와 함께 제출하기
              </p>
            </div>
          </div>
          <div className={cx('event_button')}>
            <ActiveButton
              text="이벤트 참여하기"
              isChecked={true}
              onClick={() => {
                if (currentISO < EVENT_EXPIRE_DATE_ISO) {
                  window.open('https://forms.gle/e9DNye45Q8KRnjFj9', '_blank', 'noopener,noreferrer');
                } else {
                  window.alert('이벤트 기간이 종료되었습니다.');
                }
              }}
            />
          </div>
        </div>
        <div className={cx('line')}></div>
        <div className={cx('bottom')}>
          <p>
            이벤트 기간 : 2024. 06. 17(월) - 2024. 06. 25(화)
            <br />
            당첨자 발표 : 2024. 07. 08 (월)
            <br />
            당첨자 발표는 빙그레 인스타그램(@binggraekorea)
            <br />
            계정에서 공개됩니다.
          </p>
        </div>
      </div>
      <div className={cx('share-area')}>
        <ShareButtons
          shape="square"
          borderColor={'#ffb9d6'}
          backgroundStyle={`linear-gradient(180deg, rgba(255, 255, 255, 0) 26.09%, rgba(255, 255, 255, 0.2) 100%)`}
          url="/teasing"
          title={SHARE_INFO['default'].title as string}
          text={SHARE_INFO['default'].description as string}
          gtagOption={{ page: '티징', detail: '정답' }}
        />
      </div>
    </>
  );
};

export default CorrectAnswer;
