import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import compose from 'recompose/compose';
import mapProps from 'recompose/mapProps';
import { ICategory } from '../../facades/gousto/types';
import { getCategories } from '../../store/selectors/components/navigation';
import LineItem from './LineItem';
import './styles.css';
import { IHeaderProps } from './types';

function header(props: any): JSX.Element {
  return (
    <header className="header">
      <div className="container fluid">
        <Link to="/" className="header-link">
          <h1 className="header-title">Gousto | Store Cupboard</h1>
        </Link>
        <nav className="navigation">
          {props.items.map((item: ICategory): JSX.Element => (
            <LineItem key={item.id} activeCategory={props.activeCategory} {...item} />
          ))}
        </nav>
      </div>
    </header>
  );
}


export default compose<IHeaderProps, any>(
  connect(
    (state) => ({
      categories: getCategories(state)
    })
  ),
  mapProps((props: any): IHeaderProps => ({
    activeCategory: props.activeCategory,
    items: props.categories.reduce((result: ICategory[], category: ICategory): ICategory[] => {
      // Only list categories that we want to see.
      if (!category.hidden) {
        result.push(category);
      }
      return result;
    }, []),
  }))
)(header);
