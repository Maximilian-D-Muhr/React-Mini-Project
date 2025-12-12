import ProgressActions from './ProgressActions';

const HabitListItem = ({ habit, updateHabitProgress }) => {
  const isComplete = habit.progress === habit.goal;

  const handleIncrement = () => {
    updateHabitProgress(habit.id, 1);
  };

  const handleDecrement = () => {
    updateHabitProgress(habit.id, -1);
  };

  return (
    <li className={isComplete ? 'habit-list-item completed' : 'habit-list-item'}>
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
};

export default HabitListItem;
