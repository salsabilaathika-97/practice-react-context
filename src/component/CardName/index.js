import React, {useContext} from "react";
import { mainContext } from "../../context/mainContext";

const CardName = () => {
    const context = useContext(mainContext);
    return (
        <div>
            <h1>{context.data.name}</h1>
        </div>
    )
}

export default CardName