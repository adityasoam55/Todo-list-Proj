# 📝 React To-Do List App

A simple and elegant **To-Do List** application built using **React.js** and **Tailwind CSS**.  
This app allows users to **add**, **edit**, **delete**, and **mark tasks as completed** — demonstrating component-based architecture, state management, and event handling in React.

---

## 🚀 Features

- ➕ Add new tasks
- ✅ Mark tasks as completed
- 🗑️ Delete tasks
- ✏️ Edit existing tasks
- ⚡ Instant updates using React state
- 🎨 Styled completely with Tailwind CSS
- 💻 Clean, responsive, and user-friendly design

---

## 🧩 Components Used

| Component  | Description                                                       |
| ---------- | ----------------------------------------------------------------- |
| `App`      | Manages state and handles main logic (add, edit, delete, toggle). |
| `Header`   | Displays the app title and description.                           |
| `ToDoList` | Renders all to-do items dynamically using `map()`.                |
| `ToDoItem` | Handles individual task actions — complete, edit, delete.         |

---

## 🏗️ Tech Stack

- **React.js (Vite)** – Frontend framework
- **Tailwind CSS** – Styling
- **Lucide React** – Icons (Edit, Delete, Save, etc.)

---

## ⚙️ Installation & Setup

Follow these steps to run the project locally:

```bash
# 1. Clone the repository
git clone https://github.com/adityasoam55/Todo-list-Proj

# 2. Navigate into the project folder
cd Todo-list-Proj

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

📁 Folder Structure
src/
┣ components/
┃ ┣ Header.jsx
┃ ┣ ToDoList.jsx
┃ ┗ ToDoItem.jsx
┣ App.jsx
┗ main.jsx
