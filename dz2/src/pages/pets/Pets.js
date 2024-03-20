import React from 'react';
import classes from './Pets.module.css'

const Pets = ({name,month}) => {
    return (
        <div>
            <p className={classes.name}>Pet: {name}</p>
            <p className={classes.month}>Month: {month}</p>
        </div>
    );
};

export default Pets;