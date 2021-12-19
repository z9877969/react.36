import PropTypes from "prop-types";
import {
  useMatch,
  useParams,
  useLocation,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import LabelInput from "../_shared/LabelInput/LabelInput";
import GoBackHeader from "../_shared/GoBackHeader/GoBackHeader";
import { useState } from "react";
import { addTransaction } from "../../redux/transactions/transaction-actions";

const TransactionPage = ({ closeActivePage }) => {
  const dispatch = useDispatch();
  const { transType, "*": titleDefiner } = useParams();
  const title = transType === "incomes" ? "Доходы" : "Расходы"; // incpmes || costs
  const location = useLocation();
  const match = useMatch("/transaction/:transType/*");
  const navigate = useNavigate();
  const openCategoryList = () => {
    navigate(match.pathnameBase + "/cat-list", { state: { from: location } });
  };
  const [form, setForm] = useState({
    day: "",
    time: "",
    category: "",
    sum: "",
    currency: "",
    comment: "",
  });
  const handleChange = (e) => {
    const { value, name } = e.currentTarget;
    setForm((prevForm) => {
      return { ...prevForm, [name]: value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTransaction(form));
  };
  return (
    <>
      <GoBackHeader title={titleDefiner === "" ? title : "Category"} />
      <main>
        <section>
          <Routes>
            <Route
              index
              element={
                <form onSubmit={handleSubmit}>
                  <LabelInput
                    onChange={handleChange}
                    title={"День"}
                    type="date"
                    name="day"
                    value={form.day}
                  />
                  <LabelInput
                    onChange={handleChange}
                    title={"Время"}
                    type="time"
                    name="time"
                    value={form.time}
                  />

                  <LabelInput
                    title={"Категория"}
                    onChange={handleChange}
                    type="button"
                    name="category"
                    cbOnClick={openCategoryList}
                    value={form.category}
                  />
                  <LabelInput
                    onChange={handleChange}
                    title={"Сумма"}
                    name="sum"
                    placeholder="Введите сумму"
                    value={form.sum}
                  />
                  <LabelInput
                    onChange={handleChange}
                    title={"Валюта"}
                    type="button"
                    name="currency"
                    value={form.currency}
                  />
                  <LabelInput
                    onChange={handleChange}
                    name="comment"
                    placeholder="Комментарий"
                    value={form.comment}
                  />
                  <button type="submit">submit</button>
                </form>
              }
            />
            <Route path="/cat-list" element={<h1>Categories list</h1>} />
          </Routes>
        </section>
      </main>
    </>
  );
};

TransactionPage.propTypes = {
  transType: PropTypes.string.isRequired,
  closeActivePage: PropTypes.func.isRequired,
};

export default TransactionPage;
