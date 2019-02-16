import baseUrl from '.'
import { get } from '../../rest';
import { ICategoriesResponse } from './types';

export async function getCategories() {
  return get<ICategoriesResponse>(`${baseUrl()}/categories`);
}
