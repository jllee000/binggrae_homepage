export const dynamic = 'force-dynamic';

import { getAnalyticsSubAPI } from '@/utils/api/fetch';

export async function GET() {
  const data = await getAnalyticsSubAPI();
  return Response.json(data);
}
