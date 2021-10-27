import React, {useEffect, useState} from "react";
import { ControlledOnboardingFlow } from "./ControlledOnboardingFlow";



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




export const ControlledOnboardingFlowPanel=() =>{

    const [currentIndex, setCurrentIndex] = useState(0);
    const [onboardingData, setOnboardingData] = useState({});

    const onPrev=()=>{
        let prevIndex = currentIndex-1;
        if(prevIndex<0) prevIndex =0;

        setCurrentIndex(prevIndex);
}

const onNext=(stepData)=>{
    setOnboardingData({...onboardingData, ...stepData});
    setCurrentIndex(currentIndex + 1);

}


useEffect(()=>{
    console.log(onboardingData);
},[onboardingData]);

    return(
        <ControlledOnboardingFlow 
                 currentIndex={currentIndex} 
                 onNext={onNext} 
                 onPrev={onPrev}
                 onFinish={()=>console.log(onboardingData)}>
            <StepOne/>
            <StepTwo />
            <StepThree />
        </ControlledOnboardingFlow>);
}