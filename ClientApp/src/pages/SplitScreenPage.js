import React from "react";
import { SplitScreen } from "../SplitScreen";


const LeftHandComponent=({name})=>{
    return(<h1 style={{backgroundColor:'green'}}>{name}</h1>)
  
  }
  
  const RightHandComponent=({message})=>{
    return(<h1 style={{backgroundColor:"red"}}>{message}</h1>)
  
  }
export const SplitScreenPage =()=>{
    return(
        <SplitScreen 
        leftWeight={1}
        rightWeight={3}
      >
        <LeftHandComponent name="Krystal"/>
        <RightHandComponent message="Hello"/>
      </SplitScreen>
    )
}