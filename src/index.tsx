import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import App from './App';
import * as gousto from './facades/gousto';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import store from './store';

gousto.setBaseUrl(process.env.REACT_APP_GOUSTO_API!);

ReactDOM.render(
  <ReduxProvider store={store()}>
    <App />
  </ReduxProvider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
