import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import MainPage from "../../pages/MainPage";
import TransactionPage from "../../pages/TransactionPage";
import BalancePage from "../../pages/BalancePage";
import AuthPage from "../../pages/AuthPage";

export default function App() {
  const [isAuth] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    isAuth ? navigate("/") : navigate("/auth/login");
  }, [isAuth]);
  return isAuth ? (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/transaction/:transType/*" element={<TransactionPage />} />
        <Route path="/balance" element={<BalancePage />} />
      </Routes>
    </>
  ) : (
    <Routes>
      <Route path="/auth/:authType" element={<AuthPage />} />
    </Routes>
  );
}
