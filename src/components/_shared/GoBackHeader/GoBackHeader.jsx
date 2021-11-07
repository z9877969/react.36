import PropTypes from "prop-types";

const GoBackHeader = ({ handleGoBack, title }) => {
    const cbOnClick = (e) => handleGoBack()
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
