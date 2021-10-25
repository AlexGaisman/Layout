import React from "react";
import { Link } from "react-router-dom";

export const ComponentType=()=>{

    return(
        <div>
        <Link to='/uncontrolledForm'>Uncontrolled Form </Link>
        <Link to='/controlledForm'>Controlled Form </Link>
        <Link to='/controlledModal'>Controlled Modal </Link>
        <Link to='/uncontrolledOnboardingFlow'>Uncontrolled Onboarding Flow </Link>
        </div>
    );

}