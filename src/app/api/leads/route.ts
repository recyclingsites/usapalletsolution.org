import { getRequestContext } from '@cloudflare/next-on-pages';

export const runtime = 'edge';

export async function POST(request: Request) {
  try {
    const { env } = getRequestContext();
    const apiEndpoint = env['1DB_API_ENDPOINT'];
    const apiKey = env['1DB_API_KEY'];

    if (!apiEndpoint || !apiKey) {
      return Response.json({ error: 'Server configuration error' }, { status: 500 });
    }

    const body = await request.json();

    const response = await fetch(`${apiEndpoint}/v1/leads`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': apiKey,
      },
      body: JSON.stringify(body),
    });

    if (response.ok) {
      const data = await response.json();
      return Response.json(data);
    }

    return Response.json({ error: 'Failed to submit lead' }, { status: response.status });
  } catch {
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}
