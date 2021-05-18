const ResetButton = ({ customDefault, setLinesList }) => {
  return (
    <div className="reset-button-container">
      <button
        onClick={() => setLinesList(customDefault)}
        className="reset-button"
      >
        Reset
      </button>
    </div>
  );
};

export default ResetButton;
