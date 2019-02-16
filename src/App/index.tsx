import * as React from 'react';
import { ReactNode } from 'react';
import { withCookies } from 'react-cookie';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import './styles.css';

import Header from '../components/Header';
import { ICategory } from '../facades/gousto/types';
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

    props.initializeCategories()
      .then((categories: ICategory[]) => {
        this.setState({
          activeCategory: cookies.get('activeCategory') || categories[0].id,
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
        <p className="intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}



export default compose(
  connect(
    null,
    (dispatch: any) => ({
      initializeCategories: fetchCategories(dispatch)
    })
  ),
  withCookies
)(App);
