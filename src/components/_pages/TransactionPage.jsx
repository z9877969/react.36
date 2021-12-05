import PropTypes from "prop-types";
import {
  useMatch,
  useParams,
  useLocation,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import LabelInput from "../_shared/LabelInput/LabelInput";
import GoBackHeader from "../_shared/GoBackHeader/GoBackHeader";

const TransactionPage = ({ closeActivePage }) => {
  const { transType, "*": titleDefiner } = useParams();
  const title = transType === "incomes" ? "Доходы" : "Расходы"; // incpmes || costs
  const location = useLocation();
  console.log(location);
  const match = useMatch("/transaction/:transType/*");
  console.log(match);
  const navigate = useNavigate();
  const openCategoryList = () => {
    navigate(match.pathnameBase + "/cat-list", { state: { from: location } });
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
                <form>
                  <LabelInput title={"День"} type="date" name="day" />
                  <LabelInput title={"Время"} type="time" name="time" />

                  <LabelInput
                    title={"Категория"}
                    type="button"
                    name="category"
                    cbOnClick={openCategoryList}
                  />
                  <LabelInput
                    title={"Сумма"}
                    name="sum"
                    placeholder="Введите сумму"
                  />
                  <LabelInput title={"Валюта"} type="button" name="currency" />
                  <LabelInput name="comment" placeholder="Комментарий" />
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
