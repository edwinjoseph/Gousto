import baseUrl from '.'
import { get } from '../../rest';
import { ICategory, IGoustoResponse } from './types';

export async function getCategories() {
  return get<IGoustoResponse<ICategory[]>>(`${baseUrl()}/categories`);
}
