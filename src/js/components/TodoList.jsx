import React, { useState } from "react";

const TodoList = () => {
    const [list, setList] = useState([]);
    const [input, setInput] = useState("");

    const addTask = (e) => {
        if (e.key === "Enter" && input.trim() !== "") {
            setList([...list, input]);
            setInput("");
        }
    };

    const removeTask = (index) => {
        setList(list.filter((_, i) => i !== index));
    };

    return (
        <div className="todo-container">
            <h1>Lista de tareas</h1>
            <div className="todo-box">
                <input
                    type="text"
                    placeholder="Tareas pendientes"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={addTask}
                    className="todo-input"
                />
                {list.length === 0 ? (
                    <p className="empty-message">No hay tareas, añadir tareas</p>
                ) : (
                    list.map((task, index) => (
                        <div key={index} className="todo-item">
                            <span>{task}</span>
                            <span className="delete-btn" onClick={() => removeTask(index)}>✕</span>
                        </div>
                    ))
                )}
                {list.length > 0 && (
                    <div className="todo-footer">{list.length} {list.length === 1 ? "tarea pendiente" : "tareas pendientes"}</div>
                )}
            </div>
        </div>
    );
};

export default TodoList;