import HabitListItem from './HabitListItem';

const HabitList = ({ habits, updateHabitProgress }) => {
  if (habits.length === 0) {
    return (
      <div className="habit-list-empty">
        <p>No habits yet. Add one above!</p>
      </div>
    );
  }

  return (
    <ul className="habit-list">
      {habits.map((habit) => {
        return (
          <HabitListItem
            key={habit.id}
            habit={habit}
            updateHabitProgress={updateHabitProgress}
          />
        );
      })}
    </ul>
  );
};

export default HabitList;
