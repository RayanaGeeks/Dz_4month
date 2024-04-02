import React, {useEffect, useState} from 'react';
import TodoList from "../../components/todoList/TodoList";
import Button from "../../components/button/Button";
import classes from '../../components/todo/Todo.module.css';
import Input from "../../components/input/Input";

const TodoPage = () => {
    const [show, setShow] = useState(false)
    const [tasks, setTasks] = useState([ ])
    const [filterOption, setFilterOption]= useState('all')

    const handleShow = ()=> {
        setShow(!show)
    };
    const [inputTask, setInputTask] = useState('')
    const onChangeInputTask = (event) => {
        setInputTask(event.target.value)
    }

    const handleAdd = () => {
        setTasks(prev => [ ...prev, {
            id: tasks.length === 0 ? 1 : tasks[ tasks.length - 1 ].id + 1,
            title: inputTask,
            completed: false
        } ]);
    };


    const handleEdit=(editTodo) => {
        console.log(editTodo)
        tasks.map(task =>{
            if (task.id === editTodo.id) return task.title = editTodo.title
        })
        setTasks([...tasks])
    }



    const handleDelete = (id) => {
        setTasks(tasks.filter(task=>task.id!==id))
    }




    const handleClear = ()=> {
        setTasks([])
        localStorage.setItem('tasks', JSON.stringify([]))
    }



    return (

            <div className={classes.wrapper}>
                <p className={classes.title}>TO DO</p>
                <Input  placeholder={'Enter a task'} onChange={onChangeInputTask} type={'text'}/>
                <Button title={'Add task'} action={handleAdd}/>
                <Button title={'Очистить'} action={handleClear}/>

                <TodoList
                    tasks={tasks}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                />
            </div>

    );
};

export default TodoPage;