import isArray from 'lodash/isArray';
import * as React from 'react';
import { ChangeEvent } from 'react';
import { connect } from 'react-redux';
import compose from "recompose/compose";
import mapProps from "recompose/mapProps";
import withHandlers from "recompose/withHandlers";
import withState from "recompose/withState";
import { IProduct } from '../../facades/gousto/types';
import { getProducts } from '../../store/selectors/components/categoryPage';
import { getCategories } from '../../store/selectors/components/navigation';
import ProductList from '../ProductList';
import ProductSearch from '../ProductSearch';
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
      }
    }
    if (prevState.searchValue !== this.state.searchValue) {
      this.filterProducts(this.state.searchValue);
    }
  }

  public updateSearchValue = (element: ChangeEvent<HTMLInputElement>): void => {
    this.setState({
      searchValue: element.target.value,
    });
  };

  public filterProducts = (searchValue: string): any=> {
    this.props.filterItems(searchValue);
  };


  public render() {
    const props = this.props;
    return (
      <main>
        <div className="container">
          <div className="category-header">
            <h2 className="category-title">{props.categoryTitle}</h2>
            <ProductSearch
              value={this.state.searchValue}
              handleUpdate={this.updateSearchValue}
            />
          </div>
          <ProductList items={props.items} />
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
        product.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        product.description.toLowerCase().includes(searchValue.toLowerCase()))
      )
    }
  }),
  mapProps((props: any) => ({
    categoryTitle: props.category && !isArray(props.category) ? props.category.title : 'All items',
    filterItems: props.filterItems,
    items: props.items,
  })),

)(CategoryPage);
