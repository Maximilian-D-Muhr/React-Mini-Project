function Header({ completedCount, totalCount }) {
  return (
    <header className="header">
      <h1>Habit Tracker</h1>
      <div className="header-progress">
        <span className="progress-label">Today's Progress:</span>
        <span className="progress-count">
          {completedCount} / {totalCount}
        </span>
      </div>
    </header>
  );
}

export default Header;
