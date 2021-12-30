import { useSelector } from "react-redux";
import GoBackHeader from "../components/_shared/GoBackHeader/GoBackHeader";
import { Container } from "../components/_styled/wrappers.styled";

export default function BalancePage() {
  const costs = useSelector((state) => state.transactions.costs);
  const incomes = useSelector((state) => state.transactions.incomes);
  const transactions = [...costs, ...incomes];
  return (
    <Container>
      <GoBackHeader />
      <h1>Balance</h1>
      {transactions.map((transaction) => {
        return (
          <li>
            {transaction.day} {transaction.sum}
          </li>
        );
      })}
    </Container>
  );
}
