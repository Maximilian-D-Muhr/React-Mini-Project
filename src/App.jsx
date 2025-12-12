import './App.css'
import Header from './components/Header'
import HabitForm from './components/HabitForm'
import HabitList from './components/HabitList'
import ProgressActions from './components/ProgressActions'

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <HabitForm />
        <HabitList />
        <ProgressActions />
      </main>
    </div>
  )
}

export default App
