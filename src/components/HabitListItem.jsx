import ProgressActions from './ProgressActions';

function HabitListItem({ habit, onUpdateProgress }) {
  const isComplete = habit.progress === habit.goal;

  const handleIncrement = () => {
    onUpdateProgress(habit.id, 1);
  };

  const handleDecrement = () => {
    onUpdateProgress(habit.id, -1);
  };

  return (
    <li className={`habit-list-item ${isComplete ? 'completed' : ''}`}>
      <div className="habit-info">
        <span className="habit-name">{habit.name}</span>
        <span className="habit-progress">
          {habit.progress} / {habit.goal}
        </span>
      </div>
      <ProgressActions
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        isComplete={isComplete}
      />
    </li>
  );
}

export default HabitListItem;
