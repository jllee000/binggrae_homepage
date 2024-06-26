import { submitSubParticipationAPI } from '@/utils/api/fetch';
import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  const reqBody = await req.json();
  const res = await submitSubParticipationAPI(reqBody);

  return Response.json(res);
}
