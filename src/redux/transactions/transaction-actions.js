export const addTransaction = (transaction) => {
  return {
    type: "transactions/add",
    payload: transaction,
  };
};
