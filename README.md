# Simple Todo List

A simple and interactive Todo List application built using React and JavaScript. It allows users to add, update, complete, and delete tasks through a clean user interface.

## Features

- **Add Tasks:** Add new tasks to your list.
- **Update Tasks:** Convert individual task names to uppercase.
- **Uppercase All:** Convert all tasks to uppercase at once.
- **Mark as Done:** Mark tasks as completed or undo completion.
- **Delete Tasks:** Remove tasks from the list.
- **Unique Task IDs:** Generate unique IDs using UUID.
- **Interactive Interface:** Manage tasks easily with React state management.

## Technologies Used

- React
- JavaScript
- HTML5
- CSS3
- Vite
- UUID

## Project Structure

```text
Todo/
├── public/
├── src/
│   ├── assets/
│   ├── App.css
│   ├── App.jsx
│   ├── main.jsx
│   └── TodoList.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Kamran-56/Simple-Todo-List.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Simple-Todo-List
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL shown in your terminal to access the application.

## Implementation

The application uses React's `useState` hook to manage tasks and input values. Each task is stored as an object containing its description, unique ID, and completion status.

JavaScript array methods such as `map()` and `filter()` are used to update task information, mark tasks as completed, and remove tasks from the list.

## Future Improvements

- Edit task descriptions.
- Add task priorities and deadlines.
- Filter completed and pending tasks.
- Store tasks in local storage.

## Author

**Kamran-56**

GitHub: [Kamran-56](https://github.com/Kamran-56)

## Repository

[Simple Todo List](https://github.com/Kamran-56/Simple-Todo-List)
