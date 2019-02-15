import * as React from 'react';
import './styles.css';

import Header from '../components/Header';

class App extends React.Component {
  public render() {
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

export default App;
