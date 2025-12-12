import { DEFAULT_GOAL } from '../constants';

const HabitForm = ({ addHabit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.elements.name.value.trim();
    const goal = Number(e.target.elements.goal.value);

    if (!name) {
      alert('Please enter a habit name');
      return;
    }

    if (!goal || goal < 1) {
      alert('Goal must be at least 1');
      return;
    }

    const habit = {
      id: crypto.randomUUID(),
      name: name,
      goal: goal,
      progress: 0,
    };

    addHabit(habit);
    e.target.reset();
    e.target.elements.name.focus();
  };

  return (
    <form className="habit-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="habit-name">Habit Name</label>
        <input
          type="text"
          id="habit-name"
          name="name"
          placeholder="e.g., Drink water"
        />
      </div>
      <div className="form-group">
        <label htmlFor="habit-goal">Daily Goal</label>
        <input
          type="number"
          id="habit-goal"
          name="goal"
          defaultValue={DEFAULT_GOAL}
          min="1"
          step="1"
        />
      </div>
      <button type="submit" className="btn-primary">Add Habit</button>
    </form>
  );
};

export default HabitForm;
