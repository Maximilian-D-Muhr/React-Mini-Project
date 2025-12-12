import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import HabitForm from './components/HabitForm'
import HabitList from './components/HabitList'
import { loadHabits, saveHabits } from './utils/storage'

function App() {
  const [habits, setHabits] = useState(() => loadHabits())

  useEffect(() => {
    saveHabits(habits)
  }, [habits])

  const addHabit = (name, goal) => {
    const newHabit = {
      id: crypto.randomUUID(),
      name: name.trim(),
      goal: Number(goal),
      progress: 0
    }
    setHabits(prevHabits => [...prevHabits, newHabit])
  }

  const updateHabitProgress = (id, delta) => {
    setHabits(prevHabits =>
      prevHabits.map(habit => {
        if (habit.id !== id) return habit
        const newProgress = habit.progress + delta
        const clampedProgress = Math.max(0, Math.min(newProgress, habit.goal))
        return { ...habit, progress: clampedProgress }
      })
    )
  }

  const completedCount = habits.filter(h => h.progress === h.goal).length
  const totalCount = habits.length

  return (
    <div className="app">
      <Header completedCount={completedCount} totalCount={totalCount} />
      <main className="main-content">
        <HabitForm onAddHabit={addHabit} />
        <HabitList habits={habits} onUpdateProgress={updateHabitProgress} />
      </main>
    </div>
  )
}

export default App
