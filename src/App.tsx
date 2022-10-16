import React, {useEffect, useState} from 'react';
import './App.css';

type PropsType = {
    completed: boolean
    id: number
    title: string
    userId: number
}

function App() {

    const [todos, setTodos] = useState<PropsType[]>([])
    console.log(todos)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setTodos(json))
    }, [])

    const onClickHandler = () => {
        setTodos([])
    }

    return (
        <div className="App">
            <button onClick={onClickHandler}>Clean Posts</button>
            <ul>
                {todos.map(t => {
                    return (
                        <li key={t.id}>
                            <span>{t.id} - </span>
                            <span>{t.title}</span>
                            <span>{t.completed}</span>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default App;
