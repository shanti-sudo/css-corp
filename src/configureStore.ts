import rootReducer from './reducers';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from './middleware/logger';

const middleware = [logger, thunk];

const store = createStore(rootReducer, applyMiddleware(...middleware));

export type RootStore = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
