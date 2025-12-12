function ProgressActions({ onIncrement, onDecrement, isComplete }) {
  return (
    <div className="progress-actions">
      <button
        type="button"
        className="btn-action btn-decrement"
        onClick={onDecrement}
        aria-label="Decrease progress"
      >
        −
      </button>
      <button
        type="button"
        className="btn-action btn-increment"
        onClick={onIncrement}
        disabled={isComplete}
        aria-label="Increase progress"
      >
        +
      </button>
    </div>
  );
}

export default ProgressActions;
