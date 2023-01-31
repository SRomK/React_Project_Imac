import React from 'react';
import { TodoItem } from './TodoItem';

export function TodoList({ todos, toggleTodo }) {
    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} /> /*estamos inclyendo un componente por cada elemento del array */
            ))}
        </ul>
    );
}

/*React a la hora de renderizar listas necesita saber que elemento es en concreto para que su rendimiento sea optimo */