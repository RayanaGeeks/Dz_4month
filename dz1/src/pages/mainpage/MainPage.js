import React from 'react';
import Pets from "../pets/Pets";

const MainPage = () => {
    return (
        <>
            <Pets name={'Vaska'} month={'13'}/>
            <Pets name={'Sirin'} month={'6'}/>
        </>
    );
};

export default MainPage;