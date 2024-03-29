import React, {useEffect, useState} from 'react';
import Modal from "../../components/modal/Modal";
import List from "../../components/list/TodoList";
import Button from "../../components/button/Button";

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

    const handleAdd = ()=> {
        setTasks(prev=>[...prev, {
            id: tasks.length===0 ? 1 : tasks[tasks.length-1].id+1,
            title: inputTask,
            completed: false
        }])
    }

    const handleDone = (id) => {
        console.log(id);
        tasks.map(task=>{
            if(task.id===id) {
                return task.completed = !task.completed
            }
        })
        setTasks([...tasks])
    }

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

    const getLocalStorage = () => {
        console.log(JSON.parse(localStorage.getItem('tasks')))
    }

    const handleFilterChange = (event)=>{
        setFilterOption(event.target.value)
    }

    const filterTasks = tasks.filter(task =>{
        switch (filterOption){
            case 'completed': return task.completed
            case 'notCompleted': return ! task.completed
            default: return true
        }
    })

    const handleClear = ()=> {
        setTasks([])
        localStorage.setItem('tasks', JSON.stringify([]))
    }

    useEffect(()=>{
        const myLocalStorage = JSON.parse(localStorage.getItem('tasks'))
        if (myLocalStorage === null){
            return localStorage.setItem('tasks', JSON.stringify(tasks))
        }
        if (myLocalStorage.length !== 0){
            setTasks(myLocalStorage)
        }
    },[])
    useEffect(()=>{
        localStorage.setItem('tasks', JSON.stringify(tasks))
    },[tasks])

    return (
        <>
            <select value={filterOption} onChange={handleFilterChange}>
                <option value='all'>Все таски</option>
                <option value='completed'>Выполненные</option>
                <option value='notCompleted'>Не выполненные</option>
            </select>
            <Button title={'Открыть'} action={handleShow}/>
            <Button title={'Очистить'} action={handleClear}/>
            { show &&
                <Modal handleShow={handleShow}
                       onChangeInputTask={onChangeInputTask}
                       handleAdd={handleAdd}
                >
                </Modal>
            }

            <List
                tasks={filterTasks}
                handleDelete={handleDelete}
                handleDone={handleDone}
                handleEdit={handleEdit}
            />
        </>
    );
};

export default TodoPage;