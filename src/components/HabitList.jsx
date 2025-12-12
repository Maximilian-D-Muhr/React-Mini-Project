import HabitListItem from './HabitListItem';

function HabitList({ habits, onUpdateProgress }) {
  if (habits.length === 0) {
    return (
      <div className="habit-list-empty">
        <p>No habits yet. Add one above!</p>
      </div>
    );
  }

  return (
    <ul className="habit-list">
      {habits.map(habit => (
        <HabitListItem
          key={habit.id}
          habit={habit}
          onUpdateProgress={onUpdateProgress}
        />
      ))}
    </ul>
  );
}

export default HabitList;
