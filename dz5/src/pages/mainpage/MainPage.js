import React, { useEffect, useState } from 'react';
import {getApi} from "../../common/api";
import TodoPage from "../todoPage/TodoPage";


const MainPage = () => {
    const [users, setUsers] = useState([])
    console.log(users, 'users');

    useEffect(() => {
        // getApi('todos').then((data)=> setTasks(data))
        getApi('users').then((data)=> setUsers(data))
        // getApi('posts').then((data)=> console.log(data))
    },[])




    return (
        <>
            <TodoPage/>
        </>
    );
};

export default MainPage;