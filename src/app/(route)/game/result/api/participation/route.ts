import { getParticipationLogAPI } from '@/utils/api/fetch';
import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get('code');
  const data = await getParticipationLogAPI(Number(code));
  return Response.json(data);
}
