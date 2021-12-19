import { useSelector } from "react-redux";
import GoBackHeader from "../_shared/GoBackHeader/GoBackHeader";

export default function BalancePage() {
  const costs = useSelector((state) => state.transactions.costs);
  const incomes = useSelector((state) => state.transactions.incomes);
  const transactions = [...costs, ...incomes];
  return (
    <>
      <GoBackHeader />
      <h1>Balance</h1>
      {transactions.map((transaction) => {
        return (
          <li>
            {transaction.day} {transaction.sum}
          </li>
        );
      })}
    </>
  );
}
