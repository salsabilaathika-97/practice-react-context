import React, {useContext} from "react";
import { mainContext } from "../../context/mainContext";
import { MainContextClass } from "../../context/MainContextClass";

const CardImage = () => {
    const context = useContext(MainContextClass);

    return (
        <div>
            <img src = {context.avatar} />
        </div>
    )
}

export default CardImage;