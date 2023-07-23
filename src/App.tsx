import React from 'react';
import {Provider} from 'react-redux';
import store from './store/store';
import AppNavigator from './components/AppNavigator';

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
