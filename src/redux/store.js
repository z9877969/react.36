// import { createStore, combineReducers } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
import transactionsReducer from "./transactions/transactions-reducer";
// const rootReducer = combineReducers({
//   transactions: transactionsReducer,
// });
// const store = createStore(rootReducer, composeWithDevTools());
// export default store;

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: { transactions: transactionsReducer },
});

export default store;
