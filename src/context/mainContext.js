import React, { createContext, useContext } from "react";

export const MainContext = createContext();

export const UseMainContext = () => {
    return useContext(MainContext);
}

export const MainContextProvider = (props) => {
    const data = {
        name: 'Salsa',
        avatar: 'https://reqres.in/img/faces/7-image.jpg'
    }

    return (
        <MainContext.Provider value = {{ ...data }}>
            {props.children}
        </MainContext.Provider>
    )
}
