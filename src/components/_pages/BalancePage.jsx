import { useSelector } from "react-redux";
import GoBackHeader from "../_shared/GoBackHeader/GoBackHeader";

export default function BalancePage() {
  const transactions = useSelector((state) => state.transactions);
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
