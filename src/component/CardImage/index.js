import React, {useContext} from "react";
import { MainContext } from "../../context/MainContext";
import { MainContextClass } from "../../context/MainContextClass";

const CardImage = () => {
    const context = useContext(MainContext);

    return (
        <div>
            <img src = {context.avatar} />
        </div>
    )
}

export default CardImage;