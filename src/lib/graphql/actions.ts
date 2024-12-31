
import { cookies } from 'next/headers';
import { DocumentNode, print } from 'graphql';

const GRAPHQL_URL = process.env.GRAPHQL_URL || "http://localhost:4000/graphql";

export async function executeGraphQL<TResult, TVariables>({
  query,
  variables,
  cache = 'force-cache',
  headers = {},
}: {
  query: string | DocumentNode;
  variables?: TVariables;
  cache?: RequestCache;
  headers?: HeadersInit;
}): Promise<TResult> {
  const cookieStore = await cookies();
  const authToken = cookieStore.get('auth-token')?.value;

  const res = await fetch(GRAPHQL_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(authToken && { Authorization: `Bearer ${authToken}` }),
      ...headers,
    },
    body: JSON.stringify({
      query: typeof query === 'string' ? query : print(query),
      variables,
    }),
    cache,
  });

  if (!res.ok) {
    const errorText = await res.text();
    console.error('GraphQL request details:', {
      url: GRAPHQL_URL,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(authToken && { Authorization: `Bearer ${authToken}` }),
        ...headers,
      },
      body: JSON.stringify({
        query: typeof query === 'string' ? query : print(query),
        variables,
      }),
    });
    console.error('GraphQL response:', errorText);
    throw new Error(`GraphQL request failed: ${res.statusText} - ${errorText}`);
  }

  const json = await res.json();

  if (json.errors) {
    throw new Error(
      `GraphQL Error: ${json.errors.map((e: Error) => e.message).join(', ')}`
    );
  }

  return json.data;
}
