import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store/store';

import { GlobalTheme } from './theme/global-theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalTheme />
      <App />
    </Provider>
  </React.StrictMode>,
);
