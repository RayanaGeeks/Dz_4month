import React, {useState} from 'react';
import Pets from "../pets/Pets";
import List from "../../components/list/List";
import Button from "../../components/button/Button";
import Header from '../../components/header/Header';
import Modal from '../../components/modal/Modal';
import Input from '../../components/input/Input'

const MainPage = () => {
    const navBar = ['Главная', 'Контакты', 'О нас']
    const [show, setShow] = useState(false)
    const handleShow = () => {
        setShow(!show)
    }

    const [inputValue, setInputValue] = useState('')
    const handleChange = (event) => {
        setInputValue(event.target.value);
    }
    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: 'coding',
            completed: false
        },
        {
            id: 2,
            title: 'eat',
            completed: false
        },
        {
            id: 3,
            title: 'sleep',
            completed: false
        }
    ])
    return (
        <>
            <Header navBar={navBar}/>
            { show &&
                <Modal handleShow={handleShow} onChange={handleChange} inputValue={inputValue}></Modal>
            }
            <div>
                <List tasks={tasks} />
            </div>
            <Button title={'открыть'} action={handleShow}/>
            {/*<Pets name={'Vaska'} month={'13'}/>*/}
            {/*<Pets name={'Sirin'} month={'6'}/>*/}
        </>
    )
}

export default MainPage;