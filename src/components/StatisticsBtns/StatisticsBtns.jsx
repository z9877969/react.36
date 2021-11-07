import s from "./StatisticsBtns.module.css";

const StatisticsBtns = () => {
  return (
    <div>
      <button className={s.btn} type="button">
        Все расходы
      </button>
      <button className={s.btn} type="button">
        Все доходы
      </button>
    </div>
  );
};

export default StatisticsBtns;
