import React, {useState} from "react";

export const UncontrolledOnboardingFlow=({children, onFinish})=>{

    const [onboardingData, setOnboardingData] = useState({});
    const [currentIndex, setCurrentIndex] = useState(0);

    const currentChild = React.Children.toArray(children)[currentIndex];

    const goToPrev=()=>{
            let prevIndex = currentIndex-1;
            if(prevIndex<0) prevIndex =0;

            setCurrentIndex(prevIndex);
    }

    const goToNext=(stepData)=>{
        const nextIndex = currentIndex + 1;
        const updatedData ={
            ...onboardingData,
            ...stepData,
        };

        console.log(updatedData);

        if(nextIndex < children.length) {
            setCurrentIndex(nextIndex);
        } else {
            onFinish(updatedData);
        }

        setOnboardingData(updatedData);
    }

    if(React.isValidElement(currentChild)){
        return React.cloneElement(currentChild,{goToNext, goToPrev})
    }
    return currentChild;
}