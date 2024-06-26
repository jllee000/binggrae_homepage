import { getSubShareAPI, postSubShareAPI } from '@/utils/api/fetch';

export async function GET() {
  const res = await getSubShareAPI();

  return Response.json(res);
}

export async function POST() {
  const res = await postSubShareAPI();

  return Response.json(res);
}
