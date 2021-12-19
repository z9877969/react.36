const transactionsReducer = (state = [], action) => {
  switch (action.type) {
    case "transactions/add":
      return [...state, action.payload];
    default:
      return state;
  }
};
export default transactionsReducer;
// {
//     type: "transactions/add",
//     payload: transaction,
//   };
