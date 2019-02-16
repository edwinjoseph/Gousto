import { ICategory } from '../../facades/gousto/types';

export interface IHeaderProps {
  updateCategory: (categoryId: string) => () => {}
  activeCategory: string;
  items: ICategory[];
}
