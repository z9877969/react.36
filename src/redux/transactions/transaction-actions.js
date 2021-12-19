// export const addTransaction = (transaction) => {
//   return {
//     type: "transactions/add",
//     payload: transaction,
//   };
// };

import { createAction } from "@reduxjs/toolkit";

export const addCosts = createAction("transactions/addCosts");

export const addIncomes = createAction("transactions/addIncomes");
