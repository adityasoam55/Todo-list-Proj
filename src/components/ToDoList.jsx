import React from "react";
import ToDoItem from "./ToDoItem";

function ToDoList({ todos, deleteTodo, toggleComplete }) {
  return (
    <ul className="space-y-2">
      {todos.length === 0 ? (
        <p className="text-center text-gray-400">
          No tasks yet! Add one above 👆
        </p>
      ) : (
        todos.map((todo) => (
          <ToDoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            toggleComplete={toggleComplete}
          />
        ))
      )}
    </ul>
  );
}

export default ToDoList;
