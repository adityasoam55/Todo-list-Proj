import React, { useState } from "react";
import { Check, Trash2, Edit3, Save } from "lucide-react";

function ToDoItem({ todo, deleteTodo, toggleComplete, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleSave = () => {
    editTodo(todo.id, editText);
    setIsEditing(false);
  };

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
        {isEditing ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="border px-2 py-1 rounded-md outline-none focus:ring-2 focus:ring-blue-300"
          />
        ) : (
          <span
            className={`text-gray-800 ${
              todo.completed ? "line-through text-gray-400" : ""
            }`}
          >
            {todo.text}
          </span>
        )}
      </div>

      <div className="flex gap-2">
        {isEditing ? (
          <button
            onClick={handleSave}
            className="text-green-600 hover:text-green-700"
            title="Save"
          >
            <Save size={18} />
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="text-blue-600 hover:text-blue-700"
            title="Edit"
          >
            <Edit3 size={18} />
          </button>
        )}
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
