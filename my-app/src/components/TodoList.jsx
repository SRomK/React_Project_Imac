import React from 'react';
import { TodoItem } from './TodoItem';

export function TodoList({ todos }) {
    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem todo={todo} /> /*estamos inclyendo un componente por cada elemento del array */
            ))}
        </ul>
    );
}

/*React a la hora de renderizar listas necesita saber que elemento es en concreto para que su rendimiento sea optimo */