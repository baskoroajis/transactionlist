import {AppRegistry} from 'react-native';
import React from 'react';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {createEpicMiddleware} from 'redux-observable';
import configureStore from './src/redux/stores/configureStore';
import rootEpic from './src/redux/epics/rootEpics';

const epicMiddleware = createEpicMiddleware();
const store = configureStore(epicMiddleware);
epicMiddleware.run(rootEpic);

const AppWithRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
AppRegistry.registerComponent(appName, () => AppWithRedux);
