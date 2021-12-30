import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import MainInfo from "../components/MainInfo/MainInfo";
import StatisticsBtns from "../components/StatisticsBtns/StatisticsBtns";
import {Container} from '../components/_styled/wrappers.styled';
import {
  costsInfoOptions,
  incomesInfoOptions,
  balanceInfoOptions,
} from "../assets/options/mainInfoOptions.json";

const MainPage = ({ openActivePage }) => {
  const location = useLocation();

  return (
    <Container>
      <h1>Журнал расходов</h1>
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
    </Container>
  );
};

MainPage.propTypes = {
  openActivePage: PropTypes.func.isRequired,
};

export default MainPage;
