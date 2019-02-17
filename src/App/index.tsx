import kebabCase from 'lodash/kebabCase';
import * as React from 'react';
import { ReactNode } from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import './styles.css';

import CategoryPage from '../components/CategoryPage';
import Header from '../components/Header';
import { ICategory } from '../facades/gousto/types';
import { getCategories } from '../store/selectors/components/navigation';
import { fetchProducts } from '../store/thunks/components/categoryPage';
import { fetchCategories } from '../store/thunks/components/navigation';

class App extends React.Component<any, any> {
  public state = {
    activeCategory: null,
    hasErrored: false,
    isLoading: true,
  };

  public componentDidMount(): void {
    const props = this.props;
    console.log(props); // tslint:disable-line

    Promise.all([
      props.initializeCategories(),
      props.initializeProducts(),
    ])
      .then(([ categories ]) => {
        const categoryParam = props.match.params.categoryTitle;
        const activeCategory = categories.find((category: ICategory) => {
          if (categoryParam) {
            return kebabCase(category.title) === categoryParam;
          }
          return false;
        });
        this.setState({
          activeCategory: activeCategory && activeCategory.id,
          hasErrored: false,
          isLoading: false,
        })
      })
      .catch((error: Error) => {
        this.setState({
          hasErrored: true,
          isLoading: false,
        });
        console.log(error); // tslint:disable-line
      });
  }

  public componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>): void {
    const previousCategoryParam = prevProps.match.params.categoryTitle;
    const currentCategoryParam = this.props.match.params.categoryTitle;

    if (previousCategoryParam !== currentCategoryParam) {
      this.updateCategory(currentCategoryParam)
    }
  }

  public updateCategory = (categoryParam: string): void => {
    const activeCategory = this.props.categories.find((category: ICategory) => {
      return kebabCase(category.title) === categoryParam;
    });

    this.setState({
      activeCategory: activeCategory && activeCategory.id
    })
  };

  public render(): ReactNode {
    if (this.state.isLoading) {
      return (
        <div className="app text-center">
          <p>Loading...</p>
        </div>
      )
    }
    if (this.state.hasErrored) {
      return (
        <div className="app text-center">
          <p>Something went wrong.</p>
        </div>
      )
    }
    return (
      <div className="app">
        <Header activeCategory={this.state.activeCategory} />
        <CategoryPage activeCategory={this.state.activeCategory} />
      </div>
    );
  }
}



export default compose(
  connect(
    (state) => ({
      categories: getCategories(state)
    }),
    (dispatch: any) => ({
      initializeCategories: fetchCategories(dispatch),
      initializeProducts: fetchProducts(dispatch),
    })
  )
)(App);
