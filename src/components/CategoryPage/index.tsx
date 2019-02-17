import cx from 'classnames';
import isArray from 'lodash/isArray';
import * as React from 'react';
import { ChangeEvent } from 'react';
import { connect } from 'react-redux';
import StackGrid from 'react-stack-grid';
import compose from "recompose/compose";
import mapProps from "recompose/mapProps";
import withHandlers from "recompose/withHandlers";
import withState from "recompose/withState";
import { IProduct } from '../../facades/gousto/types';
import { getProducts } from '../../store/selectors/components/categoryPage';
import { getCategories } from '../../store/selectors/components/navigation';
import './styles.css';

class CategoryPage extends React.Component<any, any> {
  public grid: any = null;
  public state = {
    activeProduct: '',
    searchValue: '',
  };

  public componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>): void {
    if (prevProps.categoryTitle !== this.props.categoryTitle) {
      if (this.state.searchValue) {
        this.setState({ searchValue: '' });
      } else {
        this.props.filterItems('');
        this.grid.updateLayout();
      }
    }
    if (prevState.searchValue !== this.state.searchValue) {
      this.filterProducts(this.state.searchValue);
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

  public updateSearchValue = (element: ChangeEvent<HTMLInputElement>): void => {
    this.setState({
      searchValue: element.target.value,
    });
  };

  public filterProducts = (searchValue: string): any=> {
    this.props.filterItems(searchValue);
    this.grid.updateLayout();
  };

  public gridRef = (grid: any) => this.grid = grid;

  public render() {
    const props = this.props;
    return (
      <main>
        <div className="container">
          <div className="category-header">
            <h2 className="category-title">{props.categoryTitle}</h2>
            <div className="category-search">
              Filter
              <input
                type="text"
                value={this.state.searchValue}
                onChange={this.updateSearchValue}
              />
            </div>
          </div>
          {props.items.length === 0 &&
            <p>No products found.</p>
          }
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
  withState('items', 'updateItems', (props: any) => props.categoryItems),
  withHandlers({
    filterItems: ({ updateItems, categoryItems }) => (searchValue: string) => {
      if (!searchValue) {
        updateItems(categoryItems);
      }
      updateItems(categoryItems.filter((product: IProduct) =>
        product.title.toLowerCase().includes(searchValue.toLowerCase()))
      )
    }
  }),
  mapProps((props: any) => ({
    categoryTitle: props.category && !isArray(props.category) ? props.category.title : 'All items',
    filterItems: props.filterItems,
    items: props.items,
  })),

)(CategoryPage);
