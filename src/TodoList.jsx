import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'


export default function TodoList() {
    let [todos, setTodos] = useState([{ task: 'sample task', id: uuidv4(), done: false }])
    let [newTodo, setNewTodo] = useState('')

    let addNewTask = () => {
        if (newTodo.trim() === '') return

        setTodos((prevTodos) => {
            return [...prevTodos, { task: newTodo.trim(), id: uuidv4(), done: false }]
        })
        setNewTodo('')
    }

    let updateTodoValue = (e) => {
        setNewTodo(e.target.value)
    }

    let deleteTodo = (id) => {
        setTodos((prevTodos) => {
            return prevTodos.filter((todo) => todo.id !== id)
        })
    }

    let updateAll = () => {
        setTodos((prevTodos) => (
            prevTodos.map((todo) => {
                return {
                    ...todo, task: todo.task.toUpperCase()
                }
            })
        ))
    }

    let updateTodo = (id) => {
        setTodos(prevTodos => (
            prevTodos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, task: todo.task.toUpperCase() }
                }
                return todo
            })
        ))
    }

    let taskDone = (id) => (
        setTodos((prevTodos) => (
            prevTodos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, done: !todo.done }
                }
                return todo
            })
        ))
    )

    return (
        <div className="todo-app">
            <div className="todo-card">
                <header className="todo-header">
                    <h1>Todo List</h1>
                </header>

                <div className="todo-input-row">
                    <input
                        className="todo-input"
                        placeholder="Add a task"
                        value={newTodo}
                        onChange={updateTodoValue}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') addNewTask()
                        }}
                    />
                    <button className="primary-btn" type="button" onClick={addNewTask}>
                        Add Task
                    </button>
                </div>

                <div className="todo-toolbar">
                    <h2>Tasks to do : {todos.length}</h2>
                    <button className="secondary-btn" type="button" onClick={updateAll} hidden={todos.length === 0}>
                        Uppercase All
                    </button>
                </div>

                <ul className="todo-list">
                    {todos.map((todo) => (
                        <li key={todo.id} className={`todo-item ${todo.done ? 'done' : ''}`}>
                            <span className="todo-text">{todo.task}</span>

                            <div className="todo-actions">
                                <button className="tiny-btn update-btn" type="button" onClick={() => updateTodo(todo.id)}>
                                    Update
                                </button>
                                <button className="tiny-btn done-btn" type="button" onClick={() => taskDone(todo.id)}>
                                    {todo.done ? 'Undo' : 'Done'}
                                </button>
                                <button className="tiny-btn delete-btn" type="button" onClick={() => deleteTodo(todo.id)}>
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}







//old without styling
/*
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'


export default function TodoList() {
    let [todos, setTodos] = useState([{ task: "sample task", id: uuidv4(), done: false }])
    let [newTodo, setNewTodo] = useState("")

    let addNewTask = () => {
        if (newTodo === "") return
        // setTodos([...todos, {task: newTodo, id: uuidv4()}])  better is to use a callback function to avoid race conditions
        setTodos((prevTodos) => {
            console.log(prevTodos); // this is the previous state of todos
            return [...prevTodos, { task: newTodo, id: uuidv4(), done: false }] // this is a callback function that takes the previous state and returns the new state
            //passing .. is a spread operator that takes the previous state and adds the new task to it                                              
        })
        setNewTodo("")
    }

    let updateTodoValue = (e) => {
        setNewTodo(e.target.value)
        console.log(e.target.value);
    }

    let deleteTodo = (id) => {
        setTodos((prevTodos) => {
            return prevTodos.filter((todo) => todo.id !== id)
        })
    }

    let updateAll = () => {
        setTodos((prevTodos) => (
            prevTodos.map((todo) => {
                return {
                    ...todo, task: todo.task.toUpperCase()
                }
            })
        ))
    };

    let updateTodo = (id) => {
        setTodos(prevTodos => (
            prevTodos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, task: todo.task.toUpperCase() }
                }
                return todo
            })
        ))
    }

    let taskDone = (id) => (
        setTodos((prevTodos) => (
            prevTodos.map((todo) => {
                if(todo.id === id) {
                return { ...todo, done: !todo.done }
                }
                return todo
            })
        ))
    )
    



return (
    <div>
        <input placeholder="add a task" value={newTodo} onChange={updateTodoValue}></input>
        <br></br>
        <button onClick={addNewTask}>Add Task</button>
        <br></br>
        <br></br>
        <br></br>

        <hr></hr>
        <h4>Tasks to do</h4>
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                    <span style={{ textDecoration: todo.done ? "line-through" : "none" }}>
                        {todo.task}
                    </span>
                    <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                    <button onClick={() => updateTodo(todo.id)}>Update</button>
                    <button onClick={() => taskDone(todo.id)}>
                    {todo.done ? "Completed(undo)" : "Mark Done"}
                </button>
               we need arrow func otherwise it will be called immediately when the component renders 
                </li>
            ))}
            <button onClick={() => updateAll()}>Uppercase All</button>
        </ul>
    </div>
)
}
*/