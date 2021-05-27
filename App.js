import React from 'react';
import { PersistGate } from 'redux-persist/es/integration/react'
import { Provider } from 'react-redux'
import AppNavigator from "./screens/Navigation/Navigation"
import { store, persistor } from './redux/store/store'


const App = () => {

  return(
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}
      ></PersistGate>
    </Provider>

  )
}
export default App;
