import { applyMiddleware, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import reducer from "./reducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const saveLocalStorage = state => {
  const user = JSON.stringify(state)
  localStorage.setItem("usuario",user)
  //console.log(JSON.parse(user))
}

const loadLocalStorageData = ( ) => {
  try {
    const user = localStorage.getItem('LDBCOLLADO');
    if (user === null) return undefined;
    return JSON.parse(user);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}

const store = createStore(
  reducer,
  loadLocalStorageData(),
  composeEnhancer(applyMiddleware(thunkMiddleware))
);

store.subscribe(() => saveLocalStorage(store.getState()));

export default store;

/* import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunkMiddleware from 'redux-thunk'
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunkMiddleware),
);
export default store;
 */