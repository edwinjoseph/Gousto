import baseUrl from '.'
import { get } from '../../rest';
import { IGoustoResponse, IProduct } from './types';

export async function getProducts() {
  return get<IGoustoResponse<IProduct[]>>(`${baseUrl()}/products`, {
    image_sizes: [
      '365',
      '400',
    ],
    includes: [
      'categories',
      'attributes',
    ],
    period_id: '120',
    sort: 'created_at',
  });
}
