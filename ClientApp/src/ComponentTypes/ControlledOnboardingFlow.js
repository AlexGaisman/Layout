import React from "react";

export const ControlledOnboardingFlow=({children, onFinish, 
                      currentIndex, onNext, onPrev})=>{

    if(currentIndex>= children.length){
        onFinish();
        return (<></>);
    }
    const currentChild = React.Children.toArray(children)[currentIndex];

    const goToNext=(data)=>onNext(data);
    const goToPrev = () => onPrev();


    if(React.isValidElement(currentChild)){
        return React.cloneElement(currentChild,{goToNext, goToPrev})
    }
    return currentChild;
}