import { Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "../../pages/MainPage";
import TransactionPage from "../../pages/TransactionPage";
import BalancePage from "../../pages/BalancePage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/transaction/:transType/*" element={<TransactionPage />} />
      <Route path="/balance" element={<BalancePage />} />
    </Routes>
  );
}
