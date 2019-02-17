import * as React from 'react';
import { ReactNode } from 'react';
import { withCookies } from 'react-cookie';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import './styles.css';

import CategoryPage from '../components/CategoryPage';
import Header from '../components/Header';
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
    const { cookies } = props;

    Promise.all([
      props.initializeCategories(),
      props.initializeProducts(),
    ])
      .then(([ categories ]) => {
        this.setState({
          activeCategory: cookies.get('activeCategory'),
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

  public updateCategory = (categoryId: string): () => void => {
    return () => {
      const { cookies } = this.props;
      cookies.set('activeCategory', categoryId, { path: '/' });
      this.setState({
        activeCategory: categoryId
      })
    }
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
        <Header activeCategory={this.state.activeCategory} updateCategory={this.updateCategory} />
        <CategoryPage activeCategory={this.state.activeCategory} />
      </div>
    );
  }
}



export default compose(
  connect(
    null,
    (dispatch: any) => ({
      initializeCategories: fetchCategories(dispatch),
      initializeProducts: fetchProducts(dispatch),
    })
  ),
  withCookies
)(App);
