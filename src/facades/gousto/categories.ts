import fetch from 'cross-fetch';
import baseUrl from '.'

export async function getCategories() {
  const response = await fetch(`${baseUrl()}/categories`, {
    headers: {},
    method: 'GET',
  });

  if (!response.ok) {
    throw new Error(`Fetching categories failed: ${response.statusText}`)
  }

  const body = await response.json();

  return {
    body,
    ok: true,
    status: response.status,
  }
}
