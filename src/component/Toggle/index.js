import React, {useContext} from "react";
import { LayoutContext } from "../../context/LayoutContext";

const Toggle = () => {
    const {handleToggle} = useContext(LayoutContext);
    return (
        <div>
            <button onClick={handleToggle}>On Night Mode</button>
        </div>
    )
}

export default Toggle;