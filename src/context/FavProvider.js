import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import initialValues from './store';
import reducers from './reducers';

const FavProvider = ({children}) => {
  const store = createStore(reducers, initialValues);
  return <Provider store={store}>{children}</Provider>;
};

export default FavProvider;
