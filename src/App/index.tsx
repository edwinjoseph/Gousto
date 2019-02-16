import * as React from 'react';
import { ReactNode } from 'react';
import { connect } from 'react-redux';
import { getCategories } from '../store/selectors/components/navigation';
import './styles.css';

import Header from '../components/Header';
import {fetchCategories} from '../store/thunks/components/navigation';

class App extends React.Component<any, any> {
  public state = {
    hasErrored: false,
    isLoading: true,
  };

  public componentDidMount(): void {
    const props = this.props;

    props.initializeCategories()
      .then(() => {
        this.setState({
          hasErrored: false,
          isLoading: false,
        })
      })
      .catch(() => {
        this.setState({
          hasErrored: true,
          isLoading: false,
        })
      });
  }

  public render(): ReactNode {
    if (this.state.isLoading) {
      return (
        <div className="app">
          <p>Loading...</p>
        </div>
      )
    }
    if (this.state.hasErrored) {
      return (
        <div className="app">
          <p>Something went wrong.</p>
        </div>
      )
    }
    return (
      <div className="app">
        <Header />
        <p className="intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}



export default connect(
  (state) => ({
    categories: getCategories(state),
  }),
  (dispatch: any) => ({
    initializeCategories: fetchCategories(dispatch)
  })
)(App);
