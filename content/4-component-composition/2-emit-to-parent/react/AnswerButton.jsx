import PropTypes from "prop-types";

export default function AnswerButton({ onYes, onNo }) {
  return (
    <>
      <button onClick={onYes}>YES</button>

      <button onClick={onNo}>NO</button>
    </>
  );
}

AnswerButton.propTypes = {
  onYes: PropTypes.func,
  onNo: PropTypes.func,
};
