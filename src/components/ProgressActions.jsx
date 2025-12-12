const ProgressActions = ({ onIncrement, onDecrement, isComplete }) => {
  return (
    <div className="progress-actions">
      <button
        type="button"
        className="btn-action btn-decrement"
        onClick={onDecrement}
      >
        −
      </button>
      <button
        type="button"
        className={isComplete ? 'btn-action btn-increment disabled' : 'btn-action btn-increment'}
        onClick={onIncrement}
        disabled={isComplete}
      >
        +
      </button>
    </div>
  );
};

export default ProgressActions;
