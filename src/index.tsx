import * as React from 'react';
import { CookiesProvider } from 'react-cookie';
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
    <CookiesProvider>
      <App />
    </CookiesProvider>
  </ReduxProvider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
