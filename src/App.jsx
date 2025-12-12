import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import HabitForm from './components/HabitForm'
import HabitList from './components/HabitList'
import { getFromLocalStorage, saveToLocalStorage } from './utils/storage'
import { STORAGE_KEY } from './constants'

const App = () => {
  const [habits, setHabits] = useState(getFromLocalStorage(STORAGE_KEY));

  const addHabit = (habit) => {
    setHabits((habits) => {
      const newHabits = [...habits, habit];
      saveToLocalStorage(STORAGE_KEY, newHabits);
      return newHabits;
    });
  };

  const updateHabitProgress = (id, delta) => {
    setHabits((habits) => {
      const newHabits = habits.map((habit) => {
        if (habit.id !== id) return habit;
        const newProgress = habit.progress + delta;
        const clampedProgress = Math.max(0, Math.min(newProgress, habit.goal));
        return { ...habit, progress: clampedProgress };
      });
      saveToLocalStorage(STORAGE_KEY, newHabits);
      return newHabits;
    });
  };

  const completedCount = habits.filter((h) => h.progress === h.goal).length;
  const totalCount = habits.length;

  return (
    <div className="app">
      <Header completedCount={completedCount} totalCount={totalCount} />
      <main className="main-content">
        <HabitForm addHabit={addHabit} />
        <HabitList habits={habits} updateHabitProgress={updateHabitProgress} />
      </main>
    </div>
  );
};

export default App
