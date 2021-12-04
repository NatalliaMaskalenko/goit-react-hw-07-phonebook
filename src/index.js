import React from 'react';
import ReactDOM from 'react-dom';
// import { PersistGate } from 'redux-persist/integration/react';
import './index.css';
import App from './App';
// import { store, persistor } from './redux/store';
import { store } from './redux/store';
import { Provider } from 'react-redux';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate> */}
      
        <App />
      
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);



