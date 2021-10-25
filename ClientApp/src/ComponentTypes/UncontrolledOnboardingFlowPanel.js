import React from "react";
import { UncontrolledOnboardingFlow } from "./UncontrolledOnboardingFlow";

const StepOne =({goToNext, goToPrev}) => (
    <>
    <h1> Step One</h1>
    <button onClick={()=>goToNext({name:'John Doe'})}>Next </button>
    <button onClick={()=>goToPrev()}>Prev </button>
    </>
);

const StepTwo =({goToNext, goToPrev}) => (
    <>
    <h1> Step Two</h1>
    <button onClick={()=>goToNext({age:100})}>Next </button>
    <button onClick={()=>goToPrev()}>Prev </button>
    </>
);

const StepThree =({goToNext,goToPrev}) => (
    <>
    <h1> Step Three</h1>
    <button onClick={()=>goToNext({harColor:'brown'})}>Next </button>
    <button onClick={()=>goToPrev()}>Prev </button>
    </>
);




export const UncontrolledOnboardingFlowPanel=() =>{


    return(
        <UncontrolledOnboardingFlow onFinish={data=>console.log(data)}>
            <StepOne/>
            <StepTwo />
            <StepThree />
        </UncontrolledOnboardingFlow>);
}