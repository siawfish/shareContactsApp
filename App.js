import 'react-native-gesture-handler';
import React from 'react';
import Navigation from './src/screens/Navigation';
import { Provider } from 'react-redux'
import { store, persistor} from './src/store/store'
import { PersistGate } from 'redux-persist/es/integration/react'


export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigation/>
      </PersistGate>
    </Provider>
  );
}


