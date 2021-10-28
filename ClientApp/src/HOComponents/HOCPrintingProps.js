import React from "react";
// HOC component name should be lower case
export const hOCPrintingProps =(Component)=>{
    return(props)=>{
        console.log(props);
        return <Component {...props}/>
    };
}