import React, { useState } from 'react';
import Buttons from '../../components/buttons/Buttons';
import Header from '../../components/header/Header';
import Modal from '../../components/modal/Modal';
import Input from '../../components/input/Input';
import List from '../../components/list/TodoList';
import Button from '../../components/button/Button';

const MainPage = () => {
    const navBar = ['Главная', 'Контакты', 'О нас', 'О нас'];
    const [show, setShow] = useState(false);
    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: 'coding',
            completed: false
        },
        {
            id: 4,
            title: 'eat',
            completed: false
        },
        {
            id: 5,
            title: 'sleep',
            completed: false
        }
    ]);

    const handleShow = () => {
        setShow(!show);
    };

    const [inputTask, setInputTask] = useState('');

    const onChangeInputTask = (event) => {
        setInputTask(event.target.value);
    };

    const handleAdd = () => {
        const newId = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;

        setTasks((prev) => [
            ...prev,
            {
                id: newId,
                title: inputTask,
                completed: false
            }
        ])
    }

    const handleDelete = () => {
        if (tasks.length === 0) {
            return;
        }
        setTasks((prev) => {
            return prev.filter((task, index) => index !== prev.length - 1);
        })
    }

    return (
        <>
            {show && (
                <Modal
                    handleShow={handleShow}
                    onChangeInputTask={onChangeInputTask}
                    handleAdd={handleAdd}
                    handleDelete={handleDelete}
                />
            )}

            <List tasks={tasks} handleDelete={handleDelete} />
            <Button title={'Открыть'} action={handleShow} />
        </>
    );
};

export default MainPage;