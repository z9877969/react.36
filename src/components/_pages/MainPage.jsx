import PropTypes from "prop-types";
import MainInfo from "../MainInfo/MainInfo";
import StatisticsBtns from "../StatisticsBtns/StatisticsBtns";
import {
  costsInfoOptions,
  incomesInfoOptions,
  balanceInfoOptions,
} from "../../assets/options/mainInfoOptions.json";

const MainPage = ({ openActivePage }) => {
  return (
    <>
      <h1>Журнал расходов</h1>
      {/* {MainInfo({ title: "JS", a: [], b: 321, c: { a: 654 } })} */}
      <MainInfo
        openActivePage={openActivePage}
        options={costsInfoOptions}
        title="Расходы"
        activePage="costs"
      />
      <MainInfo
        openActivePage={openActivePage}
        options={incomesInfoOptions}
        title="Доходы"
        activePage="incomes"
      />
      <MainInfo
        openActivePage={openActivePage}
        options={balanceInfoOptions}
        title="Баланс"
        activePage="balance"
      />
      <StatisticsBtns />
    </>
  );
};

MainPage.propTypes = {
  openActivePage: PropTypes.func.isRequired,
};

export default MainPage;

// React.createElement()
