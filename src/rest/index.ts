import fetch from 'cross-fetch';
import qs from 'qs';

function responseHandler(response: Response, body: any): any {
  if (!response.ok) {
    throw new Error(`Request to ${response.url} failed.`);
  }

  return {
    body,
    ok: true,
    status: response.status,
  };
}

function send<T>(url: string, method: string): Promise<T> {
  const options: RequestInit = {
    method
  };

  return fetch(url, options).then((response: Response): Promise<T> => {
    return response.json().then((body: any) => {
      return responseHandler(response, body);
    });
  });
}

export function get<T>(url: string, queryParams?: any): Promise<T> {
  if (queryParams) {
    url += qs.stringify(queryParams, {
      addQueryPrefix: true,
      arrayFormat: 'brackets',
      skipNulls: true,
    })
  }
  return send(url, 'GET');
}
