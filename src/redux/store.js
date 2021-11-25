import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { filterReducer } from "./filterReducer";
import { itemReducer, loading } from "./itemReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authSlice } from "./slice";
const contactsReducer = combineReducers({
  items: itemReducer,
  filter: filterReducer,
  loading: loading,
});

const rootReducer = combineReducers({ contacts: contactsReducer });
const rootAuthReducer = combineReducers({ auth: authSlice.reducer });

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const persistedReducer = persistReducer(authPersistConfig, authSlice.reducer);

const store = configureStore({
  reducer: {
    auth: persistedReducer,
    contacts: contactsReducer,
  },
});
let persistor = persistStore(store);

export default { store, persistor };
