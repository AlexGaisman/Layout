import React from "react";
import { Link } from "react-router-dom";

export const ComponentType=()=>{

    return(
        <div>
        <Link to='/uncontrolledForm'>Uncontrolled Form </Link>
        <Link to='/controlledForm'>Controlled Form </Link>
        <Link to='/datasourceloader'>Data Source Loader </Link>
        </div>
    );

}