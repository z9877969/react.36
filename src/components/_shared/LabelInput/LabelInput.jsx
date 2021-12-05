import PropTypes from "prop-types";

const LabelInput = ({
  cbOnClick,
  title,
  type = "text",
  placeholder = null,
  name,
}) => (
  <label>
    {title && <p>{title}</p>}
    <input
      type={type}
      name={name}
      onClick={cbOnClick}
      placeholder={placeholder}
    />
  </label>
);

LabelInput.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default LabelInput;
