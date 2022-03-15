import { createStore, applyMiddleware } from "redux";
import { createWrapper } from "next-redux-wrapper";
// import thunkMiddleware from 'redux-thunk'
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import {
  useSelector as useReduxSelector,
  TypedUseSelectorHook,
} from "react-redux";
import { rootReducer } from "@store/reducers";
import { rootSaga } from "./sagas";

const sagaMiddleware = createSagaMiddleware();

let middlewares = [sagaMiddleware];

// BINDING MIDDLEWARE
const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const makeStore = ({ isServer }: any) => {
  if (isServer) {
    //If it's on server side, create a store
    return createStore(rootReducer, bindMiddleware([sagaMiddleware]));
  } else {
    //If it's on client side, create a store which will persist
    const { persistStore, persistReducer } = require("redux-persist");
    const storage = require("redux-persist/lib/storage").default;

    const persistConfig = {
      key: "talentQL",
      /**
       * Reducers to be persisted
       */
      whitelist: [""],
      storage, // if needed, use a safer storage
    };

    const persistedReducer = persistReducer(persistConfig, rootReducer); // Create a new reducer with our existing reducer

    if (process.env.NODE_ENV !== "production") {
      middlewares.push(logger);
    }

    const store: any = createStore(
      persistedReducer,
      bindMiddleware(middlewares)
    ); // Creating the store again

    store.__persistor = persistStore(store); // This creates a persistor object & push that persisted object to .__persistor, so that we can avail the persistability feature

    store.sagaTask = sagaMiddleware.run(rootSaga); // this calls and runs the sagaMiddleware
    return store;
  }
};

export type RootState = ReturnType<typeof rootReducer>;

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

// Export the wrapper & wrap the pages/_app.js with this wrapper only
export const wrapper = createWrapper(makeStore, { debug: true });
