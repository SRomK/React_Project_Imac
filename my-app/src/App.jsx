import React, { Fragment, useState, useRef } from 'react';
import { TodoList } from './components/TodoList';
import { v4 as uuidv4 } from 'uuid'

export function App() {
    const [todos, setTodos] = useState([{
        id: 1, task: "Tarea 1", completed: false

    },]);
    const todoTaskRef = useRef();

    const handleTodoAdd = () => {
        const task = todoTaskRef.current.value; /*para rescatar del input de manera inequivoca */
        if (task === '') return; /*si lo que recibimos es un string vacio no hacemos nada */

        setTodos((prevTodos) => {
            return [...prevTodos, {id: uuidv4(), task, completed: false}] /*para mostrar el anterior estado y el nuevo que vamos a agregar */
        }); /*para añadir la nueva tarea al array de tareas debemos usar settodos, para que cambie el estado */
        todoTaskRef.current.value = null;
    };

    return (
    <Fragment>
    <TodoList todos={todos} />
    <input ref={todoTaskRef} type="text" placeholder="Nueva Tarea"/>
    <button onClick={handleTodoAdd}>➕</button>
    <button>✖️</button>
    </Fragment>
    );
}