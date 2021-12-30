import transactionsReducer from "./transactions/transactions-reducer";
import authReducer from "./auth/auth-slice";

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: { auth: authReducer, transactions: transactionsReducer },
});

export default store;
