// const transactionsReducer = (state = [], action) => {
//   switch (action.type) {
//     case "transactions/add":
//       return [...state, action.payload];

//     default:
//       return state;
//   }
// };
// export default transactionsReducer;
// {
//     type: "transactions/add",
//     payload: transaction,
//   };

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
