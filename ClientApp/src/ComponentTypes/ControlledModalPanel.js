import React,{useState} from "react";
import { ControlledModal } from "./ControlledModal";


export const ControlledModalPanel =() =>{

    const [shouldShow, setShouldShow] = useState(false);

    const onRequestClose=()=>{
        setShouldShow(false);
    }


    return (
        <div>
        <ControlledModal shouldShow={shouldShow} 
                onRequestClose={onRequestClose}>
                    <h1>Hello</h1>
        </ControlledModal>
        <button onClick={()=>{setShouldShow(!shouldShow)}}>
            {!shouldShow?"Show Modal":"Hide Modal"}</button>
        </div>
    )
}