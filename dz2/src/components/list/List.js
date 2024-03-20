import React from 'react';
import classes from "./List.module.css";

const List = ({ tasks }) => {
    return (
        <ul className={classes.List}>
            {tasks.map(task => (
                <li className={classes.list}  key={task.id}>{task.title}</li>
            ))}
        </ul>
    );
};

export default List;