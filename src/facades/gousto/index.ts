let baseUrl = '';

export function setBaseUrl(url: string) {
  baseUrl = url;
}

export default function () {
  return baseUrl;
}
