Slides realted to this Project: https://docs.google.com/presentation/d/1IjoJ8kJ0cWLTuFuX4ih6G515omwvvcuJeGPmCs2xZps/ 

# Habit Tracker

A React-based habit tracking application built with Vite.

This application allows users to create daily habits with a custom name and target goal. Each habit includes a progress counter that can be increased or decreased to track daily completion. Completed habits are visually highlighted when the defined goal is reached, and the overall daily progress is displayed at the top of the application.

Habit data is managed using React hooks and persisted in the browser’s LocalStorage so that progress is retained after reloading the page. The interface is responsive and designed to work well on both desktop and mobile devices.

## Features

- Add and manage daily habits
- Track habit completion progress
- Persistent storage using LocalStorage

## Project Structure

```
src/
├── components/
│   ├── Header.jsx
│   ├── HabitForm.jsx
│   ├── HabitList.jsx
│   ├── HabitListItem.jsx
│   └── ProgressActions.jsx
├── utils/
│   └── storage.js
├── constants.js
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## Install all required dependencies and start:

npm install

npm run dev

http://localhost:5173
