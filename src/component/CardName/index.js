import React, {useContext} from "react";
import { LayoutContext } from "../../context/LayoutContext";
import { LayoutContextNew } from "../../context/LayoutContextNew";
import { MainContext } from "../../context/MainContext";
import { MainContextClass } from "../../context/MainContextClass";

const CardName = () => {
    const context = useContext(MainContext);
    const {nightmode, day, night} = useContext(LayoutContextNew);

    const mood = nightmode ? night : day;

    return (
        <div>
            <h1 style = {{ color: mood.color }}>{context.name}</h1>
        </div>
    )
}

export default CardName