import React, {useContext} from "react";
import { LayoutContext } from "../../context/LayoutContext";
import { LayoutContextNew } from "../../context/LayoutContextNew";

const Toggle = () => {
    const {handleToggle, nightmode} = useContext(LayoutContextNew);
    
    return (
        <div>
            <button onClick={handleToggle}>Change to {nightmode ? "Day" : "Night"} Mode</button>
        </div>
    )
}

export default Toggle;