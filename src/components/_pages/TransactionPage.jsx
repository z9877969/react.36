import PropTypes from "prop-types";
import LabelInput from "../_shared/LabelInput/LabelInput";
import GoBackHeader from "../_shared/GoBackHeader/GoBackHeader";

const TransactionPage = ({ transType, closeActivePage }) => {
  const title = transType === "incomes" ? "Доходы" : "Расходы"; // incpmes || costs

  return (
    <>
      <GoBackHeader handleGoBack={closeActivePage} title={title} />
      <main>
        <section>
          <form>
            <LabelInput title={"День"} type="date" name="day" />
            <LabelInput title={"Время"} type="time" name="time" />
            <LabelInput title={"Категория"} type="button" name="category" />
            <LabelInput
              title={"Сумма"}
              name="sum"
              placeholder="Введите сумму"
            />
            <LabelInput title={"Валюта"} type="button" name="currency" />
            <LabelInput name="comment" placeholder="Комментарий" />
          </form>
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
