export type GhostType = 'grade' | 'task' | 'love' | 'hidden';

export interface MyParticipationRecord {
  nickname: string; // 닉네임
  score: number; // 점수
  ghost: GhostType; // 유령 타입
  totem: string; // 토템 타입
  clickCount: number; // 탭 횟수
  isSuccess: boolean; // 미션 성공 여부
  playTime: string; // 소요 시간
}

export interface SubContentAnalytics {
  [totem: string]: {
    success: number; // 성공 횟수
    score: number; // 누적 점수
  };
}

export interface ClubParticipationList {
  name: string; // 토템 이름
  score: number; // 누적 점수
  successCount: number; // 처치한 유령 수
  rank: number; // 순위
}

export interface EventForm {
  name: string; // 이름
  mobile: string; // 연락처
}
