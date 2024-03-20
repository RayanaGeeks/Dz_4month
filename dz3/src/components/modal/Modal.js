import React from 'react';
import classes from './Modal.module.css';
import Input from '../input/Input';
import Button from '../button/Button';


const Modal = ({
                   children,
                   handleShow,
                   onChangeInputTask,
                   handleAdd,
                   handleDelete
               }) => {
    return (
        <>
            <div className={classes.modalWrapper}></div>
            <div className={classes.modalContent}>
                <Button title={'закрыть'} action={handleShow}/>
                <Input
                    placeholder={'написать название таска'}
                    type={'text'}
                    onChange={onChangeInputTask}
                />
                <Button title={'Добавить'} action={handleAdd}/>
                <Button title={'Удалить'} action={handleDelete}/>
                {children}
            </div>
        </>
    );
};

export default Modal;