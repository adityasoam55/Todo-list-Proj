import React from "react";
import { Trash2 } from "lucide-react";

function ToDoItem({ todo, deleteTodo, toggleComplete }) {
  return (
    <li
      className={`flex justify-between items-center p-3 border rounded-lg ${
        todo.completed ? "bg-green-100" : "bg-gray-50"
      }`}
    >
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
          className="w-4 h-4 accent-blue-500"
        />

        <span
          className={`text-gray-800 ${
            todo.completed ? "line-through text-gray-400" : ""
          }`}
        >
          {todo.text}
        </span>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => deleteTodo(todo.id)}
          className="text-red-600 hover:text-red-700"
          title="Delete"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </li>
  );
}

export default ToDoItem;
