import React from 'react';
import classes from "./Button.module.css";

const Button= ({title,action}) => (
    <button onClick={action} className={classes.button}>
        {title}
    </button>

);

export default Button;