import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import {
  useSelector as useReduxSelector,
  TypedUseSelectorHook,
} from "react-redux";
import { rootReducer } from "./reducers";
import { rootSaga } from "./sagas";

const sagaMiddleware = createSagaMiddleware();

let middlewares = [sagaMiddleware];

// BINDING MIDDLEWARE
const bindMiddleware = (middleware: any) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware, logger));
  }
  return applyMiddleware(...middleware);
};

const makeStore = () => {
  //If it's on client side, create a store which will persist
  const { persistStore, persistReducer } = require("redux-persist");
  const storage = require("redux-persist/lib/storage").default;

  const persistConfig = {
    key: "kanban",
    storage, // if needed, use a safer storage
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer); // Create a new reducer with our existing reducer

  const store: any = createStore(persistedReducer, bindMiddleware(middlewares)); // Creating the store again

  store.__persistor = persistStore(store); // This creates a persistor object & push that persisted object to .__persistor, so that we can avail the persistability feature

  store.sagaTask = sagaMiddleware.run(rootSaga); // this calls and runs the sagaMiddleware
  return store;
};

const store = makeStore();

export type RootState = ReturnType<typeof rootReducer>;

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

// Export the wrapper & wrap the pages/_app.js with this wrapper only
export default store;
