import React, { Fragment, useState, useRef, useEffect } from 'react';
import { TodoList } from './components/TodoList';
import { v4 as uuidv4 } from 'uuid'

const KEY = 'todoApp.todos';

export function App() {
    const [todos, setTodos] = useState([{
        id: 1, task: "Tarea 1", completed: false
    },]);
    const todoTaskRef = useRef();

    useEffect(() => {
        localStorage.setItem(KEY, JSON.stringify(todos))
    }, [todos]);

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(KEY));
        if (storedTodos) {
            setTodos(storedTodos);
        }
    }, []);

    const toggleTodo = (id) => {
        const newTodos = [...todos];
        const todo = newTodos.find((todo) => todo.id === id); /* que me encuentre el todo que es igual al id que estamos pasando */
        todo.completed = !todo.completed;
        setTodos(newTodos);
    }
    const handleTodoAdd = () => {
        const task = todoTaskRef.current.value; /*para rescatar del input de manera inequivoca */
        if (task === '') return; /*si lo que recibimos es un string vacio no hacemos nada */

        setTodos((prevTodos) => {
            return [...prevTodos, {id: uuidv4(), task, completed: false}] /*para mostrar el anterior estado y el nuevo que vamos a agregar */
        }); /*para añadir la nueva tarea al array de tareas debemos usar settodos, para que cambie el estado */
        todoTaskRef.current.value = null;
    };

    const handleClearAll = () => {
        const newTodos = todos.filter((todo) => !todo.completed);
        setTodos(newTodos);
    }

    return (
    <Fragment>
    <TodoList todos={todos} toggleTodo={toggleTodo}/>
    <input ref={todoTaskRef} type="text" placeholder="Nueva Tarea"/>
    <button onClick={handleTodoAdd}>➕</button>
    <button onClick={handleClearAll}>✖️</button>
    <div>Te quedan {todos.filter((todo) => !todo.completed).length} tareas por terminar </div>
    </Fragment>
    );
}