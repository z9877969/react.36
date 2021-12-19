import PropTypes from "prop-types";
import { useNavigate, useLocation } from "react-router-dom";

const GoBackHeader = ({ title }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const cbOnClick = () => {
    navigate(location.state?.from || "/");
  };
  return (
    <header>
      <button onClick={cbOnClick} type="button">
        GoBack
      </button>
      <h1>{title}</h1>
    </header>
  );
};

GoBackHeader.propTypes = {
  handleGoBack: PropTypes.func.isRequired,
  title: PropTypes.string,
};

export default GoBackHeader;
