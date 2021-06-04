import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';
import "./index.css"
import reducer, { initialState } from './central_store/reducer';
import { StateProvider } from './central_store/StateProvider';

ReactDOM.render(
  <React.StrictMode>
     <StateProvider initialState={initialState}reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
