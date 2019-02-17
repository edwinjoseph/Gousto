import cx from 'classnames';
import isArray from 'lodash/isArray';
import * as React from 'react';
import { connect } from 'react-redux';
import StackGrid from 'react-stack-grid';
import compose from "recompose/compose";
import mapProps from "recompose/mapProps";
import { IProduct } from '../../facades/gousto/types';
import { getProducts } from '../../store/selectors/components/categoryPage';
import { getCategories } from '../../store/selectors/components/navigation';
import './styles.css';

class CategoryPage extends React.Component<any, any> {
  public grid: any = null;
  public state = {
    activeProduct: '',
  };

  public componentDidUpdate(prevProps: Readonly<any>): void {
    if (prevProps.categoryTitle !== this.props.categoryTitle) {
      this.grid.updateLayout();
    }
  }

  public updateProduct = (productId: string): () => void => {
    return () => {
      this.setState({
        activeProduct: productId,
      }, () => {
        this.grid.updateLayout();
      });
    }
  };

  public gridRef = (grid: any) => this.grid = grid;

  public render() {
    const props = this.props;
    return (
      <main>
        <div className="container">
          <h2 className="category-title">{props.categoryTitle}</h2>
          <StackGrid
            className="categories"
            columnWidth="33%"
            gridRef={this.gridRef}
            gutterWidth={10}
            gutterHeight={15}>
            {props.items.map((item: IProduct) => {
              const isActiveProduct = this.state.activeProduct === item.id;
              return (
                <div
                  key={item.id}
                  className={cx('category', {
                    'active': isActiveProduct
                  })}
                  onClick={this.updateProduct(isActiveProduct ? '' : item.id)}>
                  <img src={item.images['400'].src} alt={item.title} />
                  <div className="content">
                    <h3 className="title">{item.title}</h3>
                    <p className="description">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </StackGrid>
        </div>
      </main>
    )
  }
}

export default compose<any, any>(
  connect(
    (state, props: any) => ({
      category: getCategories(state, props.activeCategory),
      categoryItems: getProducts(state, props.activeCategory)
    })
  ),
  mapProps((props: any) => ({
    categoryTitle: props.category && !isArray(props.category) ? props.category.title : 'All items',
    items: props.categoryItems
  }))
)(CategoryPage);
