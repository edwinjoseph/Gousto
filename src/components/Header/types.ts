import { ICategory } from '../../facades/gousto/types';

export interface IHeaderProps {
  activeCategory: string;
  items: ICategory[];
}
