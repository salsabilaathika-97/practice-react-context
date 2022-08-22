import React, {useContext} from "react";
import { LayoutContext } from "../../context/LayoutContext";
import { LayoutContextNew } from "../../context/LayoutContextNew";
import CardImage from "../CardImage";
import CardName from "../CardName";
import Toggle from "../Toggle";

const Card = () => {
    const {nightmode, day, night } = useContext(LayoutContextNew);
    const mood = nightmode ? night : day;

    return (
        <div style = {{ backgroundColor: mood.background }}>
            <CardName />
            <CardImage />
            <Toggle />
        </div>
    )
}

export default Card;