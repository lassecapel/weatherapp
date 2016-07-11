import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import createLogger from 'redux-logger';

export default function configureStore () {
  const logger = createLogger();
  const store = createStore(
    rootReducer,
    applyMiddleware(logger)
  );

if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('../reducers/index').default;
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
