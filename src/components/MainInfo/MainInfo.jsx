import PropTypes from "prop-types";
import { useLocation, useNavigate } from "react-router-dom";

const MainInfo = ({ title, options, activePage }) => {
  //   const { title } = props;
  const navigate = useNavigate();
  const location = useLocation();

  const openActivePage = () => {
    const pattern = activePage === "balance" ? "/" : "/transaction/";
    const pathName = pattern + activePage;
    const newLocation = {
      pathname: pathName,
    };
    navigate(newLocation, { state: { from: location, activePage } });
  };

  return (
    <>
      <section>
        <h2>{title}</h2>
        <p>UAH</p>
        <button onClick={openActivePage} type="button">
          Add
        </button>
        <ul>
          {options.map((el) => (
            <li key={el.name}>
              <span>{el.period}</span>
              <span>{el.sum}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

MainInfo.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      period: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      sum: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    })
  ).isRequired,
  openActivePage: PropTypes.func.isRequired,
  activePage: PropTypes.string.isRequired,
};

export default MainInfo;
