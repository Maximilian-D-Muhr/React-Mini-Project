import { useState } from 'react';
import { DEFAULT_GOAL } from '../constants';

function HabitForm({ onAddHabit }) {
  const [name, setName] = useState('');
  const [goal, setGoal] = useState(DEFAULT_GOAL);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedName = name.trim();
    if (!trimmedName) {
      setError('Please enter a habit name');
      return;
    }

    const goalNumber = Number(goal);
    if (!goalNumber || goalNumber < 1 || !Number.isInteger(goalNumber)) {
      setError('Goal must be a whole number of at least 1');
      return;
    }

    onAddHabit(trimmedName, goalNumber);
    setName('');
    setGoal(DEFAULT_GOAL);
    setError('');
  };

  return (
    <form className="habit-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="habit-name">Habit Name</label>
        <input
          type="text"
          id="habit-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g., Drink water"
        />
      </div>
      <div className="form-group">
        <label htmlFor="habit-goal">Daily Goal</label>
        <input
          type="number"
          id="habit-goal"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          min="1"
          step="1"
        />
      </div>
      {error && <p className="form-error">{error}</p>}
      <button type="submit" className="btn-primary">Add Habit</button>
    </form>
  );
}

export default HabitForm;
