import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { addCosts, addIncomes } from "./transaction-actions";

const incomesReducer = createReducer([], {
  [addIncomes]: (state, { payload }) => {
    return [...state, payload];
  },
});
const costsReducer = createReducer([], {
  [addCosts]: (state, { payload }) => {
    return [...state, payload];
  },
});
const transactionsReducer = combineReducers({
  costs: costsReducer,
  incomes: incomesReducer,
});
export default transactionsReducer;
