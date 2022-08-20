import React from "react";
import CardImage from "../CardImage";
import CardName from "../CardName";
import Toggle from "../Toggle";

const Card = () => {
    return (
        <div style = {{ backgroundColor: "red" }}>
            <CardName />
            <CardImage />
            <Toggle />
        </div>
    )
}

export default Card;